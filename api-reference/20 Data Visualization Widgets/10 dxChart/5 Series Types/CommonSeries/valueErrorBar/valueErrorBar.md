<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--propertyOf-->..\..\AreaSeries\AreaSeries.md,..\..\BarSeries\BarSeries.md,..\..\LineSeries\LineSeries.md,..\..\ScatterSeries\ScatterSeries.md,..\..\SplineAreaSeries\SplineAreaSeries.md,..\..\StepAreaSeries\StepAreaSeries.md,..\..\StepLineSeries\StepLineSeries.md<!--/propertyOf-->
<!--type-->object<!--/type-->
===========================================================================

<!--shortDescription-->
Configures error bars.
<!--/shortDescription-->

<!--fullDescription-->
Error bars are used on charts to indicate an error or an uncertainty in a reported measurement. They give a general idea of how precise the measurement is.

![DevExtreme HTML5 Charts ErrorBars](/Content/images/doc/16_2/ChartJS/visual_elements/error_bars.png)

Error bars can be generated either from concrete or calculated values. To generate one error bar, two values, high and low, are needed. If the [data source](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#dataSource) of your chart provides concrete high and low values, assign the required data source fields to the **highValueField** and **lowValueField** options.

Alternatively, error bar values can be calculated according to an algorithm. In this case, choose the required algorithm using the **type** option, and specify the value to be used in calculation using the **value** option.

[note]Error bars are available for axes of the numeric [type](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#type) only.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartsadvancedfeatureserorrbar/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<!--/fullDescription-->