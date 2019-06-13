Declare two-way binding between the [dataSource](/Documentation/ApiReference/Data_Visualization_Widgets/dxFunnel/Configuration/#dataSource) option and the <a href="https://docs.angularjs.org/guide/scope" target="_blank">scope</a> property that contains an array. For this, configure the **bindingOptions** object of the **Funnel** as follows.

    <!--HTML--><div ng-controller="DemoController">
        <div dx-funnel="{
            bindingOptions: {
                dataSource: 'fruits'
            },
            argumentField: 'fruit',
            valueField: 'count'
        }"></div>
    </div>

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller('DemoController', function ($scope) {
            $scope.fruits = [
                { fruit: 'Apples', count: 10 },
                { fruit: 'Oranges', count: 12 },
                { fruit: 'Lemons', count: 15 }
            ];
        });

Now, whenever an item is added or removed from the `fruits` array, the **Funnel** will be updated accordingly. If you need to track changes in objects, configure the **bindingOptions** object as follows.

    <!--HTML--><div ng-controller="DemoController">
        <div dx-funnel="{
            bindingOptions: {
                dataSource: {
                    dataPath: 'fruits',
                    deep: true
                }
            },
            argumentField: 'fruit',
            valueField: 'count'
        }"></div>
    </div>

In this case, the **Funnel** will use the <a href="https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$watch" target="_blank">$watch</a> listener instead of the default <a href="https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$watchCollection" target="_blank">$watchCollection</a> listener. Note that the use of the **$watch** listener may impact the **Funnel**'s peformance.

#####See Also#####
- [Change Options - AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Change_Options/)
