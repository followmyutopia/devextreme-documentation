An end user can select **Tabs** items in two different modes: *'single'* (by default) or *'multiple'*. You can use the [selectionMode](/Documentation/ApiReference/UI_Widgets/dxTabs/Configuration/#selectionMode) option to change the mode. 

    <!--JavaScript-->
    $(function() {
        $("#tabsContainer").dxTabs({
            items: tabItems,
            selectionMode: "multiple"
        });
    });

If you need a tab to be preselected or to select it programmatically, pass its index in the data source array to the [selectedIndex](/Documentation/ApiReference/UI_Widgets/dxTabs/Configuration/#selectedIndex) option.

    <!--JavaScript-->
    var tabs = [
        { text: "User", icon: "user" },
        { text: "Find", icon: "find" },
        { text: "Favorites", icon: "favorites" }
    ];

    $(function() {
        $("#tabsContainer").dxTabs({
            items: tabs,
            // Preselects the tab with index 1
            selectedIndex: 1
        });
    });

<!---->

    <!--JavaScript-->// Selects the tab with index 0
    $("#tabsContainer").dxTabs("option", "selectedIndex", 0);

As an alternative, you can use the [selectedItem](/Documentation/ApiReference/UI_Widgets/dxTabs/Configuration/#selectedItem) (for *"single"* **selectionMode**) or [selectedItems](/Documentation/ApiReference/UI_Widgets/dxTabs/Configuration/#selectedItems) (for *"multiple"* **selectionMode**) options.

    <!--JavaScript-->
    var tabs = [
        { text: "User", icon: "user" },
        { text: "Find", icon: "find" },
        { text: "Favorites", icon: "favorites" }
    ];

    $(function() {
        $("#tabsContainer").dxTabs({
            items: tabs,
            selectedItem: tabs[1],
            // === or ===
            selectionMode: 'multiple',
            selectedItems: [ tabs[1], tabs[2] ]
        });
    });

When the total length of all tabs exceeds the **Tabs** container, the widget shows navigation buttons that help an end user scroll the tab strip. This behavior is default only for desktops. To enable it on all types of devices, assign **true** to the [showNavButtons](/Documentation/ApiReference/UI_Widgets/dxTabs/Configuration/#showNavButtons) option. Otherwise, assign **false**.

    <!--JavaScript-->
    $(function() {
        $("#tabsContainer").dxTabs({
            items: tabs,
            showNavButtons: true
        });
    });

#####See Also#####
- [Tabs - Customize Item Appearance](/Documentation/Guide/Widgets/Tabs/Customize_Item_Appearance)
- [Tabs Demos](http://js.devexpress.com/Demos/WidgetsGallery/#demo/navigation-tabs-overview)
- [Tabs API Reference](/Documentation/ApiReference/UI_Widgets/dxTabs/)

[tags]tabs, select item, selection mode, nav buttons, navigation buttons, index
