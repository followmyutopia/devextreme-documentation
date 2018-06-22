To get a widget instance, save it in a scope property once the widget is initialized:

    <!--JavaScript-->function Controller ($scope) {
        $scope.menuInstance = {};
        $scope.menuOptions = {
            // ...
            onInitialized: function (e) {
                $scope.menuInstance = e.component;    
            }
        };
    }

Alternatively, you can apply techniques from the [jQuery article](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Get_a_Widget_Instance/).

#####See Also#####
- [Change Options](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Change_Options/)
- [Call Methods](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/)
- [Handle Events](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/)