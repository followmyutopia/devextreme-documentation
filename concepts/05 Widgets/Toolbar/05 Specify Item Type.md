A **Toolbar** item may be plain text or a widget. Text items should have the [text](/Documentation/ApiReference/UI_Widgets/dxToolbar/Default_Item_Template/#text) field specified.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#toolbarContainer").dxToolbar({
            items: [{
                text: 'Delete',
                location: 'before'
            }, {
                text: 'Products',
                location: 'center'
            }, {
                text: 'Add',
                location: 'after'
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-toolbar>
        <dxi-item text="Delete" location="before"></dxi-item>
        <dxi-item text="Products" location="center"></dxi-item>
        <dxi-item text="Add" location="after"></dxi-item>
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

Items that contain a widget should have the [widget](/Documentation/ApiReference/UI_Widgets/dxToolbar/Default_Item_Template/#widget) field specified. In addition, you need to declare the [options](/Documentation/ApiReference/UI_Widgets/dxToolbar/Default_Item_Template/#options) object that will configure the widget. For a full list of fields this object has, refer to the API reference of the widget.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#toolbarContainer").dxToolbar({
            items: [{
                widget: 'dxButton',
                options: {
                    type: 'back',
                    text: 'Back',
                    onClick: function () {
                        // ...
                    }
                },
                location: 'before'
            }, {
                widget: 'dxSelectBox',
                options: {
                    width: 140,
                    items: ['All', 'Family', 'Favorites'],
                    onItemClick: function (e) {
                        // ...
                    }
                },
                location: 'after'
            },
            // ...  
            ]
        });
    });

##### Angular

    <!--HTML-->
    <dx-toolbar>
        <dxi-item
            widget="dxButton"
            [options]="buttonOptions"
            location="before">
        </dxi-item>
        <dxi-item
            widget="dxSelectBox"
            [options]="selectBoxOptions"
            location="after">
        </dxi-item>
    </dx-toolbar>
    
    <!--TypeScript-->
    import { DxToolbarModule, DxButtonModule, DxSelectBoxModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        buttonOptions = {
            type: 'back',
            text: 'Back',
            onClick: function () {
                // ...
            }
        };
        selectBoxOptions = {
            width: 140,
            items: ['All', 'Family', 'Favorites'],
            onItemClick: function (e) {
                // ...
            }
        };
    }
    @NgModule({
        imports: [
            // ...
            DxToolbarModule,
            DxButtonModule,
            DxSelectBoxModule
        ],
        // ...
    })

---

#####See Also#####
- [Toolbar - Specify Item Location](/Documentation/Guide/Widgets/Toolbar/Specify_Item_Location)
- [Toolbar - Customize Item Appearance](/Documentation/Guide/Widgets/Toolbar/Customize_Item_Appearance)
- [Toolbar Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/navigation-toolbar-overview)
- [Toolbar API Reference](/Documentation/ApiReference/UI_Widgets/dxToolbar/)

[tags]toolbar, type, item type, widget item
