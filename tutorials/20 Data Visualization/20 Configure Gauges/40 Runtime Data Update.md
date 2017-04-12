<article data-show-web="/Content/Applications/17_1/DataVisualization/Lessons/ConfigureGauges/Step5/gauges.html">

To complete configuring the **CircularGauge** widget, implement a runtime data update. The idea is to update the gauge's value when the user selects a city from a drop-down menu. This app uses the DevExtreme's [SelectBox](/Documentation/ApiReference/UI_Widgets/) widget to provide you with the capability to choose cities. This widget requires two CSS files to be added to the project. You can find these files in your DevExtreme package.

To configure **SelectBox**, create another div element on the HTML page and add one more JavaScript file to the project. Assign an array of objects to the [dataSource](/Documentation/ApiReference/UI_Widgets/dxSelectBox/Configuration/#dataSource) option. Each object in this array represents a city identified by a unique [WOEID](https://developer.yahoo.com/geo/geoplanet/guide/concepts.html).

The next step is to update the main gauge value when a city is selected. Data about temperature in this city will be requested from the Yahoo! Weather Web service using the Yahoo! Query Language (YQL). To perform a query, use the [ajax()](http://api.jquery.com/jquery.ajax/) jQuery function. Handle the **SelectBox**'s [valueChanged](/Documentation/ApiReference/UI_Widgets/dxSelectBox/Events/#valueChanged) event as shown in the *selectBox.js* file below. To update the main gauge value, get the **CircularGauge** instance and call its [value](/Documentation/ApiReference/Data_Visualization_Widgets/dxCircularGauge/Methods/#valuevalue) method with a new value passed as the parameter.

Run the complete code and check that the value indicator is set to the temperature that is specified for the currently selected city.
</article>