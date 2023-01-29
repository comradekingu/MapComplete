/**
 * Keeps track of a dictionary 'elementID' -> UIEventSource<tags>
 */
import { UIEventSource } from "./UIEventSource"
import { GeoJSONObject } from "@turf/turf"
import { Feature, Geometry, Point } from "geojson"
import { OsmTags } from "../Models/OsmFeature"

export class ElementStorage {
    public ContainingFeatures = new Map<string, Feature<Geometry, OsmTags>>()
    private _elements = new Map<string, UIEventSource<any>>()

    constructor() {}

    addElementById(id: string, eventSource: UIEventSource<any>) {
        this._elements.set(id, eventSource)
    }

    /**
     * Creates a UIEventSource for the tags of the given feature.
     * If an UIEventsource has been created previously, the same UIEventSource will be returned
     *
     * Note: it will cleverly merge the tags, if needed
     */
    addOrGetElement(feature: Feature<Geometry, OsmTags>): UIEventSource<any> {
        const elementId = feature.properties.id
        const newProperties = feature.properties

        const es = this.addOrGetById(elementId, newProperties)

        // At last, we overwrite the tag of the new feature to use the tags in the already existing event source
        feature.properties = es.data

        if (!this.ContainingFeatures.has(elementId)) {
            this.ContainingFeatures.set(elementId, feature)
        }

        return es
    }

    getEventSourceById(elementId): UIEventSource<any> {
        if (elementId === undefined) {
            return undefined
        }
        return this._elements.get(elementId)
    }

    has(id) {
        return this._elements.has(id)
    }

    addAlias(oldId: string, newId: string) {
        if (newId === undefined) {
            // We removed the node/way/relation with type 'type' and id 'oldId' on openstreetmap!
            const element = this.getEventSourceById(oldId)
            element.data._deleted = "yes"
            element.ping()
            return
        }

        if (oldId == newId) {
            return undefined
        }
        const element = this.getEventSourceById(oldId)
        if (element === undefined) {
            // Element to rewrite not found, probably a node or relation that is not rendered
            return undefined
        }
        element.data.id = newId
        this.addElementById(newId, element)
        this.ContainingFeatures.set(newId, this.ContainingFeatures.get(oldId))
        element.ping()
    }

    private addOrGetById(elementId: string, newProperties: any): UIEventSource<any> {
        if (!this._elements.has(elementId)) {
            const eventSource = new UIEventSource<any>(newProperties, "tags of " + elementId)
            this._elements.set(elementId, eventSource)
            return eventSource
        }

        const es = this._elements.get(elementId)
        if (es.data == newProperties) {
            // Reference comparison gives the same object! we can just return the event source
            return es
        }
        const keptKeys = es.data
        // The element already exists
        // We use the new feature to overwrite all the properties in the already existing eventsource
        const debug_msg = []
        let somethingChanged = false
        for (const k in newProperties) {
            if (!newProperties.hasOwnProperty(k)) {
                continue
            }
            const v = newProperties[k]

            if (keptKeys[k] !== v) {
                if (v === undefined) {
                    // The new value is undefined; the tag might have been removed
                    // It might be a metatag as well
                    // In the latter case, we do keep the tag!
                    if (!k.startsWith("_")) {
                        delete keptKeys[k]
                        debug_msg.push("Erased " + k)
                    }
                } else {
                    keptKeys[k] = v
                    debug_msg.push(k + " --> " + v)
                }

                somethingChanged = true
            }
        }
        if (somethingChanged) {
            es.ping()
        }
        return es
    }
}
