<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->array | DataSource configuration | function(options)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the data source providing data for a lookup column.
<!--/shortDescription-->

<!--fullDescription-->
In order to have correspondence between the values from the main [data source]({basewidgetpath}/Configuration/#dataSource) and those values that need to be displayed, specify a lookup data source. This data source can be one of the following.

- An Array of objects  
	The fields of each object will be used to provide data for the lookup select box.

- A [DataSource Configuration Object](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/)  
	The DataSource is a stateful object that includes options for data sorting, grouping, filtering; it also keeps data transformation options and applies them each time data is loaded. The DataSource also provides events intended to handle changing data and the state. The DataSource underlying data access logic is isolated in a [Store](/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores). Unlike the DataSource, a Store is a stateless object implementing a universal interface for reading and modifying data. To learn more, refer to the [Data Layer](/Documentation/Guide/Data_Layer/Data_Layer/) topic.

- A function returning any of the types specified above based on data of the entire row.

The lookup data source must contain fields that are used to define the **valueExpr** and **displayExpr** options of the **lookup** configuration object.

When using a [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/) to specify a data source for a lookup column, implementing its [load](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load) and [byKey](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#byKey) functions is mandatory.
<!--/fullDescription-->
<!--typeFunctionParamName1-->options<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The options of the current row.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->data<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The data object represented by the current grid row.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->key<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->any<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The key value of the clicked row.
<!--/typeFunctionParamDescription1_field2-->
