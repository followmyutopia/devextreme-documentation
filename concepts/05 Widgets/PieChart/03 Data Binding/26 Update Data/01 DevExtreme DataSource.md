This technique is universal for any data source as anything passed to the [dataSource](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/#dataSource) option of the **PieChart** ends up wrapped in the [DevExtreme DataSource](/Documentation/ApiReference/Data_Layer/DataSource/). To get the **DataSource** instance, call the [getDataSource()](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Methods/#getDataSource) method of the **PieChart**.

---

#####**jQuery**

    <!--JavaScript-->var ds = $("#pieChartContainer").dxPieChart("getDataSource");

#####**AngularJS**

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller('DemoController', function ($scope) {
            $scope.ds = {};
            $scope.pieChartOptions = {
                // ...
                onInitialized: function (e) {
                    $scope.ds = e.component.getDataSource();  
                }
            };
        });

#####**Knockout**

    <!--JavaScript-->var viewModel = {
        ds: {},
        pieChartOptions: {
            // ...
            onInitialized: function (e) {
                viewModel.ds = e.component.getDataSource();    
            }
        }
    };
    
    ko.applyBindings(viewModel);
    
##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxPieChartModule, DxPieChartComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxPieChartComponent) pieChart: DxPieChartComponent;
        ds: any = {};
        getDataSource() {
            this.ds = this.pieChart.instance.getDataSource();
        }
    }
    
---

After that, you need to access the underlying [Store](/Documentation/Guide/Data_Layer/Data_Layer/#Data_Layer_Data_Layer_Creating_DataSource_What_Are_Stores) with the [store()](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#store) method, and call the [insert(values)](/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#insertvalues), [update(key, values)](/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#updatekey_values) or [remove(key)](/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#removekey) method of the Store to modify data. Note that in order to use the **update(key, values)** and **remove(key)** methods, you need to specify the [key](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#key) property for the Store. After all modifications are made, call the [load](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load) method of the **DataSource** instance to make the **PieChart** reflect the changes.

    <!--JavaScript-->ds.store().update("Oranges", { count: 10 });
    ds.store().remove("Apples");
    ds.load();

[note] You can also apply data shaping options, such as [filtering](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#filterfilterExpr), [sorting](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#sortsortExpr), etc., using the **DataSource** at runtime. In any case, call the **load** method afterwards to notify the **PieChart** of the changes.

#####See Also#####
- **Call Methods**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Call_Methods/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/) | [ASP.NET MVC](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Calling_Methods)
- [Data Layer - Overview](/Documentation/Guide/Data_Layer/Data_Layer/)
- [Data Layer - DataSource Examples](/Documentation/Guide/Data_Layer/Data_Source_Examples/)
