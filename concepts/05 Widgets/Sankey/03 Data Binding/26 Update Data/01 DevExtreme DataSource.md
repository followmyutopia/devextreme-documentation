This technique applies to any data source as anything passed to the **Sankey**'s [dataSource](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/#dataSource) option is wrapped in the [DevExtreme DataSource](/Documentation/ApiReference/Data_Layer/DataSource/). To get the **DataSource** instance, call the **Sankey**'s [getDataSource()](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Methods/#getDataSource) method.

---

#####**jQuery**

    <!--JavaScript-->
    var sankeyDataSource = $('#sankeyContainer').dxSankey('getDataSource');

#####**AngularJS**

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function ($scope) {
            $scope.sankeyDataSource = {};
            $scope.sankeyOptions = {
                // ...
                onInitialized: function (e) {
                    $scope.sankeyDataSource = e.component.getDataSource();  
                }
            };
        });

#####**Knockout**

    <!--JavaScript-->var viewModel = {
        sankeyDataSource: {},
        sankeyOptions: {
            // ...
            onInitialized: function (e) {
                viewModel.sankeyDataSource = e.component.getDataSource();    
            }
        }
    };
    
    ko.applyBindings(viewModel);
    
##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxSankeyModule, DxSankeyComponent } from 'devextreme-angular';
    import DataSource from 'devextreme/data/data_source';
    // ...
    export class AppComponent {
        @ViewChild(DxSankeyComponent) sankey: DxSankeyComponent;
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

After that, you should access the underlying [store](/Documentation/Guide/Data_Layer/Data_Layer/#Data_Layer_Data_Layer_Creating_DataSource_What_Are_Stores) with the [store()](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#store) method, and call the store's [insert(values)](/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#insertvalues), [update(key, values)](/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#updatekey_values) or [remove(key)](/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#removekey) method to modify data. Note that to use the **update(key, values)** and **remove(key)** methods, you need to specify the store's [key](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#key) property. After all modifications are made, call the **DataSource**'s [load](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load) method to make the **Sankey** reflect the changes.

    <!--JavaScript-->
    sankeyDataSource.store().update(['Brazil', 'Spain'], { weight: 6 });
    sankeyDataSource.store().remove(['Canada', 'Portugal']);
    sankeyDataSource.load();

[note] You can also use the **DataSource** to apply data shaping options, such as [filtering](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#filterfilterExpr) or [sorting](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#sortsortExpr) at runtime. After making changes, call the **load** method to update the **Sankey**.

#####See Also#####
#include common-link-callmethods
- [Data Layer - Overview](/Documentation/Guide/Data_Layer/Data_Layer/)
- [Data Layer - DataSource Examples](/Documentation/Guide/Data_Layer/Data_Source_Examples/)
