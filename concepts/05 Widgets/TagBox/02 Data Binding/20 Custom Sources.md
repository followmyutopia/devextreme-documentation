DevExtreme provides the [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/) component, a flexible instrument that allows you to configure data access manually, for consuming data from any source. The following extensions for ASP.NET and PHP servers simplify the task of configuring the **CustomStore** and implement server-side data processing as well:

- [DevExtreme.AspNet.Data](https://github.com/DevExpress/DevExtreme.AspNet.Data)
- [DevExtreme-PHP-Data](https://github.com/DevExpress/DevExtreme-PHP-Data)

You need to configure the **CustomStore** in detail for accessing a server built on another technology. Data in this situation can be processed on the client or server. In the former case, switch the **CustomStore** to the raw mode and load all data from the server in the [load](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load) function as shown in the next example. 

    <!--JavaScript-->$(function() {
        $("#tagBoxContainer").dxTagBox({
            dataSource: new DevExpress.data.DataSource({
                store: new DevExpress.data.CustomStore({
                    loadMode: "raw",   
                    load: function () {
                        return $.getJSON('https://mydomain.com/MyDataService');
                    }
                })
            })
        });
    });

[note]We advise against using this mode with large amounts of data because all data is loaded at once.

In the latter case, use the **CustomStore**'s **load** function to send data processing settings to the server. These settings are passed as a parameter to the **load** function and depend on the operations (paging, filtering, sorting, etc.) that you have enabled in the **DataSource**. The following settings are relevant for the **TagBox**:

* **take**: <span style="font-size:smaller">Number</span>      
Restricts the number of top-level data objects to return.

* **skip**: <span style="font-size:smaller">Number</span>      
Skips some data objects from the start of the result set. **skip** and **take** are present if [paginate](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate) is **true** and [pageSize](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#pageSize) is set in the **DataSource**.

* **sort**: <span style="font-size:smaller">Array</span>      
Defines sorting parameters. Present if the **DataSource**'s [sort](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#sort) option is set. Multiple parameters apply to the data in sequence to implement multi-level sorting. Contains objects of the following structure:

        { selector: "field", desc: true/false }    

* **filter**: <span style="font-size:smaller">Array</span>      
Defines filtering parameters. Present if the **DataSource**'s [filter](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#filter) option is set. Possible variants:

    * Binary filter

            [ "field", "=", 3 ]

    * Unary filter
    
             [ "!", [ "field", "=", 3 ] ]

    * Complex filter
    
            [
                [ "field", "=", 10 ],
                "and",
                [
                    [ "otherField", "<", 3 ],
                    "or",
                    [ "otherField", ">", 11 ]
                ]
            ]

    See the [Filtering](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering) topic for more details.

* **searchExpr**, **searchOperation** and **searchValue**: <span style="font-size:smaller">Strings</span>    
Another way to define a filter restricted to one criterion. Present if [corresponding options](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#searchExpr) are set in the **DataSource**.

* **group**: <span style="font-size:smaller">Array</span>     
Defines grouping levels to be applied to the data. Present if the **DataSource**'s [group](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group) option is set. Contains objects of the following structure:

        { selector: "field", desc: true/false }

    See the [Grouping](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Grouping) topic for more details.

* **requireTotalCount**: <span style="font-size:smaller">Boolean</span>     
Indicates that a total count of data objects in the result set must be returned in the **totalCount** field of the result. This count must reflect the number of data items after filtering, but disregard any **take** parameter used for the query. Used when the **TagBox**'s [selectAllMode](/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#selectAllMode) is *"allPages"*.

After receiving these settings, the server should apply them to data and send back an object of the following structure:

    {
        data: [{
            key: "Group 1",
            items: [ ... ] // result data objects
        },
        ...
        ],
        totalCount: 100
    }

If the **group** setting is absent, the object structure is different: 

    {
        data: [ ... ], // result data objects
        totalCount: 100
    }

If you specify the **TagBox**'s [value](/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#value) beforehand, the **CustomStore** must implement the [byKey](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#byKey) operation as well. Here is a generalized configuration of the **CustomStore** for the **TagBox** widget.

    <!--JavaScript-->$(function() {
        $("#tagBoxContainer").dxTagBox({
            dataSource: new DevExpress.data.DataSource({
                load: function (loadOptions) {
                    var d = $.Deferred();
                    $.getJSON("http://mydomain.com/MyDataService", {
                        skip: loadOptions.skip,
                        take: loadOptions.take,
                        sort: loadOptions.sort ? JSON.stringify(loadOptions.sort) : "",
                        filter: loadOptions.filter ? JSON.stringify(loadOptions.filter) : "",
                        searchExpr: loadOptions.searchExpr ? JSON.stringify(loadOptions.searchExpr) : "",
                        searchOperation: loadOptions.searchOperation,
                        searchValue: loadOptions.searchValue,
                        group: loadOptions.group ? JSON.stringify(loadOptions.group) : "",
                        requireTotalCount: loadOptions.requireTotalCount
                    }).done(function(result) {
                        // Here, you can perform operations unsupported by the server
                        d.resolve(result.data, {
                            totalCount: result.totalCount
                        });
                    });
                    return d.promise();
                },
                byKey: function (key) {
                    var d = new $.Deferred();
                    $.get('https://mydomain.com/MyDataService?id=' + key)
                        .done(function (result) {
                            d.resolve(result);
                        });
                    return d.promise();
                }
            })
        });
    });

#####See Also#####
- [Data Layer - DataSource Examples | Custom Sources](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources)
- [Data Layer - DataSource Examples | Connect to a RESTful Service](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources/Connect_to_RESTful_Service)
- [Data Layer - Overview](/Documentation/Guide/Data_Layer/Data_Layer/)
- [Access the DataSource](/Documentation/Guide/Widgets/TagBox/Data_Binding/Access_the_DataSource/)
- [Grouping](/Documentation/Guide/Widgets/TagBox/Grouping/In_the_Data_Source/)
- [Configure Search Parameters](/Documentation/Guide/Widgets/TagBox/Configure_Search_Parameters/)
- [TagBox Demos](/Demos/WidgetsGallery/Demo/Tag_Box/Overview/jQuery/Light/)

[tags]tagBox, data binding, provide data, custom data source, CustomStore, DataSource, load