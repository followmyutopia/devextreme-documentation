<!--widgettree-->
valueType: "html",
value: "This is <b>HtmlEditor</b>.<br/>Select text and use a toolbar control.",
toolbar: {
    items: ["bold", "italic", "color", "background", "link",
    {
        formatName: "header",
        formatValues: [1, 2, 3, false]
    }, "variable"
    ]
},
variables: {
    dataSource: [ "FirstName", "LastName", "Company" ],
    escapeChar: [ "{", "}" ]
}
<!--/widgettree-->
===========================================================================
<!--module-->ui/html_editor<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\Editor\Editor.md<!--/inherits-->
===========================================================================

<!--shortDescription-->
[tags] ctp

**HtmlEditor** is a WYSIWYG text editor build on top of [Quill](https://quilljs.com/), designed to support HTML and Markdown output formats.

**HtmlEditor** is at the Community Technology Preview (CTP) development stage. That means that the widget is available for testing, but its concept, design and behavior can be reconsidered and changed without notice.
<!--/shortDescription-->

<!--fullDescription-->
[note] You should link the [quill](https://www.npmjs.com/package/quill) and [quill-delta-to-html](https://www.npmjs.com/package/quill-delta-to-html) libraries to use the **HtmlEditor**.

#include common-ref-roottopic-introduction

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#htmlEditorContainer").dxHtmlEditor({
            value: `
                <p><b>Lorem ipsum dolor sit amet</b>, 
                <i>consectetur adipiscing elit</i>, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            `,
            valueType: "html",
            toolbar: {
                items: [
                    "bold", "italic", {
                        formatName: "size",
                        formatValues: ["11px", "12px", "16px"]
                    }, 
                    "alignLeft", "alignCenter", "alignRight"
                ]
            }
        })
    })
    
    <!--HTML-->
    <head>
        <!-- ... -->
        <link rel="stylesheet" type="text/css" href="https://cdn3.devexpress.com/jslib/minor_18_2/css/dx.common.css" />
        <link rel="stylesheet" type="text/css" href="https://cdn3.devexpress.com/jslib/minor_18_2/css/dx.light.css" />
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/quill@1.3.6/dist/quill.js"></script>
        <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/quill-delta-to-html@0.10.4/dist/browser/QuillDeltaToHtmlConverter.bundle.js"></script> 
        <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_18_2/js/dx.all.js"></script>
    </head>
    <body>
        <div id="htmlEditorContainer"></div>
    </body>

#####Angular

    <!--HTML-->
    <dx-html-editor
        [(value)]="value"
        valueType="html">
        <dxo-toolbar [items]="items"></dxo-toolbar>
    </dx-html-editor>

    <!--TypeScript-->
    import { DxHtmlEditorModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        value: string = `
            <p><b>Lorem ipsum dolor sit amet</b>, 
            <i>consectetur adipiscing elit</i>, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        `;
        items: any = [
            "bold", "italic", {
                formatName: "size",
                formatValues: ["11px", "12px", "16px"]
            }, 
            "alignLeft", "alignCenter", "alignRight"
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxHtmlEditorModule
        ],
        // ...
    })

---

<!--/fullDescription-->
