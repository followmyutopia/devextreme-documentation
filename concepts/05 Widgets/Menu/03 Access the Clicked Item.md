To access the clicked item, handle the [itemClick](/Documentation/ApiReference/UI_Widgets/dxMenu/Events/#itemClick) event. If the event handling function is not going to be changed during the lifetime of the widget, assign it to the [onItemClick](/Documentation/ApiReference/UI_Widgets/dxMenu/Configuration/#onItemClick) option when you configure the widget.

    <!--JavaScript-->$(function () {
        $("#menuContainer").dxMenu({
            // ...
            onItemClick: function (e) {
                var itemData = e.itemData;
                var itemElement = e.itemElement;
                var itemIndex = e.itemIndex;
                // ...
            }
        });
    });

If you are going to change event handlers at runtime, or if you need to attach several handlers to the **itemClick** event, subscribe to this event using the [on(eventName, eventHandler)](/Documentation/ApiReference/UI_Widgets/dxMenu/Methods/#oneventName_eventHandler) method.

    <!--JavaScript-->
    var itemClickHandler1 = function (e) {
        // First handler of the "itemClick" event
    };

    var itemClickHandler1 = function (e) {
        // Second handler of the "itemClick" event
    };

    $("#menuContainer").dxMenu("instance")
        .on('itemClick', itemClickHandler1)
        .on('itemClick', itemClickHandler2);

#####See Also#####
- [Handle Events](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events)
- [Menu - Customize Item Appearance](/Documentation/Guide/Widgets/Menu/Customize_Item_Appearance)
- [Menu - Change the Orientation](/Documentation/Guide/Widgets/Menu/Change_the_Orientation)
- [Menu Demo](http://js.devexpress.com/Demos/WidgetsGallery/#demo/navigation-menu-overview)
- [Menu API Reference](/Documentation/ApiReference/UI_Widgets/dxMenu/)

[tags]menu, access the clicked item, onItemClick, itemClick