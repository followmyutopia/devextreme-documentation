If you want to allow the user to reorder items on the **List**, set the [allowItemReordering](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#allowItemReordering) option to *true*. This setting supplies each **List** item with a button that enables the user to move the item with drag-and-drop on mouse-equipped platforms or with touch-and-drag on touch-enabled devices.

    <!--JavaScript-->
    $(function() {
		$("#listContainer").dxList({
            // ...
            allowItemReordering: true
        });
    });

#####See Also#####
- [Widget Basics - Create and Configure a Widget](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)