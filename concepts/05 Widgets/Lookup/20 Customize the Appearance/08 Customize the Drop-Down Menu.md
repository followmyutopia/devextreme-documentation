On desktops and iOS devices, the drop-down menu is the [Popover](/Documentation/Guide/Widgets/Popover/Overview/) widget; on other devices, it is the [Popup](/Documentation/Guide/Widgets/Popup/Overview/) widget. To use the **Popup** on all devices, assign *false* to the [usePopover](/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#usePopover) option. In this case, you can specify whether to [shade](/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#shading) the area beneath the **Popup** and whether the **Popup** should occupy the [full screen](/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#fullScreen). 

    <!--JavaScript-->
    $(function() {
        $("#lookupContainer").dxLookup({
            dataSource: [
                "HD Video Player",
                "SuperHD Video Player",
                "SuperPlasma 50",
                // . . .
            ],
            usePopover: false,
            shading: false,
            fullScreen: false
        });
    });

To change the size of the drop-down menu and position it against a specific element on your page, specify the **popupHeight**, **popupWidth** and [position](/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#position) options, respectively. The following configuration of the **position** option reads as follows: "place **my** *left* side **at** the *left* side **of** the *"#targetElement"*.

    <!--JavaScript-->
    $(function() {
        $("#lookupContainer").dxLookup({
            dataSource: [
                "HD Video Player",
                "SuperHD Video Player",
                "SuperPlasma 50",
                // . . .
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

The drop-down menu can have a title. Use the [title](/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#title) option to specify its text, or the [titleTemplate](/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#titleTemplate) option to redesign it completely. For details on implementing templates, see the [Customize Item Appearance](/Documentation/Guide/Widgets/Lookup/Customize_the_Appearance/Customize_Item_Appearance/) topic.

    <!--JavaScript-->
    $(function() {
        $("#lookupContainer").dxLookup({
            dataSource: [
                "HD Video Player",
                "SuperHD Video Player",
                "SuperPlasma 50",
                // . . .
            ],
            title: "Products"
            /*
            titleTemplate: function () {
                return $("<div style='color: blue'>Products</div>");
            }
            */
        });
    });

If you have not specified anything to be displayed in the title, hide it by assigning *false* to the [showPopupTitle](/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#showPopupTitle) option.

#####See Also#####
- [Customize Widget Element Appearance](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/#Customize_Widget_Element_Appearance/)
- [Customize Widget Element Appearance - MVVM Approach](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/)
- [Lookup Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Lookup/Templates/)
- [Lookup API Reference](/Documentation/ApiReference/UI_Widgets/dxLookup/)


[tags]lookup, drop-down menu, size, width, height, popover, popup, position, title, custom title template, title template