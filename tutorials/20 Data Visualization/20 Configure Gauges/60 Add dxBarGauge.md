<article data-show-web="/Content/Applications/17_1/DataVisualization/Lessons/ConfigureGauges/Step7/gauges.html" data-show-first="barGauge.js">
The **BarGauge** widget is configured similarly to other gauge widgets, though it has several distinctive features that should be emphasized. According to our task, **BarGauge** should display temperature in several cities at once.

Once more, add a div container for **BarGauge** to your HTML page. Create the *barGauge.js* JavaScript file and reference it on this HTML page.

According to the declared task, the bars on the **BarGauge** should indicate the temperature in several cities. For educational purposes, you can assign random values. First, determine the range of values to be indicated on the gauge by using the [startValue](/Documentation/ApiReference/Data_Visualization_Widgets/dxBarGauge/Configuration/#startValue) and [endValue](/Documentation/ApiReference/Data_Visualization_Widgets/dxBarGauge/Configuration/#endValue) options. Next, set data for the gauge using the [values](/Documentation/ApiReference/Data_Visualization_Widgets/dxBarGauge/Configuration/#values) option as shown below.

If you run this code, you will see **BarGauge** displaying the specified values. But these values do not represent actual data. It is time to add a slightly more advanced feature to our gauge - the capability to receive real data from a server and to update gauge values once the document is ready.
</article>