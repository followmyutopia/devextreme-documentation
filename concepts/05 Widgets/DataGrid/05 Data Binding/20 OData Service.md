Use the [ODataStore](/Documentation/ApiReference/Data_Layer/ODataStore/) to bind the **DataGrid** to data an OData service supplies. It provides an interface for loading and editing data, and allows you to handle data-related events.

---

#####jQuery

    <!--JavaScript-->$(function() {
        $("#gridContainer").dxDataGrid({
            dataSource: new DevExpress.data.ODataStore({
                url: "https://js.devexpress.com/Demos/DevAV/odata/Products",
                key: "Product_ID",
                onLoaded: function () {
                    // Event handling commands go here
                }
            })
        });
    });

#####Angular

    <!--TypeScript-->
    import ODataStore from 'devextreme/data/odata/store';
    // ...
    export class AppComponent {
        productStore = new ODataStore({
            url: "https://js.devexpress.com/Demos/DevAV/odata/Products",
            key: "Product_ID",
            onLoaded: function () {
                // Event handling commands go here
            }
        });
    }

    <!--HTML--><dx-data-grid
        [dataSource]="productStore">
    </dx-data-grid>

---

Data kept in the **ODataStore** can be processed in the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/), for example, it can filter data.

---

#####jQuery

    <!--JavaScript-->$(function() {
        $("#gridContainer").dxDataGrid({
            dataSource: new DevExpress.data.DataSource({
                store: {
                    type: "odata",
                    url: "https://js.devexpress.com/Demos/DevAV/odata/Products",
                    key: "Product_ID"
                },
                filter: ["Product_Available", "=", true]
            })
        });
    });

#####Angular

    <!--TypeScript-->
    import 'devextreme/data/odata/store';
    import DataSource from 'devextreme/data/data_source';
    // ...
    export class AppComponent {
        productDataSource = new DataSource({
            store: {
                type: "odata",
                url: "https://js.devexpress.com/Demos/DevAV/odata/Products",
                key: "Product_ID"
            },
            filter: ["Product_Available", "=", true]
        });
    }

    <!--HTML-->
    <dx-data-grid
        [dataSource]="productDataSource">
    </dx-data-grid>

---

Note that using the features listed below with the **ODataStore** may cause a significant delay, because they initiate data loading for all pages.

- [summary calculation](/Documentation/Guide/Widgets/DataGrid/Summaries/)
- [grouping](/Documentation/Guide/Widgets/DataGrid/Grouping/) with the [autoExpandAll](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#autoExpandAll) option set to **false**
- a [header filter](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#autoExpandAll) with the default data source

We recommend using a [Custom Source](/Documentation/Guide/Widgets/DataGrid/Data_Binding/Custom_Sources/) instead if you have a large amount of data and need these features.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Data_Grid/OdataService/jQuery/Light/" class="button orange small fix-width-155" target="_blank">View Demo</a>

#####See Also#####
- [Data Layer - What Are Stores](/Documentation/Guide/Data_Layer/Data_Layer/#Data_Layer_Data_Layer_Creating_DataSource_What_Are_Stores)
- [Data Layer - Data Source Examples | OData](/Documentation/Guide/Data_Layer/Data_Source_Examples/#OData)

[tags]dataGrid, data grid, data binding, provide data, odata, ODataStore, DataSource, process data
