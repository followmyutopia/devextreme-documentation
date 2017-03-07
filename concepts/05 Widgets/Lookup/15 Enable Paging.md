To load data in portions, modify paging options of the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) instance associated with the widget. Set the [paginate](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate) option to *true* and specify the number of items per page using the [pageSize](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#pageSize) option.

    <!--JavaScript-->
    $(function() {
        $("#lookupContainer").dxLookup({
            dataSource: new DevExpress.data.DataSource({
                store: {
                    type: "odata",
                    url: "https://js.devexpress.com/Demos/DevAV/odata/Products"
                },
                select: ["Product_ID", "Product_Name", "Product_Cost"],
                paginate: true,
                pageSize: 5
            }),
            valueExpr: "Product_ID",
            displayExpr: "Product_Name"
        });
    });

By default, the **Lookup** widget loads the next page once the list of items is scrolled down to the bottom. To enable loading on clicking the "Next" button, assign *'nextButton'* to the [pageLoadMode](/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#pageLoadMode) option. To change the text displayed by the "Next" button, use the [nextButtonText](/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#nextButtonText) option.

    <!--JavaScript-->
    $(function() {
        $("#lookupContainer").dxLookup({
             dataSource: new DevExpress.data.DataSource({
                store: {
                    type: "odata",
                    url: "https://js.devexpress.com/Demos/DevAV/odata/Products"
                },
                select: ["Product_ID", "Product_Name", "Product_Cost"],
                paginate: true,
                pageSize: 5
            }),
            valueExpr: "Product_ID",
            displayExpr: "Product_Name",
            pageLoadMode: "nextButton",
            nextButtonText: "See more"
        });
    });

#####See Also#####
- [Lookup - Enable Grouping](/Documentation/Guide/Widgets/Lookup/Enable_Grouping/)
- [Lookup Demo](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Lookup/Basics/)
- [Lookup API Reference](/Documentation/ApiReference/UI_Widgets/dxLookup/)

[tags]lookup, paginate, page size, pageSize, loading mode