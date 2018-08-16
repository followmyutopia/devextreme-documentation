Access to a custom data source is configured using the [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/) component. DevExtreme provides [ASP.NET](/Documentation/Guide/Widgets/List/Data_Binding/Web_API_Service/) and [PHP](/Documentation/Guide/Widgets/List/Data_Binding/PHP_Service/) extensions to configure the **CustomStore** and implement server-side data processing. You can also use the third-party extension for [MongoDB](/Documentation/Guide/Widgets/List/Data_Binding/MongoDB_Service/). 

You need to configure the **CustomStore** in detail for accessing a server built on another technology. Data in this situation can be processed on the client or server. In the former case, switch the **CustomStore** to the raw mode and load all data from the server in the [load](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load) function as shown in the next example. 

---

#####jQuery

    <!--JavaScript-->$(function() {
        $("#schedulerContainer").dxScheduler({
            dataSource: new DevExpress.data.DataSource({
                store: new DevExpress.data.CustomStore({
                    loadMode: "raw",   
                    load: function () {
                        return $.getJSON('https://mydomain.com/MyDataService');
                    }
                }),
                paginate: false
            })
        });
    });
    
#####Angular

    <!--TypeScript-->
    import { ..., Inject } from "@angular/core";
    import { HttpClient, HttpClientModule } from "@angular/common/http";
    import { DxSchedulerModule } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    import CustomStore from "devextreme/data/custom_store";
    import "rxjs/add/operator/toPromise";
    // ...
    export class AppComponent  {
        schedulerDataSource: any = {};
        constructor(@Inject(HttpClient) httpClient: HttpClient) {
            this.schedulerDataSource = new DataSource({
                store: new CustomStore({
                    loadMode: "raw",   
                    load: function () {
                        return httpClient.get('https://mydomain.com/MyDataService')
                            .toPromise();
                    }
                }),
                paginate: false
            })
        }
    }
    @NgModule({
        imports: [
            // ...
            DxSchedulerModule,
            HttpClientModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-scheduler
        [dataSource]="schedulerDataSource">
    </dx-scheduler>

---

In the latter case, use the **CustomStore**'s **load** function to send data processing settings to the server. These settings are passed as a parameter to the **load** function. In case of the **Scheduler**, the only relevant setting is [filter](/Documentation/ApiReference/Data_Layer/CustomStore/LoadOptions/#filter). It is passed when the **Scheduler**'s [remoteFiltering](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#remoteFiltering) option is set to **true**.

After receiving this setting, the server should apply it to data and send back an object with the following structure:

    {
        data: [ ... ] // result data objects
    }

If the **Scheduler** allows a user to add, delete or update appointments, the **CustomStore** must implement the [insert](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#insert), [remove](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#remove) and [update](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#update) operations as well. Here is a generalized configuration of the **CustomStore** for the **Scheduler** widget.

---

#####jQuery

    var schedulerDataSource = new DevExpress.data.DataSource({
        paginate: false,
        load: function (loadOptions) {
            var d = $.Deferred();
            $.getJSON('http://mydomain.com/MyDataService', {  
                filter: loadOptions.filter ? JSON.stringify(loadOptions.filter) : ""
            }).done(function (result) {
                // You can process the received data here
                d.resolve(result);
            });
            return d.promise();
        },
        insert: function (values) {
            return $.ajax({
                url: "http://mydomain.com/MyDataService/",
                method: "POST",
                data: values
            })
        },
        remove: function (key) {
            return $.ajax({
                url: "http://mydomain.com/MyDataService/" + encodeURIComponent(key),
                method: "DELETE",
            })
        },
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
            remoteFiltering: true
        });
    });

#####Angular

    <!--TypeScript-->
    import { ..., Inject } from "@angular/core";
    import { HttpClient, HttpClientModule, HttpParams } from "@angular/common/http";
    import { DxSchedulerModule } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    import CustomStore from "devextreme/data/custom_store";
    import "rxjs/add/operator/toPromise";
    // ...
    export class AppComponent {
        schedulerDataSource: any = {};
        constructor(@Inject(HttpClient) httpClient: HttpClient) {
            this.schedulerDataSource = new DataSource({
                store: new CustomStore({
                    load: function (loadOptions) {
                        let params: HttpParams = new HttpParams().
                            .set("filter", loadOptions.filter ? JSON.stringify(loadOptions.filter) : ""); 
                        return httpClient.get('http://mydomain.com/MyDataService', {
                                params: params
                            })
                            .toPromise()
                            .then(result => {
                                // You can process the received data here
                                return result;
                            });
                    },
                    insert: function (values) {
                        return httpClient.post('http://mydomain.com/MyDataService', values)
                            .toPromise();
                    },
                    remove: function (key) {
                        return httpClient.delete('http://mydomain.com/MyDataService' + encodeURIComponent(key))
                            .toPromise();
                    },
                    update: function (key, values) {
                        return httpClient.put('http://mydomain.com/MyDataService' + encodeURIComponent(key), values)
                            .toPromise();
                    }
                }),
                paginate: false
            });
        }
    }
    @NgModule({
        imports: [
            // ...
            DxSchedulerModule,
            HttpClientModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-scheduler
        [dataSource]="schedulerDataSource"
        [remoteFiltering]="true">
    </dx-scheduler>

---

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Scheduler/GoogleCalendarIntegration/jQuery/Light/"
}

#####See Also#####
- [Data Layer - DataSource Examples | Custom Sources](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources)
- [Data Layer - DataSource Examples | Connect to a RESTful Service](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources/Connect_to_RESTful_Service)
- [Data Layer - Overview](/Documentation/Guide/Data_Layer/Data_Layer/)
- [Scheduler API Reference](/Documentation/ApiReference/UI_Widgets/dxScheduler/)

[tags]scheduler, data binding, provide data, custom data source, CustomStore, DataSource, load, delete, add, update, remote filtering