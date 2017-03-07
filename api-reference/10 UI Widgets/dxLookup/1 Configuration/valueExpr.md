<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Defines an expression returning value from selected item (for a plain object item the expression could be field name).<!--/d-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->string|function<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the name of a data source item field whose value is held in the **value** configuration option.
<!--/shortDescription-->

<!--fullDescription-->
Assign "this" to this option in order for the widget to return the entire selected object from the **value** option. Note that the "this" value is not supported by a widget bound to an [ODataStore](/Documentation/ApiReference/Data_Layer/ODataStore/).

If you leave the option unassigned, the [value]({basewidgetpath}/Configuration/#value) option holds the entire [dataSource]({basewidgetpath}/Configuration/#dataSource) item corresponding to the selected value.


<!--/fullDescription-->
<!--handmade-->
<!--/handmade-->