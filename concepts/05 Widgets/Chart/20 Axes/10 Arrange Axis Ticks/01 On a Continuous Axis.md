A continuous axis indicates numeric or date-time values. If you know the range of these values, you can arrange ticks using the [tickInterval](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/tickInterval/) option. It specifies the interval between two side-by-side [major ticks](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/tick/). For numeric values, this option accepts a number; for date-time values, it accepts a string or an object with a single field that designates the date component measuring the interval. Similarly, you can arrange [minor ticks](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/minorTick/) using the [minorTickInterval](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/minorTickInterval/) option.

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            argumentAxis: { // or valueAxis
                tickInterval: 10,
                minorTickInterval: 2,

                // === or ===
                tickInterval: { years: 1 },
                minorTickInterval: { months: 6 },

                // === or ===
                tickInterval: 'year',
                minorTickInterval: 'month',

                // Making ticks visible
                tick: { visible: true },
                minorTick: { visible: true }
            }
        });
    });

Without knowing the range of values on the axis, you can arrange major ticks by specifying the minimum distance between two side-by-side ticks in pixels. For this purpose, set the [axisDivisionFactor](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#axisDivisionFactor) option. Minor ticks in this case should be arranged using the [minorTickCount](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#minorTickCount) option. It specifies how many minor ticks to place between two side-by-side major ticks.

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            argumentAxis: { // or valueAxis
                axisDivisionFactor: 20,
                minorTickCount: 4,

                tick: { visible: true },
                minorTick: { visible: true }
            }
        });
    });
