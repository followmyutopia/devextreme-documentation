===================================================================
===================================================================

<!--shortDescription-->
Pushes changes to the store and then to the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/).
<!--/shortDescription-->

<!--paramName1-->changes<!--/paramName1-->
<!--paramType1-->Array<any><!--/paramType1-->
<!--paramDescription1-->
Changes to be pushed. 
<!--/paramDescription1-->

<!--fullDescription-->
This method allows you to pass changes received from a push server to the store and then to the **DataSource**. There are three possible changes:

---
#####jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.{WidgetName}({
        // {WidgetName} is configured here
    });
 
    store.push([{ type: "insert", data: Any }]);
    // or
    // store.push([{ type: "update", data: Any, key: Any }]);
    // or 
    // store.push([{ type: "remove", key: Any }]);

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
            this.store.push([{ type: "insert", data: Any }]);
            // or
            // this.store.push([{ type: "update", data: Any, key: Any }]);
            // or
            // this.store.push([{ type: "remove", key: Any }]);
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