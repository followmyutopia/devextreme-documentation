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
Markdown requires the <a href="https://www.npmjs.com/package/turndown" target="_blank">turndown</a> and <a href="https://www.npmjs.com/package/showdown" target="_blank">showdown</a> libraries. If you use browser scripts, link them before the DevExtreme scripts as shown below:

    <script src="https://unpkg.com/turndown/dist/turndown.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/turndown/1.8.7/showdown.min.js"></script>
    <!-- DevExtreme scripts go here -->

If you use JavaScript modules, import the Markdown converter:

    import "devextreme/ui/html_editor/converters/markdown";
    // or
    // require("ui/html_editor/converters/markdown");

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/HtmlEditor/OutputFormats/jQuery/Light/"
}

#include common-ref-enum with {
    enum: "`HtmlEditorValueType`",
    values: "`Html` and `Markdown`"
}
