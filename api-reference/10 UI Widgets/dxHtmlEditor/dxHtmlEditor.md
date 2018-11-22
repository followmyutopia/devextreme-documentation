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
[note] The **HtmlEditor** requires the [Quill](https://www.npmjs.com/package/quill) library.

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
                    "bold", "italic", "separator", {
                        formatName: "size",
                        formatValues: ["11px", "12px", "16px"]
                    }, "separator", 
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
        <script type="text/javascript" src="https://cdn.quilljs.com/1.3.6/quill.min.js"></script>
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
            "bold", "italic", "separator", {
                formatName: "size",
                formatValues: ["11px", "12px", "16px"]
            }, "separator", 
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

##### AngularJS

    <!--HTML-->
    <head>
        <!-- ... -->
        <link rel="stylesheet" type="text/css" href="https://cdn3.devexpress.com/jslib/minor_18_2/css/dx.common.css" />
        <link rel="stylesheet" type="text/css" href="https://cdn3.devexpress.com/jslib/minor_18_2/css/dx.light.css" />
        <script type="text/javascript" src="https://cdn.quilljs.com/1.3.6/quill.min.js"></script>
        <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_18_2/js/dx.all.js"></script>
    </head>
    <body>
        <div ng-controller="DemoController">
            <div dx-html-editor="{
                valueType: 'html',
                toolbar: toolbarConfig,
                bindingOptions: {
                    value: 'value'
                }
            }"></div>
        </div>
    </body>

    <!--JavaScript-->
    angular.module("DemoApp", ["dx"])
        .controller("DemoController", function ($scope) {
            $scope.value = `
                <p><b>Lorem ipsum dolor sit amet</b>, 
                <i>consectetur adipiscing elit</i>, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            `;
            $scope.toolbarConfig = {
                items: [
                    "bold", "italic", "separator", {
                        formatName: "size",
                        formatValues: ["11px", "12px", "16px"]
                    }, "separator", 
                    "alignLeft", "alignCenter", "alignRight"
                ]
            };
        });

##### Knockout  

    <!--HTML-->
    <head>
        <!-- ... -->
        <link rel="stylesheet" type="text/css" href="https://cdn3.devexpress.com/jslib/minor_18_2/css/dx.common.css" />
        <link rel="stylesheet" type="text/css" href="https://cdn3.devexpress.com/jslib/minor_18_2/css/dx.light.css" />
        <script type="text/javascript" src="https://cdn.quilljs.com/1.3.6/quill.min.js"></script>
        <script type="text/javascript" src="https://cdn3.devexpress.com/jslib/minor_18_2/js/dx.all.js"></script>
    </head>
    <body>
        <div data-bind="dxHtmlEditor: {
            valueType: 'html',
            value: value,
            toolbar: toolbarConfig
        }"></div>
    </body>

    <!--JavaScript-->
    var viewModel = {
        value: ko.observable(`
            <p><b>Lorem ipsum dolor sit amet</b>, 
            <i>consectetur adipiscing elit</i>, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        `),
        toolbarConfig: {
            items: [
                "bold", "italic", "separator", {
                    formatName: "size",
                    formatValues: ["11px", "12px", "16px"]
                }, "separator", 
                "alignLeft", "alignCenter", "alignRight"
            ]
        }
    };
    ko.applyBindings(viewModel);

##### ASP.NET MVC Controls

    <!--Razor C#-->
    <head>
        <!-- ... -->
        <script type="text/javascript" src="https://cdn.quilljs.com/1.3.6/quill.min.js"></script>
    </head>
    <body>
        @(Html.DevExtreme().HtmlEditor()
            .ID("htmlEditor")
            .ValueType(HtmlEditorValueType.Html)
            .Value(@"
                <p><b>Lorem ipsum dolor sit amet</b>,
                <i>consectetur adipiscing elit</i>,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            ")
            .Toolbar(t => t.Items(items => {
                items.Add().FormatName("bold");
                items.Add().FormatName("italic");
                items.Add().FormatName("separator");
                items.Add().FormatName("size").FormatValues(new[] { "11px", "12px", "16px" });
                items.Add().FormatName("separator");
                items.Add().FormatName("alignLeft");
                items.Add().FormatName("alignCenter");
                items.Add().FormatName("alignRight");
            }))
        )
    </body>
    
    <!--Razor VB-->
    <head>
        <!-- ... -->
        <script type="text/javascript" src="https://cdn.quilljs.com/1.3.6/quill.min.js"></script>
    </head>
    <body>
        @(Html.DevExtreme().HtmlEditor() _
            .ID("htmlEditor") _
            .ValueType(HtmlEditorValueType.Html) _
            .Value(
                "<p><b>Lorem ipsum dolor sit amet</b>, " _
                & "<i>consectetur adipiscing elit</i>, " _
                & "sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"
            ) _
            .Toolbar(Sub(t)
                t.Items(Sub(items)
                    items.Add().FormatName("bold")
                    items.Add().FormatName("italic")
                    items.Add().FormatName("separator");
                    items.Add().FormatName("size").FormatValues({"11px", "12px", "16px"})
                    items.Add().FormatName("separator");
                    items.Add().FormatName("alignLeft")
                    items.Add().FormatName("alignCenter")
                    items.Add().FormatName("alignRight")
                End Sub)
            End Sub)
        )
    </body>

##### Vue

    <template>
        <dx-html-editor
            valueType="html"
            :value="value">
            <dx-toolbar :items="items" />
        </dx-html-editor>
    </template>
    <script>
    import { DxHtmlEditor, DxToolbar } from "devextreme-vue/html-editor";

    export default {
        components: {
            DxHtmlEditor,
            DxToolbar
        },
        data() {
            return {
                value: `
                    <p><b>Lorem ipsum dolor sit amet</b>, 
                    <i>consectetur adipiscing elit</i>, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                `,
                items: [
                    "bold", "italic", "separator", {
                        formatName: "size",
                        formatValues: ["11px", "12px", "16px"]
                    }, "separator",
                    "alignLeft", "alignCenter", "alignRight"
                ]
            };
        }
    }
    </script>

##### React

    import React from "react";
    import HtmlEditor, { Toolbar } from "devextreme-react/html-editor";

    const value = `
        <p><b>Lorem ipsum dolor sit amet</b>, 
        <i>consectetur adipiscing elit</i>, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    `;
    const items = [
        "bold", "italic", "separator", {
            formatName: "size",
            formatValues: ["11px", "12px", "16px"]
        }, "separator",
        "alignLeft", "alignCenter", "alignRight"
    ];

    class App extends React.Component {
        render() {
            return (
                <HtmlEditor
                    valueType="html"
                    defaultValue={value}>
                        <Toolbar items={items} />
                </HtmlEditor>
            );
        }
    }

    export default App;

---

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/HtmlEditor/Overview/jQuery/Light/"
}

<!--/fullDescription-->