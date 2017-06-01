To bind the **List** to data provided by an OData service, use the [ODataStore](/Documentation/ApiReference/Data_Layer/ODataStore/).

    <!--JavaScript-->$(function() {
        $("#listContainer").dxList({
            dataSource: new DevExpress.data.ODataStore({
                url: "https://js.devexpress.com/Demos/DevAV/odata/Products",
                key: "Product_ID"
            }),
            itemTemplate: function(data, _, element) {
                element.append(
                    $("<img />").attr("src", "data:image/jpg;base64," + data.Product_Primary_Image)
                    			.height(30).width(30)
                                .addClass("item-image"),
                    $("<p>").text(data.Product_Name)
                    		.addClass("item-text")
                )
            }
        });
    });

    <!--CSS-->.item-image {
        vertical-align: middle;
    }

    .item-text {
        display: inline-block;
        vertical-align: middle;
        margin: 0px 0px 0px 10px;
    }

Data kept in the **ODataStore** can be processed in the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/). For example, the **DataSource** can group or filter data.

    <!--JavaScript-->$(function() {
        $("#listContainer").dxList({
            dataSource: new DevExpress.data.DataSource({
                store: {
                    type: "odata",
                    url: "https://js.devexpress.com/Demos/DevAV/odata/Products",
                    key: "Product_ID"
                },
                group: "Product_Category",
                filter: ["Product_Available", "=", true]
            }),
            grouped: true,
            itemTemplate: function(data, _, element) {
                // The template is omitted for brevity
                // See the previous code example
            }
        });
    });

#####See Also#####
- [Data Layer - What Are Stores](/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores)
- [Data Layer - Data Source Examples | OData](/Documentation/Guide/Data_Layer/Data_Source_Examples/#OData)
- [List - Access the DataSource](/Documentation/Guide/Widgets/List/Data_Binding/Access_the_DataSource/)
- [List Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI/jQuery/Light/)
- [List API Reference](/Documentation/ApiReference/UI_Widgets/dxList/)

[tags]list, data binding, provide data, odata, ODataStore, DataSource, process data