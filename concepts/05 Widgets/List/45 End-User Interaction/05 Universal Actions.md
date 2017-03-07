Universal actions are those actions that raise the same event despite being performed differently on desktop platforms and on touch-enabled devices. For example, both a click and a tap on an item raise the [itemClick](/Documentation/ApiReference/UI_Widgets/dxList/Events/#itemClick) event. To handle it, assign a function to the [onItemClick](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#onItemClick) option, or subscribe to this event using the [on(eventName, eventHandler)](/Documentation/ApiReference/UI_Widgets/dxList/Methods/#oneventName_eventHandler) method.

    <!--JavaScript-->
    $(function() {
        $("#listContainer").dxList({
            // ...
            onItemClick: function(e) {
                // Event handling commands go here
            }
        });
    });

<!---->

    <!--JavaScript-->
    var itemClickEventHandler1 = function(e) {
        // First handler of the "itemClick" event
    }

    var itemClickEventHandler2 = function(e) {
        // Second handler of the "itemClick" event
    }

    $("#listContainer").dxList("instance")
        .on("itemClick", itemClickEventHandler1)
        .on("itemClick", itemClickEventHandler2)

The **List** supports other universal actions, which are provided as a part of basic **List** functionality. They are described in the following topics.

- [Scrolling - Configure User Interaction](/Documentation/Guide/Widgets/List/Scrolling/#User_Interaction)
- [Scrolling - Handle Related Events](/Documentation/Guide/Widgets/List/Scrolling/#Events)
<!---->

- [Selection - Configure User Interaction](/Documentation/Guide/Widgets/List/Selection/#User_Interaction)
- [Selection - Handle Related Events](/Documentation/Guide/Widgets/List/Selection/#Events)
<!---->

- [Item Reordering - Configure User Interaction](/Documentation/Guide/Widgets/List/Item_Reordering/#User_Interaction)
- [Item Reordering - Handle Related Events](/Documentation/Guide/Widgets/List/Item_Reordering/#Events)
<!---->

- [Item Deletion - Configure User Interaction](/Documentation/Guide/Widgets/List/Item_Deletion/#User_Interaction)
- [Item Deletion - Handle Related Events](/Documentation/Guide/Widgets/List/Item_Deletion/#Events)

#####See Also#####
- [List Demo](https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI/jQuery/Light/)
- [List API Reference](/Documentation/ApiReference/UI_Widgets/dxList/)

[tags]list, item click, onItemClick