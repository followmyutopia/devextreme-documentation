The **TextArea** is a widget that enables a user to enter and edit a multi-line text.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/#demo/editors-text_area-overview" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The following code adds a simple **TextArea** with a [placeholder](/Documentation/ApiReference/UI_Widgets/dxTextArea/Configuration/#placeholder) to your page.

    <!--HTML--><div id="textAreaContainer"></div>

<!---->

    <!--JavaScript-->$(function() {
        $("#textAreaContainer").dxTextArea({
            placeholder: "Type a text here..."
        });
    });

By default, the **TextArea** checks the entered text for spelling errors. To disable this feature, assign *false* to the **spellcheck** option.

    <!--JavaScript-->$(function() {
        $("#textAreaContainer").dxTextArea({
            spellcheck: false
        });
    });

If an end user should _not_ be able to edit the text in the **TextArea**, assign *true* to the **readOnly** option. In this case, make sure to set the **value** option too.

    <!--JavaScript-->$(function() {
        $("#textAreaContainer").dxTextArea({
            value: "The text that should not be edited",
            readOnly: true
        });
    });

#####See Also#####
- **Widget Basics**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/)
- [TextArea - Adapt the Size of the Text Area](/Documentation/Guide/Widgets/TextArea/Adapt_the_Size_of_the_Text_Area/)
- [TextArea - Handle the Value Change Event](/Documentation/Guide/Widgets/TextArea/Handle_the_Value_Change_Event/)
- [TextArea - Handle the Keyboard Events](/Documentation/Guide/Widgets/TextArea/Handle_the_Keyboard_Events/)
- [TextArea - Limit the Text Length](/Documentation/Guide/Widgets/TextArea/Limit_the_Text_Length/)
- [TextArea API Reference](/Documentation/ApiReference/UI_Widgets/dxTextArea/)
- [TextBox](/Documentation/Guide/Widgets/TextBox/Overview/)

[tags]textArea, text area, editor, overview, spellcheck, read-only