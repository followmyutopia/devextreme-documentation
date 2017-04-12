The progress status displays a numeric value indicating the made progress. Whether the progress status is visible or not depends on the [showStatus](/Documentation/ApiReference/UI_Widgets/dxProgressBar/Configuration/#showStatus) option. To format the status string, use the [statusFormat](/Documentation/ApiReference/UI_Widgets/dxProgressBar/Configuration/#statusFormat) function. It should return a string value that may contain a Globalize format pattern.

    <!--JavaScript-->
    var globalizeFormatter = Globalize("en").numberFormatter({
        style: "percent",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    $(function(){
         $("#progressBarContainer").dxProgressBar({
             value: 40,
             min: 0,
             max: 100,
             showStatus: true,
             statusFormat: function(ratio, value) {
                 return globalizeFormatter(ratio) + "%";
             }
         });
    });

[note]If you are going to use Globalize format patterns, [reference the Globalize scripts](/Documentation/17_1/Guide/Getting_Started/Installation/Local_Scripts/#GlobalizeLocalScripts) on your page.

#####See Also#####
- [ProgressBar - Handle the Value Change Event](/Documentation/Guide/Widgets/ProgressBar/Handle_the_Value_Change_Event)
- [ProgressBar Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogs_and_notifications-progress_bar-overview)
- [ProgressBar API Reference](/Documentation/ApiReference/UI_Widgets/dxProgressBar/)

[tags]progress bar, progressBar, editor, progress status, showStatus, statusFormat