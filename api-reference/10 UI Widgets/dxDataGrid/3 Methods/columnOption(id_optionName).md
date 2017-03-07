<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
Gets current options of column.
<!--/d-->
<!--p1d-->column index or data field or caption<!--/p1d-->
<!--p2d-->The name of the option to get.<!--/p2d-->
<!--rd-->A option value of column.<!--/rd-->
===================================================================
===================================================================

<!--shortDescription-->
Returns the value of a specific column option.
<!--/shortDescription-->

<!--paramName1-->id<!--/paramName1-->
<!--paramType1-->number|string<!--/paramType1-->
<!--paramDescription1-->
The name, index, data field or caption of a column.
<!--/paramDescription1-->

<!--paramName2-->optionName<!--/paramName2-->
<!--paramType2-->string<!--/paramType2-->
<!--paramDescription2-->
The name of the required option.
<!--/paramDescription2-->

<!--returnType-->any<!--/returnType-->
<!--returnDescription-->
The value of the specified option.
<!--/returnDescription-->

<!--fullDescription-->
Use this method to obtain the value of a specific column option. This method accepts one of the following as the first argument.

* **Name**		
The [unique name](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#name) of the column.

* **Column Index**		
The index of the column in the [columns](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/) array.

* **Data Field**		
The name of the [data source field](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#dataField) assigned to the column.

* **Caption**		
The text displayed in the column header.

* **Service String**  
One of the following values:
 - *"command:edit"*    
    Gets the [edit column](/Documentation/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Grid_Columns/Command_Columns).

 - *"command:select"*    
    Gets the [select column](/Documentation/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Grid_Columns/Command_Columns).  

 - *"command:adaptive"*  
    Gets the [adaptive column](/Documentation/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Grid_Columns/Command_Columns).  
 
 - Any string matching the following format: *"optionName:value"*  
    Here, the *optionName* is one of the [column options](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/).

The specified option of the first column matching the name, column index, data field, or caption will be returned by this method.

For the list of accessible options, refer to the [columns](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/) option description. Additionally, you can get all options of a specific column by calling the same method [with an identifier only](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#columnOptionid).
<!--/fullDescription-->