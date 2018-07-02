An end user can select **NavBar** items in two different modes: *'single'* (by default) or *'multiple'*.  You can use the [selectionMode](/Documentation/ApiReference/UI_Widgets/dxNavBar/Configuration/#selectionMode) option to change the mode. 

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#navBarContainer").dxNavBar({
            items: navBarItems,
            selectionMode: "multiple"
        });
    });

##### Angular

    <!--HTML-->
    <dx-nav-bar ...
        selectionMode="multiple">
        <dxi-item text="User" icon="user"></dxi-item>
        <!-- ... -->
    </dx-nav-bar>

    <!--TypeScript-->
    import { DxNavBarModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxNavBarModule
        ],
        // ...
    })

---

If you need an item to be preselected, pass its index in the data source array to the [selectedIndex](/Documentation/ApiReference/UI_Widgets/dxNavBar/Configuration/#selectedIndex) option.

---
##### jQuery

    <!--JavaScript-->
    var navBarItems = [
        { text: "User", icon: "user" },
        { text: "Find", icon: "find" },
        { text: "Favorites", icon: "favorites" }
    ];

    $(function() {
        $("#navBarContainer").dxNavBar({
            items: navBarItems,
            selectedIndex: 1
        });
    });

##### Angular

    <!--HTML-->
    <dx-nav-bar [selectedIndex]="1">
        <dxi-item text="User" icon="user"></dxi-item>
        <dxi-item text="Find" icon="find"></dxi-item>
        <dxi-item text="Favorites" icon="favorites"></dxi-item>
    </dx-nav-bar>

    <!--TypeScript-->
    import { DxNavBarModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxNavBarModule
        ],
        // ...
    })

---

As an alternative, you can use the [selectedItem](/Documentation/ApiReference/UI_Widgets/dxNavBar/Configuration/#selectedItem) (for *"single"* **selectionMode**) or [selectedItems](/Documentation/ApiReference/UI_Widgets/dxNavBar/Configuration/#selectedItems) (for *"multiple"* **selectionMode**) options. This approach is suitable if the **NavBar** items are specified using an array rather than the [dxItem](/Documentation/ApiReference/UI_Widgets/Markup_Components/dxItem/) markup component.

---
##### jQuery

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
            selectedItem: navBarItems[3],
            // ========== or ==========
            selectionMode: 'multiple',
            selectedItems: [ navBarItems[3], navBarItems[4] ]
        });
    });

##### Angular

    <!--HTML-->
    <dx-nav-bar
        [items]="navBarItems"
        [selectedItem]="navBarItems[3]">
        <!-- ========== or ========== 
        selectionMode="multiple"
        [selectedItems]="[ navBarItems[3], navBarItems[4] ]"> -->
    </dx-nav-bar>

    <!--TypeScript-->
    import { DxNavBarModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        navBarItems = [
            { text: "User", icon: "user" },
            { text: "Find", icon: "find" },
            { text: "Favorites", icon: "favorites" },
            { text: "About", icon: "info" },
            { text: "Home", icon: "home" },
            { text: "URI", icon: "tips" }
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxNavBarModule
        ],
        // ...
    })

---

#####See Also#####
- [NavBar - Customize Item Appearance](/Documentation/Guide/Widgets/NavBar/Customize_Item_Appearance)
- [NavBar Demos](/Demos/WidgetsGallery/#demo/navigation-navbar-overview/ios7)
- [NavBar API Reference](/Documentation/ApiReference/UI_Widgets/dxNavBar/)

[tags]nav bar, navBar, navigation bar, select, selection, item, items, index