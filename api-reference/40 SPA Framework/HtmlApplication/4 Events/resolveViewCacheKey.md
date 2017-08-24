<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->event<!--/type-->
===========================================================================

<!--shortDescription-->
Fires before the application searches for a cached view that matches the key generated for the current URI.
<!--/shortDescription-->

<!--fullDescription-->
If the application finds a view with the specified key, it uses this view. Otherwise, it creates a new view instance. The generated key is held in the key field of the event arguments object passed to the event handler. You can pass another key to the key field of the event arguments object to use a cached view created for another URI. In this case, the [viewShowing]({basewidgetpath}/Events/#viewShowing) event fires with actual parameters of the current URI, which enables you to update the loaded view according to values of these parameters.

In the following example, the application uses the same cached view instance for all URIs navigating to the Greeting view ("Greeting/hello", "Greeting/goodbye", etc.), regardless the "message" parameter. It just updates the view according to the message parameter.

    <!--JavaScript-->
    MyApp.app.on("resolveViewCacheKey", function(args) {
        args.key = args.routeData.view;
    });

    MyApp.app.router.register(":view/:message", { view: "Greeting", message: undefined });

    MyApp.Greeting = function(params, viewInfo) {
        var updateViewModel = function(params) {
            viewModel.message(params.message);
        };

        var viewModel = {
            message: ko.observable(),

            //Update the loaded view according to the current URI paramaters
            viewShowing: function(args) {
                updateViewModel(args.params);
            }
        };
        updateViewModel(params);
        return viewModel;
    };

[note]If caching is disabled, the application always creates a new instance of a view.
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Provides function parameters.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->key<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->string<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
Specifies the key used to search the cached view. Change this field value to use a cached view associated with another URI.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->navigationItem<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->object<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
An object that holds the target item of the application navigation history.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->routeData<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
An objects that holds target URI parameters produced by application's router.
<!--/typeFunctionParamDescription1_field3-->
