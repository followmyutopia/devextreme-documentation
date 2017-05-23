[note]Use the technique described here only if your data source is a [JavaScript array](/Documentation/Guide/Widgets/Chart/Data_Binding/Simple_Array/Array_Only/). Otherwise, update **Chart** data [through the DataSource instance](/Documentation/Guide/Widgets/Chart/Data_Binding/Update_Data/#DevExtreme_DataSource).

Declare two-way data binding between the [dataSource](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#dataSource) option and the [scope](https://docs.angularjs.org/guide/scope) property that contains an array. For this, configure the **bindingOptions** object of the **Chart** as follows.

    <!--HTML--><div ng-controller="DemoController">
        <div dx-chart="{
            ...
            bindingOptions: {
                dataSource: 'fruits'
            }
        }"></div>
    </div>

<!---->

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller('DemoController', function ($scope) {
            $scope.fruits = [
                { fruit: 'Apples', count: 10 },
                { fruit: 'Oranges', count: 12 },
                { fruit: 'Lemons', count: 15 }
            ];
        });

Now, whenever an item is added or removed from the `fruits` array, the **Chart** will be updated accordingly. If you need to track changes in objects, configure the **bindingOptions** object as follows.

    <!--HTML--><div ng-controller="DemoController">
        <div dx-chart="{
            ...
            bindingOptions: {
                dataSource: {
                    dataPath: 'fruits',
                    deep: true
                }
            }
        }"></div>
    </div>

In this case, the **Chart** will use the [$watch](https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$watch) listener instead of the default [$watchCollection](https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$watchCollection) listener. Note that the use of the **$watch** listener may impact the **Chart**'s peformance.

#####See Also#####
- [Change Options - AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Change_Options/)
- [Chart API Reference](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/)
