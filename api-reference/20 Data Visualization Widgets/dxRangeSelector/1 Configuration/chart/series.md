===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--default-->undefined<!--/default-->
<!--type-->Object | Array<Object><!--/type-->
===========================================================================

<!--shortDescription-->
An object defining the chart’s series.
<!--/shortDescription-->

<!--fullDescription-->
If you are going to display several series in the range selector's chart, assign an array of objects defining these series to this property. If a single series must be displayed in the chart, assign an object defining this series to this property. The properties of the **series** configuration object represent the options that can be set to define the series. To get information on all the properties of the **series** configuration object, refer to its description in the **chartOptions** reference section: [series](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/). Note that the **RangeSelector** widget may have its own default values for the **series** options.

If you display several series on the chart, utilize the [commonSeriesSettings](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/chart/#commonSeriesSettings) configuration object. This object allows you to set values that are common for all series in the chart.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/RangeSelector/ChartOnBackground/jQuery/Light/"
}
<!--/fullDescription-->