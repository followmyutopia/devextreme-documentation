<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->object<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the object that represents a root namespace of the application.
<!--/shortDescription-->

<!--fullDescription-->
The object passed to this option should be previously defined. The following example illustrates how to create the MyAppNamespace object and pass it to the **namespace** configuration option of the application.

    <!--JavaScript-->window.MyAppNamespace = {};
    $(function() {
        MyAppNamespace.app = new DevExpress.framework.html.HtmlApplication(
            { namespace: MyAppNamespace }
        );
        MyAppNamespace.app.router.register(":view/:name", { view: "home", name: '' });
        MyAppNamespace.app.navigate();
    });

When defining the functions that return [ViewModels](/Documentation/Guide/SPA_Framework/Views_and_Layouts/#Define_a_View) for application views, create these functions within the application's namespace specified via the **namespace** option.

    <!--JavaScript-->MyAppNamespace.home = Function() {
        var viewModel = {
            //...
        }
        return viewModel;
    };
<!--/fullDescription-->