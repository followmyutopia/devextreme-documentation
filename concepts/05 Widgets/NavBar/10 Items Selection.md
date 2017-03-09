An end user can select **NavBar** items in two different modes: *'single'* (by default) or *'multiple'*.  You can use the [selectionMode](/Documentation/ApiReference/UI_Widgets/dxNavBar/Configuration/#selectionMode) option to change the mode. 

    <!--JavaScript-->
    $(function() {
        $("#navBarContainer").dxNavBar({
            items: navBarItems,
            selectionMode: "multiple"
        });
    });

If you need an item to be preselected, pass its index in the data source array to the [selectedIndex](/Documentation/ApiReference/UI_Widgets/dxNavBar/Configuration/#selectedIndex) option.

    <!--JavaScript-->
    var navBarItems = [
        { text: "User", icon: "user" },
        { text: "Find", icon: "find" },
        { text: "Favorites", icon: "favorites" }
    ];

    $(function() {
        $("#navBarContainer").dxNavBar({
            items: navBarItems,
            selectedIndex: 1,
            maxIndex: 2
        });
    });

As an alternative, you can use the [selectedItem](/Documentation/ApiReference/UI_Widgets/dxNavBar/Configuration/#selectedItem) (for *"single"* **selectionMode**) or [selectedItems](/Documentation/ApiReference/UI_Widgets/dxNavBar/Configuration/#selectedItems) (for *"multiple"* **selectionMode**) options.

    <!--JavaScript-->
    var navBarItems = [
        { text: "User", icon: "user" },
        { text: "Find", icon: "find" },
        { text: "Favorites", icon: "favorites" },
        { text: "About", icon: "info" },
        { text: "Home", icon: "home" },
        { text: "URI", icon: "tips" }
    ];

    $(function() {
        $("#navBarContainer").dxNavBar({
            items: navBarItems,
            maxIndex: 5
            selectedItem: navBarItems[3],
            // ---------- or ----------
            selectionMode: 'multiple',
            selectedItems: [ navBarItems[3], navBarItems[4] ]
        });
    });

#####See Also#####
- [NavBar - Customize Item Appearance](/Documentation/Guide/Widgets/NavBar/Customize_Item_Appearance)
- [NavBar Demos](http://js.devexpress.com/Demos/WidgetsGallery/#demo/navigation-navbar-overview/ios7)
- [NavBar API Reference](/Documentation/ApiReference/UI_Widgets/dxNavBar/)

[tags]nav bar, navBar, navigation bar, select, selection, item, items, index