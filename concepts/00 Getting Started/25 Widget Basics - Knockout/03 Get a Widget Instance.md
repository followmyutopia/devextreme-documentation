To get a widget instance, save it in a view model property once the widget is initialized:

    <!--JavaScript-->var viewModel = {
        menuInstance: {},
        menuOptions: {
            // ...
            onInitialized: function (e) {
                viewModel.menuInstance = e.component;    
            }
        }
	};

	ko.applyBindings(viewModel);

Alternatively, you can apply techniques from the [jQuery article](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Get_a_Widget_Instance/).

#####See Also#####
- [Change Options](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Change_Options/)
- [Call Methods](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/)
- [Handle Events](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/)