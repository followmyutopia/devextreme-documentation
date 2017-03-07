<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Minor tick interval<!--/d-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--acceptValues-->'millisecond' | 'second' | 'minute' | 'hour' | 'day' | 'week' | 'month' | 'quarter' | 'year'<!--/acceptValues-->
<!--type-->number | object | string<!--/type-->
<!--inherits-->..\..\..\..\VizTimeInterval\VizTimeInterval.md<!--/inherits-->
===========================================================================

<!--shortDescription-->
Specifies the interval between [minor ticks](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/minorTick/). Applies only to the axes of the *"continuous"* [type](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#type).
<!--/shortDescription-->

<!--fullDescription-->
Minor ticks divide the segment between two neighboring [major ticks](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/tick/) into smaller segments. Minor ticks are generated automatically, unless the **minorTickInterval** option is set.

If the axis displays numbers, assign a number to this option. If the axis displays date-time values, assign one of the accepted string values or an object to this option. The object should contain only one of all fields described in this section, for example:

    <!--JavaScript-->var chartOptions = {
        // ...
        valueAxis: {
            // ...
            minorTickInterval: { days: 5 }
        }
    };

#####See Also#####
- **valueAxis** | [minorTickCount](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#minorTickCount) - specifies how many minor ticks to place between two neighboring major ticks.
- **valueAxis** | [minorTick](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/minorTick/) - configures the appearance of minor ticks.
- **valueAxis** | [tickInterval](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/minorTick/) - specifies the interval between major ticks.
<!--/fullDescription-->