<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--EventForAction-->..\4 Events\dataErrorOccurred.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function<!--/type-->
===========================================================================

<!--shortDescription-->
A handler for the [dataErrorOccured]({basewidgetpath}/Events/#dataErrorOccurred) event.
<!--/shortDescription-->

<!--fullDescription-->
To handle errors that might occur in the data source, implement a handling function and assign it to the **onDataErrorOccurred** option. To obtain a human-readable representation of the occurred error, use the **message** field of the **error** object passed to the handling function as the parameter's field.
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information on the occurred error.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget <a href="/Documentation/16_2/ApiReference/UI_Widgets/dxDataGrid/Methods/#instance">instance</a>.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->jQuery<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
Data that is available for binding against the element. Available only in the Knockout approach.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->error<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->JavaScript Error object<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The standard <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error">Error</a> object that defines the occurred error.
<!--/typeFunctionParamDescription1_field4-->
