<!--widgettree-->
dataSource: [{
    arg: "1",
    val: 1
}, {
    arg: "2",
    val: 2
}, {
    arg: "3",
    val: 3
}, {
    arg: "4",
    val: 4
}, {
    arg: "5",
    val: 5
}, {
    arg: "6",
    val: 6
}, {
    arg: "7",
    val: 7
}, {
    arg: "8",
    val: 8
}]
<!--/widgettree-->
===========================================================================
<!--module-->viz/range_selector<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\BaseWidget\BaseWidget.md<!--/inherits-->
<!--lib-->
dx.viz.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **RangeSelector** is a widget that allows a user to select a range of values on a scale.
<!--/shortDescription-->

<!--fullDescription-->
This widget represents a scale (numeric or date-time) and two sliders. A user selects the required range by moving the sliders.

<img style="margin:0px auto;display:block" src="/Content/images/doc/18_2/ChartJS/RangeSelector_new.gif" alt="RangeSelector" />

#include common-ref-roottopic-introduction

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--JavaScript-->$(function() {
        $("#rangeSelector").dxRangeSelector({
            scale: {
                startValue: new Date(2011, 0, 1),
                endValue: new Date(2011, 5, 1),
                tickInterval: { days: 7 }
            }
        });
    });

    <!--HTML--><div id="rangeSelector"></div>

#####[**Angular**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <dx-range-selector>
        <dxo-scale
            [startValue]="startDate"
            [endValue]="endDate">
            <dxo-tick-interval [days]="7"></dxo-tick-interval>
        </dxo-scale>
    </dx-range-selector>

    <!--TypeScript-->
    import { DxRangeSelectorModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        startDate = new Date(2011, 0, 1);
        endDate = new Date(2011, 5, 1);
    }
    @NgModule({
        imports: [
            // ...
            DxRangeSelectorModule
        ],
        // ...
    })

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML--><div ng-controller="DemoController">
        <div dx-range-selector="{
            scale: {
                startValue: startDate,
                endValue: endDate,
                tickInterval: { days: 7 }
            }
        }"></div>
    </div>

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller("DemoController", function ($scope) {
            $scope.startDate = new Date(2011, 0, 1);
            $scope.endDate = new Date(2011, 5, 1);
        });

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div data-bind="dxRangeSelector: {
        scale: {
            startValue: new Date(2011, 0, 1),
            endValue: new Date(2011, 5, 1),
            tickInterval: { days: 7 }
        }
    }"></div>

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)
    
    <!--Razor C#-->@(Html.DevExtreme().RangeSelector()
        .ID("rangeSelector")
        .Scale(scale => scale
            .StartValue(new DateTime(2011, 1, 1))
            .EndValue(new DateTime(2011, 6, 1))
            .TickInterval(ti => ti.Days(7))
        )
    )

    <!--Razor VB-->@(Html.DevExtreme().RangeSelector() _
        .ID("rangeSelector") _
        .Scale(Sub(scale)
            scale.StartValue(New DateTime(2011, 1, 1)) _
                    .EndValue(New DateTime(2011, 6, 1)) _
                    .TickInterval(Sub(ti) ti.Days(7))
        End Sub)
    )

---

 

A chart can be displayed in the [background](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/background/) of the **RangeSelector** widget. This allows end users to select the required range in a chart series. You can also integrate the **RangeSelector** widget with a stand-alone [Chart](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/) widget to emulate chart [zooming and scrolling](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_End-User_Interaction/Zooming_and_Scrolling/#Using_dxRangeSelector).

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/formsandmulti-purposerangeselectorrangeselectornumericscale/"
}
<a href="http://www.youtube.com/watch?v=0x_VmMwxigA&index=52&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [RangeSelector - Visual Elements](/Documentation/Guide/Widgets/RangeSelector/Visual_Elements/)
- [RangeSelector - Range Changing](/Documentation/Guide/Widgets/RangeSelector/Range_Changing/)
<!--/fullDescription-->