<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->A container widget that prevents its content from being rendered until it is forced manually.<!--/d-->
===========================================================================
<!--module--><a href="/Documentation/16_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_defer_rendering">ui/defer_rendering</a><!--/module-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **DeferRendering** is a widget that waits for its content to be ready before rendering it. While the content is getting ready, the **DeferRendering** displays a loading indicator.
<!--/shortDescription-->

<!--fullDescription-->
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxDeferRendering` jQuery plug-in.

        <!--HTML-->
        <div id="deferRendering">
            <!--Widget content-->
        </div>

    <!---->

        <!--JavaScript-->
        var readyToRender = $.Deferred();
        //A function in which readyToRender is resolved
        //...
        $("#deferRendering").dxDeferRendering({
            renderWhen: readyToRender.promise();
        })

- **Knockout**  
 Add a **div** element and apply the `dxDeferRendering` binding to this element. 

        <!--HTML-->
        <div data-bind="dxDeferRendering: {
            renderWhen: modelIsReady
        }">
            <!--Widget content-->
        </div>
  
    <!---->
  
        <!--JavaScript-->
        var modelIsReady = $.Deferred();
        //A function in which modelIsReady is resolved
        //...
        var myViewModel = {
            modelIsReady: modelIsReady.promise()
        };
        ko.applyBindings(myViewModel);

- **AngularJS**  
 Add a **div** element and apply the `dx-defer-rendering` directive to this element.

        <!--HTML-->
        <div dx-defer-rendering="{
            renderWhen: modelIsReady
        }">
            <!--Widget content-->
        </div>

    <!---->

        <!--JavaScript-->
        var modelIsReady = $.Deferred();
        var myApp = angular.module('myApp', ['dx']);
        myApp.controller("demoController", function ($scope) {
            $scope.modelIsReady = modelIsReady.promise();
        });
        angular.element(document).ready(function () {
            angular.bootstrap(document, ['myApp']);
        });

Note that DevExtreme widgets require you to link the jQuery library to your application. To use the Knockout approach, the Knockout library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/Documentation/Guide/UI_Widgets/Basics/Installation/) article.

You can find the detailed information on principles of working with the widget in the [dxDeferRendering](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Individual_Widgets/#dxDeferRendering) section of the [Individual Widgets](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Individual_Widgets/) article.

<!--/fullDescription-->