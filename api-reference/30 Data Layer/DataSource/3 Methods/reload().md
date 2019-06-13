<!--id-->DataSource.reload()<!--/id-->
===================================================================
===================================================================

<!--shortDescription-->
Clears currently loaded **DataSource** items and calls the [load()](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load) method.
<!--/shortDescription-->

<!--returnType-->Promise<any><!--/returnType-->
<!--returnDescription-->
A Promise that is resolved after loading is completed and rejected after loading failed. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.
<!--/returnDescription-->

<!--fullDescription-->
The Promise returned from this method is extended with the **operationId** field which you can use to cancel the invoked operation. See [cancel(operationId)](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#canceloperationId) for details.
<!--/fullDescription-->