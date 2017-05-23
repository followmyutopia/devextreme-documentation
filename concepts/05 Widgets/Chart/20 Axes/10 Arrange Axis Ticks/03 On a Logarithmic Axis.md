A logarithmic axis indicates numeric values; each of them is the [logarithmBase](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#logarithmBase) value raised to some power. For example, **logarithmBase** that is equal to 10 produces the following values: 10<sup>-2</sup>, 10<sup>-1</sup>, 10<sup>0</sup>, 10<sup>1</sup>, 10<sup>2</sup>, 10<sup>3</sup>, etc. That is so if the [tickInterval](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/tickInterval/) option is *1*. Changing  **tickInterval**, for example, to *2* removes every second value from this sequence, leaving the following: 10<sup>-1</sup>, 10<sup>1</sup>, 10<sup>3</sup>, etc.

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            argumentAxis: { // or valueAxis
                type: 'logarithmic'
                tickInterval: 2,
                tick: { visible: true }
            }
        });
    });

As an alternative to **tickInterval**, you can use the [axisDivisionFactor](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#axisDivisionFactor) option to arrange ticks. This option specifies the minimum distance between two side-by-side ticks in pixels.

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            argumentAxis: { // or valueAxis
                type: 'logarithmic'
                axisDivisionFactor: 20,
                tick: { visible: true }
            }
        });
    });

#####See Also#####
- [Axis Ticks](/Documentation/Guide/Widgets/Chart/Axes/Axis_Ticks/)
- [Logarithmic Axis Demo](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/LogarithmicAxis/jQuery/Light/)
