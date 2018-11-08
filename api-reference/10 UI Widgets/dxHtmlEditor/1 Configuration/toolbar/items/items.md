===========================================================================
<!--inherits-->..\..\..\..\dxToolbar\5 Default Item Template\Default Item Template.md<!--/inherits-->
===========================================================================

<!--shortDescription-->
Configures toolbar controls which allow users to format text and execute commands.
<!--/shortDescription-->

<!--fullDescription-->
The toolbar provides built-in controls and supports custom controls. To add a built-in control to the toolbar, include it in the **items** array:

---
#####jQuery

    <!--JavaScript-->
    $(function(){
        $("#htmlEditorContainer").dxHtmlEditor({
            toolbar: {
                items: [ "bold", "italic", "alignCenter", "undo", "redo" ]
            }
        })
    })

#####Angular

    <!--HTML-->
    <dx-html-editor>
        <dxo-toolbar [items]="[ 'bold', 'italic', 'alignCenter', 'undo', 'redo' ]"></dxo-toolbar>
    </dx-html-editor>

    <!--TypeScript-->
    import { DxHtmlEditorModule } from "devextreme-angular";
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

    <!--C#-->
    @(Html.DevExtreme().HtmlEditor()
        .ID("htmlEditor")
        .Toolbar(t => t.Items(items => {
            items.Add().FormatName("bold");
            items.Add().FormatName("italic");
            items.Add().FormatName("alignCenter");
            items.Add().FormatName("undo");
            items.Add().FormatName("redo");
        }))
    )

---

The following built-in controls are available:

<table>
    <tr>
        <td style="padding-bottom: 10px"><b>Formatting Controls</td><td></td><td><b style="padding-bottom: 10px">Action and Other Controls</b></td>
    </tr>
    <tr>
        <td>
            <ul>
                <li>
                    <b>background</b>
                </li>
                <li>
                    <b>bold</b>
                </li>
                <li>
                    <b>color</b>
                </li>
                <li>
                    <b>italic</b>
                </li>
                <li>
                    <b>link</b>
                </li>
                <li>
                    <b>strike</b>
                </li>
                <li>
                    <b>subscript</b>
                </li>
                <li>
                    <b>superscript</b>
                </li>
                <li>
                    <b>underline</b>
                </li>
                <li>
                    <b>blockquote</b>
                </li>
            </ul>
        </td>
        <td style="vertical-align: top">
            <ul>
                <li>
                    <b>header</b>
                </li>
                <li>
                    <b>increaseIndent</b>
                </li>
                <li>
                    <b>decreaseIndent</b>
                </li>
                <li>
                    <b>orderedList</b>
                </li>
                <li>
                    <b>bulletList</b>
                </li>
                <li>
                    <b>alignLeft</b>
                </li>
                <li>
                    <b>alignCenter</b>
                </li>
                <li>
                    <b>alignRight</b>
                </li>
                <li>
                    <b>alignJustify</b>
                </li>
                <li>
                    <b>codeBlock</b>
                </li>
            </ul>
        </td>
        <td style="vertical-align: top">
            <ul>
                <li>
                    <b>separator</b>
                </li>
                <li>
                    <b>undo</b>
                </li>
                <li>
                    <b>redo</b>
                </li>
                <li>
                    <b>clear</b>
                </li>
            </ul>
        </td>
    </tr>
</table>

These controls are buttons. To customize one of them, assign its name to the [formatName](/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#formatName) option and specify [button options](/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/) in the [options](/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#options) object: 

---
#####jQuery

    <!--JavaScript-->
    $(function(){
        $("#htmlEditorContainerContainer").dxHtmlEditor({
            toolbar: {
                items: [ // ...
                { 
                    formatName: "clear", 
                    options: { icon: "clear", type: "danger" }
                }]
            }
        })
    })

#####Angular

    <!--TypeScript-->
    import { DxHtmlEditorModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        items: any = [ // ...
        { 
            formatName: "clear", 
            options: { icon: "clear", type: "danger" }
        }];
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

    <!--C#-->
    @(Html.DevExtreme().HtmlEditor()
        .ID("htmlEditor")
        .Toolbar(t => t.Items(items => {
            items.Add()
                .FormatName("clear")
                .Widget(w => w
                    .Button()
                    .Icon("clear")
                    .Type(ButtonType.Danger)
                );
        }))
    )

---

To use another widget instead of a button, specify the [widget](/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#widget) option and configure the widget in the [options](/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#options) object. In this case, you should also implement all the logic. 

The toolbar also provides short syntax for implementing a custom drop-down control with multiple choices. Refer to the [formatName](/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#formatName) description for details.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/HtmlEditor/ToolbarCustomization/jQuery/Light/"
}
<!--/fullDescription-->