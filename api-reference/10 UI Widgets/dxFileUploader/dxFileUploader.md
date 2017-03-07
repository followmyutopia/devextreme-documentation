<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->File uploader widget.<!--/d-->
<!--widgettree-->

<!--/widgettree-->
===========================================================================
<!--module--><a href="/Documentation/16_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_file_uploader">ui/file_uploader</a><!--/module-->
<!--inherits-->..\Editor\Editor.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **FileUploader** widget enables an end user to upload files to the server. An end user can select files in the file explorer or drag and drop files to the **FileUploader** area on the page.
<!--/shortDescription-->

<!--fullDescription-->
The **FileUploader** widget is based on an **input** element with the **type** attribute set to *"file"*. Values of widget options are passed to appropriate attributes of the underlying **input** element.

You can create the widget using one of the following approaches.

- **jQuery**  
 Use the `dxFileUploader` jQuery plug-in.

        <!--HTML-->
        <div id="fileUploader"></div>

    <!---->

        <!--JavaScript-->
        $("#fileUploader").dxFileUploader({
            buttonText: 'Select file',
            labelText: 'Drop file here',
            multiple: true,
            accept: 'image/*'
        });

- **Knockout**  
 Add a div element and apply the `dxFileUploader` binding to this element.

        <!--HTML-->
        <div data-bind="dxFileUploader: {
            buttonText: 'Select file',
            labelText: 'Drop file here',
            multiple: true,
            accept: 'image/*'
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-file-uploader` directive to this element.

        <!--HTML-->
        <div dx-file-uploader="{
            buttonText: 'Select file',
            labelText: 'Drop file here',
            multiple: true,
            accept: 'image/*'
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/Documentation/Guide/UI_Widgets/Basics/Installation/) article.

You can find detailed information on the principles of working with the widget in the [dxFileUploader section](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/#List_of_Editor_Widgets/dxFileUploader) of the [Editor Widgets](/Documentation/Guide/UI_Widgets/UI_Widget_Categories/Editor_Widgets/) article.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/actionsandlistsfileuploaderfileuploaderfileuploader" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

<a href="http://www.youtube.com/watch?v=h8jGcKE33ME&index=51&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>
<!--/fullDescription-->