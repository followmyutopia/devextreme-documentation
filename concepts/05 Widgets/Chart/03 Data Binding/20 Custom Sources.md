For loading data from any other source, DevExtreme provides the [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/) component. It is a flexible instrument that allows you to implement all the necessary data access operations manually.

For the **Chart** widget, you need to implement the [load](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load) operation only. It is a function that accepts a bag of **loadOptions** and passes them to the server. The server must process data according to the **loadOptions** and send processed data back. The members of the **loadOptions** depend on data processing operations ([filtering](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#filter), [sorting](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#sort), etc.) that you have enabled in the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/).

[note]If certain operations are not supported by the server, you can perform them on the client, after data is retrieved.

The following code example shows how to implement the **load** operation. You can see that in this example, the **CustomStore** is not declared explicitly. Instead, **CustomStore** operations are implemented directly in the **DataSource** configuration object to shorten this example.


---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            dataSource: new DevExpress.data.DataSource({
                load: function(loadOptions) {
                    // Passed if "filter" is set
                    var filterOptions = loadOptions.filter ? JSON.stringify(loadOptions.filter) : "";
                    // Passed if "sort" is set
                    var sortOptions = loadOptions.sort ? JSON.stringify(loadOptions.sort) : "";

                    var d = $.Deferred();
                    $.getJSON("http://mydomain.com/MyDataService", {
                        filter: filterOptions,
                        sort: sortOptions
                    }).done(function(result) {
                        // Here, you can perform operations unsupported by the server
                        // or any other operations on the retrieved data
                        d.resolve(result.data);
                    });
                    return d.promise();
                }
            }),
            // ...
        });
    });

##### Angular

    <!--JavaScript-->
    import { ..., Inject } from '@angular/core';
    import { Http, HttpModule } from '@angular/http';
    import DataSource from 'devextreme/data/data_source';
    import CustomStore from 'devextreme/data/custom_store';
    import 'rxjs/add/operator/toPromise';
    // ...
    export class AppComponent {
        chartDataSource: any = {};
        constructor(@Inject(Http) http: Http) {
            this.chartDataSource = new DataSource({
                load: function (loadOptions) {
                    // "params" contains a query string that should be passed with the GET request
                    var params = '?';

                    // Passed if "sort" is set
                    if (loadOptions.sort) {
                        // Add sorting parameters to the query string, for example
                        params += 'orderby=' + loadOptions.sort[0].selector;
                        if (loadOptions.sort[0].desc) {
                            params += ' desc';
                        }
                    }
                    // Passed if "filter" is set
                    if (loadOptions.filter) {
                        // Add filtering parameters to the query string
                        params += ...
                    }

                    return http.get('http://mydomain.com/MyDataService' + params).toPromise()
                        .then(response => {
                            var json = response.json();
                            // Here, you can perform operations unsupported by the server
                            // or any other operations on the retrieved data
                            return json.items
                        });
                }
            });
        }
    }

---

<a href='https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/ClientSideDataProcessing/jQuery/Light/' class='button orange small fix-width-155' target='_blank'>View Demo</a>

For consuming data from ASP.NET and PHP servers, DevExtreme provides the following extensions that implement the **CustomStore** and server-side data processing for you.

- [DevExtreme.AspNet.Data](https://github.com/DevExpress/DevExtreme.AspNet.Data)
- [DevExtreme-PHP-Data](https://github.com/DevExpress/DevExtreme-PHP-Data)

#####See Also#####
- [Data Layer - DataSource Examples | Custom Sources](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources)
- [Data Layer - Overview](/Documentation/Guide/Data_Layer/Data_Layer/)
- [Bind Series to Data](/Documentation/Guide/Widgets/Chart/Data_Binding/Bind_Series_to_Data/)
- [Update Data in the Chart](/Documentation/Guide/Widgets/Chart/Data_Binding/Update_Data/)
- [Chart API Reference](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/)

[tags]chart, data binding, provide data, custom data source, CustomStore, DataSource, load
