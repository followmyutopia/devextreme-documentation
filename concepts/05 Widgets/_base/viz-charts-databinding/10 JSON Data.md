To bind the **{WidgetName}** to data in a JSON format, assign the data's URL to the [dataSource](/Documentation/ApiReference/Data_Visualization_Widgets/dx{WidgetName}/Configuration/#dataSource) option.  

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            dataSource: "http://www.example.com/dataservices/data.json",
            series: {
                // ...
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-{widget-name}
        dataSource="http://www.example.com/dataservices/data.json">
        <dxi-series ... ></dxi-series>
    </dx-{widget-name}>

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
	@NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })

---

Note that you can also use a JSONP callback parameter supported by [jQuery.ajax()](http://api.jquery.com/jQuery.ajax/).

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            dataSource: "http://www.example.com/dataservices/jsonpdata?callback=?",
            series: {
                // ...
            }
        });
    });

##### Angular

    <!--HTML-->
    <dx-{widget-name}
        dataSource="http://www.example.com/dataservices/jsonpdata?callback=?">
        <dxi-series ... ></dxi-series>
    </dx-{widget-name}>

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
	@NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })

---

If you need to process data after obtaining it, implement the [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/). For details, see the [Custom Sources](/Documentation/Guide/Widgets/{WidgetName}/Data_Binding/Custom_Sources/) topic.

#if Chart

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Charts/ClientSideDataProcessing/jQuery/Light/"
}

#endif

#####See Also#####
- [Bind Series to Data](/Documentation/Guide/Widgets/{WidgetName}/Data_Binding/Bind_Series_to_Data/)
- [Update Data in the {WidgetName}](/Documentation/Guide/Widgets/{WidgetName}/Data_Binding/Update_Data/)
