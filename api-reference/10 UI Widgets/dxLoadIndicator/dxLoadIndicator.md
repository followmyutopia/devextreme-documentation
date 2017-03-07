<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->The dxLoadIndicator widget.<!--/d-->
<!--widgettree-->

<!--/widgettree-->
===========================================================================
<!--module--><a href="/Documentation/16_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_load_indicator">ui/load_indicator</a><!--/module-->
<!--inherits-->..\Widget\Widget.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **LoadIndicator** is a UI element notifying the viewer that a process is in progress.
<!--/shortDescription-->

<!--fullDescription-->
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxLoadIndicator` jQuery plug-in.

        <!--HTML-->
        <div id="loadIndicator"></div>

    <!---->

        <!--JavaScript-->
        $("#loadIndicator").dxLoadIndicator({
            visible: true
        });

- **Knockout**  
 Add a div element and apply the `dxLoadIndicator` binding to this element.

        <!--HTML-->
        <div data-bind="dxLoadIndicator: {
            visible: true
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-load-indicator` directive to this element.

        <!--HTML-->
        <div dx-load-indicator="{
            visible: true
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/Documentation/Guide/UI_Widgets/Basics/Installation/) article.

You can find detailed information on the principles of working with the widget in the [dxLoadIndicator section](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Individual_Widgets/#dxLoadIndicator) of the [Individual Widgets](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Individual_Widgets/) article.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogsandnotificationsloadindicatorloadindicatorloadindicator/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<!--/fullDescription-->