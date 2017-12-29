The **MultiView** widget can display views in a loop. The loop mode enables an end user to swipe through the last view to the first and vice versa. To enable this mode, assign **true** to the [loop](/Documentation/ApiReference/UI_Widgets/dxMultiView/Configuration/#loop) option.

    <!--JavaScript-->
    $(function() {
        $("#multiViewContainer").dxMultiView({
            dataSource: multiViewData,
            loop: true
        });
    });

#####See Also#####
- [MultiView - Customize Item Appearance](/Documentation/Guide/Widgets/MultiView/Customize_Item_Appearance)
- [MultiView - Switch Between Views](/Documentation/Guide/Widgets/MultiView/Switch_Between_Views)
- [MultiView Demos](/Demos/WidgetsGallery/#demo/navigation-multi_view-overview)
- [MultiView API Reference](/Documentation/ApiReference/UI_Widgets/dxMultiView/)

[tags]multi view, multiView, views, loop