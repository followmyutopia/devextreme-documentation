---
id: CustomStore.Options.load
type: function(options)
---
---
##### shortDescription
Specifies a custom implementation of the [load(options)](/Documentation/ApiReference/Data_Layer/CustomStore/Methods/#loadoptions) method.

##### param(options): LoadOptions
Data processing settings.

##### return: Promise<any> | Array<any>
An array with data or a Promise that is resolved after data is loaded. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.

---
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