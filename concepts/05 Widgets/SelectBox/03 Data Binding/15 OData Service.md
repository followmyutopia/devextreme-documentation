Use the [ODataStore](/Documentation/ApiReference/Data_Layer/ODataStore/) to bind **SelectBox** to data an OData service provides.

    <!--JavaScript-->$(function() {
        $("#selectBoxContainer").dxSelectBox({
            dataSource: new DevExpress.data.ODataStore({
                url: "https://js.devexpress.com/Demos/DevAV/odata/Products",
                key: "Product_ID"
            }),
            valueExpr: "Product_Cost",
            displayExpr: "Product_Name"
        });
    });

Data kept in the **ODataStore** can be processed in a [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/). For example, the **DataSource** can filter data.

    <!--JavaScript-->$(function() {
        $("#selectBoxContainer").dxSelectBox({
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

#####See Also#####
- [Data Layer - What Are Stores](/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores)
- [Data Layer - Data Source Examples | OData](/Documentation/Guide/Data_Layer/Data_Source_Examples/#OData)
- [Access the DataSource](/Documentation/Guide/Widgets/SelectBox/Data_Binding/Access_the_DataSource/)
- [SelectBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Select_Box/Overview/jQuery/Light/)

[tags]selectBox, data binding, provide data, odata, ODataStore, DataSource, process data
