View switcher is a scheduler element used for quick switching between views.

![View Switcher](/Content/images/doc/17_1/UiWidgets/Scheduler_View_Switcher.png)

To specify what views are available within the switcher, use the [views](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/views/) option.

    <!--JavaScript-->
    $(function(){
        $("#schedulerContainer").dxScheduler({
            // ...
            views: ['day', 'week', 'agenda']
        });
    });

On mobile devices, the view switcher is displayed as a drop-down menu. 

![Drop-down View Switcher](Content/images/doc/17_1/UiWidgets/Scheduler_DropDown_ViewSwitcher.png)

To use the drop-down menu on all types of devices, assign *true* to the [useDropDownViewSwitcher](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#useDropDownViewSwitcher) option; to use tabs - assign *false*.

    <!--JavaScript-->
    $(function(){
        $("#schedulerContainer").dxScheduler({
            // ...
            useDropDownViewSwitcher: true
        });
    });

#####See Also#####
- [Scheduler - View Types](/Documentation/Guide/Widgets/Scheduler/Views/View_Types/)
- [Scheduler Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Overview/jQuery/Light/)
- [Scheduler API Reference](/Documentation/ApiReference/UI_Widgets/dxScheduler/)