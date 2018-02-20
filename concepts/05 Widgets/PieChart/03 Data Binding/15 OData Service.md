To bind the **PieChart** to data provided by an OData service, use the [ODataStore](/Documentation/ApiReference/Data_Layer/ODataStore/).

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
            dataSource: new DevExpress.data.DataSource({
                store: {
                    type: 'odata',
                    url: 'http://www.example.com/dataservices/odata/targetData',
                    key: 'Id'
                },
                paginate: false
            })
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxPieChartModule } from 'devextreme-angular';
    import 'devextreme/data/odata/store';
    import DataSource from 'devextreme/data/data_source';
    // ...
    export class AppComponent {
        pieChartDataSource = new DataSource({
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
            DxPieChartModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-pie-chart
        [dataSource]="pieChartDataSource">
    </dx-pie-chart>

---

As you may notice, in the previous code, the **ODataStore** is not declared explicilty. Instead, it is wrapped in the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) instance. That is because the **PieChart** requires [pagination](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#paginate) to be off in order to prevent data from partitioning. Other than that, the **DataSource** provides wide data-processing capabilities. For example, it can filter data.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#pieChartContainer").dxPieChart({
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
            })
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxPieChartModule } from 'devextreme-angular';
    import 'devextreme/data/odata/store';
    import DataSource from 'devextreme/data/data_source';
    // ...
    export class AppComponent {
        pieChartDataSource = new DataSource({
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
            DxPieChartModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-pie-chart
        [dataSource]="pieChartDataSource">
    </dx-pie-chart>

---

#####See Also#####
- [DataSource Examples - OData](/Documentation/Guide/Data_Layer/Data_Source_Examples/#OData)
- [Bind Series to Data](/Documentation/Guide/Widgets/PieChart/Data_Binding/Bind_Series_to_Data/)
- [Update Data in the PieChart](/Documentation/Guide/Widgets/PieChart/Data_Binding/Update_Data/)
