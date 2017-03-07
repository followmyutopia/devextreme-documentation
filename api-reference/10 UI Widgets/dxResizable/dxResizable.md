<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--module--><a href="/Documentation/17_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_resizable">ui/resizable</a><!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\DOMComponent\DOMComponent.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **Resizable** widget enables its content to be resizable in the UI.
<!--/shortDescription-->

<!--fullDescription-->
The **Resizable** widget is an element that can be resized by an end user. It displays data located inside the HTML element of the widget. You can specify minimum and maximum size using the [minHeight](/Documentation/ApiReference/UI_Widgets/dxResizable/Configuration/#minHeight), [minWidth](/Documentation/ApiReference/UI_Widgets/dxResizable/Configuration/#minWidth), [maxHeight](/Documentation/ApiReference/UI_Widgets/dxResizable/Configuration/#maxHeight) and [maxWidth](/Documentation/ApiReference/UI_Widgets/dxResizable/Configuration/#maxWidth) options. The [handles](/Documentation/ApiReference/UI_Widgets/dxResizable/Configuration/#handles) option enables you to specify which element borders are used as a handle for resizing.

You can create the widget using one of the following approaches.

- [**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

        <!--HTML-->
        <div id="resizable">
            <div id="content"></div>
        </div>

    <!---->

        <!--CSS-->#content {
            height: 100%;
            width: 100%
        }

    <!---->

        <!--JavaScript-->$(function() {
            $("#resizable").dxResizable({
                width: 200,
                height: 200,
                minWidth: 30,
                minHeight: 30,
                maxWidth: 500,
                maxHeight: 500 
            });
        });

- [**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

        <!--HTML-->
        <div dx-resizable="{
            width: 200,
            height: 200,
            minWidth: 30,
            minHeight: 30,
            maxWidth: 500,
            maxHeight: 500 
        }">
            <div id="content"></div>
        </div>

- [**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

        <!--HTML-->
        <div data-bind="dxResizable: {
            width: 200,
            height: 200,
            minWidth: 30,
            minHeight: 30,
            maxWidth: 500,
            maxHeight: 500 
        }">
            <div id="content"></div>
        </div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.

#####See Also#####
- [Resizable - Overview](/Documentation/Guide/Widgets/Resizable/Overview/)

<!--/fullDescription-->