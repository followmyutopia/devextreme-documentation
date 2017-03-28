When the **Chart** visualizes local data, loading is instant. But when the **Chart** is bound to a remote data source, loading may take a considerable amount of time. To keep the viewer's attention, the **Chart** can display a loading indicator.

![DevExtreme HTML5 JavaScript Charts LoadingIndicator](/Content/images/doc/16_2/ChartJS/visual_elements/loading_indicator.png)

To activate the loading indicator, assign *true* to the [loadingIndicator](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/loadingIndicator/) | **show** option. Once data is loaded, the loading indicator will be hidden automatically.

	<!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
			// ...
            loadingIndicator: {
                show: true
            }
        });
    });

If you need to show or hide the loading indicator at runtime, call the [showLoadingIndicator()](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#showLoadingIndicator) or [hideLoadingIndicator()](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#hideLoadingIndicator) method.

    <!--JavaScript-->var chart = $("#chartContainer").dxChart("instance");
    chart.showLoadingIndicator();
    chart.hideLoadingIndicator();

#####See Also#####
- [Chart Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/ClientSideDataProcessing/jQuery/Light/)
- [Chart API Reference](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/)

[tags]chart, load indicator, loading indicator
