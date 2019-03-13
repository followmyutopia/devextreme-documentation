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

The **DataSource** does not automatically sort, group, filter, or otherwise shape pushed data. If it should, enable the [reshapeOnPush](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#reshapeOnPush) option. We also recommend specifying the [pushAggregationTimeout](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#pushAggregationTimeout) to reduce the number of updates and recalculations.

When data is grouped or paginated, the widget bound to the **DataSource** ignores inserted data items until data is reshaped. Disable [grouping](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group) and [paging](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate) or enable **reshapeOnPush** for the inserted data items to appear immediately after they are pushed. The **DataGrid** and **TreeList** widgets have individual [grouping](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#groupIndex) and [paging](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/paging/#enabled) options. Use them instead of the corresponding **DataSource** options.

#include common-demobutton-named with {
    url: "/Demos/WidgetsGallery/Demo/DataGrid/RealTimeUpdates/jQuery/Light/",
    name: "DataGrid Real-Time Updates"
}
#include common-demobutton-named with {
    url: "/Demos/WidgetsGallery/Demo/DataGrid/SignalRService/jQuery/Light/",
    name: "DataGrid SignalR"
}
#include common-demobutton-named with {
    url: "/Demos/WidgetsGallery/Demo/Charts/SignalRService/jQuery/Light/",
    name: "Chart SignalR"
}
#include common-demobutton-named with {
    url: "/Demos/WidgetsGallery/Demo/DataGrid/CollaborativeEditing/jQuery/Light/",
    name: "DataGrid Collaborative Editing"
}

#####See Also#####
- [Integration with Push Services](/Documentation/Guide/Data_Layer/Data_Layer/#Data_Modification/Integration_with_Push_Services)
- **API Reference.WidgetName.repaintChangesOnly**, for example, **API Reference**.[DataGrid](/Documentation/ApiReference/UI_Widgets/dxDataGrid/).[repaintChangesOnly](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#repaintChangesOnly)
<!--/fullDescription-->