import PointRenderingConfigJson from "./Json/PointRenderingConfigJson"
import TagRenderingConfig from "./TagRenderingConfig"
import { TagsFilter } from "../../Logic/Tags/TagsFilter"
import SharedTagRenderings from "../../Customizations/SharedTagRenderings"
import { TagUtils } from "../../Logic/Tags/TagUtils"
import { Utils } from "../../Utils"
import Svg from "../../Svg"
import WithContextLoader from "./WithContextLoader"
import { UIEventSource } from "../../Logic/UIEventSource"
import BaseUIElement from "../../UI/BaseUIElement"
import { FixedUiElement } from "../../UI/Base/FixedUiElement"
import Img from "../../UI/Base/Img"
import Combine from "../../UI/Base/Combine"
import { VariableUiElement } from "../../UI/Base/VariableUIElement"

export default class PointRenderingConfig extends WithContextLoader {
    private static readonly allowed_location_codes = new Set<string>([
        "point",
        "centroid",
        "start",
        "end",
        "projected_centerpoint",
    ])
    public readonly location: Set<
        "point" | "centroid" | "start" | "end" | "projected_centerpoint" | string
    >

    public readonly icon?: TagRenderingConfig
    public readonly iconBadges: { if: TagsFilter; then: TagRenderingConfig }[]
    public readonly iconSize: TagRenderingConfig
    public readonly label: TagRenderingConfig
    public readonly rotation: TagRenderingConfig
    public readonly cssDef: TagRenderingConfig
    public readonly cssClasses?: TagRenderingConfig

    constructor(json: PointRenderingConfigJson, context: string) {
        super(json, context)

        if (json === undefined || json === null) {
            throw "Invalid PointRenderingConfig: undefined or null"
        }

        if (typeof json.location === "string") {
            json.location = [json.location]
        }

        this.location = new Set(json.location)

        this.location.forEach((l) => {
            const allowed = PointRenderingConfig.allowed_location_codes
            if (!allowed.has(l)) {
                throw `A point rendering has an invalid location: '${l}' is not one of ${Array.from(
                    allowed
                ).join(", ")} (at ${context}.location)`
            }
        })

        if (json.icon === undefined && json.label === undefined) {
            throw `A point rendering should define at least an icon or a label`
        }

        if (this.location.size == 0) {
            throw (
                "A pointRendering should have at least one 'location' to defined where it should be rendered. (At " +
                context +
                ".location)"
            )
        }
        this.icon = this.tr("icon", undefined)
        if (json.css !== undefined) {
            this.cssDef = this.tr("css", undefined)
        }
        this.cssClasses = this.tr("cssClasses", undefined)
        this.iconBadges = (json.iconBadges ?? []).map((overlay, i) => {
            let tr: TagRenderingConfig
            if (
                typeof overlay.then === "string" &&
                SharedTagRenderings.SharedIcons.get(overlay.then) !== undefined
            ) {
                tr = SharedTagRenderings.SharedIcons.get(overlay.then)
            } else {
                tr = new TagRenderingConfig(overlay.then, `iconBadges.${i}`)
            }
            return {
                if: TagUtils.Tag(overlay.if),
                then: tr,
            }
        })

        const iconPath = this.icon?.GetRenderValue({ id: "node/-1" })?.txt
        if (iconPath !== undefined && iconPath.startsWith(Utils.assets_path)) {
            const iconKey = iconPath.substr(Utils.assets_path.length)
            if (Svg.All[iconKey] === undefined) {
                throw context + ": builtin SVG asset not found: " + iconPath
            }
        }
        this.iconSize = this.tr("iconSize", "40,40,center")
        this.label = this.tr("label", undefined)
        this.rotation = this.tr("rotation", "0")
    }

    /**
     * Given a single HTML spec (either a single image path OR "image_path_to_known_svg:fill-colour", returns a fixedUIElement containing that
     * The element will fill 100% and be positioned absolutely with top:0 and left: 0
     */
    private static FromHtmlSpec(htmlSpec: string, style: string, isBadge = false): BaseUIElement {
        if (htmlSpec === undefined) {
            return undefined
        }
        const match = htmlSpec.match(/([a-zA-Z0-9_]*):([^;]*)/)
        if (match !== null && Svg.All[match[1] + ".svg"] !== undefined) {
            const svg = Svg.All[match[1] + ".svg"] as string
            const targetColor = match[2]
            const img = new Img(
                svg.replace(/(rgb\(0%,0%,0%\)|#000000|#000)/g, targetColor),
                true
            ).SetStyle(style)
            if (isBadge) {
                img.SetClass("badge")
            }
            return img
        } else if (Svg.All[htmlSpec + ".svg"] !== undefined) {
            const svg = Svg.All[htmlSpec + ".svg"] as string
            const img = new Img(svg, true).SetStyle(style)
            if (isBadge) {
                img.SetClass("badge")
            }
            return img
        } else {
            return new FixedUiElement(`<img src="${htmlSpec}" style="${style}" />`)
        }
    }

    private static FromHtmlMulti(
        multiSpec: string,
        rotation: string,
        isBadge: boolean,
        defaultElement: BaseUIElement = undefined
    ) {
        if (multiSpec === undefined) {
            return defaultElement
        }
        const style = `width:100%;height:100%;transform: rotate( ${rotation} );display:block;position: absolute; top: 0; left: 0`

        const htmlDefs = multiSpec.trim()?.split(";") ?? []
        const elements = Utils.NoEmpty(htmlDefs).map((def) =>
            PointRenderingConfig.FromHtmlSpec(def, style, isBadge)
        )
        if (elements.length === 0) {
            return defaultElement
        } else {
            return new Combine(elements).SetClass("relative block w-full h-full")
        }
    }

    public GetBaseIcon(tags?: any): BaseUIElement {
        tags = tags ?? { id: "node/-1" }
        let defaultPin: BaseUIElement = undefined
        if (this.label === undefined) {
            defaultPin = Svg.teardrop_with_hole_green_svg()
        }
        if (this.icon === undefined) {
            return defaultPin
        }
        const rotation = Utils.SubstituteKeys(
            this.rotation?.GetRenderValue(tags)?.txt ?? "0deg",
            tags
        )
        const htmlDefs = Utils.SubstituteKeys(this.icon?.GetRenderValue(tags)?.txt, tags)
        if (htmlDefs === undefined) {
            // This layer doesn't want to show an icon right now
            return undefined
        }
        return PointRenderingConfig.FromHtmlMulti(htmlDefs, rotation, false, defaultPin)
    }

    public GetSimpleIcon(tags: UIEventSource<any>): BaseUIElement {
        const self = this
        if (this.icon === undefined) {
            return undefined
        }
        return new VariableUiElement(tags.map((tags) => self.GetBaseIcon(tags))).SetClass(
            "w-full h-full block"
        )
    }

    public GenerateLeafletStyle(
        tags: UIEventSource<any>,
        clickable: boolean,
        options?: {
            noSize?: false | boolean
            includeBadges?: true | boolean
        }
    ): {
        html: BaseUIElement
        iconSize: [number, number]
        iconAnchor: [number, number]
        popupAnchor: [number, number]
        iconUrl: string
        className: string
    } {
        function num(str, deflt = 40) {
            const n = Number(str)
            if (isNaN(n)) {
                return deflt
            }
            return n
        }

        function render(tr: TagRenderingConfig, deflt?: string) {
            if (tags === undefined) {
                return deflt
            }
            const str = tr?.GetRenderValue(tags.data)?.txt ?? deflt
            return Utils.SubstituteKeys(str, tags.data).replace(/{.*}/g, "")
        }

        const iconSize = render(this.iconSize, "40,40,center").split(",")

        const iconW = num(iconSize[0])
        let iconH = num(iconSize[1])
        const mode = iconSize[2]?.trim()?.toLowerCase() ?? "center"

        let anchorW = iconW / 2
        let anchorH = iconH / 2
        if (mode === "left") {
            anchorW = 0
        }
        if (mode === "right") {
            anchorW = iconW
        }

        if (mode === "top") {
            anchorH = 0
        }
        if (mode === "bottom") {
            anchorH = iconH
        }

        const icon = this.GetSimpleIcon(tags)
        let badges = undefined
        if (options?.includeBadges ?? true) {
            badges = this.GetBadges(tags)
        }
        const iconAndBadges = new Combine([icon, badges]).SetClass("block relative")

        if (!options?.noSize) {
            iconAndBadges.SetStyle(`width: ${iconW}px; height: ${iconH}px`)
        } else {
            iconAndBadges.SetClass("w-full h-full")
        }

        const css = this.cssDef?.GetRenderValue(tags, undefined)?.txt
        const cssClasses = this.cssClasses?.GetRenderValue(tags, undefined)?.txt

        let label = this.GetLabel(tags)
        let htmlEl: BaseUIElement
        if (icon === undefined && label === undefined) {
            htmlEl = undefined
        } else if (icon === undefined) {
            htmlEl = new Combine([label])
        } else if (label === undefined) {
            htmlEl = new Combine([iconAndBadges])
        } else {
            htmlEl = new Combine([iconAndBadges, label]).SetStyle("flex flex-col")
        }

        if (css !== undefined) {
            htmlEl?.SetStyle(css)
        }

        if (cssClasses !== undefined) {
            htmlEl?.SetClass(cssClasses)
        }
        return {
            html: htmlEl,
            iconSize: [iconW, iconH],
            iconAnchor: [anchorW, anchorH],
            popupAnchor: [0, 3 - anchorH],
            iconUrl: undefined,
            className: clickable ? "leaflet-div-icon" : "leaflet-div-icon unclickable",
        }
    }

    private GetBadges(tags: UIEventSource<any>): BaseUIElement {
        if (this.iconBadges.length === 0) {
            return undefined
        }
        return new VariableUiElement(
            tags.map((tags) => {
                const badgeElements = this.iconBadges.map((badge) => {
                    if (!badge.if.matchesProperties(tags)) {
                        // Doesn't match...
                        return undefined
                    }

                    const htmlDefs = Utils.SubstituteKeys(
                        badge.then.GetRenderValue(tags)?.txt,
                        tags
                    )
                    const badgeElement = PointRenderingConfig.FromHtmlMulti(
                        htmlDefs,
                        "0",
                        true
                    )?.SetClass("block relative")
                    if (badgeElement === undefined) {
                        return undefined
                    }
                    return new Combine([badgeElement]).SetStyle("width: 1.5rem").SetClass("block")
                })

                return new Combine(badgeElements).SetClass("inline-flex h-full")
            })
        ).SetClass("absolute bottom-0 right-1/3 h-1/2 w-0")
    }

    private GetLabel(tags: UIEventSource<any>): BaseUIElement {
        if (this.label === undefined) {
            return undefined
        }
        const self = this
        return new VariableUiElement(
            tags.map((tags) => {
                const label = self.label
                    ?.GetRenderValue(tags)
                    ?.Subs(tags)
                    ?.SetClass("block text-center")
                return new Combine([label]).SetClass("flex flex-col items-center mt-1")
            })
        )
    }
}
