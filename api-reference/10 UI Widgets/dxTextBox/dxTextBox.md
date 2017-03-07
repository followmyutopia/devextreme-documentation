<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Text box widget.<!--/d-->
<!--widgettree-->

<!--/widgettree-->
===========================================================================
<!--module--><a href="/Documentation/16_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_text_box">ui/text_box</a><!--/module-->
<!--inherits-->..\dxTextEditor\dxTextEditor.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **TextBox** is a widget that enables a user to enter and edit a single line of text.
<!--/shortDescription-->

<!--fullDescription-->
You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxTextBox` jQuery plug-in.

        <!--HTML-->
        <div id="textBox"></div>

    <!---->

        <!--JavaScript-->
        $("#textBox").dxTextBox({
            placeholder: 'Type password',
            maxLength: 10,
            mode: 'password'
        });

- **Knockout**  
 Add a div element and apply the `dxTextBox` binding to this element.

        <!--HTML-->
        <div data-bind="dxTextBox: {
            placeholder: 'Type password',
            maxLength: 10,
            mode: 'password'
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-text-box` directive to this element.

        <!--HTML-->
        <div dx-text-box="{
            placeholder: 'Type password',
            maxLength: 10,
            mode: 'password'
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/Documentation/Guide/UI_Widgets/Basics/Installation/) article.

You can find detailed information on the principles of working with the widget in the [dxTextBox section](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/#List_of_Editor_Widgets/dxTextBox) of the [Editor Widgets](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/) article.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/editorstextboxtextboxtextbox/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<!--/fullDescription-->