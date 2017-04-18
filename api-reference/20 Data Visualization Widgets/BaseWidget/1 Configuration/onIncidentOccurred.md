<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--EventForAction-->..\4 Events\incidentOccurred.md<!--/EventForAction-->
===========================================================================
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A handler for the **incidentOccurred** event.
<!--/shortDescription-->

<!--fullDescription-->
When an error or warning appears, the widget notifies you by passing a message to the browser console. This message contains the ID of the incident, a brief description, and a link to the [Errors and Warnings](/Documentation/ApiReference/Data_Visualization_Widgets/Errors_and_Warnings/) section where further information about this incident can be found. However, you can handle errors and warnings in the way that you require. To do this, implement a callback function performing the required actions and assign it to the **onIncidentOccurred** option. Within this function, you can use information about the incident that occurred. This information can be accessed from the **target** field of the object passed to the callback function as a parameter. This information includes the following.

* **id**    
Contains the ID of the incident. The full list of IDs can be found in the **Errors and Warnings** section.
* **type**        
Contains the type of the incident. This field equals *'error'* for errors or *'warning'* for warnings.
* **args**    
Contains the argument of the incident's message. The content of this field varies greatly, depending on the incident. For example, it may contain the name of the data source field that was not specified correctly, or the name of the option that was not set properly.
* **text**        
Contains the text passed to the browser console. This text includes the content of the **args** field, if there are any.
* **widget**    
Contains the name of the widget that produced the error or warning.
* **version**    
Contains the currently used version of the ChartJS library.
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->object<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->target<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
Information about the occurred incident.
<!--/typeFunctionParamDescription1_field3-->
