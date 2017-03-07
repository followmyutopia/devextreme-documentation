<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Number box widget.<!--/d-->
<!--widgettree-->

<!--/widgettree-->
===========================================================================
<!--module--><a href="/Documentation/16_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_number_box">ui/number_box</a><!--/module-->
<!--inherits-->..\dxTextEditor\dxTextEditor.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **NumberBox** is a widget that displays a numeric value and allows a user to modify it by typing in a value, and incrementing or decrementing it using the keyboard or mouse.
<!--/shortDescription-->

<!--fullDescription-->
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxNumberBox` jQuery plug-in.

        <!--HTML-->
        <div id="numberBox"></div>

    <!---->

        <!--JavaScript-->
        $("#numberBox").dxNumberBox({
            min: 0,
            max: 100,
            showSpinButtons: true,
            step: 5
        });

- **Knockout**  
 Add a div element and apply the `dxNumberBox` binding to this element.

        <!--HTML-->
        <div data-bind="dxNumberBox: {
            min: 0,
            max: 100,
            showSpinButtons: true,
            step: 5
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-number-box` directive to this element.

        <!--HTML-->
        <div dx-number-box="{
            min: 0,
            max: 100,
            showSpinButtons: true,
            step: 5
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/Documentation/Guide/UI_Widgets/Basics/Installation/) article.

You can find detailed information on the principles of working with the widget in the [dxNumberBox section](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/#List_of_Editor_Widgets/dxNumberBox) of the [Editor Widgets](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/) article.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/editorsnumberboxnumberboxnumberbox/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<!--/fullDescription-->