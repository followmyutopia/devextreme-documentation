===========================================================================
<!--type-->function(filterValue, field)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a function that returns a filter expression for this custom operation.
<!--/shortDescription-->

<!--fullDescription-->
#####See Also#####
- [Implement a Custom Operation](/Documentation/Guide/Widgets/FilterBuilder/Implement_a_Custom_Operation/)
<!--/fullDescription-->
<!--typeFunctionParamName1-->filterValue<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->any<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
A **FilterBuilder** field's value.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->field<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->dxFilterBuilderField<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The field's configuration.
<!--/typeFunctionParamDescription2-->

<!--typeFunctionReturnType-->Filter expression<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A filter expression with filter operations supported by the **DataSource**.  
These operations are: "!", "=", "<>", ">", ">=", "<", "<=", "startswith", "endswith", "contains", "notcontains", "and", "or".
<!--/typeFunctionReturnDescription-->