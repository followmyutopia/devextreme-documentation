To bind the **Scheduler** to data provided by an OData service, use the [ODataStore](/Documentation/ApiReference/Data_Layer/ODataStore/). It presents an interface for loading and editing data and allows you to handle data-related events.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#schedulerContainer").dxScheduler({
            dataSource: new DevExpress.data.ODataStore({
                url: "http://url/to/odata/service"
                onLoaded: function () {
                    // Event handling commands go here
                }
            })
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxSchedulerModule } from 'devextreme-angular';
    import ODataStore from 'devextreme/data/odata/store';
    // ...
    export class AppComponent {
        appointmentStore = new ODataStore({
            url: "http://url/to/odata/service",
            onLoaded: function () {
                // Event handling commands go here
            }
        });
    }
    @NgModule({
        imports: [
            // ...
            DxSchedulerModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-scheduler
        [dataSource]="appointmentStore">
    </dx-scheduler>

---

Data kept in the **ODataStore** can be processed in the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/). For example, the **DataSource** can filter data.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#schedulerContainer").dxScheduler({
            dataSource: new DevExpress.data.DataSource({
                store: {
                    type: "odata",
                    url: "http://url/to/odata/service"
                },
                filter: ["Not_Assigned", "=", true],
                paginate: false
            })
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxSchedulerModule } from 'devextreme-angular';
    import 'devextreme/data/odata/store';
    import DataSource from 'devextreme/data/data_source';
    // ...
    export class AppComponent {
        appointmentDataSource = new DataSource({
            store: {
                type: "odata",
                url: "http://url/to/odata/service",
            },
            filter: ["Not_Assigned", "=", true],
            paginate: false
        });
    }
    @NgModule({
        imports: [
            // ...
            DxSchedulerModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-scheduler
        [dataSource]="appointmentDataSource">
    </dx-scheduler>

---

[note]If you define the **ODataStore** within the **DataSource**, set the [paginate](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate) option to **false**. This is needed to prevent data from being partitioned as the **Scheduler** does not support paging.

#####See Also#####
- [Data Layer - What Are Stores](/Documentation/Guide/Data_Layer/Data_Layer/#Data_Layer_Data_Layer_Creating_DataSource_What_Are_Stores)
- [Data Layer - Data Source Examples | OData](/Documentation/Guide/Data_Layer/Data_Source_Examples/#OData)
- [Scheduler Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Overview/jQuery/Light/)
- [Scheduler API Reference](/Documentation/ApiReference/UI_Widgets/dxScheduler/)

[tags]scheduler, data binding, provide data, odata, ODataStore, DataSource, process data
