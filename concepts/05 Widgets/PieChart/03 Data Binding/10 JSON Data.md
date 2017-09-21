To bind the **PieChart** to data in a JSON format, assign the URL referring to data to the [dataSource](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/#dataSource) option.  

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            dataSource: "http://www.example.com/dataservices/data.json"
        });
    });

##### Angular

    <!--HTML-->
    <dx-pie-chart
        dataSource="http://www.example.com/dataservices/data.json">
    </dx-pie-chart>

    <!--TypeScript-->
    import { DxPieChartModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxPieChartModule
        ],
        // ...
    })

---

Note that you can also use a JSONP callback parameter supported by [jQuery.ajax()](http://api.jquery.com/jQuery.ajax/).

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            dataSource: "http://www.example.com/dataservices/jsonpdata?callback=?"
        });
    });

##### Angular

    <!--HTML-->
    <dx-pie-chart
        dataSource="http://www.example.com/dataservices/jsonpdata?callback=?">
    </dx-pie-chart>

    <!--TypeScript-->
    import { DxPieChartModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxPieChartModule
        ],
        // ...
    })

---

If you need to process data after obtaining it, implement the [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/). For details, see the [Custom Sources](/Documentation/Guide/Widgets/PieChart/Data_Binding/Custom_Sources/) topic.

#####See Also#####
- [Bind Series to Data](/Documentation/Guide/Widgets/PieChart/Data_Binding/Bind_Series_to_Data/)
- [Update Data in the PieChart](/Documentation/Guide/Widgets/PieChart/Data_Binding/Update_Data/)
