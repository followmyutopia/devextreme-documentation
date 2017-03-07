<article data-show="Content/Applications/16_1/UIWidgets/dxCheckBox/markup.html,
        Content/Applications/16_1/UIWidgets/dxCheckBox/script.js">

The [CheckBox](/Documentation/ApiReference/UI_Widgets/dxCheckBox/) widget allows a user to check or uncheck an option, and perform a specified action when widget value changes.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/editorscheckboxcheckboxcheckbox/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The widget supports common Editor widget functionality and enables you to carry out the following common tasks described at the beginning of this article.

- [Get and set a widget value](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/#Common_Tasks/Get_And_Set_a_Widget_Value)  
- [Handle the value change event](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/#Common_Tasks/Handle_The_Value_Change_Event)  

In addition to common editor functionality, the widget enables you to perform the following adjustments.

**Specify the widget state**

The widget takes on the "checked", "unchecked" or "indeterminate" state if the [value](/Documentation/ApiReference/UI_Widgets/dxCheckBox/Configuration/#value) option is set to *true*, *false* or **undefined** respectively.

    <!--JavaScript-->
    var checkBoxOptions = {
        value: undefined
    }

**Specify the widget text**

You can specify the check box caption using the [text](/Documentation/ApiReference/UI_Widgets/dxCheckBox/Configuration/#text) option.

    <!--JavaScript-->
    var checkBoxOptions = {
        text: "Check me"
    }

**Keyboard support**

An end-user can change the widget value using the **Enter** or **Space** key.
</article>