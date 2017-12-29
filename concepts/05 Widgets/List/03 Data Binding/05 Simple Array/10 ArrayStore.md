If you want to extend the functionality of a JavaScript array, place it into an [ArrayStore](/Documentation/ApiReference/Data_Layer/ArrayStore/). It provides an interface for loading and editing data, and allows you to handle data-related events.

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#listContainer").dxList({
            dataSource: new DevExpress.data.ArrayStore({
                data: fruits,
                onLoaded: function() {
                    // Event handling commands go here
                }
            }),
            itemTemplate: function(data, _, element) {
                element.append(
                    $("<b>").text(data.fruit), $("<br />"),
                    $("<p>").text(data.count).css("margin", 0)
                )
            }
        });
    });

#####Angular

    <!--TypeScript-->
    import { DxListModule } from 'devextreme-angular';
    import ArrayStore from 'devextreme/data/array_store';
    // ...
    export class AppComponent {
        fruits = [ /* ... */ ];
        fruitStore = new ArrayStore({
            data: this.fruits,
            onLoaded: function () {
                // Event handling commands go here
            }
        });
    }
    @NgModule({
        imports: [
            // ...
            DxListModule
        ],
        // ...
    })

    <!--HTML--><dx-list
        [dataSource]="fruitStore">
        <div *dxTemplate="let data of 'item'">
            <b>{{data.fruit}}</b><br/>
            <p style="margin:0">{{data.count}}</p>
        </div>
    </dx-list>

---

Data kept in an **ArrayStore** can be processed in the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/). Its purpose is similar to that of the [Query](/Documentation/Guide/Data_Layer/Data_Layer/#Query_Concept), but **DataSource** provides wider capabilities. For example, the **DataSource** can map objects from the array that underlies the **ArrayStore**, as shown in the following code where the resulting objects match the [default item template](/Documentation/ApiReference/UI_Widgets/dxList/Default_Item_Template/).

---
#####jQuery

    <!--JavaScript-->var fruits = [
        { fruit: "Apples", count: 10 },
        // ...
    ];
    
    $(function() {
        $("#listContainer").dxList({
            dataSource: new DevExpress.data.DataSource({
                store: fruits,
                map: function(item) {
                    return {
                        text: item.fruit,
                        badge: item.count
                    }   
                }
            })
        });
    });

#####Angular

    <!--TypeScript-->
    import { DxListModule } from 'devextreme-angular';
    import DataSource from 'devextreme/data/data_source';
    // ...
    export class AppComponent {
        fruits = [
            { fruit: "Apples", count: 10 },
            // ...
        ];
        fruitDataSource = new DataSource({
            store: this.fruits,
            map: function (item) {
                return {
                    text: item.fruit,
                    badge: item.count
                }   
            }
        });
    }
    @NgModule({
        imports: [
            // ...
            DxListModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-list
        [dataSource]="fruitDataSource">
    </dx-list>

---

[note]Even if you have [passed a JavaScript array](/Documentation/Guide/Widgets/List/Data_Binding/Simple_Array/Array_Only/) to the **dataSource** option, the **List** automatically places it into an **ArrayStore** wrapped into the **DataSource** that you can get with the [getDataSource()](/Documentation/ApiReference/UI_Widgets/dxList/Methods/#getDataSource) method.

#####See Also#####
- [Data Layer - What Are Stores](/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores)
- [Data Layer - DataSource Examples | In-memory Data](/Documentation/Guide/Data_Layer/Data_Source_Examples/#In-memory_Data)
- [List - Access the DataSource](/Documentation/Guide/Widgets/List/Data_Binding/Access_the_DataSource/)
- [List Demos](/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI/jQuery/Light/)
- [List API Reference](/Documentation/ApiReference/UI_Widgets/dxList/)

[tags]list, data binding, provide data, ArrayStore, DataSource, process data