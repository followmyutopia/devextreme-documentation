The **TextBox** is a widget that enables a user to enter and edit a single line of text.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/editors-text_box-overview"
}

The following code adds a simple **TextBox** with a [placeholder](/Documentation/ApiReference/UI_Widgets/dxTextBox/Configuration/#placeholder) to your page.

    <!--HTML--><div id="textBoxContainer" style="width:300px"></div>

    <!--JavaScript-->$(function() {
        $("#textBoxContainer").dxTextBox({
            placeholder: "Type a text here..."
        });
    });

If an end user should _not_ be able to edit the value in the **TextBox**, assign **true** to the **readOnly** option. In this case, make sure to set the **value** option too.

    <!--JavaScript-->$(function() {
        $("#textBoxContainer").dxTextBox({
            value: "The value that should not be edited",
            readOnly: true
        });
    });

#####See Also#####
- **Widget Basics**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/)
- [TextBox - Task-Specific Modes](/Documentation/Guide/Widgets/TextBox/Task-Specific_Modes/)
- [TextBox - Handle the Value Change Event](/Documentation/Guide/Widgets/TextBox/Handle_the_Value_Change_Event/)
- [TextBox - Handle the Keyboard Events](/Documentation/Guide/Widgets/TextBox/Handle_the_Keyboard_Events/)
- [TextBox - Limit the String Length](/Documentation/Guide/Widgets/TextBox/Limit_the_String_Length/)
- [TextBox - Specify a Mask for the Input](/Documentation/Guide/Widgets/TextBox/Specify_a_Mask_for_the_Input/)
- [TextBox API Reference](/Documentation/ApiReference/UI_Widgets/dxTextBox/)
- [TextArea](/Documentation/Guide/Widgets/TextArea/Overview/)

[tags]textBox, text box, editor, overview