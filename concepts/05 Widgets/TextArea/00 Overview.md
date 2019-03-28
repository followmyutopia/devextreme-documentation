The **TextArea** is a widget that enables a user to enter and edit a multi-line text.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/editors-text_area-overview"
}

The following code adds a simple **TextArea** with a [placeholder](/Documentation/ApiReference/UI_Widgets/dxTextArea/Configuration/#placeholder) to your page.

---
#####jQuery

    <!--HTML--><div id="textAreaContainer"></div>

    <!--JavaScript-->$(function() {
        $("#textAreaContainer").dxTextArea({
            placeholder: "Type a text here..."
        });
    });

#####Angular

    <!--HTML-->
    <dx-text-area
        placeholder="Type a text here...">
    </dx-text-area>

    <!--TypeScript-->
    import { DxTextAreaModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
         imports: [
             // ...
             DxTextAreaModule
         ],
         // ...
     })

---

By default, the **TextArea** checks the entered text for spelling errors. To disable this feature, assign **false** to the **spellcheck** option.

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#textAreaContainer").dxTextArea({
            spellcheck: false
        });
    });

#####Angular

    <!--HTML-->
    <dx-text-area
        [spellcheck]="false">
    </dx-text-area>

    <!--TypeScript-->
    import { DxTextAreaModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
         imports: [
             // ...
             DxTextAreaModule
         ],
         // ...
     })

---

If an end user should _not_ be able to edit the text in the **TextArea**, assign **true** to the **readOnly** option. In this case, make sure to set the **value** option too.

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#textAreaContainer").dxTextArea({
            value: "The text that should not be edited",
            readOnly: true
        });
    });

#####Angular

    <!--HTML-->
    <dx-text-area
        value="The text that should not be edited"
        [readOnly]="true">
    </dx-text-area>

    <!--TypeScript-->
    import { DxTextAreaModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
         imports: [
             // ...
             DxTextAreaModule
         ],
         // ...
     })

---

#####See Also#####
- **Widget Basics**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/) | [Angular](/Documentation/Guide/Angular_Components/Component_Configuration_Syntax/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/)
- [TextArea - Adapt the Size of the Text Area](/Documentation/Guide/Widgets/TextArea/Adapt_the_Size_of_the_Text_Area/)
- [TextArea - Handle the Value Change Event](/Documentation/Guide/Widgets/TextArea/Handle_the_Value_Change_Event/)
- [TextArea - Handle the Keyboard Events](/Documentation/Guide/Widgets/TextArea/Handle_the_Keyboard_Events/)
- [TextArea - Limit the Text Length](/Documentation/Guide/Widgets/TextArea/Limit_the_Text_Length/)
- [TextArea API Reference](/Documentation/ApiReference/UI_Widgets/dxTextArea/)
- [TextBox](/Documentation/Guide/Widgets/TextBox/Overview/)

[tags]textArea, text area, editor, overview, spellcheck, read-only