<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->The dxLoadPanel widget.<!--/d-->
<!--widgettree-->
visible: true
<!--/widgettree-->
===========================================================================
<!--module--><a href="/Documentation/16_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_load_panel">ui/load_panel</a><!--/module-->
<!--inherits-->..\dxOverlay\dxOverlay.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **LoadPanel** is an overlay widget notifying the viewer that loading is in progress.
<!--/shortDescription-->

<!--fullDescription-->
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxLoadPanel` jQuery plug-in.

        <!--HTML-->
        <div id="loadPanel"></div>

    <!---->

        <!--JavaScript-->
        $("#loadPanel").dxLoadPanel({
            message: 'Loading...',
            showIndicator: true
        });

- **Knockout**  
 Add a div element and apply the `dxLoadPanel` binding to this element.

        <!--HTML-->
        <div data-bind="dxLoadPanel: {
            message: 'Loading...',
            showIndicator: true
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-load-panel` directive to this element.

        <!--HTML-->
        <div dx-load-panel="{
            message: 'Loading...',
            showIndicator: true
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/Documentation/Guide/UI_Widgets/Basics/Installation/) article.

You can find detailed information on the principles of working with the widget in the [dxLoadPanel section](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Overlay_Widgets/#List_of_Overlay_Widgets/dxLoadPanel) of the [Overlay Widgets](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Overlay_Widgets/) article.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogsandnotificationsloadpanelloadpanelloadpanel/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<!--/fullDescription-->