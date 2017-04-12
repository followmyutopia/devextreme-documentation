<article data-show-web="/Content/Applications/17_1/DataVisualization/UseRemoteDataforChart/Solution/chart.html">

The data that comes as a JSON in this application allows you to display temperature flow during each month on a chart. For this purpose, add the **Chart** widget.

    <!--HTML-->
    <div id="chart1"></div>

<!---->

    <!--JavaScript-->
    $("#chart1").dxChart();
    

The Data Store that was created for the grid in the step below, loads an array of the following objects.

    [
        {
            "month": "january",
            "recordLow": -7,
            "recordHigh": 18,
            "average": 8.9,
            "color": "#00BFFF",
            "temperature": [
                { "day": 1, "t": 13.1 },
                { "day": 2, "t": 13.2 },
                //...
                { "day": 30, "t": 7.2 },
                { "day": 31, "t": 7.6 }
            ]
        },
        {...},
        ...
    ]

This object structure is not appropriate for using the **temperature** | **day** field as a data source for chart arguments and the **temperature** | **t** field - for chart values. The following data structure is expected to be used for the chart.

    [
        { "day": 1, "january": 13.1, "february": 6.4, ...},
        { "day": 2, "january": 13.1, "february": 6.4, ...},
        ...
    ]

or

    [
        {"month": "january", "day": 1, "t": 13.1},
        {"month": "january", "day": 2, "t": 13.2},
        ...
    ]

The second variant is possible if you process the data received by the Store. To do this, use the [postProcess](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#postProcess) configuration option for the **DataSource** object.

    var chartDataSourceConfiguration = {
        store: customStore,
        postProcess: function(data) {
            var result = [];
            $.each(data, function () {
                var month = this.month;
                $.each(this.temperature, function () {
                    this.month = month;
                    result.push(this);
                });
            });
            return result;
        }
    };

Create the **DataSource** object using **chartDataSourceConfiguration** as a configuration object. 
 
Assign this **DataSource** object to the chart's **dataSource** option.

    <!--JavaScript-->
    $("#chart1").dxChart({
        dataSource: new DevExpress.data.DataSource(chartDataSourceConfiguration)
    });
        

Define a series template and specify common options for chart series.

    <!--JavaScript-->$("#chart1").dxChart({
            dataSource: new DevExpress.data.DataSource(chartDataSourceConfiguration),
            seriesTemplate: {
                nameField: 'month',
            },
            commonSeriesSettings: {
                argumentField: 'day',
                valueField: 't',
                type: 'line',
                point: { visible: false }
            }
        });

Now you can see the chart in the browser. You can configure it using other configuration options to tune it up to the required view. For instance, specify the start and the end of the argument axis, so that non-existing days are not displayed on it.

    <!--JavaScript-->$("#chart1").dxChart({
            dataSource: new DevExpress.data.DataSource(chartDataSourceConfiguration),
            seriesTemplate: {
                nameField: 'month',
            },
            commonSeriesSettings: {
                argumentField: 'day',
                valueField: 't',
                type: 'line',
                point: { visible: false }
            },
            argumentAxis: {
                min: 1,
                max: 31,
                minValueMargin: 0,
                maxValueMargin: 0
            },
            legend: {
                verticalAlignment: 'bottom',
                horizontalAlignment: 'center'
            }
        });
        

#####See Also#####
- [Configure Charts Tutorial](/Documentation/Tutorial/Data_Visualization/Configure_Charts/#Configure_Charts) - detailed information on how to configure the **Chart** widget

Here is the result.
</article>