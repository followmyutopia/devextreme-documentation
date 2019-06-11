<!--id-->BaseWidget.Options.onIncidentOccurred<!--/id-->
<!--EventForAction-->..\4 Events\incidentOccurred.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A function that is executed when an error or warning occurs.
<!--/shortDescription-->

<!--fullDescription-->
The widget notifies you of errors and warnings by passing messages to the browser console. Each message contains the incident's ID, a brief description, and a link to the [Errors and Warnings](/Documentation/ApiReference/Data_Visualization_Widgets/Errors_and_Warnings/) section where further information about this incident can be found.

The **onIncidentOccurred** function allows you to handle errors and warnings the way you require. The object passed to it contains the **target** field. This field provides information about the occurred incident and contains the following properties:

* **id**    
The incident's ID. The full list of IDs can be found in the **Errors and Warnings** section.
* **type**        
The incident's type: *"error"* or *"warning"*.
* **args**    
The argument of the incident's message. Depends on the incident. For example, it may be the name of the data source field that was specified incorrectly, or the name of the option that was not set properly.
* **text**        
The text passed to the browser's console. Includes the **args** content, if there is any.
* **widget**    
The name of the widget that produced the error or warning.
* **version**    
The used DevExtreme version.
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->{WidgetName}<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget's instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->dxElement<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](http://api.jquery.com/Types/#jQuery) when you use jQuery.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->Object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only if you use Knockout.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->target<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->any<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
Information on the occurred incident.
<!--/typeFunctionParamDescription1_field4-->
