===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->Array<any> | DataSource_Options | function(options)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the data source for the lookup column.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts one of the following.

- **Array of Objects**       
A simple JavaScript array containing a collection of plain objects.

- [**DataSource Configuration Object**](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/)       
A configuration object of the **DataSource**. See [Bind a Lookup Column to a Custom Data Source](/Documentation/Guide/Widgets/{WidgetName}/How_To/Bind_a_Lookup_Column_to_a_Custom_Data_Source/).

- **Function**      
A function that returns either an array of objects or a **DataSource** configuration object.

The lookup data source must contain fields assigned to the [valueExpr]({basewidgetpath}/Configuration/columns/lookup/#valueExpr) and [displayExpr]({basewidgetpath}/Configuration/columns/lookup/#displayExpr) options.
<!--/fullDescription-->
<!--typeFunctionParamName1-->options<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information on the current row.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->data<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->Object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The row's data.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->key<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->any<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The row's key.
<!--/typeFunctionParamDescription1_field2-->

<!--typeFunctionReturnType-->Array<any>|DataSource_Options<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
An array of data objects or a **DataSource** [configuration](Documentation/ApiReference/Data_Layer/DataSource/Configuration/).
<!--/typeFunctionReturnDescription-->