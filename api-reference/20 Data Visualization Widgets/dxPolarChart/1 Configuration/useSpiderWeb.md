===========================================================================
<!--default-->false<!--/default-->
<!--type-->Boolean<!--/type-->
===========================================================================

<!--shortDescription-->
Indicates whether or not to display a "spider web".
<!--/shortDescription-->

<!--fullDescription-->
In a polar coordinate system, the argument axis is a circle because it tracks a continuous angle change. When the argument in the chart's data source is discrete, you may want to display the argument axis as a discrete axis. For this purpose, set the **useSpiderWeb** option to **true**. In this instance, the argument axis, as well as the value axis' grid lines, will be displayed by straight lines between axis ticks/grid lines.

![UseSpiderWeb ChartJS](/Content/images/doc/17_2/ChartJS/UseSpiderWeb.png)

The spider web option is supported in the following series types.

- [line](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Series_Types/LineSeries/)
- [area](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Series_Types/AreaSeries/)
- [scatter](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Series_Types/ScatterSeries/)

[note]A spider web demands that the [discreteAxisDivisionMode](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/#discreteAxisDivisionMode) option is set to *'crossLabels'* and the [firstPointOnStartAngle](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/argumentAxis/#firstPointOnStartAngle) option is set to **true**. Thus, do not change the values of these option so that the spider web saves its look.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/chartspolarandradarchartspolarandradarchartsspiderweb/"
}
<!--/fullDescription-->