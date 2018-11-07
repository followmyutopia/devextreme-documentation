===================================================================
===================================================================

<!--shortDescription-->
Pushes data changes to the store and notifies the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/).
<!--/shortDescription-->

<!--paramName1-->changes<!--/paramName1-->
<!--paramType1-->Array<any><!--/paramType1-->
<!--paramDescription1-->
Data changes to be pushed. 
<!--/paramDescription1-->

<!--fullDescription-->
There are three possible data change types:

---
#####jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.{WidgetName}({
        // {WidgetName} is configured here
    });
 
    store.push([{ type: "insert", data: data }]);
    store.push([{ type: "update", data: data, key: key }]);
    store.push([{ type: "remove", key: key }]);

#####Angular

    <!--TypeScript-->
    import {WidgetName} from "devextreme/data/{widget_name}";
    // ...
    export class AppComponent {
        store: {WidgetName};
        constructor() {
            this.store = new {WidgetName}({
                // {WidgetName} is configured here
            });
            this.store.push([{ type: "insert", data: data }]);
            this.store.push([{ type: "update", data: data, key: key }]);
            this.store.push([{ type: "remove", key: key }]);
        };
    }

---

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/DataGrid/SignalRService/jQuery/Light/"
}

#####See Also#####
- [onPush]({basewidgetpath}/Configuration/#onPush)
- **DataSource**.[pushAggregationTimeout](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#pushAggregationTimeout)
- **DataSource**.[reshapeOnPush](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#reshapeOnPush)
- **API Reference.WidgetName.repaintChangesOnly**, for example, API Reference.[DataGrid](/Documentation/ApiReference/UI_Widgets/dxDataGrid/).[repaintChangesOnly](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#repaintChangesOnly)
<!--/fullDescription-->