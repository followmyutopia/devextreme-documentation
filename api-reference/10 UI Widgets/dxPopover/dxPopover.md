<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Popover widget<!--/d-->
===========================================================================
<!--module--><a href="/Documentation/16_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_popover">ui/popover</a><!--/module-->
<!--inherits-->..\dxPopup\dxPopup.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **Popover** is a widget that shows notifications within a box with an arrow pointing to a specified UI element.
<!--/shortDescription-->

<!--fullDescription-->
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxPopover` jQuery plug-in.

        <!--HTML-->
        <div id="popover"></div>
        <div id="targetElement"></div>

    <!---->

        <!--JavaScript-->
        $("#popover").dxPopover({
            target: "#targetElement",
            showTitle: true,
            title: 'Popover title'
        });

- **Knockout**  
 Add a div element and apply the `dxPopover` binding to this element.

        <!--HTML-->
        <div data-bind="dxPopover: {
            target: '#targetElement',
            showTitle: true,
            title: 'Popover title'
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-popover` directive to this element.

        <!--HTML-->
        <div dx-popover="{
            target: '#targetElement',
            showTitle: true,
            title: 'Popover title'
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/Documentation/Guide/UI_Widgets/Basics/Installation/) article.

You can find detailed information on the principles of working with the widget in the [dxPopover section](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Overlay_Widgets/#List_of_Overlay_Widgets/dxPopover) of the [Overlay Widgets](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Overlay_Widgets/) article.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogsandnotificationspopoverpopoverpopover/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

<a href="http://www.youtube.com/watch?v=JZHRrQxqs7Y&index=9&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>

<!--/fullDescription-->