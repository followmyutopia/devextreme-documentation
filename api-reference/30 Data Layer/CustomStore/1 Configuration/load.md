<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->function(options)<!--/type-->
===========================================================================

<!--shortDescription-->
The user implementation of the [load(options)](/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#loadoptions) method.
<!--/shortDescription-->

<!--fullDescription-->
This function's implementation has certain specifics depending on the widget in which you use the **CustomStore**. Refer to the **Custom Sources** topic of a specific widget for details:

- [DataGrid](/Documentation/Guide/Widgets/DataGrid/Data_Binding/Custom_Sources/)
- [PivotGrid](/Documentation/Guide/Widgets/PivotGrid/Use_CustomStore/)
- [TreeList](/Documentation/Guide/Widgets/TreeList/Data_Binding/Custom_Sources/)
- [List](/Documentation/Guide/Widgets/List/Data_Binding/Custom_Sources/)
- [Lookup](/Documentation/Guide/Widgets/Lookup/Data_Binding/Custom_Sources/)
- [SelectBox](/Documentation/Guide/Widgets/SelectBox/Data_Binding/Custom_Sources/)
- [TagBox](/Documentation/Guide/Widgets/TagBox/Data_Binding/Custom_Sources/)
- [Scheduler](/Documentation/Guide/Widgets/Scheduler/Data_Binding/Custom_Sources/)
- [Chart](/Documentation/Guide/Widgets/Chart/Data_Binding/Custom_Sources/) and other data visualization widgets

#####See Also#####
- [Load Data in Raw Mode](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Custom_Sources/Load_Data_in_Raw_Mode)
<!--/fullDescription-->
<!--typeFunctionParamName1-->options<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
An object specifying data shaping options.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->filter<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
Filter expression.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->sort<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->object<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
Sort expression.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->select<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
Select expression.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->group<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->object<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
Group expression.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->skip<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->number<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The index of the first loaded item.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->take<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->number<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The number of loaded items.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->userData<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->object<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
A bag for holding user-defined parameters.
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->requireTotalCount<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->boolean<!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
Specifies whether the function passed to this option should resolve the jQuery.Deferred with the second argument containing the **totalCount** field.
<!--/typeFunctionParamDescription1_field8-->
<!--typeFunctionParamName1_field9-->searchValue<!--/typeFunctionParamName1_field9-->
<!--typeFunctionParamType1_field9-->object<!--/typeFunctionParamType1_field9-->
<!--typeFunctionParamDescription1_field9-->
The value to which the search expression value is compared.
<!--/typeFunctionParamDescription1_field9-->
<!--typeFunctionParamName1_field10-->searchOperation<!--/typeFunctionParamName1_field10-->
<!--typeFunctionParamType1_field10-->string<!--/typeFunctionParamType1_field10-->
<!--typeFunctionParamDescription1_field10-->
A search operation expression.
<!--/typeFunctionParamDescription1_field10-->
<!--typeFunctionParamName1_field11-->searchExpr<!--/typeFunctionParamName1_field11-->
<!--typeFunctionParamType1_field11-->getter|Array<getter><!--/typeFunctionParamType1_field11-->
<!--typeFunctionParamDescription1_field11-->
A getter representing a search expression.
<!--/typeFunctionParamDescription1_field11-->

<!--typeFunctionReturnType-->Promise<any><!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A promise of a deferred object resolved after data is loaded.
<!--/typeFunctionReturnDescription-->