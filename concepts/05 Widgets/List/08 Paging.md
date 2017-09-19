﻿If the **List** should work with a large amount of data, loading all of it in one go may slow the **List** down at first launch. In this case, it is better to load data page by page.

Paging settings are configured in the [DevExtreme DataSource](/Documentation/ApiReference/Data_Layer/DataSource/), therefore the access to data should be configured using one of the [Stores](/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores). In the following example, the [ODataStore](/Documentation/ApiReference/Data_Layer/ODataStore/) provides access to an OData service, while the **DataSource** loads data from this service page by page, five items per page.

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#listContainer").dxList({
            dataSource: new DevExpress.data.DataSource({
                store: {
                    type: "odata",
                    url: "https://js.devexpress.com/Demos/DevAV/odata/Products",
                    key: "Product_ID"
                },
                paginate: true,
                pageSize: 5
            }),
            itemTemplate: function(data, _, element) {
                element.append(
                    $("<p>").text(data.Product_Name)
                            .addClass("item-text")
                )
            }
        });
    });

    <!--CSS-->.item-text {
        display: inline-block;
        vertical-align: middle;
        margin: 0px 0px 0px 10px;
    }

#####Angular

    <!--HTML-->
    <dx-list
        [dataSource]="listDataSource">
        <div *dxTemplate="let data of 'item'">
            <p class="item-text">{{data.Product_Name}}</p>
        </div>
    </dx-list>

    <!--TypeScript-->
    import DataSource from 'devextreme/data/data_source';
    import 'devextreme/data/odata/store';
    // ...
    export class AppComponent {
        listDataSource = new DataSource({
            store: {
                type: "odata",
                url: "https://js.devexpress.com/Demos/DevAV/odata/Products",
                key: "Product_ID"
            },
            paginate: true,
            pageSize: 5
        });
    }

    <!--CSS-->.item-text {
        display: inline-block;
        vertical-align: middle;
        margin: 0px 0px 0px 10px;
    }

---

#####See Also#####
- [List - Data Binding | OData Service](/Documentation/Guide/Widgets/List/Data_Binding/OData_Service/)
- [List - Data Binding | Custom Sources](/Documentation/Guide/Widgets/List/Data_Binding/Custom_Sources/)

The next page can be loaded immediately as the user scrolls the **List** down to the bottom, or after the user clicks the *"More"* button. To specify the most suitable mode, set the [pageLoadMode](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#pageLoadMode) option.

---
#####jQuery

    <!--JavaScript-->$(function() {
        $("#listContainer").dxList({
            // ...
            pageLoadMode: "scrollBottom" // or "nextButton"
        });
    });

#####Angular

    <!--HTML-->
    <dx-list ...
        pageLoadMode="scrollBottom"> <!-- or "nextButton" -->
    </dx-list>

---

[note]When the **pageLoadMode** is *"scrollBottom"*, at first launch, the **List** loads as many pages as it can fit into its [height](/Documentation/ApiReference/UI_Widgets/dxList/Configuration/#height).

#####See Also#####
- [List - Localization](/Documentation/Guide/Widgets/List/Localization/)
- [List Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI/jQuery/Light/)
- [List API Reference](/Documentation/ApiReference/UI_Widgets/dxList/)

[tags]list, paging, paginate, pageSize, pageLoadMode