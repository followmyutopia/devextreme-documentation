<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Returns the options of a column by an identifier.
<!--/shortDescription-->

<!--paramName1-->id<!--/paramName1-->
<!--paramType1-->number|string<!--/paramType1-->
<!--paramDescription1-->
The name, index, data field, or caption of a column.
<!--/paramDescription1-->

<!--returnType-->object<!--/returnType-->
<!--returnDescription-->
The options of the specified column.
<!--/returnDescription-->

<!--fullDescription-->
Use this method to obtain an object of the options currently applied to a specific column. This method accepts one of the following.

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
    Gets the [edit column](/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Columns/Command_Columns).

 - *"command:select"*    
    Gets the [select column](/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Columns/Command_Columns).  

 - *"command:adaptive"*  
    Gets the [adaptive column](/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Columns/Command_Columns).  

 - Any string matching the following format: *"optionName:value"*  
    Here, the *optionName* is one of the [column options](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/).


The options of the first column matching the name, column index, data field, caption or service string will be returned by this method.

For the list of options included in the object returned by the **columnOption(id)** method, refer to the [columns](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/) option description. Additionally, you can get the value of a specific column option using the same method called [with two arguments](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#columnOptionid_optionName).
<!--/fullDescription-->