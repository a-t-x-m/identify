"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var developer_console_1 = __importDefault(require("@atxm/developer-console"));
var package_json_1 = __importDefault(require("../package.json"));
var console = new developer_console_1.default({
    name: package_json_1.default.name
});
function initIDs() {
    var editors = atom.workspace.getTextEditors();
    editors.map(function (editor) { return addEditorID(editor); });
    var panes = atom.workspace.getPanes();
    panes.map(function (pane) { return addPaneID(pane); });
    atom.workspace.observeTextEditors(function (editor) { return addEditorID(editor); });
    atom.workspace.observePanes(function (pane) { return addPaneID(pane); });
}
function addEditorID(editor) {
    if (editor === null || editor === void 0 ? void 0 : editor.id) {
        var view = atom.views.getView(editor);
        var buffer = editor.buffer;
        if ((editor === null || editor === void 0 ? void 0 : editor.id) && !view.getAttribute('data-editor-id')) {
            console.log("Add data-attribute for editor #" + editor.id);
            view.setAttribute('data-editor-id', editor.id);
        }
        if (buffer.id && !view.getAttribute('data-buffer-id')) {
            console.log("Add data-attribute for buffer #" + buffer.id);
            view.setAttribute('data-buffer-id', buffer.id);
        }
    }
}
function addPaneID(pane) {
    if (pane === null || pane === void 0 ? void 0 : pane.id) {
        var view = atom.views.getView(pane);
        if (!view.getAttribute('data-pane-id')) {
            console.log("Add data-attribute for pane #" + pane.id);
            view.setAttribute('data-pane-id', pane.id);
        }
    }
}
exports.default = initIDs;
//# sourceMappingURL=index.js.map