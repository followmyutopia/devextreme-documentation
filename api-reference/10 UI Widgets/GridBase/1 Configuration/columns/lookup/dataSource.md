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
Specifies the data source for the lookup column.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts one of the following.

- **Array of Objects**       
A simple JavaScript array containing a collection of plain objects.

- [**DataSource Configuration Object**](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/)       
A configuration object of the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/). Learn more about the **DataSource** and the DevExtreme Data Layer concept from the [Data Layer](/Documentation/Guide/Data_Layer/Data_Layer/) topic.

    [note] When using a [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/) for the lookup data source, you are required to implement the [load](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load) and [byKey](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#byKey) functions.

- **Function**      
A function that returns either an array of objects or a **DataSource** configuration object.

The lookup data source must contain fields assigned to the [valueExpr]({basewidgetpath}/Configuration/columns/lookup/#valueExpr) and [displayExpr]({basewidgetpath}/Configuration/columns/lookup/#displayExpr) options.

#####See Also#####
- [Data Layer](/Documentation/Guide/Data_Layer/Data_Layer/)
- [DataSource Examples](/Documentation/Guide/Data_Layer/Data_Source_Examples/)
<!--/fullDescription-->
<!--typeFunctionParamName1-->options<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The settings of a row.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->data<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The data of the row.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->key<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->any<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The key value of the row.
<!--/typeFunctionParamDescription1_field2-->
