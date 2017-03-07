<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Switch widget.<!--/d-->
<!--widgettree-->

<!--/widgettree-->
===========================================================================
<!--module--><a href="/Documentation/16_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_switch">ui/switch</a><!--/module-->
<!--inherits-->..\Editor\Editor.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **Switch** is a widget that can be in two states: "On" and "Off".
<!--/shortDescription-->

<!--fullDescription-->
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxSwitch` jQuery plug-in.

        <!--HTML-->
        <div id="switch"></div>

    <!---->

        <!--JavaScript-->
        $("#switch").dxSwitch({
            onText: 'On',
            offText: 'Off',
            value: true
        });

- **Knockout**  
 Add a div element and apply the `dxSwitch` binding to this element.

        <!--HTML-->
        <div data-bind="dxSwitch: {
            onText: 'On',
            offText: 'Off',
            value: true
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-switch` directive to this element.

        <!--HTML-->
        <div dx-switch="{
            onText: 'On',
            offText: 'Off',
            value: true
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/Documentation/Guide/UI_Widgets/Basics/Installation/) article.

You can find detailed information on the principles of working with the widget in the [dxSwitch section](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/#List_of_Editor_Widgets/dxSwitch) of the [Editor Widgets](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/) article.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/editorsswitchswitchswitch/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<!--/fullDescription-->