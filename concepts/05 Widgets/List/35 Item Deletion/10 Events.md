To execute certain commands before or after an item is deleted from the **List**, handle the [itemDeleting](/Documentation/ApiReference/UI_Widgets/dxList/Events/#itemDeleting) or [itemDeleted](/Documentation/ApiReference/UI_Widgets/dxList/Events/#itemDeleted) event. If the functions that handle these events are not going to be changed during the lifetime of the widget, assign them to the **on*EventName*** option when you configure the widget.

    <!--JavaScript-->$(function () {
        $("#listContainer").dxList({
            // ...
            onItemDeleting: function(e) {
                var itemData = e.itemData;
                var itemDomNode = e.itemElement;
                var itemIndex = e.itemIndex;
                // Handler of the "itemDeleting" event
            },
            onItemDeleted: function(e) {
                var itemData = e.itemData;
                var itemDomNode = e.itemElement;
                var itemIndex = e.itemIndex;
                // Handler of the "itemDeleted" event
            },
        });
    });

[note]The **itemDeleted** event is raised when an item is deleted from the **List**. However, this does not mean that the item was actually deleted from the data source.

If you are going to change the event handlers at runtime, or if you need to attach several handlers to a single event, subscribe to the events using the [on(eventName, eventHandler)](/Documentation/ApiReference/UI_Widgets/dxList/Methods/#oneventName_eventHandler) method.

    <!--JavaScript-->
    var itemDeletingEventHandler1 = function(e) {
        // First handler of the "itemDeleting" event
    };

    var itemDeletingEventHandler2 = function(e) {
        // Second handler of the "itemDeleting" event
    };

    $("#listContainer").dxList("instance")
        .on("itemDeleting", itemDeletingEventHandler1)
        .on("itemDeleting", itemDeletingEventHandler2);

#####See Also#####
- [Widget Basics - Handle Events](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events)
- [List Demo](https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListSelection/jQuery/Light/)
- [List API Reference](/Documentation/ApiReference/UI_Widgets/dxList/)

