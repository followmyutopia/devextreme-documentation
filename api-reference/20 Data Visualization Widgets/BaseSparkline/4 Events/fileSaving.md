<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Function is called when data is generated instead fileSaving action<!--/d-->
===========================================================================
<!--type-->EVENT<!--/type-->
<!--fp1d-->Information about export.<!--/fp1d-->
<!--fp1_field1d-->Returns the component instance<!--/fp1_field1d-->
<!--fp1_field2d-->Returns an html representing the component<!--/fp1_field2d-->
<!--fp1_field3d-->File name of exproting file<!--/fp1_field3d-->
<!--fp1_field4d-->Format of exporting document<!--/fp1_field4d-->
<!--fp1_field5d-->Blob data of generated Excel document<!--/fp1_field5d-->
<!--fp1_field6d-->Cancel file saving<!--/fp1_field6d-->
===========================================================================

<!--shortDescription-->
Fires before a file with exported data is saved on the user's local storage.
<!--/shortDescription-->

<!--fullDescription-->
To perform a custom action before a file with exported data is saved on the user's local storage, implement a handler for this event. Within this handler, you can use the object passed to it as the parameter. For example, using the **cancel** field of this object, you can cancel file saving.

#####See Also#####
- [exporting]({basewidgetpath}/Events#exporting) - an event that fires before data from the widget is exported.
- [exported]({basewidgetpath}/Events#exported) - an event that fires after data from the widget is exported.
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget <a href="{basewidgetpath}/Methods/#instance"></a> instance.
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
Assign <i>true</i> to this field if you need to prevent the file from being saved.
<!--/typeFunctionParamDescription1_field6-->

<!--handmade-->
<!--/handmade-->