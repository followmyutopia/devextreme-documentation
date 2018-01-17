All operations with widget options are carried out through the scope properties these options are bound to. To bind a widget option to a scope property, use the **bindingOptions** object as shown in the following code. Note that the scope property name in this object is enclosed in quotes.

    <!--HTML--><div ng-controller="Controller">
        <div dx-check-box="{
            bindingOptions: {
                value: 'checkBoxValue'
            }
        }"></div>
    </div>

<!---->

    <!--JavaScript-->function Controller ($scope) {
        $scope.checkBoxValue = true;
    }

Now, if you change the `checkBoxValue` scope property in code, the [CheckBox](/Documentation/Guide/Widgets/CheckBox/Overview/) will receive the changes. And vice versa, if an end user selects the **CheckBox** in the UI, the `checkBoxValue` scope property will be updated.

If you bind a widget to a collection, the widget gets updated only when an object is added to or removed from this collection. To make the widget listen for changes even in the _fields_ of any object in the collection, configure the **bindingOptions** object as follows.

    <!--HTML--><div ng-controller="Controller">
        <div dx-chart="{
            bindingOptions: {
                dataSource: {
                    <!-- Enables deep tracking of changes -->
                    deep: true,
                    <!-- Specifies which scope property to track changes in -->
                    dataPath: 'fruitsData'
                }
            },
            series: { argumentField: 'fruit', valueField: 'total' }
        }"></div>
    </div>
    
<!---->

    <!--JavaScript-->function Controller ($scope) {
        $scope.fruitsData = [
            { fruit: 'Oranges', total: 10 },
            { fruit: 'Apples', total: 15 },
            { fruit: 'Bananas', total: 9 }
        ];
    }

The code above forces the widget to use the [$watch](https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$watch) listener instead of the default [$watchCollection](https://docs.angularjs.org/api/ng/type/$rootScope.Scope#$watchCollection) listener. Note that the use of the **$watch** listener may impact the widget's peformance.

[note]We strongly do _not_ recommend binding a widget to the [DevExtreme DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) using the **bindingOptions** object. The **DataSource** contains internal circular links that get updated during its lifetime. Tracking changes in them by means of the AngularJS Framework may lead to unexpected results. Instead of using the **bindingOptions** object, simply assign the scope property with the **DataSource** to the **dataSource** option of the widget. If you nevertheless decided to use the **bindingOptions** object, set its **deep** field to **false** explicitly.

<a href="http://www.youtube.com/watch?v=iIZj6hOFg0o&index=42&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- **API Reference**.**WidgetName**.**Configuration**, for example, **API Reference**.[Chart](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart).[Configuration](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/)
- [Create and Configure a Widget](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget)

[tags]basics, angularjs, change options, get, set, runtime, binding options, deep tracking, watch, watchCollection, two-way binding