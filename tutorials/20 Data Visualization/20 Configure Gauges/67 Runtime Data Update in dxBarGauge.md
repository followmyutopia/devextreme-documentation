<article data-show-web="/Content/Applications/16_2/DataVisualization/Lessons/ConfigureGauges/Step8/gauges.html" data-show-first="barGauge.js">
**BarGauge** will display the temperature of the same cities that can be selected in **SelectBox**. Since multiple temperature values are needed, you will have to make several queries to the server.

Each city is identified by a unique WOEID. The temperature in the cities is requested from the Yahoo! Weather Web service using the Yahoo! Query Language (YQL). One query is performed using the [ajax()](http://api.jquery.com/jquery.ajax/) jQuery function. But in this case, you need to perform several consecutive queries. Use the [when()](http://api.jquery.com/jquery.when/) jQuery function to do this.

In the code below, the *retrieveData* function is called after all the queries are completed. This function pushes the received values into an array of temperatures and passes this array to the [values(newValues)](/Documentation/ApiReference/Data_Visualization_Widgets/dxBarGauge/Methods/#valuesnewValues) method of the **BarGauge** instance.

Run this code now and you will see that **BarGauge** displays real values obtained from the Yahoo! Weather Web service. Since the technical part of configuring the **BarGauge** widget is complete, it is now time to customize its appearance.
</article>
