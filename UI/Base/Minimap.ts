import BaseUIElement from "../BaseUIElement"
import Loc from "../../Models/Loc"
import BaseLayer from "../../Models/BaseLayer"
import { UIEventSource } from "../../Logic/UIEventSource"
import { BBox } from "../../Logic/BBox"

export interface MinimapOptions {
    background?: UIEventSource<BaseLayer>
    location?: UIEventSource<Loc>
    bounds?: UIEventSource<BBox>
    allowMoving?: boolean
    leafletOptions?: any
    attribution?: BaseUIElement | boolean
    onFullyLoaded?: (leaflet: L.Map) => void
    leafletMap?: UIEventSource<any>
    lastClickLocation?: UIEventSource<{ lat: number; lon: number }>
    addLayerControl?: boolean | false
}

export interface MinimapObj {
    readonly leafletMap: UIEventSource<any>
    readonly location: UIEventSource<Loc>
    readonly bounds: UIEventSource<BBox>

    installBounds(factor: number | BBox, showRange?: boolean): void

    TakeScreenshot(format): Promise<string>
    TakeScreenshot(format: "image"): Promise<string>
    TakeScreenshot(format: "blob"): Promise<Blob>
    TakeScreenshot(format?: "image" | "blob"): Promise<string | Blob>
}

export default class Minimap {
    /**
     * A stub implementation. The actual implementation is injected later on, but only in the browser.
     * importing leaflet crashes node-ts, which is pretty annoying considering the fact that a lot of scripts use it
     */

    private constructor() {}

    /**
     * Construct a minimap
     */
    public static createMiniMap: (options?: MinimapOptions) => BaseUIElement & MinimapObj = (_) => {
        throw "CreateMinimap hasn't been initialized yet. Please call MinimapImplementation.initialize()"
    }
}
