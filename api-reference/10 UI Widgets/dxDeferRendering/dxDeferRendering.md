<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--module--><a href="/Documentation/17_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_defer_rendering">ui/defer_rendering</a><!--/module-->
<!--export-->default<!--/export-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **DeferRendering** is a widget that waits for its content to be ready before rendering it. While the content is getting ready, the **DeferRendering** displays a loading indicator.
<!--/shortDescription-->

<!--fullDescription-->
You can create the widget using one of the following approaches.

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

        <!--HTML--><div id="deferRendering">
            <!-- Widget content -->
        </div>

        <!--JavaScript-->
        var readyToRender = $.Deferred();
        // Here goes a function that resolves the "readyToRender" Deferred object at a specific moment
        // ...
        $(function () {
            $("#deferRendering").dxDeferRendering({
                renderWhen: readyToRender.promise();
            });
        });

#####[**Angular**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/)  

        <!--HTML-->
        <dx-defer-rendering
            [renderWhen]="modelReady"
        >
            <!-- Widget content -->
        </dx-defer-rendering>

        <!--JavaScript-->
        var modelIsReady = $.Deferred();
        // Here goes a function that resolves the "readyToRender" Deferred object at a specific moment
        // ...
        export class AppComponent
            modelReady = modelIsReady.promise();
        }

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

        <!--HTML--><div ng-controller="DemoController">
            <div dx-defer-rendering="{
                renderWhen: modelIsReady
            }">
                <!-- Widget content -->
            </div>
        </div>

        <!--JavaScript-->var modelIsReady = $.Deferred();
        // Here goes a function that resolves the "readyToRender" Deferred object at a specific moment
        // ...
        angular.module('DemoApp', ['dx'])
            .controller("DemoController", function ($scope) {
                $scope.modelIsReady = modelIsReady.promise();
            });
            
#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

        <!--HTML-->
        <div data-bind="dxDeferRendering: {
            renderWhen: modelIsReady
        }">
            <!-- Widget content -->
        </div>
  
        <!--JavaScript-->
        var modelIsReady = $.Deferred();
        // Here goes a function that resolves the "readyToRender" Deferred object at a specific moment
        // ...
        var viewModel = {
            modelIsReady: modelIsReady.promise()
        };
        ko.applyBindings(viewModel);

---

Note that DevExtreme widgets require you to link the jQuery library to your application. To use the Knockout approach, the Knockout library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.

#####See Also#####
- [DeferRendering](/Documentation/Guide/Widgets/DeferRendering/Overview/)

<!--/fullDescription-->