Declare two-way binding between the [dataSource](/Documentation/ApiReference/Data_Visualization_Widgets/dxSankey/Configuration/#dataSource) option and the [scope](https://docs.angularjs.org/guide/scope) property that contains an array. To do this, configure the **bindingOptions** object in the **Sankey** as follows:

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-sankey="{
            bindingOptions: {
                dataSource: 'sankeyData'
            }
        }"></div>
    </div>

    <!--JavaScript-->
    angular.module("DemoApp", ["dx"])
        .controller("DemoController", function($scope) {
            $scope.sankeyData = [
                { source: "Brazil", target: "Spain", weight: 4 },
                { source: "Brazil", target: "Portugal", weight: 5 },
                { source: "Brazil", target: "England", weight: 2 },
                { source: "Canada", target: "Portugal", weight: 2 },
                { source: "Canada", target: "England", weight: 1 },
                { source: "Mexico", target: "Portugal", weight: 9 },
                { source: "Mexico", target: "Spain", weight: 5 }
            ];
        });

Now, whenever an item is added or removed from the `sankeyData` array, the **Sankey** is updated accordingly. If you need to track changes in objects, configure the **bindingOptions** object as follows:

    <!--HTML--><div ng-controller="DemoController">
        <div dx-sankey="{
            bindingOptions: {
                dataSource: {
                    dataPath: 'sankeyData',
                    deep: true
                }
            }
        }"></div>
    </div>

In this case, the **Sankey** uses the [$watch](https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$watch) listener instead of the default [$watchCollection](https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$watchCollection) listener. Note that this can impact the **Sankey**'s peformance.

#####See Also#####
- [Change Options - AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Change_Options/)
