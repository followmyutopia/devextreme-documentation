The **ProgressBar** is a widget that shows current progress.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/dialogs_and_notifications-progress_bar-overview"
}

The following code adds a simple **ProgressBar** to your page. The **value** option specifies the current value. The **min** and **max** options limit the range of accepted values. The progress is measured in percentages and calculated by the following formula: `(value / max) * 100`. If the current progress is unknown yet, set the **value** option to **false**.

    <!--HTML-->
    <div id="progressBarContainer"></div>

    <!--JavaScript-->
    $(function(){
        $("#progressBarContainer").dxProgressBar({
            min: 0,
            max: 100,
            value: 49
        });
    });

When the **ProgressBar** reaches the [maximum](/Documentation/ApiReference/UI_Widgets/dxProgressBar/Configuration/#max) value, the [complete](/Documentation/ApiReference/UI_Widgets/dxProgressBar/Events/#complete) event is raised. You can handle it using the [onComplete](/Documentation/ApiReference/UI_Widgets/dxProgressBar/Configuration/#onComplete) function.

    <!--JavaScript-->
    $(function() {
        $("#progressBarContainer").dxProgressBar({
            min: 0,
            max: 100,
            value: 49,
            onComplete: function() {
                DevExpress.ui.dialog.alert("Completed");
            }
        });
    });

#####See Also#####
- **Widget Basics**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/) | [Angular](/Documentation/Guide/Angular_Components/Component_Configuration_Syntax/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/)
- [ProgressBar - Progress Status](/Documentation/Guide/Widgets/ProgressBar/Progress_Status)
- [ProgressBar - Handle the Value Change Event](/Documentation/Guide/Widgets/ProgressBar/Handle_the_Value_Change_Event)
- [ProgressBar API Reference](/Documentation/ApiReference/UI_Widgets/dxProgressBar/)

[tags]progress bar, progressBar, editor, overview, range, min, max, complete