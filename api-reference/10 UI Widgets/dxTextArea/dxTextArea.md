<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->TextArea widget<!--/d-->
<!--widgettree-->

<!--/widgettree-->
===========================================================================
<!--module--><a href="/Documentation/16_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_text_area">ui/text_area</a><!--/module-->
<!--inherits-->..\dxTextBox\dxTextBox.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **TextArea** is a widget that enables a user to enter and edit a multi-line text.
<!--/shortDescription-->

<!--fullDescription-->
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxTextArea` jQuery plug-in.

        <!--HTML-->
        <div id="textArea"></div>

    <!---->

        <!--JavaScript-->
        $("#textArea").dxTextArea({
            value: 'Text displayed by the widget',
            maxLength: 300,
            height: 400
        });

- **Knockout**  
 Add a div element and apply the `dxTextArea` binding to this element.

        <!--HTML-->
        <div data-bind="dxTextArea: {
            value: 'Text displayed by the widget',
            maxLength: 300,
            height: 400
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-text-area` directive to this element.

        <!--HTML-->
        <div dx-text-area="{
            value: 'Text displayed by the widget',
            maxLength: 300,
            height: 400
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/Documentation/Guide/UI_Widgets/Basics/Installation/) article.

You can find detailed information on the principles of working with the widget in the [dxTextArea section](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/#List_of_Editor_Widgets/dxTextArea) of the [Editor Widgets](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/) article.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/editorstextareatextareatextarea/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<!--/fullDescription-->