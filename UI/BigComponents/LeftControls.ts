import Combine from "../Base/Combine"
import ScrollableFullScreen from "../Base/ScrollableFullScreen"
import Translations from "../i18n/Translations"
import Toggle from "../Input/Toggle"
import MapControlButton from "../MapControlButton"
import Svg from "../../Svg"
import AllDownloads from "./AllDownloads"
import FilterView from "./FilterView"
import { Store, UIEventSource } from "../../Logic/UIEventSource"
import BackgroundMapSwitch from "./BackgroundMapSwitch"
import Lazy from "../Base/Lazy"
import { VariableUiElement } from "../Base/VariableUIElement"
import FeatureInfoBox from "../Popup/FeatureInfoBox"
import CopyrightPanel from "./CopyrightPanel"
import FeaturePipelineState from "../../Logic/State/FeaturePipelineState"
import Hotkeys from "../Base/Hotkeys"
import { DefaultGuiState } from "../DefaultGuiState"

export default class LeftControls extends Combine {
    constructor(state: FeaturePipelineState, guiState: DefaultGuiState) {
        const currentViewFL = state.currentView?.layer
        const currentViewAction = new Toggle(
            new Lazy(() => {
                const feature: Store<any> = state.currentView.features.map((ffs) => ffs[0]?.feature)
                const icon = new VariableUiElement(
                    feature.map((feature) => {
                        const defaultIcon = Svg.checkbox_empty_svg()
                        if (feature === undefined) {
                            return defaultIcon
                        }
                        const tags = { ...feature.properties, button: "yes" }
                        const elem = currentViewFL.layerDef.mapRendering[0]?.GetSimpleIcon(
                            new UIEventSource(tags)
                        )
                        if (elem === undefined) {
                            return defaultIcon
                        }
                        return elem
                    })
                ).SetClass("inline-block w-full h-full")

                feature.map((feature) => {
                    if (feature === undefined) {
                        return undefined
                    }
                    const tagsSource = state.allElements.getEventSourceById(feature.properties.id)
                    return new FeatureInfoBox(tagsSource, currentViewFL.layerDef, state, {
                        hashToShow: "currentview",
                        isShown: guiState.currentViewControlIsOpened,
                    })
                })

                return new MapControlButton(icon)
            }).onClick(() => {
                guiState.currentViewControlIsOpened.setData(true)
            }),

            undefined,
            new UIEventSource<boolean>(
                currentViewFL !== undefined && currentViewFL?.layerDef?.tagRenderings !== null
            )
        )

        new AllDownloads(guiState.downloadControlIsOpened, state)
        const toggledDownload = new MapControlButton(Svg.download_svg()).onClick(() =>
            guiState.downloadControlIsOpened.setData(true)
        )

        const downloadButton = new Toggle(
            toggledDownload,
            undefined,
            state.featureSwitchEnableExport.map(
                (downloadEnabled) => downloadEnabled || state.featureSwitchExportAsPdf.data,
                [state.featureSwitchExportAsPdf]
            )
        )

        new ScrollableFullScreen(
            () => Translations.t.general.layerSelection.title.Clone(),
            () =>
                new FilterView(state.filteredLayers, state.overlayToggles, state).SetClass(
                    "block p-1"
                ),
            "filters",
            guiState.filterViewIsOpened
        )
        const toggledFilter = new MapControlButton(Svg.layers_svg()).onClick(() =>
            guiState.filterViewIsOpened.setData(true)
        )
        state.featureSwitchFilter.addCallbackAndRun((f) => {
            Hotkeys.RegisterHotkey(
                { nomod: "B" },
                Translations.t.hotkeyDocumentation.openLayersPanel,
                () => {
                    guiState.filterViewIsOpened.setData(!guiState.filterViewIsOpened.data)
                }
            )
        })

        const filterButton = new Toggle(toggledFilter, undefined, state.featureSwitchFilter)

        const mapSwitch = new Toggle(
            new BackgroundMapSwitch(state, state.backgroundLayer, { enableHotkeys: true }),
            undefined,
            state.featureSwitchBackgroundSelection
        )

        // If the welcomeMessage is disabled, the copyright is hidden (as that is where the copyright is located
        const copyright = new Toggle(
            undefined,
            new Lazy(() => {
                new ScrollableFullScreen(
                    () => Translations.t.general.attribution.attributionTitle,
                    () => new CopyrightPanel(state),
                    "copyright",
                    guiState.copyrightViewIsOpened
                )
                return new MapControlButton(Svg.copyright_svg()).onClick(() =>
                    guiState.copyrightViewIsOpened.setData(true)
                )
            }),
            state.featureSwitchWelcomeMessage
        )

        super([currentViewAction, filterButton, downloadButton, copyright, mapSwitch])

        this.SetClass("flex flex-col")
    }
}
