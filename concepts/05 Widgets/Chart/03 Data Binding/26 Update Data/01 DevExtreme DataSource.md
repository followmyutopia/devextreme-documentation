[note] This technique requires the [key](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#key) specified in the [store](/Documentation/Guide/Data_Layer/Data_Layer/#Data_Layer_Data_Layer_Creating_DataSource_What_Are_Stores).

To get the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) instance, call the **Chart**'s [getDataSource()](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#getDataSource) method:

---

#####**jQuery**

    <!--JavaScript-->var ds = $("#chartContainer").dxChart("getDataSource");

#####**AngularJS**

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller('DemoController', function ($scope) {
            $scope.ds = {};
            $scope.chartOptions = {
                // ...
                onInitialized: function (e) {
                    $scope.ds = e.component.getDataSource();  
                }
            };
        });

#####**Knockout**

    <!--JavaScript-->var viewModel = {
        ds: {},
        chartOptions: {
            // ...
            onInitialized: function (e) {
                viewModel.ds = e.component.getDataSource();    
            }
        }
    };
    
    ko.applyBindings(viewModel);
    
##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxChartModule, DxChartComponent } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxChartComponent, { static: false }) chart: DxChartComponent;
        // Prior to Angular 8
        // @ViewChild(DxChartComponent) chart: DxChartComponent;
        ds: any = {};
        getDataSource() {
            this.ds = this.chart.instance.getDataSource();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })
    
---

Then, access the underlying store with the [store()](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#store) method, and call the store's [push(changes)](/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#pushchanges) method to modify data. The **Chart** will be updated automatically.

    <!--JavaScript-->
    ds.store().push([
        { type: "update", key: "Oranges", data: { count: 10 } },
        { type: "remove", key: "Apples" }
    ]);

#####See Also#####
#include common-link-callmethods
- [DevExtreme Data Layer - Overview](/Documentation/Guide/Data_Layer/Data_Layer/)
- [DevExtreme Data Layer - DataSource Examples](/Documentation/Guide/Data_Layer/Data_Source_Examples/)
