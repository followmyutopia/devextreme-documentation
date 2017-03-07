For loading data from any other source, DevExtreme provides the [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/) component. It is a flexible instrument that allows you to implement all the needed data access operations manually.

For the **List** widget, you need to implement the [load](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load) operation. It is a function that accepts a bag of **loadOptions** and passes them to the server. The server must process data according to the **loadOptions** and sent processed data back. The members of the **loadOptions** depend on data processing operations ([paging](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate), [filtering](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#filter), [sorting](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#sort), etc.) that you have enabled in the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/).

[note]If some operations are not supported by the server, you can perform them on the client after data is retrieved.

If the **List** allows the user to [delete items](/Documentation/Guide/Widgets/List/Item_Deletion/), the **CustomStore** must implement the [remove](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#remove) operation as well.

The following code example shows how to implement the **load** and **remove** operations. Note that in this example, the **CustomStore** is not declared explicitly. Instead, **CustomStore** operations are implemented directly in the **DataSource** configuration object to shorten this example.

    <!--JavaScript-->$(function() {
        $("#listContainer").dxList({
            dataSource: new DevExpress.data.DataSource({
                load: function(loadOptions) {
                    // Passed if "paginate" is true and "pageSize" is set
                    var skip = loadOptions.skip; // The number of records to skip 
                    var take = loadOptions.take; // The number of records to take
                    // Passed if "filter" is set
                    var filterOptions = loadOptions.filter ? JSON.stringify(loadOptions.filter) : "";
                    // Passed if "sort" is set
                    var sortOptions = loadOptions.sort ? JSON.stringify(loadOptions.sort) : "";
                    // Passed if "group" is set
                    var groupOptions = loadOptions.group ? JSON.stringify(loadOptions.group) : "";

                    var d = $.Deferred();
                    $.getJSON("http://mydomain.com/MyDataService", {
                        skip: skip,
                        take: take,
                        filter: filterOptions,
                        sort: sortOptions,
                        group: groupOptions
                    }).done(function(result) {
                        // Here, you can perform operations unsupported by the server
                        d.resolve(result.data);
                    });
                    return d.promise();
                },
                // This function is needed only if the List allows item deletion
                remove: function(key) {
                    return $.ajax({
                        url: "http://mydomain.com/MyDataService/" + encodeURIComponent(key),
                        method: "DELETE",
                    });
                }
            })
        });
    });

For consuming data from ASP.NET and PHP servers, DevExtreme provides the following extensions that implement the **CustomStore** and server-side data processing for you.

- [DevExtreme.AspNet.Data](https://github.com/DevExpress/DevExtreme.AspNet.Data)
- [DevExtreme-PHP-Data](https://github.com/DevExpress/DevExtreme-PHP-Data)

#####See Also#####
- [Data Layer - DataSource Examples | Custom Sources](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources)
- [Data Layer - DataSource Examples | Connect to a RESTful Service](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources/Connect_to_RESTful_Service)
- [Data Layer - Overview](/Documentation/Guide/Data_Layer/Data_Layer/)
- [List - Access the DataSource](/Documentation/Guide/Widgets/List/Data_Binding/Access_the_DataSource/)
- [List - Paging](/Documentation/Guide/Widgets/List/Paging/)
- [List Demo](https://js.devexpress.com/Demos/WidgetsGallery/Demo/List/ListEditingAndAPI/jQuery/Light/)
- [List API Reference](/Documentation/ApiReference/UI_Widgets/dxList/)

[tags]list, data binding, provide data, custom data source, CustomStore, DataSource, load