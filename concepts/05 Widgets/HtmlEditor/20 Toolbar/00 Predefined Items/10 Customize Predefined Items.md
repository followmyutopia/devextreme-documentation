To customize a button, assign its [name](/Documentation/Guide/Widgets/HtmlEditor/Toolbar/Predefined_Items/) to the [formatName](/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#formatName) option and specify [button options](/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/) in the [options](/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#options) object: 

---
#####jQuery

    <!--JavaScript-->
    $(function(){
        $("#htmlEditorContainer").dxHtmlEditor({
            toolbar: {
                items: [{
                    formatName: "clear", 
                    options: { icon: "clear", type: "danger" }
                }, // ...
                ]
            }
        })
    })

#####Angular

    <!--TypeScript-->
    import { DxHtmlEditorModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        items: any = [{
            formatName: "clear", 
            options: { icon: "clear", type: "danger" }
        }, // ...
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxHtmlEditorModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-html-editor>
        <dxo-toolbar [items]="items"></dxo-toolbar>
    </dx-html-editor>

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().HtmlEditor()
        .Toolbar(t => t
            .Items(i => { 
                i.Add().FormatName("clear")
                    .Widget(w => w.Button()
                        .Icon("clear")
                        .Type(ButtonType.Danger)
                    );
            })
        )
    )

---

To customize a select box, specify [select box options](/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/) in the [options](/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#options) object in addition to the [formatName](/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#formatName) and [formatValues](/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#formatValues) options:

---
#####jQuery

    <!--JavaScript-->
    $(function(){
        $("#htmlEditorContainer").dxHtmlEditor({
            toolbar: {
                items: [{
                    formatName: "size",
                    formatValues: ["11px", "14px", "16px"],
                    options: {
                        width: 150
                    }
                }, // ...
                ]
            }
        })
    })

#####Angular

    <!--TypeScript-->
    import { DxHtmlEditorModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        items: any = [{
            formatName: "size",
            formatValues: ["11px", "14px", "16px"],
            options: {
                width: 150
            }
        }, // ...
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxHtmlEditorModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-html-editor>
        <dxo-toolbar [items]="items"></dxo-toolbar>
    </dx-html-editor>

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().HtmlEditor()
        .Toolbar(t => t
            .Items(i => { 
                i.Add().FormatName("size")
                    .FormatValues(new[] { "11px", "14px", "16px" })
                    .Widget(w => w.SelectBox()
                        .Width(150)
                    );
            })
        )
    )

---

#####See Also#####
- [Add a Custom Item](/Documentation/Guide/Widgets/HtmlEditor/Toolbar/Add_a_Custom_Item/)