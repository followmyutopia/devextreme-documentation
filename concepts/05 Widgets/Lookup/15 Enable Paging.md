Paging is configured in the widget's [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/). Set the [paginate](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate) option to **true** and specify the number of items per page using the [pageSize](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#pageSize) option.

    <!--JavaScript-->
    $(function() {
        $("#lookupContainer").dxLookup({
            dataSource: new DevExpress.data.DataSource({
                loadMode: "raw",   
                load: function () {
                    return $.getJSON('https://mydomain.com/MyDataService');
                },
                paginate: true,
                pageSize: 5
            }),
            valueExpr: "Product_ID",
            displayExpr: "Product_Name"
        });
    });

The **Lookup**'s default behavior is to load the next page once a user scrolls the item list to the bottom. If you set the [pageLoadMode](/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#pageLoadMode) to *"nextButton"*, the **Lookup** loads the next page when a user clicks the **Next** button. This button gets the text from the [nextButtonText](/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#nextButtonText) option.

    <!--JavaScript-->
    $(function() {
        $("#lookupContainer").dxLookup({
            // ...
            pageLoadMode: "nextButton",
            nextButtonText: "More"
        });
    });

#####See Also#####
- [Lookup - Enable Grouping](/Documentation/Guide/Widgets/Lookup/Enable_Grouping/)
- [Lookup Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Lookup/Basics/)

[tags]lookup, paginate, page size, pageSize, loading mode
