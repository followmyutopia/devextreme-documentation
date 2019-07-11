<!--id-->dxChart.Options.argumentAxis.tickInterval<!--/id-->
===========================================================================
<!--inherits-->VizTimeInterval<!--/inherits-->
===========================================================================

<!--shortDescription-->
Specifies the interval between [major ticks](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/tick/).
<!--/shortDescription-->

<!--fullDescription-->
Major ticks divide an axis into segments, thus improving the viewer's perception of visualized data. Major ticks are generated automatically, unless the **tickInterval** option is set.

If the axis displays numbers, assign a number to this option. If the axis displays date-time values, assign one of the accepted string values or an object to this option. The object should contain one or several fields described in this section, for example:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            argumentAxis: {
                // ...
                tickInterval: { days: 5 }
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-argument-axis ... >
            <dxo-tick-interval [days]="5"></dxo-tick-interval>
        </dxo-argument-axis>
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from "devextreme-angular";
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

When you use an axis of the *"logarithmic"* [type](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#type), ticks are generated on a base of powers. For example, assuming that the [logarithm base](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#logarithmBase) is 10 and the tick interval is 1, ticks are generated at 10<sup>-2</sup>, 10<sup>-1</sup>, 10<sup>0</sup>, 10<sup>1</sup>, 10<sup>2</sup>, 10<sup>3</sup>, etc. If the tick interval becomes 2, ticks are generated at 10<sup>-1</sup>, 10<sup>1</sup>, 10<sup>3</sup>, etc.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `VizTimeInterval` enum. This enum accepts the same values, but they start with an upper-case letter, for example, *'day'* becomes `Day`.

#####See Also#####
- **argumentAxis**.[tick](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/tick/) - configures the appearance of major ticks.
- **argumentAxis**.[minorTickInterval](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/minorTickInterval/) - specifies the interval between minor ticks.
<!--/fullDescription-->