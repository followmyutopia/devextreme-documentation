To bind the **Sankey** to data in a JSON format, assign the data's URL to the [dataSource](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/#dataSource) option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $('#sankeyContainer').dxSankey({
            dataSource: 'http://www.example.com/dataservices/data.json',
            sourceField: 'from',
            targetField: 'to',
            weightField: 'amount'
        });
    });

##### Angular

    <!--HTML-->
    <dx-sankey
        dataSource="http://www.example.com/dataservices/data.json"
        sourceField="from"
        targetField="to"
        weightField="amount">
    </dx-sankey>

    <!--TypeScript-->
    import { DxSankeyModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxSankeyModule
        ],
        // ...
    })

---

Note that you can also use a [jQuery.ajax()](http://api.jquery.com/jQuery.ajax/)-supported JSONP callback parameter.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $('#sankeyContainer').dxSankey({
            dataSource: 'http://www.example.com/dataservices/jsonpdata?callback=?',
            sourceField: 'from',
            targetField: 'to',
            weightField: 'amount'
        });
    });

##### Angular

    <!--HTML-->
    <dx-sankey
        dataSource="http://www.example.com/dataservices/jsonpdata?callback=?"
        sourceField="from"
        targetField="to"
        weightField="amount">
    </dx-sankey>

    <!--TypeScript-->
    import { DxSankeyModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxSankeyModule
        ],
        // ...
    })

---

You should implement the [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/) if you need to process data after obtaining it. Refer to the [Custom Sources](/Documentation/Guide/Widgets/Sankey/Data_Binding/Custom_Sources/) topic for more information.

#####See Also#####
- [Update Data in the Sankey](/Documentation/Guide/Widgets/Sankey/Data_Binding/Update_Data/)
