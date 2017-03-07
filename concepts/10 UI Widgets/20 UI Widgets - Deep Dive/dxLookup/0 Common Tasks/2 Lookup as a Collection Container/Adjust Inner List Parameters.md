The **Lookup** widget displays the collection of available values within the inner **List** widget. Some options of this list are mapped to the **Lookup** widget options, which enables you to adjust the list parameters. The inner list can display items in a grouped list and load them by pages.

- **Grouping**  

 To display items by groups, set the [grouped](/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#grouped) option to *true*. The default group template supports the following array structure.

        <!--JavaScript-->
        var lookupData = [
            {
                key: "group1 caption",
                items: [
                    { text: "item1" },
                    { text: "item2" },
                    { text: "item3" }
                ]
            },
            {
                key: "group2 caption",
                items: [
                    { text: "item1" },
                    { text: "item2" },
                    { text: "item3" }
                ]
            },
            {
                key: "group3 caption",
                items: [
                    { text: "item1" },
                    { text: "item2" },
                    { text: "item3" }
                ]
            }
        ];
        var lookupOptions = {
            dataSource: new DevExpress.data.DataSource(lookupData),
            grouped: true
        }

 For more information on list grouping options, refer to the [List description](/Documentation/Guide/UI_Widgets/UI_Widgets_-_Deep_Dive/dxList/#Data_Shaping/Grouping).

- **Paging**  

 To display the **Lookup** items by pages, modify paging options of the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) instance associated with the widget. Set the [paginate](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate) option to *true* and specify the number of items per page using the [pageSize](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#pageSize) option.

        <!--JavaScript-->
        var lookupData = new DevExpress.data.DataSource({
            store: [ . . . ], //Specifies data associated with the DataSource instance
            paginate: true, //Specifies whether or not DataSource loads data by pages
            pageSize: 10 //Specifies the number of items contained in a single page
        });
        var lookupOptions = {
            dataSource: lookupData
        };

Similarly to the **List** widget, **Lookup** can load the next page automatically when the list is scrolled to the bottom, or when a user clicks the **Next** button located at the bottom of the list. Use the [pageLoadMode](/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#pageLoadMode) option to specify the page loading mode. You can also specify the text displayed on the "next" button using the [nextButtonText](/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#nextButtonText) option.

 For more information on paging, refer to the [List description](/Documentation/Guide/UI_Widgets/UI_Widgets_-_Deep_Dive/dxList/#Data_Shaping/Paging).