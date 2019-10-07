[note] This technique requires the [key](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#key) specified in the [store](/Documentation/Guide/Data_Layer/Data_Layer/#Data_Layer_Data_Layer_Creating_DataSource_What_Are_Stores).

To get the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) instance, call the **Sankey**'s [getDataSource()](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Methods/#getDataSource) method:

---

#####**jQuery**

    <!--JavaScript-->
    var sankeyDataSource = $("#sankeyContainer").dxSankey("getDataSource");

#####**AngularJS**

    <!--JavaScript-->
    angular.module("DemoApp", ["dx"])
        .controller("DemoController", function($scope) {
            $scope.sankeyDataSource = {};
            $scope.sankeyOptions = {
                // ...
                onInitialized: function(e) {
                    $scope.sankeyDataSource = e.component.getDataSource();  
                }
            };
        });

#####**Knockout**

    <!--JavaScript-->var viewModel = {
        sankeyDataSource: {},
        sankeyOptions: {
            // ...
            onInitialized: function(e) {
                viewModel.sankeyDataSource = e.component.getDataSource();    
            }
        }
    };
    
    ko.applyBindings(viewModel);
    
##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { DxSankeyModule, DxSankeyComponent } from "devextreme-angular";
    import DataSource from "devextreme/data/data_source";
    // ...
    export class AppComponent {
        @ViewChild(DxSankeyComponent, { static: false }) sankey: DxSankeyComponent;
        // Prior to Angular 8
        // @ViewChild(DxSankeyComponent) sankey: DxSankeyComponent;
        sankeyDataSource: DataSource;
        getDataSource() {
            this.sankeyDataSource = this.sankey.instance.getDataSource();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxSankeyModule
        ],
        // ...
    })
    
---

Then, access the underlying store with the [store()](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#store) method, and call the store's [push(changes)](/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#pushchanges) method to modify data. The **Sankey** will be updated automatically.

    <!--JavaScript-->
    ds.store().push([
        { type: "update", key: "Oranges", data: { count: 10 } },
        { type: "remove", key: "Apples" }
    ]);

#####See Also#####
#include common-link-callmethods
- [Data Layer - Overview](/Documentation/Guide/Data_Layer/Data_Layer/)
- [Data Layer - DataSource Examples](/Documentation/Guide/Data_Layer/Data_Source_Examples/)
