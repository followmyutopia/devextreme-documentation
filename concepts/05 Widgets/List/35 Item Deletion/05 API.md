You can delete **List** items programmatically in the following ways.

- **By index**        
Pass the index to the [deleteItem(itemIndex)](/Documentation/ApiReference/UI_Widgets/dxList/Methods/#deleteItemitemIndex) method. If the **List** is [grouped](/Documentation/Guide/Widgets/List/Grouping/In_the_Data_Source/), this method should be given an object with the indexes of the group and the item to be deleted.

    ---
    #####jQuery

        <!--JavaScript-->
        var list = $("#listContainer").dxList("instance");
        // Deletes the item with index 1 
        list.deleteItem(1);
        // Deletes the item with index 0 from the group with index 2
        list.deleteItem({ group: 2, item: 0 });

    #####Angular

        <!--TypeScript-->
        import { ..., ViewChild } from "@angular/core";
        import { DxListModule, DxListComponent } from "devextreme-angular";
        // ...
        export class AppComponent {
            @ViewChild(DxListComponent) list: DxListComponent;
            deleteItem (index) {
                this.list.instance.deleteItem(index);
            }
            deleteItemFromGroup (itemIndex, groupIndex) {
                // Deletes the item with itemIndex from the group with groupIndex
                this.list.instance.deleteItem({ group: groupIndex, item: itemIndex });
            }
        }
        @NgModule({
            imports: [
                // ...
                DxListModule
            ],
            // ...
        })

    ---

- **By DOM node**      
Pass the [DOM node](http://www.w3schools.com/js/js_htmldom_nodes.asp) to the [deleteItem(itemElement)](/Documentation/ApiReference/UI_Widgets/dxList/Methods/#deleteItemitemElement) method.

    ---
    #####jQuery

        <!--JavaScript-->
        var list = $("#listContainer").dxList("instance");
        // Finds all List items
        var itemNodes = $("#listContainer").find(".dx-list-item");
        // Makes the first item the last
        list.deleteItem(itemNodes[itemNodes.length-1]);

    #####Angular

        <!--TypeScript-->
        import { ..., ViewChild } from "@angular/core";
        import { DxListModule, DxListComponent } from "devextreme-angular";
        // ...
        export class AppComponent {
            @ViewChild(DxListComponent) list: DxListComponent;
            deleteLastItem () {
                // Finds all List items
                let itemNodes = document.getElementsByClassName("dx-list-item");
                // Deletes the last item
                this.list.instance.deleteItem(itemNodes[itemNodes.length-1]);
            }
        }
        @NgModule({
            imports: [
                // ...
                DxListModule
            ],
            // ...
        })

    ---

[note]If you want to delete an item by key or by data object, do it directly in the data source.

#####See Also#####
#include common-link-callmethods
- [List Demos](/Demos/WidgetsGallery/Demo/List/ListSelection/jQuery/Light/)
- [List API Reference](/Documentation/ApiReference/UI_Widgets/dxList/)

