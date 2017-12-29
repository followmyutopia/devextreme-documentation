An end user can switch the views by swiping them or selecting tabs. Note that tab navigation is always enabled, while swiping is active only on touch devices by default. To enable it on all types of devices, assign **true** to the [swipeEnabled](/Documentation/ApiReference/UI_Widgets/dxTabPanel/Configuration/#swipeEnabled) option. Otherwise, assign **false**.

    <!--JavaScript-->
    $(function() {
        $("#tabPanelContainer").dxTabPanel({
            items: tabPanelItems,
            swipeEnabled: false
        });
    });

You can switch the views progrmmatically using the [selectedIndex](/Documentation/ApiReference/UI_Widgets/dxTabPanel/Configuration/#selectedIndex) or [selectedItem](/Documentation/ApiReference/UI_Widgets/dxTabPanel/Configuration/#selectedItem) option. 

    <!--JavaScript-->
    $(function() {
        $("#tabPanelContainer").dxTabPanel({
            items: tabPanelItems,
            selectedIndex: 1
        });
    });


The **TabPanel** can loop the views, which enables an end user to swipe through the last view to the first and vice versa. Views are looped by default. To disable looping, assign **false** to the [loop](/Documentation/ApiReference/UI_Widgets/dxTabPanel/Configuration/#loop) option.

    <!--JavaScript-->
    $(function() {
        $("#tabPanelContainer").dxTabPanel({
            items: tabPanelItems,
            loop: false
        });
    });

To specify whether or not to animate switching between views, use the [animationEnabled](/Documentation/ApiReference/UI_Widgets/dxTabPanel/Configuration/#animationEnabled/) option.

    <!--JavaScript-->
    $(function() {
        $("#tabPanelContainer").dxTabPanel({
            items: tabPanelItems,
            animationEnabled: true
        });
    });

#####See Also#####
- [TabPanel - Customize Item Appearance](/Documentation/Guide/Widgets/TabPanel/Customize_Item_Appearance)
- [TabPanel Demos](/Demos/WidgetsGallery/#demo/navigation-tab_panel-overview)
- [TabPanel API Reference](/Documentation/ApiReference/UI_Widgets/dxTabPanel/)

[tags]tab panel, tabPanel, switch views, animate switching, swipe
