<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Tooltip widget<!--/d-->
===========================================================================
<!--module--><a href="/Documentation/16_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_tooltip">ui/tooltip</a><!--/module-->
<!--inherits-->..\dxPopover\dxPopover.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **Tooltip** widget displays a tooltip for a specified element on the page.
<!--/shortDescription-->

<!--fullDescription-->
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxTooltip` jQuery plug-in.

        <!--HTML-->
        <div id="targetElement"></div>
        <div id="tooltip">
            <p>This is the target element</p>
        </div>

    <!---->

        <!--JavaScript-->
        $("#tooltip").dxTooltip({
            target: '#targetElement',
            visible: true
        });

- **Knockout**  
 Add a div element and apply the `dxTooltip` binding to this element.

        <!--HTML-->
        <div id="targetElement"></div>
        <div data-bind="dxTooltip: {
            target: '#targetElement',
            visible: true
        }">
            <p>This is the target element</p>
        </div>

- **AngularJS**  
 Add a div element and apply the `dx-tooltip` directive to this element.

        <!--HTML-->
        <div id="targetElement"></div>
        <div dx-tooltip="{
            target: '#targetElement',
            visible: true
        }">
            <p>This is the target element</p>
        </div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/Documentation/Guide/UI_Widgets/Basics/Installation/) article.

You can find detailed information on the principles of working with the widget in the [dxTooltip section](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Overlay_Widgets/#List_of_Overlay_Widgets/dxTooltip) of the [Overlay Widgets](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Overlay_Widgets/) article.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogsandnotificationstooltiptooltiptooltip/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

<a href="http://www.youtube.com/watch?v=kb53tdJvcZA&index=32&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>
<!--/fullDescription-->