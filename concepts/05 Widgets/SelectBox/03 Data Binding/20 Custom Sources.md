DevExtreme provides the [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/) component, a flexible instrument that allows you to configure data access manually, for consuming data from any source. The following extensions for ASP.NET and PHP servers simplify the task of configuring the **CustomStore** and implement server-side data processing as well:

- [DevExtreme.AspNet.Data](https://github.com/DevExpress/DevExtreme.AspNet.Data)
- [DevExtreme-PHP-Data](https://github.com/DevExpress/DevExtreme-PHP-Data)

You need to configure the **CustomStore** in detail for accessing a server built on another technology. Data in this situation can be processed on the client or server. In the former case, switch the **CustomStore** to the raw mode and load all data from the server in the [load](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load) function as shown in the next example. Note that instead of declaring the **CustomStore** explicitly, you can specify its members directly in the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) object.

    <!--JavaScript-->$(function() {
        $("#selectBoxContainer").dxSelectBox({
            dataSource: new DevExpress.data.DataSource({
                loadMode: "raw",   
                load: function (loadOptions) {
                    return $.getJSON('https://mydomain.com/MyDataService');
                }
            })
        });
    });

[note]We advise against using this mode with large amounts of data because all data is loaded at once.

In the latter case, use the **CustomStore**'s **load** function to send data processing settings to the server. These settings are passed as a parameter to the **load** function and depend on the operations ([paging](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate), [filtering](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#filter), [sorting](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#sort), etc.) that you have enabled in the **DataSource**. The following code shows how to configure the **load** function in this case:

    <!--JavaScript-->$(function() {
        $("#selectBoxContainer").dxSelectBox({
            dataSource: new DevExpress.data.DataSource({
                load: function (loadOptions) {
                    // Passed if "paginate" is true and "pageSize" is set
                    var skip = loadOptions.skip; // The number of records to skip 
                    var take = loadOptions.take; // The number of records to take
                    // Passed if "filter" is set
                    var filterOptions = loadOptions.filter ? JSON.stringify(loadOptions.filter) : "";
                    // Passed if "sort" is set
                    var sortOptions = loadOptions.sort ? JSON.stringify(loadOptions.sort) : "";
                    // Passed if "group" is set
                    var groupOptions = loadOptions.group ? JSON.stringify(loadOptions.group) : "";
                    // Passed if "searchEnabled" is true
                    var searchValue = loadOptions.searchValue;
                    var searchExpr = loadOptions.searchExpr;    // Data fields to be searched for "searchValue"
                    var searchOperation = loadOptions.searchOperation;

                    var d = $.Deferred();
                    $.getJSON("https://mydomain.com/MyDataService", {
                        skip: skip,
                        take: take,
                        filter: filterOptions,
                        sort: sortOptions,
                        group: groupOptions,
                        searchExpr: searchExpr,
                        searchOperation: searchOperation,
                        searchValue: searchValue
                    }).done(function(result) {
                        // Here, you can perform operations unsupported by the server
                        d.resolve(result.data);
                    });
                    return d.promise();
                },
                // Required if you specify initially selected value in SelectBox
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

The object passed with the [$.getJSON()](http://api.jquery.com/jquery.getjson/) request has the following structure:

    <!--JavaScript-->
    {
        filter: [
            [ "dataFieldName1", "operator", "value" ],
            "and", // "or"
            [ "dataFieldName2", "operator", "value" ],
            // ...
        ],
        sort: [
            { selector : "dataFieldName1", desc : true },
            { selector : "dataFieldName2", desc : false },
            // ...
        ],
        skip: 0,
        take: 20,
        group: "dataFieldName",
        searchExp: ["dataFieldName1", "dataFieldName2"],
        searchOperation: "contains", // or "startswith",
        searchValue: "string"
    }

After receiving this object with settings, the server should apply them to data and then send an object of the following structure back: 

    <!--JavaScript-->
    {
        data: [
            // Your data objects
            { name: "John Heart", title: "CEO" },
            { name: "Arthur Miller", title: "COO" },
            // ...
        ]
    }

Note that if the server has received the **group** setting, the object structure is different: 

    <!--JavaScript-->
    {
        data: [{
            key: "Group 1",
            items: [
                // Your data objects
                { name: "John Heart", title: "CEO" },
                { name: "Arthur Miller", title: "COO" },
                // ...
            ]
        }, {
            key: "Group 2",
            items: [ ... ]
        }, 
            // . . .
        ]
    }

#####See Also#####
- [Data Layer - DataSource Examples | Custom Sources](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources)
- [Data Layer - DataSource Examples | Connect to a RESTful Service](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources/Connect_to_RESTful_Service)
- [Data Layer - Overview](/Documentation/Guide/Data_Layer/Data_Layer/)
- [Access the DataSource](/Documentation/Guide/Widgets/SelectBox/Data_Binding/Access_the_DataSource/)
- [Grouping](/Documentation/Guide/Widgets/SelectBox/Grouping/In_the_Data_Source/)
- [Enable Searching](/Documentation/Guide/Widgets/SelectBox/Enable_Searching/)
- [SelectBox Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Select_Box/Overview/jQuery/Light/)

[tags]selectBox, data binding, provide data, custom data source, CustomStore, DataSource, load