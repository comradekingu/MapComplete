import {UIElement} from "../UIElement";

export default class LazyElement extends UIElement {


    public Activate: () => void;
    private _content: UIElement = undefined;
    private readonly _loadingContent: string;

    constructor(content: (() => UIElement), loadingContent = "Rendering...") {
        super();
        this._loadingContent = loadingContent;
        this.dumbMode = false;
        const self = this;
        this.Activate = () => {
            if (this._content === undefined) {
                self._content = content();
            }
            self.Update();
        }
    }

    InnerRender(): string {
        if (this._content === undefined) {
            return this._loadingContent;
        }
        return this._content.Render();
    }

}