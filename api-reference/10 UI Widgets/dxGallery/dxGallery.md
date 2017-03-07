<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--widgettree-->
dataSource: [
    "https://js.devexpress.com/Content/images/doc/16_2/PhoneJS/person1.png",
    "https://js.devexpress.com/Content/images/doc/16_2/PhoneJS/person2.png",
    "https://js.devexpress.com/Content/images/doc/16_2/PhoneJS/person3.png",
    "https://js.devexpress.com/Content/images/doc/16_2/PhoneJS/person4.png"
],
height: 400
<!--/widgettree-->
===========================================================================
<!--module--><a href="/Documentation/17_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_gallery">ui/gallery</a><!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\CollectionWidget\CollectionWidget.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **Gallery** is a widget that displays a collection of images in a carousel. The widget is supplied with various navigation controls that allow a user to switch between images.
<!--/shortDescription-->

<!--fullDescription-->
You can create the widget using one of the following approaches.

- [**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

        <!--HTML--><div id="gallery"></div>

    <!---->

        <!--JavaScript-->$(function () {
            $("#gallery").dxGallery({
                dataSource: [
                    "http://path/to/image/1.png",
                    "http://path/to/image/2.png",
                    "http://path/to/image/3.png"
                ]
            });
        });

- [**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

        <!--HTML--><div dx-gallery="{
            dataSource: [
                'http://path/to/image/1.png',
                'http://path/to/image/2.png',
                'http://path/to/image/3.png'
            ]
        }"></div>

- [**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

        <!--HTML--><div data-bind="dxGallery: {
            dataSource: [
                'http://path/to/image/1.png',
                'http://path/to/image/2.png',
                'http://path/to/image/3.png'
            ]
        }"></div>

- [**ASP.NET MVC Wrappers**](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/#Creating_a_Widget)

        @(Html.DevExtreme().Gallery()
            .ID("gallery")
            .DataSource(new[] {
                "http://path/to/image/1.png",
                "http://path/to/image/2.png",
                "http://path/to/image/3.png"
            })
        )

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/actionsandlistsgallerygallerysimplegallery/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
- [Gallery - Overview](/Documentation/Guide/Widgets/Gallery/Overview/)
<!--/fullDescription-->