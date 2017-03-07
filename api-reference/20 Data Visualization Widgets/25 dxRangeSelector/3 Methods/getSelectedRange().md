<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
Returns the currently selected range
<!--/d-->
<!--rd-->Some object<!--/rd-->
===================================================================
===================================================================

<!--shortDescription-->
Returns the currently selected range.
<!--/shortDescription-->

<!--returnType-->object<!--/returnType-->
<!--returnDescription-->
An object representing the start and end values of the currently selected range.
<!--/returnDescription-->

<!--fullDescription-->
To obtain the currently selected range once, use the **getSelectedRange()** method. If you need to obtain the selected range each time it is modified, use the [onSelectedRangeChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/#onSelectedRangeChanged) callback function.

To get the start and end values, use the **startValue** and **endValue** fields of the returned object, respectively.
<!--/fullDescription-->