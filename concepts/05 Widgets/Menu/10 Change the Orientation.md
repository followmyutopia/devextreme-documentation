To arrange items on the menu panel in a row (horizontally) or in a column (vertically), use the [orientation](/Documentation/ApiReference/UI_Widgets/dxMenu/Configuration/#orientation) option.

    <!--JavaScript-->$(function () {
        $("#menuContainer").dxMenu({
            items: menuItems,
            orientation: "horizontal" // or "vertical"
        });
    });

If you need to shift the menu panel towards the bottom or the left side, specify [padding](http://www.w3schools.com/css/css_padding.asp) for the `<div>` that contains the widget. For example, the following code shifts the widget towards the bottom.

    <!--HTML--><div id="menuContainer" style="padding-top:500px"></div>

When the widget is positioned at the bottom or at the left side, you may want to change the direction in which the drop-down menus open. For this purpose, set the [submenuDirection](/Documentation/ApiReference/UI_Widgets/dxMenu/Configuration/#submenuDirection) option to _"rightOrTop"_.

    <!--JavaScript-->$(function () {
        $("#menuContainer").dxMenu({
            items: menuItems,
            orientation: "horizontal", // or "vertical"
            submenuDirection: "rightToTop"
        });
    });

#####See Also#####
- [Menu Demos](/Demos/WidgetsGallery/#demo/navigation-menu-overview)
- [Menu API Reference](/Documentation/ApiReference/UI_Widgets/dxMenu/)

[tags]menu, orientation, direction, position, padding