<!--widgettree-->
dataSource: [
    "https://js.devexpress.com/Content/images/doc/17_2/PhoneJS/person1.png",
    "https://js.devexpress.com/Content/images/doc/17_2/PhoneJS/person2.png",
    "https://js.devexpress.com/Content/images/doc/17_2/PhoneJS/person3.png",
    "https://js.devexpress.com/Content/images/doc/17_2/PhoneJS/person4.png"
],
height: 400
<!--/widgettree-->
===========================================================================
<!--module-->ui/gallery<!--/module-->
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

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--JavaScript-->$(function () {
        $("#gallery").dxGallery({
            dataSource: [
                "http://path/to/image/1.png",
                "http://path/to/image/2.png",
                "http://path/to/image/3.png"
            ],
            height: 300
        });
    });

    <!--HTML--><div id="gallery"></div>

#####[**Angular**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <dx-gallery
        [dataSource]="galleryData"
        [height]="300">
    </dx-gallery>

    <!--TypeScript-->
    export class AppComponent {
        galleryData = [
            'http://path/to/image/1.png',
            'http://path/to/image/2.png',
            'http://path/to/image/3.png'
        ];
    }

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML--><div dx-gallery="{
        dataSource: [
            'http://path/to/image/1.png',
            'http://path/to/image/2.png',
            'http://path/to/image/3.png'
        ],
        height: 300
    }"></div>

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

    <!--HTML--><div data-bind="dxGallery: {
        dataSource: [
            'http://path/to/image/1.png',
            'http://path/to/image/2.png',
            'http://path/to/image/3.png'
        ],
        height: 300
    }"></div>

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().Gallery()
        .ID("gallery")
        .DataSource(new[] {
            "http://path/to/image/1.png",
            "http://path/to/image/2.png",
            "http://path/to/image/3.png"
        })
        .Height(300)
    )

    <!--Razor VB-->@(Html.DevExtreme().Gallery() _
        .ID("gallery") _
        .DataSource({
            "http://path/to/image/1.png",
            "http://path/to/image/2.png",
            "http://path/to/image/3.png"
        }) _
        .Height(300)
    )

---

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/actionsandlistsgallerygallerysimplegallery/"
}

#####See Also#####
- [Gallery - Overview](/Documentation/Guide/Widgets/Gallery/Overview/)
<!--/fullDescription-->