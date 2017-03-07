<article data-show="Content/Applications/16_1/UIWidgets/dxNumberBox/markup.html,
        Content/Applications/16_1/UIWidgets/dxNumberBox/script.js,
        Content/Applications/16_1/UIWidgets/dxNumberBox/styles.css">

The [NumberBox](/Documentation/ApiReference/UI_Widgets/dxNumberBox/) widget allows a user to enter a number within the specified range.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/editorsnumberboxnumberboxnumberbox/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The widget supports common Editor widget functionality and enables you to carry out the following common tasks described at the beginning of this article.

- [Get and set a widget value](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/#Common_Tasks/Get_And_Set_a_Widget_Value)  
- [Handle the value change event](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/#Common_Tasks/Handle_The_Value_Change_Event)  

In addition to common editor functionality, the widget enables you to perform the following adjustments.

**Specify the range of available values**

Specify the range of available values using the [min](/Documentation/ApiReference/UI_Widgets/dxNumberBox/Configuration/#min) and [max](/Documentation/ApiReference/UI_Widgets/dxNumberBox/Configuration/#max) options.

    <!--JavaScript-->
    var numberBoxOptions = {
        min: 0,
        max: 100
    }

**Enable/disable spin buttons**

To enable an end-user's ability to increase or decrease widget value using spin buttons, assign *true* to the [showSpinButtons](/Documentation/ApiReference/UI_Widgets/dxNumberBox/Configuration/#showSpinButtons) option. The [step](/Documentation/ApiReference/UI_Widgets/dxNumberBox/Configuration/#step) option specifies a number added to or subtracted from the widget value on a single spin button click.

    <!--JavaScript-->
    var numberBoxOptions = {
        showSpinButtons: true,
        step: 10
    }

If the widget is displayed on a touch device, it uses touch-friendly spin buttons regardless of the current theme.

**Keyboard support**

An end-user can use the Up/Down arrow key or mouse wheel to increase/decrease widget value by a [step](/Documentation/ApiReference/UI_Widgets/dxNumberBox/Configuration/#step).
</article>