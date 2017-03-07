<article data-show="Content/Applications/16_1/UIWidgets/dxProgressBar/markup.html,
        Content/Applications/16_1/UIWidgets/dxProgressBar/script.js,
        Content/Applications/16_1/UIWidgets/dxProgressBar/styles.css">

The [ProgressBar](/Documentation/ApiReference/UI_Widgets/dxProgressBar/) widget displays the current progress within the specified range. 

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogsandnotificationsprogressbarprogressbarprogressbar/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The widget supports common Editor widget functionality and enables you to carry out the following common tasks described at the beginning of this article.

- [Get and set a widget value](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/#Common_Tasks/Get_And_Set_a_Widget_Value)  
- [Handle the value change event](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/#Common_Tasks/Handle_The_Value_Change_Event)  

In addition to common editor functionality, the widget enables you to perform the following adjustments.

**Specify the required range**

The range boundaries are specified by the [min](/Documentation/ApiReference/UI_Widgets/dxProgressBar/Configuration/#min) and [max](/Documentation/ApiReference/UI_Widgets/dxProgressBar/Configuration/#max) options.

    <!--JavaScript-->
    var progressBarOptions = {
        min: 0,
        max: 100
    }

**Show/hide progress status**

The widget displays the current progress status if the [showStatus](/Documentation/ApiReference/UI_Widgets/dxProgressBar/Configuration/#showStatus) option is set to *true*. The status format is specified using the [statusFormat](/Documentation/ApiReference/UI_Widgets/dxProgressBar/Configuration/#statusFormat) option, which takes on a string holding a Globalize format pattern, or a function that returns a status string. The function should take on the following arguments.

- **ratio**  
 Specifies the ratio of the current progress to the entire range. (From 0 to 1)

- **value**  
 The current widget value, which can also be accessed using the [value](/Documentation/ApiReference/UI_Widgets/dxProgressBar/Configuration/#value) option.

<!---->

    <!--JavaScript-->
    var progressBarOptions = {
        min: 0,
        max: 1000,
        showStatus: true,
        statusFormat: function(ratio, value) {
            return ratio * 100 + "% (" + value + ")";
        }
    }

If the widget has the same options as illustrated in the example above, it will show the "35% (350)" status if the current value is 350.
</article>