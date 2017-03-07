To call a widget method, you can apply techniques described in the [Call Methods](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods) topic for jQuery.

As an alternative, you can save the widget instance in a scope property once the widget is initialized...

    <!--JavaScript-->function Controller ($scope) {
        $scope.menuInstance = {};
        $scope.menuOptions = {
            // ...
            onInitialized: function (e) {
                $scope.menuInstance = e.component;    
            }
        };
    }

... and call any method of the saved instance afterwards.

    <!--JavaScript-->menuInstance.repaint();

#####See Also#####
- [API Reference](/Documentation/ApiReference) | **WidgetName** | **Methods**

[tags]basics, angularjs, call methods, widget instance