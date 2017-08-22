<div style="height:5px"></div>
###Subscribe to an Event###

You can subscribe to an event using a configuration option. All event handling options are given names that begin with *on*.

    <!--JavaScript-->$("#menuContainer").dxMenu({
        onItemClick: function (info) {
            // Handles the "itemClick" event
        },
        onSelectionChanged: function (info) {
            // Handles the "selectionChanged" event
        }
    });

 As a more flexible solution, you can use the **on()** method. It allows you to subscribe to events at runtime and even to attach several handlers to a single event.

    <!--JavaScript-->// Subscribes to the "itemClick" and "selectionChanged" events
    menuInstance
        .on({
            "itemClick": handler1,
            "selectionChanged": handler2
        });

<!-------------->

    <!--JavaScript-->// Attaches several handlers to the "itemClick" event
    menuInstance
        .on("itemClick", handler1)
        .on("itemClick", handler2);

#####See Also#####
- [Call Methods](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/)

###Unsubscribe from an Event###

To detach all the handlers that you attached with the **on()** method, call the **off()** method without arguments.

    <!--JavaScript-->menuInstance.off();

Also, you can call this method to detach a specific handler from an event or all handlers from a particular event.

    <!--JavaScript-->// Detaches the "handler1" from the "itemClick" event leaving other handlers (if any) intact
    menuInstance
        .off("itemClick", handler1)

<!-------------->

    <!--JavaScript-->// Detaches all handlers from the "itemClick" event
    menuInstance
        .off("itemClick")

If you subscribed to an event using an **on*EventName*** option, you can unsubscribe from it by setting this option to **undefined**.

    <!--JavaScript-->menuInstance.option("onItemClick", undefined);

#####See Also#####
- [API Reference](/Documentation/ApiReference) | **WidgetName** | **Events**

[tags]basics, jquery, handle events, subscribe, unsubscribe, on, off