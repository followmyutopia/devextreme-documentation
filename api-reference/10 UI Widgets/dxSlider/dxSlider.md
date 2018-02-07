<!--widgettree-->

<!--/widgettree-->
===========================================================================
<!--module-->ui/slider<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\dxSliderBase\dxSliderBase.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **Slider** is a widget that allows an end user to set a numeric value on a continuous range of possible values.
<!--/shortDescription-->

<!--fullDescription-->
#include common-ref-roottopic-introduction with { WidgetName: "Slider" }

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--JavaScript-->$(function () {
        $("#slider").dxSlider({
            min: 0, max: 100,
            value: 25
        });
    });

    <!--HTML-->
    <div id="slider"></div>

#####[**Angular**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <dx-slider
        [min]="0"
        [max]="100"
        [value]="25">
    </dx-slider>

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div dx-slider="{
        min: 0, max: 100,
        value: 25
    }"></div>

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div data-bind="dxSlider: {
        min: 0, max: 100,
        value: 25
    }"></div>

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().Slider()
        .ID("slider")
        .Min(0).Max(100)
        .Value(25)
    )

    <!--Razor VB-->@(Html.DevExtreme().Slider() _
        .ID("slider") _
        .Min(0).Max(100) _
        .Value(25)
    )

---

 

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/formsandmulti-purposeslidersliderslider/"
}

#####See Also#####
- [Slider - Overview](/Documentation/Guide/Widgets/Slider/Overview/)
<!--/fullDescription-->