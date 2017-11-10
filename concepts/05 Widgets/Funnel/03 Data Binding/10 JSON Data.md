To bind the **Funnel** to data in a JSON format, assign the data's URL to the [dataSource](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/#dataSource) option.  

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#funnelContainer").dxFunnel({
            dataSource: "http://www.example.com/dataservices/data.json",
            argumentField: 'arg',
            valueField: 'val'
        });
    });

##### Angular

    <!--HTML-->
    <dx-funnel
        dataSource="http://www.example.com/dataservices/data.json"
        argumentField="arg"
        valueField="val">
    </dx-funnel>

    <!--TypeScript-->
    import { DxFunnelModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxFunnelModule
        ],
        // ...
    })

---

Note that you can also use a JSONP callback parameter supported by [jQuery.ajax()](http://api.jquery.com/jQuery.ajax/).

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#funnelContainer").dxFunnel({
            dataSource: "http://www.example.com/dataservices/jsonpdata?callback=?",
            argumentField: 'arg',
            valueField: 'val'
        });
    });

##### Angular

    <!--HTML-->
    <dx-funnel
        dataSource="http://www.example.com/dataservices/jsonpdata?callback=?"
        argumentField="arg"
        valueField="val">
    </dx-funnel>

    <!--TypeScript-->
    import { DxFunnelModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxFunnelModule
        ],
        // ...
    })

---

If you need to process data after obtaining it, implement the [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/). For details, see the [Custom Sources](/Documentation/Guide/Widgets/Funnel/Data_Binding/Custom_Sources/) topic.

#####See Also#####
- [Update Data in the Funnel](/Documentation/Guide/Widgets/Funnel/Data_Binding/Update_Data/)
