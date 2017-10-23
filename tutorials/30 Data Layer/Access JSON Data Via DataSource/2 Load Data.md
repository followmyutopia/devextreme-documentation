<article data-show-web="/Content/Applications/17_2/DataLayer/AccessJSONDataViaDataSource/Step3/markup.html" data-show-first="script.js">

Call the [dataSource.load()](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load) method to load data. This method returns a Promise of the jQuery Deferred object resolved after loading is finished. The loaded data should be processed within a callback function passed to the done() method of the returned Promise object. This callback function takes on the loaded array as a parameter.

Call the **render()** function within the callback mentioned above.
</article>