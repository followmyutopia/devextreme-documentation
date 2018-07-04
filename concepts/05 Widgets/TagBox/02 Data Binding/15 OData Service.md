Use the [ODataStore](/Documentation/ApiReference/Data_Layer/ODataStore/) to bind the **TagBox** to data an OData service provides.

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#tagBoxContainer").dxTagBox({
            dataSource: new DevExpress.data.ODataStore({
                url: "https://js.devexpress.com/Demos/DevAV/odata/Products",
                key: "Product_ID"
            }),
            valueExpr: "Product_Cost",
            displayExpr: "Product_Name"
        });
    });

#####Angular

    <!--TypeScript-->
    import ODataStore from 'devextreme/data/odata/store';
    import { DxTagBoxModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        productsStore: ODataStore = new ODataStore({
            url: "https://js.devexpress.com/Demos/DevAV/odata/Products",
            key: "Product_ID"
        });
    }
    @NgModule({
         imports: [
             // ...
             DxTagBoxModule
         ],
         // ...
     })

    <!--HTML--><dx-tag-box
        [dataSource]="productsStore"
        valueExpr="Product_Cost"
        displayExpr="Product_Name">
    </dx-tag-box>

---

Data kept in the **ODataStore** can be processed in a [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/). For example, the **DataSource** can filter data.

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#tagBoxContainer").dxTagBox({
            dataSource: new DevExpress.data.DataSource({
                store: {
                    type: "odata",
                    url: "https://js.devexpress.com/Demos/DevAV/odata/Products",
                    key: "Product_ID"
                },
                filter: ["Product_Available", "=", true]
            }),
            valueExpr: "Product_Cost",
            displayExpr: "Product_Name"
        });
    });

#####Angular

    <!--TypeScript-->
    import 'devextreme/data/odata/store';
    import DataSource from 'devextreme/data/data_source';
    import { DxTagBoxModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        productsStore = new DataSource({
            store: {
                type: "odata",
                url: "https://js.devexpress.com/Demos/DevAV/odata/Products",
                key: "Product_ID"
            },
            filter: ["Product_Available", "=", true]
        });
    }
    @NgModule({
         imports: [
             // ...
             DxTagBoxModule
         ],
         // ...
     })

    <!--HTML-->
    <dx-tag-box
        [dataSource]="productsStore"
        valueExpr="Product_Cost"
        displayExpr="Product_Name">
    </dx-tag-box>

---

#####See Also#####
- [Data Layer - What Are Stores](/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores)
- [Data Layer - Data Source Examples | OData](/Documentation/Guide/Data_Layer/Data_Source_Examples/#OData)
- [Access the DataSource](/Documentation/Guide/Widgets/TagBox/Data_Binding/Access_the_DataSource/)
- [TagBox Demos](/Demos/WidgetsGallery/Demo/Tag_Box/Overview/jQuery/Light/)

[tags]tagBox, data binding, provide data, odata, ODataStore, DataSource, process data
