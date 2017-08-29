<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--EventForAction-->..\4 Events\fileSaving.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A handler for the **fileSaving** event. Executed before a file with exported data is saved on the user's local storage.
<!--/shortDescription-->

<!--fullDescription-->
#####See Also#####
- [onExporting]({basewidgetpath}/Configuration#onExporting)
- [onExported]({basewidgetpath}/Configuration#onExported)
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The [widget's instance]({basewidgetpath}/Methods/#instance).
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->jQuery<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->fileName<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->string<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The name of the file to be saved.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->format<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->string<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The format of the file to be saved.<br/>
Possible Values: 'PNG' | 'PDF' | 'JPEG' | 'SVG' | 'GIF'
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->data<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->blob<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
Exported data as a BLOB.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->cancel<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->boolean<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
Assign **true** to this field if you need to prevent the file from being saved.
<!--/typeFunctionParamDescription1_field6-->
