<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--widgettree-->
values: [50, 30, 90]
<!--/widgettree-->
===========================================================================
<!--module-->viz/bar_gauge<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\BaseWidget\BaseWidget.md<!--/inherits-->
<!--lib-->
dx.viz.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **BarGauge** widget contains several circular bars that each indicates a single value.
<!--/shortDescription-->

<!--fullDescription-->
You can create the widget using one of the following approaches.

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--JavaScript-->$(function () {
        $("#barGauge").dxBarGauge({
            startValue: 0,
            endValue: 100,
            values: [21.3, 54.1, 30.9, 45.2, 89.41]
        });
    });

    <!--HTML--><div id="barGauge"></div>

#####[**Angular**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <dx-bar-gauge
        [startValue]="0"
        [endValue]="100"
        [values]="[21.3, 54.1, 30.9, 45.2, 89.41]">
    </dx-bar-gauge>

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div dx-bar-gauge="{
        startValue: 0,
        endValue: 100,
        values: [21.3, 54.1, 30.9, 45.2, 89.41]
    }"></div>

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div data-bind="dxBarGauge: {
        startValue: 0,
        endValue: 100,
        values: [21.3, 54.1, 30.9, 45.2, 89.41]
    }"></div>

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)
    
    <!--Razor C#-->@(Html.DevExtreme().BarGauge()
        .ID("barGauge")
        .StartValue(0)
        .EndValue(100)
        .Values(new [] { 21.3, 54.1, 30.9, 45.2, 89.41 })
    )

    <!--Razor VB-->@(Html.DevExtreme().BarGauge() _
        .ID("barGauge") _
        .StartValue(0) _
        .EndValue(100) _
        .Values({ 21.3, 54.1, 30.9, 45.2, 89.41 })
    )

---

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/gaugesbargaugesbargaugebasicelementslabelscustomization/" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a>
<a href="http://www.youtube.com/watch?v=4pOpe70YkS0&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&index=24" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [BarGauge - Visual Elements](/Documentation/Guide/Widgets/BarGauge/Visual_Elements/)
<!--/fullDescription-->