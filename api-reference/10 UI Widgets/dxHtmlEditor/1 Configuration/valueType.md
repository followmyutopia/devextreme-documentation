---
id: dxHtmlEditor.Options.valueType
acceptValues: 'html' | 'markdown'
type: String
default: 'html'
---
---
##### shortDescription
Specifies in which markup language the [value](/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/#value) is stored.

---
[note]

Markdown requires the <a href="https://www.npmjs.com/package/turndown" target="_blank">turndown</a> and <a href="https://www.npmjs.com/package/showdown" target="_blank">showdown</a> libraries. If you use browser scripts, link them before the DevExtreme scripts. If you use JavaScript modules, import the Markdown converter:

    import "devextreme/ui/html_editor/converters/markdown";
    // or
    // require("ui/html_editor/converters/markdown");

[/note]

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/HtmlEditor/ValueTypes/jQuery/Light/"
}

#include common-ref-enum with {
    enum: "`HtmlEditorValueType`",
    values: "`Html` and `Markdown`"
}