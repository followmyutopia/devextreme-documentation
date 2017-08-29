<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--acceptValues-->'millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year'<!--/acceptValues-->
<!--type-->Number | Object | String<!--/type-->
<!--inherits-->..\..\..\..\VizTimeInterval\VizTimeInterval.md<!--/inherits-->
===========================================================================

<!--shortDescription-->
Specifies the interval between [minor ticks](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/minorTick/). Applies only to the axes of the *"continuous"* [type](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#type).
<!--/shortDescription-->

<!--fullDescription-->
Minor ticks divide the segment between two neighboring [major ticks](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/tick/) into smaller segments. Minor ticks are generated automatically, unless the **minorTickInterval** option is set.

If the axis displays numbers, assign a number to this option. If the axis displays date-time values, assign one of the accepted string values or an object to this option. The object should contain only one of all fields described in this section, for example:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            argumentAxis: {
                // ...
                minorTickInterval: { days: 5 }
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart ... >
        <dxo-argument-axis ... >
            <dxo-minor-tick-interval [days]="5"></dxo-minor-tick-interval>
        </dxo-argument-axis>
    </dx-chart>

---

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `VizTimeInterval` enum. This enum accepts the same values, but they start with an upper-case letter, for example, *'day'* becomes `Day`.

#####See Also#####
- **argumentAxis**.[minorTickCount](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#minorTickCount) - specifies how many minor ticks to place between two neighboring major ticks.
- **argumentAxis**.[minorTick](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/minorTick/) - configures the appearance of minor ticks.
- **argumentAxis**.[tickInterval](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/minorTick/) - specifies the interval between major ticks.
<!--/fullDescription-->