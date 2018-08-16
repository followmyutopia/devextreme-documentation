The **Toolbar** is a widget containing items that usually manage screen content. Those items can be plain text or widgets.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/navigation-toolbar-overview"
}

The following code adds a simple **Toolbar** to your page. Three items are plain text and one is a [Button](/Documentation/Guide/Widgets/Button/) widget. 

---
##### jQuery

    <!--HTML-->
    <div id="toolbarContainer"></div>

    <!--JavaScript-->
    $(function() {
        $("#toolbarContainer").dxToolbar({
            items: [{
                widget: 'dxButton',
                options: {
                    type: 'back',
                    text: 'Back'
                },
                location: 'before'
            }, {
                text: 'Add',
                locateInMenu: 'always'
            }, {
                text: 'Change',
                locateInMenu: 'always'
            }, {
                text: 'Products',
                location: 'center'
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-toolbar>
        <dxi-item
            widget="dxButton"
            location="before"
            [options]="{
                type: 'back',
                text: 'Back'
            }">
        </dxi-item>
        <dxi-item
            text="Add"
            locateInMenu="always">
        </dxi-item>
        <dxi-item
            text="Change"
            locateInMenu="always">
        </dxi-item>
        <dxi-item
            text="Products"
            location="center">
        </dxi-item>
    </dx-toolbar>

    <!--TypeScript-->
    import { DxToolbarModule, DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxToolbarModule,
            DxButtonModule
        ],
        // ...
    })

---

Note that all data source objects in the code above follow the [Default Item Template](/Documentation/ApiReference/UI_Widgets/dxToolbar/Default_Item_Template/) pattern. This provides a default appearance for toolbar items, which can be customized later.

#####See Also#####
- **Widget Basics**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/)
- [Toolbar - Specify Item Type](/Documentation/Guide/Widgets/Toolbar/Specify_Item_Type)
- [Toolbar - Specify Item Location](/Documentation/Guide/Widgets/Toolbar/Specify_Item_Location)
- [Toolbar - Customize Item Appearance](/Documentation/Guide/Widgets/Toolbar/Customize_Item_Appearance)
- [Toolbar API Reference](/Documentation/ApiReference/UI_Widgets/dxToolbar/)

[tags]toolbar, collection container, collection widget, overview