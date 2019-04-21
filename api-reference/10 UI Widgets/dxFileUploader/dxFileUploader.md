<!--widgettree-->

<!--/widgettree-->
===========================================================================
<!--module-->ui/file_uploader<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\Editor\Editor.md<!--/inherits-->
<!--lib-->
dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **FileUploader** widget enables an end user to upload files to the server. An end user can select files in the file explorer or drag and drop files to the **FileUploader** area on the page.
<!--/shortDescription-->

<!--fullDescription-->
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--JavaScript-->$(function () {
        $("#fileUploader").dxFileUploader({
            accept:"image/*"
        });
    });

    <!--HTML-->
    <div id="fileUploader"></div>

##### Angular

    <!--HTML-->
    <dx-file-uploader accept="image/*"></dx-file-uploader>

    <!--TypeScript-->
    import { DxFileUploaderModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxFileUploaderModule
        ],
        // ...
    })

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML--><div dx-file-uploader="{
        accept: 'image/*'
    }"></div>

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

    <!--HTML--><div data-bind="dxFileUploader: {
        accept: 'image/*'
    }"></div>

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().FileUploader()
        .ID("fileUploader")
        .Accept("image/*")
    )

    <!--Razor VB-->@(Html.DevExtreme().FileUploader() _
        .ID("fileUploader") _
        .Accept("image/*")
    )

---

 

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/actionsandlistsfileuploaderfileuploaderfileuploader"
}
<a href="http://www.youtube.com/watch?v=h8jGcKE33ME&index=51&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [FileUploader - Overview](/Documentation/Guide/Widgets/FileUploader/Overview/)
<!--/fullDescription-->