<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Resizable widget.<!--/d-->
===========================================================================
<!--module--><a href="/Documentation/16_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_resizable">ui/resizable</a><!--/module-->
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

- **jQuery**  
 Use the `dxResizable` jQuery plug-in.

        <!--HTML-->
        <div id="myResizable">
            <p>Widget content</p>
        </div>

    <!---->

        <!--JavaScript-->
        $("#myResizable").dxResizable({
            handles: 'right bottom',
            minHeight: 100,
            minWidth: 200,
            maxHeight: 400,
            maxWidth: 300,
            height: 150,
            width: 250
        });

- **Knockout**  
 Add a div element and apply the `dxResizable` binding to this element.

        <!--HTML-->
        <div data-bind="dxResizable: {
            handles: 'right bottom',
            minHeight: 100,
            minWidth: 200,
            maxHeight: 400,
            maxWidth: 300,
            height: 150,
            width: 250
        }">
            <p>Widget content</p>
        </div>

- **AngularJS**  
 Add a div element and apply the `dx-resizable` directive to this element.

        <!--HTML-->
        <div dx-resizable="{
            handles: 'right bottom',
            minHeight: 100,
            minWidth: 200,
            maxHeight: 400,
            maxWidth: 300,
            height: 150,
            width: 250
        }">
            <p>Widget content</p>
        </div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/Documentation/Guide/UI_Widgets/Basics/Installation/) article.

You can find the detailed information on principles of working with the widget in the [dxResizable section](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Individual_Widgets/#dxResizable) of the [Individual Widgets](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Individual_Widgets/) article.
<!--/fullDescription-->