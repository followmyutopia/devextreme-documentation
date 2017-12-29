On desktops and iOS devices, the drop-down menu is the [Popover](/Documentation/Guide/Widgets/Popover/Overview/) widget; on other devices, it is the [Popup](/Documentation/Guide/Widgets/Popup/Overview/) widget. To use the **Popup** on all devices, assign **false** to the [usePopover](/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#usePopover) option. In this case, you can specify whether to [shade](/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#shading) the area beneath the **Popup** and whether the **Popup** should occupy the [full screen](/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#fullScreen). 

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#lookupContainer").dxLookup({
            dataSource: [
                "HD Video Player",
                "SuperHD Video Player",
                "SuperPlasma 50",
                // ...
            ],
            usePopover: false,
            shading: false,
            fullScreen: false
        });
    });

#####Angular

    <!--HTML-->
    <dx-lookup
        [dataSource]="lookupDataSource"
        [usePopover]="false"
        [shading]="false"
        [fullScreen]="false">
    </dx-lookup>

    <!--TypeScript-->
    import { DxLookupModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        lookupDataSource = [ "HD Video Player", "SuperHD Video Player", "SuperPlasma 50" ];
    }
    @NgModule({
        imports: [
            // ...
            DxLookupModule
        ],
        // ...
    })

---

To change the size of the drop-down menu and position it against a specific element on your page, specify the **popupHeight**, **popupWidth** and [position](/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#position) options, respectively. The following configuration of the **position** option reads as follows: "place **my** *left* side **at** the *left* side **of** the *"#targetElement"*.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#lookupContainer").dxLookup({
            dataSource: [
                "HD Video Player",
                "SuperHD Video Player",
                "SuperPlasma 50",
                // ...
            ],
            popupHeight: 300,
            popupWidth: 300,
            position: {
                my: "left",
                at: "left",
                of: "#targetElement"
            }
        });
    });

#####Angular

    <!--HTML-->
    <img id="targetElement" src="http://here/goes/my.jpg">
    <dx-lookup
        [dataSource]="lookupDataSource"
        [popupHeight]="300"
        [popupWidth]="300">
        <dxo-position
            my="left"
            at="left"
            of="#targetElement">
        </dxo-position>
    </dx-lookup>

    <!--TypeScript-->
    import { DxLookupModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        lookupDataSource = [ "HD Video Player", "SuperHD Video Player", "SuperPlasma 50" ];
    }
    @NgModule({
        imports: [
            // ...
            DxLookupModule
        ],
        // ...
    })

---

The drop-down menu can have a title. Use the [title](/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#title) option to specify its text, or the [titleTemplate](/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#titleTemplate) option to redesign it completely. For details on implementing templates, see the [Customize Item Appearance](/Documentation/Guide/Widgets/Lookup/Customize_the_Appearance/Customize_Item_Appearance/) topic.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#lookupContainer").dxLookup({
            dataSource: [
                "HD Video Player",
                "SuperHD Video Player",
                "SuperPlasma 50",
                // ...
            ],
            title: "Products"
            /*
            titleTemplate: function () {
                return $("<div style='color: blue'>Products</div>");
            }
            */
        });
    });

#####Angular

    <!--HTML-->
    <dx-lookup
        [dataSource]="lookupDataSource"
        title="Products">
        <!-- titleTemplate="titleTemplate">
            <div *dxTemplate="let title of 'titleTemplate'">
                <div style='color: blue'>Products</div>
            </div> -->
    </dx-lookup>

    <!--TypeScript-->
    import { DxLookupModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        lookupDataSource = [ "HD Video Player", "SuperHD Video Player", "SuperPlasma 50" ];
    }
    @NgModule({
        imports: [
            // ...
            DxLookupModule
        ],
        // ...
    })

---

If you have not specified anything to be displayed in the title, hide it by assigning **false** to the [showPopupTitle](/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#showPopupTitle) option.

#####See Also#####
- [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates)
- [Lookup Demos](/Demos/WidgetsGallery/Demo/Lookup/Templates/)


[tags]lookup, drop-down menu, size, width, height, popover, popup, position, title, custom title template, title template