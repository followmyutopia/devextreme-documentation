<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->eventType<!--/type-->
===========================================================================

<!--shortDescription-->
Raised when a user adds a custom item.
<!--/shortDescription-->

<!--fullDescription-->
Main article: [onCustomItemCreating]({basewidgetpath}/Configuration/#onCustomItemCreating)

#####See Also#####
- **Handle Events**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Handle_Events/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/) | [ASP.NET MVC](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Handling_Events_and_Defining_Callbacks)
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->DOMComponent<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget's instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->dxElement<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only if you use Knockout.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->text<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->string<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
Text of the widget's text field.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->customItem<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->string|object|Promise<any><!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->

<!--/typeFunctionParamDescription1_field5-->

<!--typeFunctionReturnType-->string|object|Promise<any><!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The item object or a Promise that is resolved after a custom item is created.
<!--/typeFunctionReturnDescription-->