===========================================================================
<!--type-->function(options)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a custom implementation of the [load(options)](/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#loadoptions) method.
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
<!--typeFunctionParamType1-->LoadOptions<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Data processing settings.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->Promise<any><!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A Promise that is resolved after data is loaded. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery.
<!--/typeFunctionReturnDescription-->