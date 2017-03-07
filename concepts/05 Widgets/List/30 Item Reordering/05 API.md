You can reorder **List** items from code in the following ways.

- **By index**        
Pass the index to the [reorderItem(itemIndex, toItemIndex)](/Documentation/ApiReference/UI_Widgets/dxList/Methods/#reorderItemitemIndex_toItemIndex) method. If the **List** is [grouped](/Documentation/Guide/Widgets/List/Grouping/In_the_Data_Source/), this method should be given two objects with the indexes of the groups and the items.

        <!--JavaScript-->
        var list = $("#listContainer").dxList("instance");
        // Places the item with index 1 after the item with index 5 
        list.reorderItem(1, 5);
        // Takes the item with index 0 from the group with index 2
        // and places it to the group with index 4 after the item with index 2 
        list.reorderItem(
            { group: 2, item: 0 },
            { group: 4, item: 2 }
        );

- **By DOM node**      
Pass the [DOM node](http://www.w3schools.com/js/js_htmldom_nodes.asp) to the [reorderItem(itemElement, toItemElement)](/Documentation/ApiReference/UI_Widgets/dxList/Methods/#reorderItemitemElement_toItemElement) method.

        <!--JavaScript-->
        var list = $("#listContainer").dxList("instance");
        // Finds all List items
        var itemNodes = $("#listContainer").find(".dx-list-item");
        // Makes the first item the last
        list.reorderItem(itemNodes[0], itemNodes[itemNodes.length-1]);

#####See Also#####
- [Widget Basics - Call Methods](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/)
- [List Demo](https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListSelection/jQuery/Light/)
- [List API Reference](/Documentation/ApiReference/UI_Widgets/dxList/)

