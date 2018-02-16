To bind the **{WidgetName}** to data provided by an OData service, use the [ODataStore](/Documentation/ApiReference/Data_Layer/ODataStore/).

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            dataSource: new DevExpress.data.DataSource({
                store: {
                    type: 'odata',
                    url: 'http://www.example.com/dataservices/odata/targetData',
                    key: 'ID'
                },
                paginate: false
            }),
            series: {
                // ...
            }
        });
    });

##### Angular

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from 'devextreme-angular';
    import 'devextreme/data/odata/store';
    import DataSource from 'devextreme/data/data_source';
    // ...
    export class AppComponent {
        {widgetName}DataSource = new DataSource({
            store: {
                type: 'odata',
                url: 'http://www.example.com/dataservices/odata/targetData',
                key: 'ID'
            },
            paginate: false
        });
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })

    <!--HTML-->
    <dx-{widget-name} ...
        [dataSource]="{widgetName}DataSource">
        <dxi-series ... ></dxi-series>
    </dx-{widget-name}>

---

As you may notice, in the previous code, the **ODataStore** is not declared explicilty. Instead, it is wrapped in the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) instance. That is because the **{WidgetName}** requires [pagination](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate) to be off in order to prevent data from partitioning. Other than that, the **DataSource** provides wide data-processing capabilities. For example, it can filter data.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            dataSource: new DevExpress.data.DataSource({
                store: {
                    type: 'odata',
                    url: 'http://www.example.com/dataservices/odata/targetData',
                    key: 'ID'
                },
                paginate: false,
                filter: [
                    ['ID', '>=', 6],
                    ['ID', '<=', 8]
                ]
            }),
            series: {
                // ...
            }
        });
    });

##### Angular

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from 'devextreme-angular';
    import 'devextreme/data/odata/store';
    import DataSource from 'devextreme/data/data_source';
    // ...
    export class AppComponent {
        {widgetName}DataSource = new DataSource({
            store: {
                type: 'odata',
                url: 'http://www.example.com/dataservices/odata/targetData',
                key: 'ID'
            },
            paginate: false,
            filter: [
                ['ID', '>=', 6],
                ['ID', '<=', 8]
            ]
        });
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })

    <!--HTML-->
    <dx-{widget-name} ...
        [dataSource]="{widgetName}DataSource">
        <dxi-series ... ></dxi-series>
    </dx-{widget-name}>

---

#if Chart

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Charts/ServerSideDataProcessing/jQuery/Light/"
}

#endif

#####See Also#####
- [Bind Series to Data](/Documentation/Guide/Widgets/{WidgetName}/Data_Binding/Bind_Series_to_Data/)
- [Update Data in the {WidgetName}](/Documentation/Guide/Widgets/{WidgetName}/Data_Binding/Update_Data/)
- [What Are Stores](/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores)
- [DataSource Examples - OData](/Documentation/Guide/Data_Layer/Data_Source_Examples/#OData)
