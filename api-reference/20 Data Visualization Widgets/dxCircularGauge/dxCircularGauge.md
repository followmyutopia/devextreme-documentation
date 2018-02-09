<!--widgettree-->
value: 48
<!--/widgettree-->
===========================================================================
<!--module-->viz/circular_gauge<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\BaseGauge\BaseGauge.md<!--/inherits-->
<!--lib-->
dx.viz.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **CircularGauge** is a widget that indicates values on a circular numeric scale.
<!--/shortDescription-->

<!--fullDescription-->
#include common-ref-roottopic-introduction with { }

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--JavaScript-->$(function () {
        $("#circularGauge").dxCircularGauge({
            scale: {
                startValue: 50,
                endValue: 150
            },    
            rangeContainer: {
                ranges: [
                    { startValue: 50, endValue: 90 },
                    { startValue: 90, endValue: 130 },
                    { startValue: 130, endValue: 150 }
                ]
            },
            value: 105
        });
    });

    <!--HTML--><div id="circularGauge"></div>

#####[**Angular**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <dx-circular-gauge [value]="105">
        <dxo-scale
            [startValue]="50"
            [endValue]="150">
        </dxo-scale>
        <dxo-rangeContainer>
            <dxi-range 
                [startValue]="50"
                [endValue]="90">
            </dxi-range>
            <dxi-range 
                [startValue]="90"
                [endValue]="130">
            </dxi-range>
            <dxi-range 
                [startValue]="130"
                [endValue]="150">
            </dxi-range>
        </dxo-rangeContainer>
    </dx-circular-gauge>

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div dx-circular-gauge="{
        scale: {
            startValue: 50,
            endValue: 150
        },    
        rangeContainer: {
            ranges: [
                { startValue: 50, endValue: 90 },
                { startValue: 90, endValue: 130 },
                { startValue: 130, endValue: 150 }
            ]
        },
        value: 105
    }"></div>

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div data-bind="dxCircularGauge: {
        scale: {
            startValue: 50,
            endValue: 150
        },    
        rangeContainer: {
            ranges: [
                { startValue: 50, endValue: 90 },
                { startValue: 90, endValue: 130 },
                { startValue: 130, endValue: 150 }
            ]
        },
        value: 105
    }"></div>

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)
    
    <!--Razor C#-->@(Html.DevExtreme().CircularGauge()
        .ID("circularGauge")
        .Scale(scale => scale
            .StartValue(50)
            .EndValue(50)
        )
        .RangeContainer(rc => rc
            .Ranges(ranges => {
                ranges.Add().StartValue(50).EndValue(90);
                ranges.Add().StartValue(90).EndValue(130);
                ranges.Add().StartValue(130).EndValue(150);
            })
        )
    )

    <!--Razor VB-->@(Html.DevExtreme().CircularGauge() _
        .ID("circularGauge") _
        .Scale(Sub(scale)
            scale.StartValue(50) _
                    .EndValue(50)
        End Sub) _
        .RangeContainer(Sub(rc)
            rc.Ranges(Sub(ranges)
                ranges.Add().StartValue(50).EndValue(90)
                ranges.Add().StartValue(90).EndValue(130)
                ranges.Add().StartValue(130).EndValue(150)
            End Sub)
        End Sub)
    )

---

 

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/gaugescirculargaugescirculargaugebasicelementspaletteforranges/"
}
<a href="http://www.youtube.com/watch?v=8rIBaB2RKvE&index=19&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [CircularGauge - Visual Elements](/Documentation/Guide/Widgets/CircularGauge/Visual_Elements/)
<!--/fullDescription-->