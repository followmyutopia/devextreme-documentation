<!--widgettree-->

<!--/widgettree-->
===========================================================================
<!--module-->ui/range_slider<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\dxSliderBase\dxSliderBase.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **RangeSlider** is a widget that allows an end user to choose a range of numeric values.
<!--/shortDescription-->

<!--fullDescription-->
#include common-ref-roottopic-introduction with { WidgetName: "RangeSlider" }

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--JavaScript-->$(function () {
        $("#rangeSlider").dxRangeSlider({
            min: 0, max: 100,
            start: 20, end: 60
        });
    });

    <!--HTML-->
    <div id="rangeSlider"></div>

#####[**Angular**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <dx-range-slider
        [min]="0" [max]="100"
        [start]="20 [end]="60">
    </dx-range-slider>

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div dx-range-slider="{
        min: 0, max: 100,
        start: 20, end: 60
    }"></div>

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div data-bind="dxRangeSlider: {
        min: 0, max: 100,
        start: 20, end: 60
    }"></div>

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().RangeSlider()
        .ID("rangeSlider")
        .Min(0).Max(100)
        .Start(20).End(60)
    )

    <!--Razor VB-->@(Html.DevExtreme().RangeSlider() _
        .ID("rangeSlider") _
        .Min(0).Max(100) _
        .Start(20).End(60)
    )

---

 

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/formsandmulti-purposerangesliderrangesliderrangeslider/"
}

#####See Also#####
- [RangeSlider - Overview](/Documentation/Guide/Widgets/RangeSlider/Overview/)
<!--/fullDescription-->