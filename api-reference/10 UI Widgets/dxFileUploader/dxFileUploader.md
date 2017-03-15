<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--widgettree-->

<!--/widgettree-->
===========================================================================
<!--module--><a href="/Documentation/17_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_file_uploader">ui/file_uploader</a><!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\Editor\Editor.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **FileUploader** widget enables an end user to upload files to the server. An end user can select files in the file explorer or drag and drop files to the **FileUploader** area on the page.
<!--/shortDescription-->

<!--fullDescription-->
The **FileUploader** widget is based on an `<input>` element with the **type** attribute set to *"file"*. Values of widget options are passed to appropriate attributes of the underlying `<input>` element.

You can create the widget using one of the following approaches.

- [**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

        <!--HTML-->
        <div id="fileUploader"></div>

    <!---->

        <!--JavaScript-->$(function () {
            $("#fileUploader").dxFileUploader({
                accept: 'image/*'
            });
        });

- [**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

        <!--HTML--><div dx-file-uploader="{
            accept: 'image/*'
        }"></div>

- [**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

        <!--HTML--><div data-bind="dxFileUploader: {
            accept: 'image/*'
        }"></div>

- [**ASP.NET MVC Wrappers**](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/#Creating_a_Widget)

        <!--Razor C#-->@(Html.DevExtreme().FileUploader()
            .ID("fileUploader")
            .Accept("image/*")
        )

        <!--Razor VB-->@(Html.DevExtreme().FileUploader() _
            .ID("fileUploader") _
            .Accept("image/*")
        )

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/actionsandlistsfileuploaderfileuploaderfileuploader" class="button orange small fix-width-155" style="margin-right: 5px;" target="_blank">View Demo</a>
<a href="http://www.youtube.com/watch?v=h8jGcKE33ME&index=51&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [FileUploader - Overview](/Documentation/Guide/Widgets/FileUploader/Overview/)
<!--/fullDescription-->