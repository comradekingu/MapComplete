import { UIEventSource } from "../../Logic/UIEventSource"
import EditableTagRendering from "./EditableTagRendering"
import QuestionBox from "./QuestionBox"
import Combine from "../Base/Combine"
import TagRenderingAnswer from "./TagRenderingAnswer"
import ScrollableFullScreen from "../Base/ScrollableFullScreen"
import Constants from "../../Models/Constants"
import SharedTagRenderings from "../../Customizations/SharedTagRenderings"
import BaseUIElement from "../BaseUIElement"
import { VariableUiElement } from "../Base/VariableUIElement"
import DeleteWizard from "./DeleteWizard"
import SplitRoadWizard from "./SplitRoadWizard"
import TagRenderingConfig from "../../Models/ThemeConfig/TagRenderingConfig"
import LayerConfig from "../../Models/ThemeConfig/LayerConfig"
import { Utils } from "../../Utils"
import MoveWizard from "./MoveWizard"
import Toggle from "../Input/Toggle"
import Lazy from "../Base/Lazy"
import FeaturePipelineState from "../../Logic/State/FeaturePipelineState"
import { Tag } from "../../Logic/Tags/Tag"
import Svg from "../../Svg"
import Translations from "../i18n/Translations"

export default class FeatureInfoBox extends ScrollableFullScreen {
    public constructor(
        tags: UIEventSource<any>,
        layerConfig: LayerConfig,
        state: FeaturePipelineState,
        options?: {
            hashToShow?: string
            isShown?: UIEventSource<boolean>
            setHash?: true | boolean
        }
    ) {
        if (state === undefined) {
            throw "State is undefined!"
        }
        super(
            () => FeatureInfoBox.GenerateTitleBar(tags, layerConfig, state),
            () => FeatureInfoBox.GenerateContent(tags, layerConfig, state),
            options?.hashToShow ?? tags.data.id ?? "item",
            options?.isShown,
            options
        )

        if (layerConfig === undefined) {
            throw "Undefined layerconfig"
        }
    }

    public static GenerateTitleBar(
        tags: UIEventSource<any>,
        layerConfig: LayerConfig,
        state: {}
    ): BaseUIElement {
        const title = new TagRenderingAnswer(
            tags,
            layerConfig.title ?? new TagRenderingConfig("POI"),
            state
        ).SetClass("break-words font-bold sm:p-0.5 md:p-1 sm:p-1.5 md:p-2 text-2xl")
        const titleIcons = new Combine(
            layerConfig.titleIcons.map((icon) => {
                return new TagRenderingAnswer(
                    tags,
                    icon,
                    state,
                    "block h-8 max-h-8 align-baseline box-content sm:p-0.5 titleicon"
                )
            })
        ).SetClass("flex flex-row flex-wrap pt-0.5 sm:pt-1 items-center mr-2")

        return new Combine([
            new Combine([title, titleIcons]).SetClass(
                "flex flex-col sm:flex-row flex-grow justify-between"
            ),
        ])
    }

    public static GenerateContent(
        tags: UIEventSource<any>,
        layerConfig: LayerConfig,
        state: FeaturePipelineState
    ): BaseUIElement {
        return new Toggle(
            new Combine([
                Svg.delete_icon_svg().SetClass("w-8 h-8"),
                Translations.t.delete.isDeleted,
            ]).SetClass("flex justify-center font-bold items-center"),
            FeatureInfoBox.GenerateMainContent(tags, layerConfig, state),
            tags.map((t) => t["_deleted"] == "yes")
        )
    }
    private static GenerateMainContent(
        tags: UIEventSource<any>,
        layerConfig: LayerConfig,
        state: FeaturePipelineState
    ): BaseUIElement {
        let questionBoxes: Map<string, QuestionBox> = new Map<string, QuestionBox>()
        const t = Translations.t.general
        const allGroupNames = Utils.Dedup(layerConfig.tagRenderings.map((tr) => tr.group))
        if (state?.featureSwitchUserbadge?.data ?? true) {
            const questionSpecs = layerConfig.tagRenderings.filter((tr) => tr.id === "questions")
            for (const groupName of allGroupNames) {
                const questions = layerConfig.tagRenderings.filter((tr) => tr.group === groupName)
                const questionSpec = questionSpecs.filter((tr) => tr.group === groupName)[0]
                const questionBox = new QuestionBox(state, {
                    tagsSource: tags,
                    tagRenderings: questions,
                    units: layerConfig.units,
                    showAllQuestionsAtOnce:
                        questionSpec?.freeform?.helperArgs["showAllQuestions"] ??
                        state.featureSwitchShowAllQuestions,
                })
                questionBoxes.set(groupName, questionBox)
            }
        }

        const withQuestion = layerConfig.tagRenderings.filter(
            (tr) => tr.question !== undefined
        ).length

        const allRenderings: BaseUIElement[] = [
            new VariableUiElement(
                tags
                    .map((data) => data[Tag.newlyCreated.key])
                    .map((isCreated) => {
                        if (isCreated === undefined) {
                            return undefined
                        }
                        const createdDate = new Date(isCreated)
                        const secondsSinceCreation = (Date.now() - createdDate.getTime()) / 1000
                        if (secondsSinceCreation >= 60 * 5) {
                            return undefined
                        }

                        const els = []
                        const thanks = new Combine([
                            Svg.party_svg().SetClass(
                                "w-12 h-12 shrink-0 p-1 m-1 bg-white dark:bg-black rounded-full block"
                            ),
                            t.newlyCreated,
                        ]).SetClass("flex w-full thanks content-center")
                        els.push(thanks)
                        if (withQuestion > 0) {
                            els.push(t.feelFreeToSkip)
                        }

                        return new Combine(els).SetClass("pb-4 mb-4 border-b block border-black")
                    })
            ),
        ]
        for (let i = 0; i < allGroupNames.length; i++) {
            const groupName = allGroupNames[i]

            const trs = layerConfig.tagRenderings.filter((tr) => tr.group === groupName)
            const renderingsForGroup: (EditableTagRendering | BaseUIElement)[] = []
            const innerClasses =
                "block w-full break-word text-default m-1 p-1 border-b border-gray-200 mb-2 pb-2"
            for (const tr of trs) {
                if (tr.question === null || tr.id === "questions") {
                    // This is a question box!
                    const questionBox = questionBoxes.get(tr.group)
                    questionBoxes.delete(tr.group)

                    if (tr.render !== undefined) {
                        questionBox.SetClass("text-sm")
                        const renderedQuestion = new TagRenderingAnswer(
                            tags,
                            tr,
                            state,
                            tr.group + " questions",
                            "",
                            {
                                specialViz: new Map<string, BaseUIElement>([
                                    ["questions", questionBox],
                                ]),
                            }
                        )
                        const possiblyHidden = new Toggle(
                            renderedQuestion,
                            undefined,
                            questionBox.restingQuestions.map((ls) => ls?.length > 0)
                        )
                        renderingsForGroup.push(possiblyHidden)
                    } else {
                        renderingsForGroup.push(questionBox)
                    }
                } else {
                    let classes = innerClasses
                    let isHeader = renderingsForGroup.length === 0 && i > 0
                    if (isHeader) {
                        // This is the first element of a group!
                        // It should act as header and be sticky
                        classes = ""
                    }

                    const etr = new EditableTagRendering(tags, tr, layerConfig.units, state, {
                        innerElementClasses: innerClasses,
                    })
                    if (isHeader) {
                        etr.SetClass("sticky top-0")
                    }
                    renderingsForGroup.push(etr)
                }
            }

            allRenderings.push(...renderingsForGroup)
        }
        allRenderings.push(
            new Toggle(
                new Lazy(() =>
                    FeatureInfoBox.createEditElements(questionBoxes, layerConfig, tags, state)
                ),
                undefined,
                state.featureSwitchUserbadge
            )
        )

        return new Combine(allRenderings).SetClass("block")
    }

    /**
     * All the edit elements, together (note that the question boxes are passed though)
     * @param questionBoxes
     * @param layerConfig
     * @param tags
     * @param state
     * @private
     */
    private static createEditElements(
        questionBoxes: Map<string, QuestionBox>,
        layerConfig: LayerConfig,
        tags: UIEventSource<any>,
        state: FeaturePipelineState
    ): BaseUIElement {
        let editElements: BaseUIElement[] = []
        questionBoxes.forEach((questionBox) => {
            editElements.push(questionBox)
        })

        if (layerConfig.allowMove) {
            editElements.push(
                new VariableUiElement(
                    tags
                        .map((tags) => tags.id)
                        .map((id) => {
                            const feature = state.allElements.ContainingFeatures.get(id)
                            if (feature === undefined) {
                                return "This feature is not register in the state.allElements and cannot be moved"
                            }
                            return new MoveWizard(feature, state, layerConfig.allowMove)
                        })
                ).SetClass("text-base")
            )
        }

        if (layerConfig.deletion) {
            editElements.push(
                new VariableUiElement(
                    tags
                        .map((tags) => tags.id)
                        .map((id) => new DeleteWizard(id, state, layerConfig.deletion))
                ).SetClass("text-base")
            )
        }

        if (layerConfig.allowSplit) {
            editElements.push(
                new VariableUiElement(
                    tags.map((tags) => tags.id).map((id) => new SplitRoadWizard(id, state))
                ).SetClass("text-base")
            )
        }

        editElements.push(
            new VariableUiElement(
                state.osmConnection.userDetails
                    .map((ud) => ud.csCount)
                    .map(
                        (csCount) => {
                            if (
                                csCount <= Constants.userJourney.historyLinkVisible &&
                                state.featureSwitchIsDebugging.data == false &&
                                state.featureSwitchIsTesting.data === false
                            ) {
                                return undefined
                            }

                            return new TagRenderingAnswer(
                                tags,
                                SharedTagRenderings.SharedTagRendering.get("last_edit"),
                                state
                            )
                        },
                        [state.featureSwitchIsDebugging, state.featureSwitchIsTesting]
                    )
            )
        )

        editElements.push(
            Toggle.If(state.featureSwitchIsDebugging, () => {
                const config_all_tags: TagRenderingConfig = new TagRenderingConfig(
                    { render: "{all_tags()}" },
                    ""
                )
                const config_download: TagRenderingConfig = new TagRenderingConfig(
                    { render: "{export_as_geojson()}" },
                    ""
                )
                const config_id: TagRenderingConfig = new TagRenderingConfig(
                    { render: "{open_in_iD()}" },
                    ""
                )

                return new Combine([
                    new TagRenderingAnswer(tags, config_all_tags, state),
                    new TagRenderingAnswer(tags, config_download, state),
                    new TagRenderingAnswer(tags, config_id, state),
                    "This is layer " + layerConfig.id,
                ])
            })
        )

        return new Combine(editElements).SetClass("flex flex-col")
    }
}
