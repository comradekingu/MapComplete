import UserRelatedState from "../Logic/State/UserRelatedState"
import { FixedUiElement } from "./Base/FixedUiElement"
import Combine from "./Base/Combine"
import MoreScreen from "./BigComponents/MoreScreen"
import Translations from "./i18n/Translations"
import Constants from "../Models/Constants"
import { Utils } from "../Utils"
import LanguagePicker1 from "./LanguagePicker"
import IndexText from "./BigComponents/IndexText"
import FeaturedMessage from "./BigComponents/FeaturedMessage"
import { ImportViewerLinks } from "./BigComponents/UserInformation"
import { LoginToggle } from "./Popup/LoginButton"
import UserSurveyPanel from "./UserSurveyPanel"

export default class AllThemesGui {
    setup() {
        try {
            new FixedUiElement("").AttachTo("centermessage")
            const state = new UserRelatedState(undefined)
            const intro = new Combine([
                new LanguagePicker1(Translations.t.index.title.SupportedLanguages(), "").SetClass(
                    "flex absolute top-2 right-3"
                ),
                new IndexText(),
            ])
            new Combine([
                intro,
                new FeaturedMessage().SetClass("mb-4 block"),
                new Combine([new UserSurveyPanel()]).SetClass("flex justify-center"),
                new MoreScreen(state, true),
                new LoginToggle(undefined, Translations.t.index.logIn, state),
                new ImportViewerLinks(state.osmConnection),
                Translations.t.general.aboutMapcomplete
                    .Subs({ osmcha_link: Utils.OsmChaLinkFor(7) })
                    .SetClass("link-underline"),
                new FixedUiElement("v" + Constants.vNumber),
            ])
                .SetClass("block m-5 lg:w-3/4 lg:ml-40")
                .SetStyle("pointer-events: all;")
                .AttachTo("topleft-tools")
        } catch (e) {
            console.error(">>>> CRITICAL", e)
            new FixedUiElement(
                "Seems like no layers are compiled - check the output of `npm run generate:layeroverview`. Is this visible online? Contact pietervdvn immediately!"
            )
                .SetClass("alert")
                .AttachTo("centermessage")
        }
    }
}
