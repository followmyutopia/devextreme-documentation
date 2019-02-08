The **HtmlEditor** is a WYSIWYG text editor designed to support HTML and Markdown output formats. This widget is based on [Quill](https://quilljs.com/).

[note] The **HtmlEditor** is at the Community Technology Preview (CTP) development stage. This widget can be tested but its concept, design and behavior can change without notice.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/HtmlEditor/Overview/jQuery/Light/"
}

To add the **HtmlEditor** to your page, reference (import) Quill and use the [valueType](/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/#valueType) option to specify the desired output markup language - HTML or Markdown. The content is converted into this language and stored in the widget's [value](/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/#value).

Optionally, specify the initial content in the widget's **value**. The content's language should correspond to the **valueType**. HTML content can also be declared directly inside the widget's container, in which case the language (HTML) and the **valueType** can differ.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#htmlEditorContainer").dxHtmlEditor({
            valueType: "html" // or "markdown"
        })
    })
    
    <!--HTML-->
    <head>
        <!-- ... -->
        <link rel="stylesheet" type="text/css" href="https://cdn3.devexpress.com/jslib/minor_19_1/css/dx.common.css" />
        <link rel="stylesheet" type="text/css" href="https://cdn3.devexpress.com/jslib/minor_19_1/css/dx.light.css" />
        <script type="text/javascript" src="https://cdn.quilljs.com/1.3.6/quill.min.js"></script>
        <!-- Required if valueType is "markdown" -->
        <!-- <script type="text/javascript" src="https://unpkg.com/turndown/dist/turndown.js"></script> -->
        <!-- <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/showdown/1.8.7/showdown.min.js"></script> -->

        <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_19_1/js/dx.all.js"></script>
    </head>
    <body>
        <div id="htmlEditorContainer">
            <p>
                DevExtreme HtmlEditor is a WYSIWYG text editor that allows its users to format
                textual and visual content and store it as HTML or Markdown.
            </p>
        </div>
    </body>

#####Angular

    <!--HTML-->
    <dx-html-editor
        valueType="html"> <!-- or "markdown" -->
        <p>
            DevExtreme HtmlEditor is a WYSIWYG text editor that allows its users to format
            textual and visual content and store it as HTML or Markdown.
        </p>
    </dx-html-editor>

    <!--TypeScript-->
    import { DxHtmlEditorModule } from "devextreme-angular";
    // Required if valueType is "markdown"
    // import "devextreme/ui/html_editor/converters/markdown";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxHtmlEditorModule
        ],
        // ...
    })

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().HtmlEditor()
        .ValueType(HtmlEditorValueType.Html) // or HtmlEditorValueType.Markdown
        .Content(@<text>
            <p>
                DevExtreme HtmlEditor is a WYSIWYG text editor that allows its users to format
                textual and visual content and store it as HTML or Markdown.
            </p>
        </text>)
    )
    <script src="https://cdn.quilljs.com/1.3.6/quill.min.js"></script>
    // Required if valueType is "markdown"
    // <script src="https://unpkg.com/turndown/dist/turndown.js"></script>
    // <script src="https://cdnjs.cloudflare.com/ajax/libs/showdown/1.8.7/showdown.min.js"></script> 

---

The **HtmlEditor** supports a wide range of features:

- Inline, block, and embedded [formats](/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#formatName/formats) 
- [Adaptive toolbar](/Documentation/Guide/Widgets/HtmlEditor/Toolbar/Built-In_Controls/) 
- [Built-in formats' and modules' extension](/Documentation/Guide/Widgets/HtmlEditor/Customize_Built-In_Formats_and_Modules/)
- [Custom formats and modules](/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Methods/#getModulemodulePath)
- [Mail-merge placeholders](/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/variables/) (for example, %username%)
- Drag-and-drop images
- Copy-paste rich content (unsupported formats are removed)

The **HtmlEditor** has the following limitations:

- Users cannot edit the layout. The **HtmlEditor** is designed to format textual content only.
- Users cannot save full HTML markup. The **HtmlEditor** supports only a subset (built-in or custom) of formats. Everything else is discarded.
