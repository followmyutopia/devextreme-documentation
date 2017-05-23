The **Chart** provides an API for showing and hiding a series at runtime. The most common use-case for this API is to show or hide a series when a user clicks the [chart legend](/Documentation/Guide/Widgets/Chart/Legend/Overview/). To implement this scenario, you need to handle the [legendClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#legendClick) event in the following manner. The **isVisible()**, **hide()** and **show()** are methods of the [Series](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Series/) object. 

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            onLegendClick: function (e) {
                var series = e.target;
                if (series.isVisible()) {
                    series.hide();
                } else {
                    series.show();
                }
            }
        });
    });

A series can be hidden initially. For this, assign *false* to the [visible](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#visible) option of the object that configures the series.

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            series: [{
                // ...
                visible: false
            }, {
                // ...
            }]
        });
    });

#####See Also#####
- [Access a Series Using the API](/Documentation/Guide/Widgets/Chart/Series/Access_a_Series_Using_the_API/)
- [Chart API Reference](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/)

[tags]chart, series, show series, hide series, series visibility 
