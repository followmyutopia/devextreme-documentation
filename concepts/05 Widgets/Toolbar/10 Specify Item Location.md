To set the location of items on a toolbar, use the [location](/Documentation/ApiReference/UI_Widgets/dxToolbar/Default_Item_Template/#location) option. It accepts one of the following values.

- *"center"*  
 Places the item in the center of the toolbar.

- *"before"*  
 Places the item before the central element(s).

- *"after"*  
 Places the item after the central element(s).

Toolbar items with identical **location** preserve the order they have in the data source. For example, items produced by the code below will have the following order: "Add", "Edit", "Products", "Suppliers", "Delete", "About".

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#toolbarContainer").dxToolbar({
            items: [
                { text: 'Delete', location: 'after' },
                { text: 'About', location: 'after' },
                { text: 'Products', location: 'center' },
                { text: 'Suppliers', location: 'center' },
                { text: 'Add', location: 'before' },
                { text: 'Edit', location: 'before' }
            ]
        });
    });

##### Angular

    <!--HTML-->
    <dx-toolbar>
        <dxi-item text="Delete" location="after"></dxi-item>
        <dxi-item text="About" location="after"></dxi-item>
        <dxi-item text="Products" location="center"></dxi-item>
        <dxi-item text="Suppliers" location="center"></dxi-item>
        <dxi-item text="Add" location="before"></dxi-item>
        <dxi-item text="Edit" location="before"></dxi-item>
    </dx-toolbar>

    <!--TypeScript-->
    import { DxToolbarModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxToolbarModule
        ],
        // ...
    })

---

When there is not enough width for all toolbar items, or if certain toolbar items are secondary, they can be rendered as commands on the overflow menu. This menu can be a [Popover](/Documentation/Guide/Widgets/Popover/), an [Action Sheet](/Documentation/Guide/Widgets/ActionSheet/) or a Drop-Down Menu, depending on which device the application is running on. To render a toolbar item as a command on the overflow menu, assign *"always"* or *"auto"* to the [locateInMenu](/Documentation/ApiReference/UI_Widgets/dxToolbar/Default_Item_Template/#locateInMenu) option.

---
#####jQuery 

    <!--JavaScript-->
    $(function() {
        $("#toolbarContainer").dxToolbar({
            items: [
                { text: 'Add', locateInMenu: 'auto' },
                { text: 'Change', locateInMenu: 'always' },
                { text: 'Remove', locateInMenu: 'always' }
            ]
        });
    });

##### Angular

    <!--HTML-->
    <dx-toolbar>
        <dxi-item text="Add" locateInMenu="auto"></dxi-item>
        <dxi-item text="Change" locateInMenu="always"></dxi-item>
        <dxi-item text="Remove" locateInMenu="always"></dxi-item>
    </dx-toolbar>

    <!--TypeScript-->
    import { DxToolbarModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxToolbarModule
        ],
        // ...
    })

---

#####See Also#####
- [Toolbar - Specify Item Type](/Documentation/Guide/Widgets/Toolbar/#Specify_Item_Type)
- [Toolbar - Customize Item Appearance](/Documentation/Guide/Widgets/Toolbar/#Customize_Item_Appearance)
- [Toolbar Demos](/Demos/WidgetsGallery/#demo/navigation-toolbar-overview)
- [Toolbar API Reference](/Documentation/ApiReference/UI_Widgets/dxToolbar/)

[tags]toolbar, location, item location, locate in menu
