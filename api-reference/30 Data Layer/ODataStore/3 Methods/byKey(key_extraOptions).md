<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
Initiates loading of a single data item by key. Async function.
<!--/d-->
<!--p1d-->Key value<!--/p1d-->
<!--p2d-->Optional parameter with following structure { expand: ['NavigationProp1', 'NavigationProp2'] }<!--/p2d-->
<!--p2_field1d-->An expand expression or an array of expand expressions used to specify related entities to be included in the response<!--/p2_field1d-->
<!--rd-->Promise of jQuery.Deferred which resolves with (object dataItem) or rejects with (Error)<!--/rd-->
===================================================================
===================================================================

<!--shortDescription-->
Returns the data item specified by the key.
<!--/shortDescription-->

<!--paramName1-->key<!--/paramName1-->
<!--paramType1-->object|string|number<!--/paramType1-->
<!--paramDescription1-->
Specifies the key value of the required items.
<!--/paramDescription1-->

<!--paramName2-->extraOptions<!--/paramName2-->
<!--paramType2-->object<!--/paramType2-->
<!--paramDescription2-->
An object specifying additional options.
<!--/paramDescription2-->
<!--paramName2_field1-->expand<!--/paramName2_field1-->
<!--paramType2_field1-->string|array<!--/paramType2_field1-->
<!--paramDescription2_field1-->
An array of the strings that represent the names of the navigation properties to be loaded synchronously with the requested data item (see <a href="/Documentation/16_1/Guide/Data_Layer/Data_Source_Examples/#OData/Associations">Associations</a>).
<!--/paramDescription2_field1-->

<!--returnType-->Promise<!--/returnType-->
<!--returnDescription-->
A Promise of the jQuery.Deferred object resolved after the item has been loaded.
<!--/returnDescription-->

<!--fullDescription-->

<!--/fullDescription-->