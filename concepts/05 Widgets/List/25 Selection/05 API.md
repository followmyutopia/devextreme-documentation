You can select an item or cancel its selection in the following ways.

- **By key**    
Add or remove the key from the [selectedItemKeys](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#selectedItemKeys) collection.

    ---
    #####jQuery

        <!--JavaScript-->
        var list = $("#listContainer").dxList("instance");
        var selectedKeys = list.option("selectedItemKeys");
        // Selects the item with key 5
        selectedKeys.push(5);
        list.option("selectedItemKeys", selectedKeys);
        // Cancels the selection of the item with key 5
        selectedKeys = $.grep(selectedKeys, function(key) {
            return key != 5;
        });
        list.option("selectedItemKeys", selectedKeys);

    #####Angular

        <!--TypeScript-->
        import { ..., ViewChild } from '@angular/core';
        import { DxListModule, DxListComponent } from 'devextreme-angular';
        // ...
        export class AppComponent {
            @ViewChild(DxListComponent) list: DxListComponent;
            selectItem (key) {
                let selectedKeys = this.list.instance.option("selectedItemKeys");
                if(selectedKeys.includes(key)) {
                    // Cancels the selection of the item with the key
                    selectedKeys = selectedKeys.filter((data) => {
                        return data != key;
                    });
                } else {
                    // Selects the item with the key
                    selectedKeys.push(key);
                }
                this.list.instance.option("selectedItemKeys", selectedKeys);
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

    You can also use the **selectedItemKeys** collection to select items initially.

    ---
    #####jQuery

        <!--JavaScript-->
        $(function() {
            $("#listContainer").dxList({
                // ...
                selectedItemKeys: [0, 2, 5]
            });
        });

    #####Angular

        <!--HTML-->
        <dx-list ...
            [selectedItemKeys]="[0, 2, 5]">
        </dx-list>

        <!--TypeScript-->
        import { DxListModule } from 'devextreme-angular';
        // ...
        export class AppComponent {
            // ...
        }
        @NgModule({
            imports: [
                // ...
                DxListModule
            ],
            // ...
        })

    ---

    [note]To specify the key field, use the [keyExpr](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#keyExpr) option of the **List** or the [key](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#key) option of the **Store**.

- **By data object**      
Add or remove the data object from the [selectedItems](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#selectedItems) collection.

    ---
    #####jQuery

        <!--JavaScript-->
        var fruits = [
            { fruit: "Apples", count: 10 },
            { fruit: "Oranges", count: 12 },
            { fruit: "Lemons", count: 15 }
        ];
        var list = $("#listContainer").dxList("instance");
        var selectedItems = list.option("selectedItems");
        // Selects the "Oranges" item
        selectedItems.push(fruits[1]);
        list.option("selectedItems", selectedItems);
        // Cancels the selection of the "Oranges" item
        selectedItems = $.grep(selectedItems, function(item) {
            return item != fruits[1];
        });
        list.option("selectedItems", selectedItems);

    #####Angular

        <!--TypeScript-->
        import { ..., ViewChild } from '@angular/core';
        import { DxListModule, DxListComponent } from 'devextreme-angular';
        // ...
        export class AppComponent {
            @ViewChild(DxListComponent) list: DxListComponent;
            fruits = [
                { fruit: "Apples", count: 10 },
                { fruit: "Oranges", count: 12 },
                { fruit: "Lemons", count: 15 }
            ];
            selectOranges () {
                let selectedItems = this.list.instance.option("selectedItems");
                selectedItems.push(fruits[1]);
                this.list.instance.option("selectedItems", selectedItems);
            }
            unselectOranges () {
                let selectedItems = this.list.instance.option("selectedItems");
                selectedItems = selectedItems.filter((item) => {
                    return item != fruits[1];
                });
                this.list.instance.option("selectedItems", selectedItems);
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

    You can also use the **selectedItems** collection to select items initially.

    ---
    #####jQuery

        <!--JavaScript-->
        var fruits = [
            // ...
        ];
        $(function() {
            $("#listContainer").dxList({
                dataSource: fruits,
                selectedItems: [fruits[0], fruits[2]]
            });
        });

    #####Angular

        <!--HTML-->
        <dx-list ...
            [dataSource]="fruits"
            [selectedItems]="[fruits[0], fruits[2]]">
        </dx-list>

        <!--TypeScript-->
        import { DxListModule } from 'devextreme-angular';
        // ...
        export class AppComponent {
            fruits = [
                // ...
            ]
        }
        @NgModule({
            imports: [
                // ...
                DxListModule
            ],
            // ...
        })

    ---

- **By index**        
Pass the index to the [selectItem(itemIndex)](/Documentation/ApiReference/UI_Widgets/dxList/Methods/#selectItemitemIndex) or [unselectItem(itemIndex)](/Documentation/ApiReference/UI_Widgets/dxList/Methods/#unselectItemitemIndex) method. If the **List** is [grouped](/Documentation/Guide/Widgets/List/Grouping/In_the_Data_Source/), these methods should be given an object with the indexes of the group and the item.

    ---
    #####jQuery

        <!--JavaScript-->
        var list = $("#listContainer").dxList("instance");
        // Selects the item with index 1
        list.selectItem(1);
        // Checks that the item with index 1 is selected; if so, cancels the selection
        if(list.isItemSelected(1)) {
            list.unselectItem(1);
        }
        // Selects the item with index 3 in the group with index 2
        list.selectItem({ group: 2, item: 3 });
        // Checks that the item with index 3 in the group with index 2 is selected; if so, cancels the selection
        var itemToUnselect = { group: 2, item: 3 };
        if(list.isItemSelected(itemToUnselect)) {
            list.unselectItem(itemToUnselect);
        }


    #####Angular

        <!--TypeScript-->
        import { ..., ViewChild } from '@angular/core';
        import { DxListModule, DxListComponent } from 'devextreme-angular';
        // ...
        export class AppComponent {
            @ViewChild(DxListComponent) list: DxListComponent;
            selectItem (index) {
                // Checks that the item with the index is selected
                if (this.list.isItemSelected(index)) {
                    // If the item is selected, clears its selection
                    this.list.instance.unselectItem(index);
                } else {
                    // If the item is not selected, selects it
                    this.list.instance.selectItem(index);
                }
            }
            selectItemInGroup (groupIndex, itemIndex) {
                let item = { group: groupIndex, item: itemIndex };
                // Checks that the item is selected
                if(this.list.instance.isItemSelected(item)) {
                    // If the item is selected, clears its selection
                    this.list.instance.unselectItem(item);
                } else {
                    // If the item is not selected, selects it
                    this.list.instance.selectItem(item);
                }
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
Pass the [DOM node](http://www.w3schools.com/js/js_htmldom_nodes.asp) to the [selectItem(itemElement)](/Documentation/ApiReference/UI_Widgets/dxList/Methods/#selectItemitemElement) or [unselectItem(itemElement)](/Documentation/ApiReference/UI_Widgets/dxList/Methods/#unselectItemitemElement) method.

    ---
    #####jQuery

        <!--JavaScript-->
        var list = $("#listContainer").dxList("instance");
        var itemNodes = $("#listContainer").find(".dx-list-item");
        // Selects the last item by its DOM node
        list.selectItem(itemNodes[itemNodes.length-1]);
        // Checks that the last item is selected; if so, cancels the selection
        if(list.isItemSelected(itemNodes[itemNodes.length-1])) {
            list.unselectItem(itemNodes[itemNodes.length-1]);
        }

    #####Angular

        <!--TypeScript-->
        import { ..., ViewChild } from '@angular/core';
        import { DxListModule, DxListComponent } from 'devextreme-angular';
        // ...
        export class AppComponent {
            @ViewChild(DxListComponent) list: DxListComponent;
            selectLastItem () {
                var itemNodes = document.getElementsByClassName("dx-list-item");
                // Selects the last item by its DOM node
                this.list.instance.selectItem(itemNodes[itemNodes.length-1]);
            }
            unselectLastItem () {
                var itemNodes = document.getElementsByClassName("dx-list-item");
                // Checks that the last item is selected; if so, cancels the selection
                if(this.list.instance.isItemSelected(itemNodes[itemNodes.length-1])) {
                    this.list.instance.unselectItem(itemNodes[itemNodes.length-1]);
                }
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

#####See Also#####
- [Widget Basics - Call Methods](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/)
- [List Demos](/Demos/WidgetsGallery/Demo/List/ListSelection/jQuery/Light/)
- [List API Reference](/Documentation/ApiReference/UI_Widgets/dxList/)