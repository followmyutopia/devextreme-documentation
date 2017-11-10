To bind the **Scheduler** to data in the JSON format, assign the data's URL to the [dataSource](/Documentation/ApiReference/UI_Widgets/dxScheduler/Configuration/#dataSource) option.  

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#schedulerContainer").dxScheduler({
            dataSource: "http://url/to/json/data"
        });
    });

##### Angular

    <!--HTML-->
    <dx-scheduler
        dataSource="http://url/to/json/data">
    </dx-scheduler>

    <!--TypeScript-->
    import { DxSchedulerModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxSchedulerModule
        ],
        // ...
    })

---

Note that you can also use a JSONP callback parameter supported by [jQuery.ajax()](http://api.jquery.com/jQuery.ajax/).

---

##### jQuery

    <!--JavaScript-->$(function() {
        $("#schedulerContainer").dxScheduler({
            dataSource: "http://url/to/json/data/jsonpdata?callback=?"
        });
    });

##### Angular

    <!--HTML-->
    <dx-scheduler
        dataSource="http://url/to/json/data/jsonpdata?callback=?">
    </dx-scheduler>

    <!--TypeScript-->
    import { DxSchedulerModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxSchedulerModule
        ],
        // ...
    })

---

If you need to process data after obtaining it, implement the [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/). For details, see the [Custom Sources](/Documentation/Guide/Widgets/Scheduler/Data_Binding/Custom_Sources/) topic.

#####See Also#####
- [Scheduler Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Scheduler/Overview/jQuery/Light/)
- [Scheduler API Reference](/Documentation/ApiReference/UI_Widgets/dxScheduler/)

[tags]scheduler, data binding, provide data, json, jsonp