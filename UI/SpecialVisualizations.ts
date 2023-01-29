import Combine from "./Base/Combine"
import { FixedUiElement } from "./Base/FixedUiElement"
import BaseUIElement from "./BaseUIElement"
import Title from "./Base/Title"
import Table from "./Base/Table"
import { SpecialVisualization } from "./SpecialVisualization"
import { HistogramViz } from "./Popup/HistogramViz"
import { StealViz } from "./Popup/StealViz"
import { MinimapViz } from "./Popup/MinimapViz"
import { SidedMinimap } from "./Popup/SidedMinimap"
import { ShareLinkViz } from "./Popup/ShareLinkViz"
import { UploadToOsmViz } from "./Popup/UploadToOsmViz"
import { MultiApplyViz } from "./Popup/MultiApplyViz"
import { ExportAsGpxViz } from "./Popup/ExportAsGpxViz"
import { AddNoteCommentViz } from "./Popup/AddNoteCommentViz"
import { PlantNetDetectionViz } from "./Popup/PlantNetDetectionViz"
import { ConflateButton, ImportPointButton, ImportWayButton } from "./Popup/ImportButton"
import TagApplyButton from "./Popup/TagApplyButton"
import { CloseNoteButton } from "./Popup/CloseNoteButton"
import { NearbyImageVis } from "./Popup/NearbyImageVis"
import { MapillaryLinkVis } from "./Popup/MapillaryLinkVis"
import { Stores, UIEventSource } from "../Logic/UIEventSource"
import { AllTagsPanel } from "./AllTagsPanel"
import AllImageProviders from "../Logic/ImageProviders/AllImageProviders"
import { ImageCarousel } from "./Image/ImageCarousel"
import { ImageUploadFlow } from "./Image/ImageUploadFlow"
import { VariableUiElement } from "./Base/VariableUIElement"
import { Utils } from "../Utils"
import WikipediaBox from "./Wikipedia/WikipediaBox"
import Wikidata, { WikidataResponse } from "../Logic/Web/Wikidata"
import { Translation } from "./i18n/Translation"
import Translations from "./i18n/Translations"
import MangroveReviews from "../Logic/Web/MangroveReviews"
import ReviewForm from "./Reviews/ReviewForm"
import ReviewElement from "./Reviews/ReviewElement"
import OpeningHoursVisualization from "./OpeningHours/OpeningHoursVisualization"
import LiveQueryHandler from "../Logic/Web/LiveQueryHandler"
import { SubtleButton } from "./Base/SubtleButton"
import Svg from "../Svg"
import { OpenIdEditor, OpenJosm } from "./BigComponents/CopyrightPanel"
import Hash from "../Logic/Web/Hash"
import NoteCommentElement from "./Popup/NoteCommentElement"
import ImgurUploader from "../Logic/ImageProviders/ImgurUploader"
import FileSelectorButton from "./Input/FileSelectorButton"
import { LoginToggle } from "./Popup/LoginButton"
import Toggle from "./Input/Toggle"
import { SubstitutedTranslation } from "./SubstitutedTranslation"
import List from "./Base/List"
import { OsmFeature } from "../Models/OsmFeature"
import LayerConfig from "../Models/ThemeConfig/LayerConfig"
import { GeoOperations } from "../Logic/GeoOperations"
import StatisticsPanel from "./BigComponents/StatisticsPanel"
import AutoApplyButton from "./Popup/AutoApplyButton"
import { LanguageElement } from "./Popup/LanguageElement"
import FeatureReviews from "../Logic/Web/MangroveReviews"

export default class SpecialVisualizations {
    public static specialVisualizations: SpecialVisualization[] = SpecialVisualizations.initList()

    private static initList(): SpecialVisualization[] {
        const specialVisualizations: SpecialVisualization[] = [
            new HistogramViz(),
            new StealViz(),
            new MinimapViz(),
            new SidedMinimap(),
            new ShareLinkViz(),
            new UploadToOsmViz(),
            new MultiApplyViz(),
            new ExportAsGpxViz(),
            new AddNoteCommentViz(),
            new PlantNetDetectionViz(),
            new ImportPointButton(),
            new ImportWayButton(),
            new ConflateButton(),
            new TagApplyButton(),
            new CloseNoteButton(),
            new NearbyImageVis(),
            new MapillaryLinkVis(),
            new LanguageElement(),
            {
                funcName: "all_tags",
                docs: "Prints all key-value pairs of the object - used for debugging",
                args: [],
                constr: (state, tags: UIEventSource<any>) => new AllTagsPanel(tags, state),
            },
            {
                funcName: "image_carousel",
                docs: "Creates an image carousel for the given sources. An attempt will be made to guess what source is used. Supported: Wikidata identifiers, Wikipedia pages, Wikimedia categories, IMGUR (with attribution, direct links)",
                args: [
                    {
                        name: "image_key",
                        defaultValue: AllImageProviders.defaultKeys.join(","),
                        doc: "The keys given to the images, e.g. if <span class='literal-code'>image</span> is given, the first picture URL will be added as <span class='literal-code'>image</span>, the second as <span class='literal-code'>image:0</span>, the third as <span class='literal-code'>image:1</span>, etc... Multiple values are allowed if ';'-separated ",
                    },
                ],
                constr: (state, tags, args) => {
                    let imagePrefixes: string[] = undefined
                    if (args.length > 0) {
                        imagePrefixes = [].concat(...args.map((a) => a.split(",")))
                    }
                    return new ImageCarousel(
                        AllImageProviders.LoadImagesFor(tags, imagePrefixes),
                        tags,
                        state
                    )
                },
            },
            {
                funcName: "image_upload",
                docs: "Creates a button where a user can upload an image to IMGUR",
                args: [
                    {
                        name: "image-key",
                        doc: "Image tag to add the URL to (or image-tag:0, image-tag:1 when multiple images are added)",
                        defaultValue: "image",
                    },
                    {
                        name: "label",
                        doc: "The text to show on the button",
                        defaultValue: "Add image",
                    },
                ],
                constr: (state, tags, args) => {
                    return new ImageUploadFlow(tags, state, args[0], args[1])
                },
            },
            {
                funcName: "wikipedia",
                docs: "A box showing the corresponding wikipedia article - based on the wikidata tag",
                args: [
                    {
                        name: "keyToShowWikipediaFor",
                        doc: "Use the wikidata entry from this key to show the wikipedia article for. Multiple keys can be given (separated by ';'), in which case the first matching value is used",
                        defaultValue: "wikidata;wikipedia",
                    },
                ],
                example:
                    "`{wikipedia()}` is a basic example, `{wikipedia(name:etymology:wikidata)}` to show the wikipedia page of whom the feature was named after. Also remember that these can be styled, e.g. `{wikipedia():max-height: 10rem}` to limit the height",
                constr: (_, tagsSource, args) => {
                    const keys = args[0].split(";").map((k) => k.trim())
                    return new VariableUiElement(
                        tagsSource
                            .map((tags) => {
                                const key = keys.find(
                                    (k) => tags[k] !== undefined && tags[k] !== ""
                                )
                                return tags[key]
                            })
                            .map((wikidata) => {
                                const wikidatas: string[] = Utils.NoEmpty(
                                    wikidata?.split(";")?.map((wd) => wd.trim()) ?? []
                                )
                                return new WikipediaBox(wikidatas)
                            })
                    )
                },
            },
            {
                funcName: "wikidata_label",
                docs: "Shows the label of the corresponding wikidata-item",
                args: [
                    {
                        name: "keyToShowWikidataFor",
                        doc: "Use the wikidata entry from this key to show the label",
                        defaultValue: "wikidata",
                    },
                ],
                example:
                    "`{wikidata_label()}` is a basic example, `{wikipedia(name:etymology:wikidata)}` to show the label itself",
                constr: (_, tagsSource, args) =>
                    new VariableUiElement(
                        tagsSource
                            .map((tags) => tags[args[0]])
                            .map((wikidata) => {
                                wikidata = Utils.NoEmpty(
                                    wikidata?.split(";")?.map((wd) => wd.trim()) ?? []
                                )[0]
                                const entry = Wikidata.LoadWikidataEntry(wikidata)
                                return new VariableUiElement(
                                    entry.map((e) => {
                                        if (e === undefined || e["success"] === undefined) {
                                            return wikidata
                                        }
                                        const response = <WikidataResponse>e["success"]
                                        return Translation.fromMap(response.labels)
                                    })
                                )
                            })
                    ),
            },
            {
                funcName: "reviews",
                docs: "Adds an overview of the mangrove-reviews of this object. Mangrove.Reviews needs - in order to identify the reviewed object - a coordinate and a name. By default, the name of the object is given, but this can be overwritten",
                example:
                    "`{reviews()}` for a vanilla review, `{reviews(name, play_forest)}` to review a play forest. If a name is known, the name will be used as identifier, otherwise 'play_forest' is used",
                args: [
                    {
                        name: "subjectKey",
                        defaultValue: "name",
                        doc: "The key to use to determine the subject. If specified, the subject will be <b>tags[subjectKey]</b>",
                    },
                    {
                        name: "fallback",
                        doc: "The identifier to use, if <i>tags[subjectKey]</i> as specified above is not available. This is effectively a fallback value",
                    },
                ],
                constr: (state, tags, args) => {
                    const nameKey = args[0] ?? "name"
                    let fallbackName = args[1]
                    const feature = state.allElements.ContainingFeatures.get(tags.data.id)
                    const mangrove = FeatureReviews.construct(feature, state, {
                        nameKey: nameKey,
                        fallbackName,
                    })

                    const form = new ReviewForm((r) => mangrove.createReview(r), state)
                    return new ReviewElement(mangrove, form)
                },
            },
            {
                funcName: "opening_hours_table",
                docs: "Creates an opening-hours table. Usage: {opening_hours_table(opening_hours)} to create a table of the tag 'opening_hours'.",
                args: [
                    {
                        name: "key",
                        defaultValue: "opening_hours",
                        doc: "The tagkey from which the table is constructed.",
                    },
                    {
                        name: "prefix",
                        defaultValue: "",
                        doc: "Remove this string from the start of the value before parsing. __Note: use `&LPARENs` to indicate `(` if needed__",
                    },
                    {
                        name: "postfix",
                        defaultValue: "",
                        doc: "Remove this string from the end of the value before parsing. __Note: use `&RPARENs` to indicate `)` if needed__",
                    },
                ],
                example:
                    "A normal opening hours table can be invoked with `{opening_hours_table()}`. A table for e.g. conditional access with opening hours can be `{opening_hours_table(access:conditional, no @ &LPARENS, &RPARENS)}`",
                constr: (state, tagSource: UIEventSource<any>, args) => {
                    return new OpeningHoursVisualization(
                        tagSource,
                        state,
                        args[0],
                        args[1],
                        args[2]
                    )
                },
            },
            {
                funcName: "live",
                docs: "Downloads a JSON from the given URL, e.g. '{live(example.org/data.json, shorthand:x.y.z, other:a.b.c, shorthand)}' will download the given file, will create an object {shorthand: json[x][y][z], other: json[a][b][c] out of it and will return 'other' or 'json[a][b][c]. This is made to use in combination with tags, e.g. {live({url}, {url:format}, needed_value)}",
                example:
                    "{live({url},{url:format},hour)} {live(https://data.mobility.brussels/bike/api/counts/?request=live&featureID=CB2105,hour:data.hour_cnt;day:data.day_cnt;year:data.year_cnt,hour)}",
                args: [
                    {
                        name: "Url",
                        doc: "The URL to load",
                        required: true,
                    },
                    {
                        name: "Shorthands",
                        doc: "A list of shorthands, of the format 'shorthandname:path.path.path'. separated by ;",
                    },
                    {
                        name: "path",
                        doc: "The path (or shorthand) that should be returned",
                    },
                ],
                constr: (state, tagSource: UIEventSource<any>, args) => {
                    const url = args[0]
                    const shorthands = args[1]
                    const neededValue = args[2]
                    const source = LiveQueryHandler.FetchLiveData(url, shorthands.split(";"))
                    return new VariableUiElement(
                        source.map((data) => data[neededValue] ?? "Loading...")
                    )
                },
            },
            {
                funcName: "canonical",
                docs: "Converts a short, canonical value into the long, translated text including the unit. This only works if a `unit` is defined for the corresponding value. The unit specification will be included in the text. ",
                example:
                    "If the object has `length=42`, then `{canonical(length)}` will be shown as **42 meter** (in english), **42 metre** (in french), ...",
                args: [
                    {
                        name: "key",
                        doc: "The key of the tag to give the canonical text for",
                        required: true,
                    },
                ],
                constr: (state, tagSource, args) => {
                    const key = args[0]
                    return new VariableUiElement(
                        tagSource
                            .map((tags) => tags[key])
                            .map((value) => {
                                if (value === undefined) {
                                    return undefined
                                }
                                const allUnits = [].concat(
                                    ...(state?.layoutToUse?.layers?.map((lyr) => lyr.units) ?? [])
                                )
                                const unit = allUnits.filter((unit) =>
                                    unit.isApplicableToKey(key)
                                )[0]
                                if (unit === undefined) {
                                    return value
                                }
                                return unit.asHumanLongValue(value)
                            })
                    )
                },
            },
            {
                funcName: "export_as_geojson",
                docs: "Exports the selected feature as GeoJson-file",
                args: [],
                constr: (state, tagSource) => {
                    const t = Translations.t.general.download

                    return new SubtleButton(
                        Svg.download_ui(),
                        new Combine([
                            t.downloadFeatureAsGeojson.SetClass("font-bold text-lg"),
                            t.downloadGeoJsonHelper.SetClass("subtle"),
                        ]).SetClass("flex flex-col")
                    ).onClick(() => {
                        console.log("Exporting as Geojson")
                        const tags = tagSource.data
                        const feature = state.allElements.ContainingFeatures.get(tags.id)
                        const matchingLayer = state?.layoutToUse?.getMatchingLayer(tags)
                        const title =
                            matchingLayer.title?.GetRenderValue(tags)?.Subs(tags)?.txt ?? "geojson"
                        const data = JSON.stringify(feature, null, "  ")
                        Utils.offerContentsAsDownloadableFile(
                            data,
                            title + "_mapcomplete_export.geojson",
                            {
                                mimetype: "application/vnd.geo+json",
                            }
                        )
                    })
                },
            },
            {
                funcName: "open_in_iD",
                docs: "Opens the current view in the iD-editor",
                args: [],
                constr: (state, feature) => {
                    return new OpenIdEditor(state, undefined, feature.data.id)
                },
            },
            {
                funcName: "open_in_josm",
                docs: "Opens the current view in the JOSM-editor",
                args: [],
                constr: (state, feature) => {
                    return new OpenJosm(state)
                },
            },
            {
                funcName: "clear_location_history",
                docs: "A button to remove the travelled track information from the device",
                args: [],
                constr: (state) => {
                    return new SubtleButton(
                        Svg.delete_icon_svg().SetStyle("height: 1.5rem"),
                        Translations.t.general.removeLocationHistory
                    ).onClick(() => {
                        state.historicalUserLocations.features.setData([])
                        Hash.hash.setData(undefined)
                    })
                },
            },
            {
                funcName: "visualize_note_comments",
                docs: "Visualises the comments for notes",
                args: [
                    {
                        name: "commentsKey",
                        doc: "The property name of the comments, which should be stringified json",
                        defaultValue: "comments",
                    },
                    {
                        name: "start",
                        doc: "Drop the first 'start' comments",
                        defaultValue: "0",
                    },
                ],
                constr: (state, tags, args) =>
                    new VariableUiElement(
                        tags
                            .map((tags) => tags[args[0]])
                            .map((commentsStr) => {
                                const comments: any[] = JSON.parse(commentsStr)
                                const startLoc = Number(args[1] ?? 0)
                                if (!isNaN(startLoc) && startLoc > 0) {
                                    comments.splice(0, startLoc)
                                }
                                return new Combine(
                                    comments
                                        .filter((c) => c.text !== "")
                                        .map((c) => new NoteCommentElement(c))
                                ).SetClass("flex flex-col")
                            })
                    ),
            },
            {
                funcName: "add_image_to_note",
                docs: "Adds an image to a node",
                args: [
                    {
                        name: "Id-key",
                        doc: "The property name where the ID of the note to close can be found",
                        defaultValue: "id",
                    },
                ],
                constr: (state, tags, args) => {
                    const isUploading = new UIEventSource(false)
                    const t = Translations.t.notes
                    const id = tags.data[args[0] ?? "id"]

                    const uploader = new ImgurUploader(async (url) => {
                        isUploading.setData(false)
                        await state.osmConnection.addCommentToNote(id, url)
                        NoteCommentElement.addCommentTo(url, tags, state)
                    })

                    const label = new Combine([
                        Svg.camera_plus_ui().SetClass("block w-12 h-12 p-1 text-4xl "),
                        Translations.t.image.addPicture,
                    ]).SetClass(
                        "p-2 border-4 border-black rounded-full font-bold h-full align-center w-full flex justify-center"
                    )

                    const fileSelector = new FileSelectorButton(label)
                    fileSelector.GetValue().addCallback((filelist) => {
                        isUploading.setData(true)
                        uploader.uploadMany("Image for osm.org/note/" + id, "CC0", filelist)
                    })
                    const ti = Translations.t.image
                    const uploadPanel = new Combine([
                        fileSelector,
                        ti.respectPrivacy.SetClass("text-sm"),
                    ]).SetClass("flex flex-col")
                    return new LoginToggle(
                        new Toggle(
                            Translations.t.image.uploadingPicture.SetClass("alert"),
                            uploadPanel,
                            isUploading
                        ),
                        t.loginToAddPicture,
                        state
                    )
                },
            },
            {
                funcName: "title",
                args: [],
                docs: "Shows the title of the popup. Useful for some cases, e.g. 'What is phone number of {title()}?'",
                example:
                    "`What is the phone number of {title()}`, which might automatically become `What is the phone number of XYZ`.",
                constr: (state, tagsSource) =>
                    new VariableUiElement(
                        tagsSource.map((tags) => {
                            const layer = state.layoutToUse.getMatchingLayer(tags)
                            const title = layer?.title?.GetRenderValue(tags)
                            if (title === undefined) {
                                return undefined
                            }
                            return new SubstitutedTranslation(title, tagsSource, state)
                        })
                    ),
            },
            {
                funcName: "maproulette_task",
                args: [],
                constr(state, tagSource, argument, guistate) {
                    let parentId = tagSource.data.mr_challengeId
                    let challenge = Stores.FromPromise(
                        Utils.downloadJsonCached(
                            `https://maproulette.org/api/v2/challenge/${parentId}`,
                            24 * 60 * 60 * 1000
                        )
                    )

                    return new VariableUiElement(
                        challenge.map((challenge) => {
                            let listItems: BaseUIElement[] = []
                            let title: BaseUIElement

                            if (challenge?.name) {
                                title = new Title(challenge.name)
                            }

                            if (challenge?.description) {
                                listItems.push(new FixedUiElement(challenge.description))
                            }

                            if (challenge?.instruction) {
                                listItems.push(new FixedUiElement(challenge.instruction))
                            }

                            if (listItems.length === 0) {
                                return undefined
                            } else {
                                return [title, new List(listItems)]
                            }
                        })
                    )
                },
                docs: "Show details of a MapRoulette task",
            },
            {
                funcName: "statistics",
                docs: "Show general statistics about the elements currently in view. Intended to use on the `current_view`-layer",
                args: [],
                constr: (state, tagsSource, args, guiState) => {
                    const elementsInview = new UIEventSource<
                        {
                            distance: number
                            center: [number, number]
                            element: OsmFeature
                            layer: LayerConfig
                        }[]
                    >([])

                    function update() {
                        const mapCenter = <[number, number]>[
                            state.locationControl.data.lon,
                            state.locationControl.data.lon,
                        ]
                        const bbox = state.currentBounds.data
                        const elements = state.featurePipeline
                            .getAllVisibleElementsWithmeta(bbox)
                            .map((el) => {
                                const distance = GeoOperations.distanceBetween(el.center, mapCenter)
                                return { ...el, distance }
                            })
                        elements.sort((e0, e1) => e0.distance - e1.distance)
                        elementsInview.setData(elements)
                    }

                    state.currentBounds.addCallbackAndRun(update)
                    state.featurePipeline.newDataLoadedSignal.addCallback(update)
                    state.filteredLayers.addCallbackAndRun((fls) => {
                        for (const fl of fls) {
                            fl.isDisplayed.addCallback(update)
                            fl.appliedFilters.addCallback(update)
                        }
                    })
                    return new StatisticsPanel(elementsInview, state)
                },
            },
            {
                funcName: "send_email",
                docs: "Creates a `mailto`-link where some fields are already set and correctly escaped. The user will be promted to send the email",
                args: [
                    {
                        name: "to",
                        doc: "Who to send the email to?",
                        required: true,
                    },
                    {
                        name: "subject",
                        doc: "The subject of the email",
                        required: true,
                    },
                    {
                        name: "body",
                        doc: "The text in the email",
                        required: true,
                    },

                    {
                        name: "button_text",
                        doc: "The text shown on the button in the UI",
                        required: true,
                    },
                ],
                constr(state, tags, args) {
                    return new VariableUiElement(
                        tags.map((tags) => {
                            const [to, subject, body, button_text] = args.map((str) =>
                                Utils.SubstituteKeys(str, tags)
                            )
                            const url =
                                "mailto:" +
                                to +
                                "?subject=" +
                                encodeURIComponent(subject) +
                                "&body=" +
                                encodeURIComponent(body)
                            return new SubtleButton(Svg.envelope_svg(), button_text, {
                                url,
                            })
                        })
                    )
                },
            },
            {
                funcName: "multi",
                docs: "Given an embedded tagRendering (read only) and a key, will read the keyname as a JSON-list. Every element of this list will be considered as tags and rendered with the tagRendering",
                example:
                    "```json\n" +
                    JSON.stringify(
                        {
                            render: {
                                special: {
                                    type: "multi",
                                    key: "_doors_from_building_properties",
                                    tagRendering: {
                                        render: "The building containing this feature has a <a href='#{id}'>door</a> of width {entrance:width}",
                                    },
                                },
                            },
                        },
                        null,
                        "  "
                    ) +
                    "\n```",
                args: [
                    {
                        name: "key",
                        doc: "The property to read and to interpret as a list of properties",
                        required: true,
                    },
                    {
                        name: "tagrendering",
                        doc: "An entire tagRenderingConfig",
                        required: true,
                    },
                ],
                constr(state, featureTags, args) {
                    const [key, tr] = args
                    const translation = new Translation({ "*": tr })
                    return new VariableUiElement(
                        featureTags.map((tags) => {
                            const properties: object[] = JSON.parse(tags[key])
                            const elements = []
                            for (const property of properties) {
                                const subsTr = new SubstitutedTranslation(
                                    translation,
                                    new UIEventSource<any>(property),
                                    state
                                )
                                elements.push(subsTr)
                            }
                            return new List(elements)
                        })
                    )
                },
            },
        ]

        specialVisualizations.push(new AutoApplyButton(specialVisualizations))

        const invalid = specialVisualizations
            .map((sp, i) => ({ sp, i }))
            .filter((sp) => sp.sp.funcName === undefined)
        if (invalid.length > 0) {
            throw (
                "Invalid special visualisation found: funcName is undefined for " +
                invalid.map((sp) => sp.i).join(", ") +
                '. Did you perhaps type \n  funcName: "funcname" // type declaration uses COLON\ninstead of:\n  funcName = "funcName" // value definition uses EQUAL'
            )
        }

        return specialVisualizations
    }

    public static DocumentationFor(viz: string | SpecialVisualization): BaseUIElement | undefined {
        if (typeof viz === "string") {
            viz = SpecialVisualizations.specialVisualizations.find((sv) => sv.funcName === viz)
        }
        if (viz === undefined) {
            return undefined
        }
        return new Combine([
            new Title(viz.funcName, 3),
            viz.docs,
            viz.args.length > 0
                ? new Table(
                      ["name", "default", "description"],
                      viz.args.map((arg) => {
                          let defaultArg = arg.defaultValue ?? "_undefined_"
                          if (defaultArg == "") {
                              defaultArg = "_empty string_"
                          }
                          return [arg.name, defaultArg, arg.doc]
                      })
                  )
                : undefined,
            new Title("Example usage of " + viz.funcName, 4),
            new FixedUiElement(
                viz.example ??
                    "`{" +
                        viz.funcName +
                        "(" +
                        viz.args.map((arg) => arg.defaultValue).join(",") +
                        ")}`"
            ).SetClass("literal-code"),
        ])
    }

    public static HelpMessage() {
        const helpTexts = SpecialVisualizations.specialVisualizations.map((viz) =>
            SpecialVisualizations.DocumentationFor(viz)
        )

        return new Combine([
            new Combine([
                new Title("Special tag renderings", 1),

                "In a tagrendering, some special values are substituted by an advanced UI-element. This allows advanced features and visualizations to be reused by custom themes or even to query third-party API's.",
                "General usage is `{func_name()}`, `{func_name(arg, someotherarg)}` or `{func_name(args):cssStyle}`. Note that you _do not_ need to use quotes around your arguments, the comma is enough to separate them. This also implies you cannot use a comma in your args",
                new Title("Using expanded syntax", 4),
                `Instead of using \`{"render": {"en": "{some_special_visualisation(some_arg, some other really long message, more args)} , "nl": "{some_special_visualisation(some_arg, een boodschap in een andere taal, more args)}}\`, one can also write`,
                new FixedUiElement(
                    JSON.stringify(
                        {
                            render: {
                                special: {
                                    type: "some_special_visualisation",
                                    before: {
                                        en: "Some text to prefix before the special element (e.g. a title)",
                                        nl: "Een tekst om voor het element te zetten (bv. een titel)",
                                    },
                                    after: {
                                        en: "Some text to put after the element, e.g. a footer",
                                    },
                                    argname: "some_arg",
                                    message: {
                                        en: "some other really long message",
                                        nl: "een boodschap in een andere taal",
                                    },
                                    other_arg_name: "more args",
                                },
                            },
                        },
                        null,
                        "  "
                    )
                ).SetClass("code"),
            ]).SetClass("flex flex-col"),
            ...helpTexts,
        ]).SetClass("flex flex-col")
    }
}
