<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Popup widget<!--/d-->
<!--widgettree-->
visible: true
<!--/widgettree-->
===========================================================================
<!--module--><a href="/Documentation/16_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_popup">ui/popup</a><!--/module-->
<!--inherits-->..\dxOverlay\dxOverlay.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **Popup** widget is a pop-up window overlaying the current view. 
<!--/shortDescription-->

<!--fullDescription-->
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxPopup` jQuery plug-in.

        <!--HTML-->
        <div id="popup"></div>

    <!---->

        <!--JavaScript-->
        $("#popup").dxPopup({
            showTitle: true,
            title: 'Popup title'
        });

- **Knockout**  
 Add a div element and apply the `dxPopup` binding to this element.

        <!--HTML-->
        <div data-bind="dxPopup: {
            showTitle: true,
            title: 'Popup title'
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-popup` directive to this element.

        <!--HTML-->
        <div dx-popup="{
            showTitle: true,
            title: 'Popup title'
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/Documentation/Guide/UI_Widgets/Basics/Installation/) article.

You can find detailed information on the principles of working with the widget in the [dxPopup section](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Overlay_Widgets/#List_of_Overlay_Widgets/dxPopup) of the [Overlay Widgets](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Overlay_Widgets/) article.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogsandnotificationspopuppopuppopup/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<!--/fullDescription-->