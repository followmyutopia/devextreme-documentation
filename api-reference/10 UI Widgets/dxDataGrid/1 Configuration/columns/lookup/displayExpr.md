<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Defines an expression returning displayed value for a chosen item (e.g. for string item the expression is 'this', for a plain object item the expression could be field name).<!--/d-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->string | function(data)<!--/type-->
<!--fp1d-->A data object<!--/fp1d-->
===========================================================================

<!--shortDescription-->
Specifies the expression defining the data source field whose values must be displayed.
<!--/shortDescription-->

<!--fullDescription-->
This option specifies the field of the data source whose values must be displayed in place of the values of the field defined by the **valueExpr** option. When you need to simply substitute values of one field for values of another, assign the names of these fields to the **valueExpr** and **displayExpr** fields of the **lookup** object correspondingly. In case you need to compound the value to be displayed from several data source fields, assign a callback function returning this value to the **displayExpr** option. Within this function, you can access the object of the lookup data source using the function's parameter.
<!--/fullDescription-->
<!--typeFunctionParamName1-->data<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
A data object.
<!--/typeFunctionParamDescription1-->
