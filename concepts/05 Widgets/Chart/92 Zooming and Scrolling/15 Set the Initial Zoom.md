To zoom a standalone **Chart** initially, call its [zoomArgument(startValue, endValue)](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#zoomArgumentstartValue_endValue) method after the **Chart** is created.

    <!--JavaScript-->
    $(function() {
        var chart = $("#chartContainer").dxChart({
            // ...
        }).dxChart("instance");

        chart.zoomArgument(300, 500)
    });

If the **Chart** is [bound to the RangeSelector](/Documentation/Guide/Widgets/Chart/Zooming_and_Scrolling/#Using_the_RangeSelector_Widget), specify the initial zoom for the **Chart** by setting the [value](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/#value) option of the **RangeSelector**.

    <!--JavaScript-->
    $(function() {
        // ...
        // The Chart is configured here

        $("#rangeSelectorContainer").dxRangeSelector({
            // ...
            value: [0, 10]
        });
    });