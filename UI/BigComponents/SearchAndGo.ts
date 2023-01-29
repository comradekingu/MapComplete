import { UIEventSource } from "../../Logic/UIEventSource"
import { Translation } from "../i18n/Translation"
import Svg from "../../Svg"
import { TextField } from "../Input/TextField"
import { Geocoding } from "../../Logic/Osm/Geocoding"
import Translations from "../i18n/Translations"
import Hash from "../../Logic/Web/Hash"
import Combine from "../Base/Combine"
import Locale from "../i18n/Locale"

export default class SearchAndGo extends Combine {
    private readonly _searchField: TextField
    constructor(state: { leafletMap: UIEventSource<any>; selectedElement?: UIEventSource<any> }) {
        const goButton = Svg.search_ui().SetClass("w-8 h-8 full-rounded border-black float-right dark:invert")

        const placeholder = new UIEventSource<Translation>(Translations.t.general.search.search)
        const searchField = new TextField({
            placeholder: placeholder.map(
                (tr) => tr.textFor(Locale.language.data),
                [Locale.language]
            ),
            value: new UIEventSource<string>(""),
            inputStyle:
                " background: transparent;\n" +
                "    border: none;\n" +
                "    font-size: large;\n" +
                "    width: 100%;\n" +
                "    height: 100%;\n" +
                "    box-sizing: border-box;\n" +
                "    color: var(--foreground-color);",
        })

        searchField.SetClass("relative float-left mt-0 ml-2")
        searchField.SetStyle("width: calc(100% - 3em);height: 100%")

        super([searchField, goButton])

        this.SetClass("block h-8")
        this.SetStyle(
            "background: var(--background-color); color: var(--foreground-color); pointer-evetns:all;"
        )

        // Triggered by 'enter' or onclick
        async function runSearch() {
            const searchString = searchField.GetValue().data
            if (searchString === undefined || searchString === "") {
                return
            }
            searchField.GetValue().setData("")
            placeholder.setData(Translations.t.general.search.searching)
            try {
                const result = await Geocoding.Search(searchString)

                console.log("Search result", result)
                if (result.length == 0) {
                    placeholder.setData(Translations.t.general.search.nothing)
                    return
                }

                const poi = result[0]
                const bb = poi.boundingbox
                const bounds: [[number, number], [number, number]] = [
                    [bb[0], bb[2]],
                    [bb[1], bb[3]],
                ]
                state.selectedElement?.setData(undefined)
                Hash.hash.setData(poi.osm_type + "/" + poi.osm_id)
                state.leafletMap.data.fitBounds(bounds)
                placeholder.setData(Translations.t.general.search.search)
            } catch (e) {
                searchField.GetValue().setData("")
                placeholder.setData(Translations.t.general.search.error)
            }
        }

        searchField.enterPressed.addCallback(runSearch)
        this._searchField = searchField
        goButton.onClick(runSearch)
    }

    focus() {
        this._searchField.focus()
    }
}
