===========================================================================
<!--default-->'cell'<!--/default-->
<!--type-->template<!--/type-->
===========================================================================

<!--shortDescription-->
The template to be used for rendering calendar cells.
<!--/shortDescription-->

<!--fullDescription-->
The binding context of the template as well as the **itemData** parameter of a function passed to this option is an object containing the following fields.

- **text**  
 A text displayed by the cell.

- **date**  
 A Date object associated with the cell.

- **view**  
 The name of the current view.

[note]A binding context of an item template is the data source object that corresponds to the currently rendered cell. To access another binding context within an item template, use [Knockout](http://knockoutjs.com/documentation/binding-context.html)/[AngularJS](https://docs.angularjs.org/guide/scope) binding variables.

#####See Also#####
- [Customize Cell Appearance](/Documentation/Guide/Widgets/Calendar/Customize_Cell_Appearance/)
<!--/fullDescription-->
<!--typeFunctionParamName1-->itemData<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The current cell's data.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->itemIndex<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->Number<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The current cell's index.
<!--/typeFunctionParamDescription2-->

<!--typeFunctionParamName3-->itemElement<!--/typeFunctionParamName3-->
<!--typeFunctionParamType3-->dxElement<!--/typeFunctionParamType3-->
<!--typeFunctionParamDescription3-->
The current cell's container.
<!--/typeFunctionParamDescription3-->

<!--typeFunctionReturnType-->String|Node|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template name or container.
<!--/typeFunctionReturnDescription-->