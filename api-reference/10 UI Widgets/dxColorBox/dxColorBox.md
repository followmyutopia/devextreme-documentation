<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->ColorBox widget<!--/d-->
<!--widgettree-->
opened: true
<!--/widgettree-->
===========================================================================
<!--module--><a href="/Documentation/16_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_color_box">ui/color_box</a><!--/module-->
<!--inherits-->..\dxDropDownEditor\dxDropDownEditor.md<!--/inherits-->
<!--lib-->
dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **ColorBox** is a widget that allows an end user to enter a color or pick it out from the drop-down editor.
<!--/shortDescription-->

<!--fullDescription-->
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxColorBox` jQuery plug-in.

        <!--HTML-->
        <div id="colorBox"></div>

    <!---->

        <!--JavaScript-->
        $("#colorBox").dxColorBox({
            value: 'rgba(255, 144, 0, 0.3)',
            editAlphaChannel: true
        });

- **Knockout**  
 Add a div element and apply the `dxColorBox` binding to this element.

        <!--HTML-->
        <div data-bind="dxColorBox: {
            value: 'rgba(255, 144, 0, 0.3)',
            editAlphaChannel: true
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-color-box` directive to this element.

        <!--HTML-->
        <div dx-color-box="{
            value: 'rgba(255, 144, 0, 0.3)',
            editAlphaChannel: true
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/Documentation/Guide/UI_Widgets/Basics/Installation/) article.

You can find detailed information on the principles of working with the widget in the [dxColorBox section](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/#List_of_Editor_Widgets/dxColorBox) of the [Editor Widgets](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/) article.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/editorscolorboxcolorboxcolorbox/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<!--/fullDescription-->