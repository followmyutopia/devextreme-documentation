To bind the **Funnel** to data provided by an OData service, use the [ODataStore](/Documentation/ApiReference/Data_Layer/ODataStore/).

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#funnelContainer").dxFunnel({
            dataSource: new DevExpress.data.DataSource({
                store: {
                    type: 'odata',
                    url: 'http://www.example.com/dataservices/odata/targetData',
                    key: 'Id'
                },
                paginate: false
            }),
            argumentField: 'arg',
            valueField: 'val'
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxFunnelModule } from 'devextreme-angular';
    import 'devextreme/data/odata/store';
    import DataSource from 'devextreme/data/data_source';
    // ...
    export class AppComponent {
        funnelDataSource = new DataSource({
            store: {
                type: 'odata',
                url: 'http://www.example.com/dataservices/odata/targetData',
                key: 'Id'
            },
            paginate: false
        });
    }
    @NgModule({
        imports: [
            // ...
            DxFunnelModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-funnel
        [dataSource]="funnelDataSource"
        argumentField="arg"
        valueField="val">
    </dx-funnel>

---

As you may notice, in the previous code, the **ODataStore** is not declared explicilty. Instead, it is wrapped in the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) instance. That is because the **Funnel** requires [pagination](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate) to be off in order to prevent data from partitioning. Other than that, the **DataSource** provides wide data-processing capabilities. For example, it can filter data.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#funnelContainer").dxFunnel({
            dataSource: new DevExpress.data.DataSource({
                store: {
                    type: 'odata',
                    url: 'http://www.example.com/dataservices/odata/targetData',
                    key: 'Id'
                },
                paginate: false,
                filter: [
                    ['Id', '>=', 6],
                    ['Id', '<=', 8]
                ]
            }),
            argumentField: 'arg',
            valueField: 'val'
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxFunnelModule } from 'devextreme-angular';
    import 'devextreme/data/odata/store';
    import DataSource from 'devextreme/data/data_source';
    // ...
    export class AppComponent {
        funnelDataSource = new DataSource({
            store: {
                type: 'odata',
                url: 'http://www.example.com/dataservices/odata/targetData',
                key: 'Id'
            },
            paginate: false,
            filter: [
                ['Id', '>=', 6],
                ['Id', '<=', 8]
            ]
        });
    }
    @NgModule({
        imports: [
            // ...
            DxFunnelModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-funnel
        [dataSource]="funnelDataSource"
        argumentField="arg"
        valueField="val">
    </dx-funnel>

---

#####See Also#####
- [DataSource Examples - OData](/Documentation/Guide/Data_Layer/Data_Source_Examples/#OData)
- [Update Data in the Funnel](/Documentation/Guide/Widgets/Funnel/Data_Binding/Update_Data/)
