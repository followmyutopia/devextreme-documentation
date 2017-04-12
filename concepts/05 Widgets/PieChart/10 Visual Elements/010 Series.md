A Series represents a group of related data points. The most important characteristic of a series is its type, which determines the specific visual representation of data. The pie chart series types are used to illustrate value proportion with circular sectors. You can find more details on each series type in the corresponding topics in the [PieChart Series Types](/Documentation/Guide/Widgets/PieChart/Series_Types/) section. Here, you will learn how to set a series type and other series options.

<img src="/Content/images/doc/17_1/ChartJS/PieChartSingleSeries.png" style="vertical-align:top" alt="PieChart Single-Series"/>
<img src="/Content/images/doc/17_1/ChartJS/PieChartMultiSeries.png" alt="PieChart Multi-Series"/>

The **PieChart** widget supports multiple series, which are presented as concentric circles. Each series is configured using an object in the [series](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Configuration/series/) array. To set the series type, specify the **type** field of this object.

    <!--JavaScript-->var pieChartOptions = {
        // ...
        series: [{
            type: 'doughnut'
        }, {
            // ...    
        }]
    };

To provide data for a series, set a common data source. For details, refer to the [Data Binding](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_Data_Binding/Provide_Data/) article.

Using the **series** configuration object, you specify options for other series-related chart elements - series points and labels. Move on to the next topic for more information.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/charts-pie_series-pie_with_multiple_series/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>