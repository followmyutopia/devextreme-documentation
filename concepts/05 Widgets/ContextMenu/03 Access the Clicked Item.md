To access the clicked item, handle the [itemClick](/Documentation/ApiReference/UI_Widgets/dxContextMenu/Events/#itemClick) event. If the event handling function is not going to be changed during the lifetime of the widget, assign it to the [onItemClick](/Documentation/ApiReference/UI_Widgets/dxContextMenu/Configuration/#onItemClick) option when you configure the widget.

    <!--JavaScript-->$(function () {
        $("#contextMenuContainer").dxContextMenu({
            // ...
            onItemClick: function (e) {
                var itemData = e.itemData;
                var itemElement = e.itemElement;
                var itemIndex = e.itemIndex;
                // ...
            }
        });
    });

If you are going to change event handlers at runtime, or if you need to attach several handlers to the **itemClick** event, subscribe to this event using the [on(eventName, eventHandler)](/Documentation/ApiReference/UI_Widgets/dxContextMenu/Methods/#oneventName_eventHandler) method.

    <!--JavaScript-->
    var itemClickHandler1 = function (e) {
        // First handler of the "itemClick" event
    };

    var itemClickHandler1 = function (e) {
        // Second handler of the "itemClick" event
    };

    $("#contextMenuContainer").dxContextMenu("instance")
        .on('itemClick', itemClickHandler1)
        .on('itemClick', itemClickHandler2);

#####See Also#####
- [Handle Events](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events)
- [ContextMenu - Customize Item Appearance](/Documentation/Guide/Widgets/ContextMenu/Customize_Item_Appearance)
- [ContextMenu - Open and Close](/Documentation/Guide/Widgets/ContextMenu/Open_and_Close_the_Context_Menu/)
- [ContextMenu Demo](http://js.devexpress.com/Demos/WidgetsGallery/#demo/actions_and_lists-context_menu-overview)
- [ContextMenu API Reference](/Documentation/ApiReference/UI_Widgets/dxContextMenu/)

[tags]context menu, contextMenu, access the clicked item, onItemClick, itemClick