===========================================================================
<!--inherits-->..\..\..\..\VizTimeInterval\VizTimeInterval.md<!--/inherits-->
===========================================================================

<!--shortDescription-->
Specifies the interval between [minor ticks](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/minorTick/). Applies only to [continuous axes](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#type).
<!--/shortDescription-->

<!--fullDescription-->
If the axis displays numbers, set the **minorTickInterval** to a number. This number should fall into a range of 0 to 1 for a full-stacked series. For example, a **minorTickInterval** of 0.05 places a minor tick every 5%. If the axis displays date-time values, set the **minorTickInterval** to an accepted string value or an object that contains one of the fields described in this section, for example:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            valueAxis: {
                // ...
                minorTickInterval: { days: 5 }
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxi-value-axis ... >
            <dxo-minor-tick-interval [days]="5"></dxo-minor-tick-interval>
        </dxi-value-axis>
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

---

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), you can specify this option with the `VizTimeInterval` enum which accepts the same predefined values, but they start with an upper-case letter, for example, *'day'* becomes `Day`.

#####See Also#####
- **valueAxis**.[minorTickCount](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#minorTickCount)
- **valueAxis**.[minorTick](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/minorTick/)
- **valueAxis**.[tickInterval](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/minorTick/)
<!--/fullDescription-->