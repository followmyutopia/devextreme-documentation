<!--widgettree-->

<!--/widgettree-->
===========================================================================
<!--module-->ui/progress_bar<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\dxTrackBar\dxTrackBar.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **ProgressBar** is a widget that shows current progress.
<!--/shortDescription-->

<!--fullDescription-->
#include common-ref-roottopic-introduction with { WidgetName: "ProgressBar" }

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--JavaScript-->$(function () {
        $("#progressBar").dxProgressBar({
            min: 0,
            max: 100,
            value: 49
        });
    });

    <!--HTML-->
    <div id="progressBar"></div>

#####[**Angular**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <dx-progress-bar
        [min]="0"
        [max]="100"
        [value]="49">
    </dx-progress-bar>

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div dx-progress-bar="{
        min: 0,
        max: 100,
        value: 49
    }"></div>

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div data-bind="dxProgressBar: {
        min: 0,
        max: 100,
        value: 49
    }"></div>

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().ProgressBar()
        .ID("progressBar")
        .Min(0)
        .Max(100)
        .Value(49)
    )

    <!--Razor VB-->@(Html.DevExtreme().ProgressBar() _
        .ID("progressBar") _
        .Min(0) _
        .Max(100) _
        .Value(49)
    )

---

 

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/dialogsandnotificationsprogressbarprogressbarprogressbar/"
}

#####See Also#####
- [ProgressBar - Overview](/Documentation/Guide/Widgets/ProgressBar/Overview/)
<!--/fullDescription-->