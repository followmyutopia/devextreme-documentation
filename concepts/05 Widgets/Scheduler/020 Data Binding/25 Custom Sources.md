To consume data from a custom source, the **Scheduler** uses the [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/). This article provides information on how to configure the **CustomStore** for communicating with the server. If your server already processes data, that is, performs filtering, notify the **Scheduler** of it by assigning *true* to the [remoteFiltering](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#remoteFiltering) option. 

    <!--JavaScript-->$(function() {
        $("#schedulerContainer").dxScheduler({
            // ...
            remoteFiltering: true
        });
    });

If the server does not process data yet, employ one of the following extensions by DevExtreme. They implement server-side data processing and also configure the **CustomStore** for you. Remember to notify the **Scheduler** of filtering that was delegated to the server.

- [DevExtreme ASP.NET Data](https://github.com/DevExpress/DevExtreme.AspNet.Data)
- [DevExtreme PHP Data](https://github.com/DevExpress/DevExtreme-PHP-Data)

If these extensions do not suit your needs, configure the **CustomStore** and implement server-side data processing by yourself. For the **Scheduler** widget, you need to implement the [load](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load) operation. This is a function that accepts **loadOptions** and passes them to the server. The server should process data according to the **loadOptions** and send processed data back. The members of the **loadOptions** vary depending on whether remote filtering is enabled. 

If the **Scheduler** allows a user to add, delete or update appointments, the **CustomStore** must implement the [insert](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#insert), [remove](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#remove) and [update](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#update) operations as well. The following example shows how to implement these operations. Note that in code, the **CustomStore** is not declared explicitly. Instead, **CustomStore** operations are implemented directly in the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) configuration object to shorten the example.

    var schedulerDataSource = new DevExpress.data.DataSource({
        load: function (loadOptions) {
            var d = $.Deferred();
            $.getJSON('http://mydomain.com/MyDataService', {  
                // Passing settings to the server
                filter: loadOptions.filter ? JSON.stringify(loadOptions.filter) : "", // Pass if filtering is remote
            }).done(function (result) {
                // You can process the received data here
                d.resolve(result);
            });
            return d.promise();
        },
        // This function is needed only if the Scheduler allows a user to add appointments
        insert: function (values) {
            return $.ajax({
                url: "http://mydomain.com/MyDataService/",
                method: "POST",
                data: values
            })
        },
        // This function is needed only if the Scheduler allows a user to delete appointments
        remove: function (key) {
            return $.ajax({
                url: "http://mydomain.com/MyDataService/" + encodeURIComponent(key),
                method: "DELETE",
            })
        },
        // This function is needed only if the Scheduler allows a user to update appointments
        update: function (key, values) {
            return $.ajax({
                url: "http://mydomain.com/MyDataService/" + encodeURIComponent(key),
                method: "PUT",
                data: values
            })
        }
    });

    $(function() {
        $("#schedulerContainer").dxScheduler({
            dataSource: schedulerDataSource,
            // ...
        });
    });

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/GoogleCalendarIntegration/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
- [Data Layer - DataSource Examples | Custom Sources](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources)
- [Data Layer - DataSource Examples | Connect to a RESTful Service](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources/Connect_to_RESTful_Service)
- [Data Layer - Overview](/Documentation/Guide/Data_Layer/Data_Layer/)
- [Scheduler API Reference](/Documentation/ApiReference/UI_Widgets/dxScheduler/)

[tags]scheduler, data binding, provide data, custom data source, CustomStore, DataSource, load, delete, add, update, remote filtering



