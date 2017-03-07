<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
Sets one or more options of column specified by option/value pairs object.
<!--/d-->
<!--p1d-->column index or data field or caption<!--/p1d-->
<!--p2d-->A map of option/value pairs to set.<!--/p2d-->
===================================================================
===================================================================

<!--shortDescription-->
Sets several options of a column at once.
<!--/shortDescription-->

<!--paramName1-->id<!--/paramName1-->
<!--paramType1-->number|string<!--/paramType1-->
<!--paramDescription1-->
The name, index, data field,or  caption of a column.
<!--/paramDescription1-->

<!--paramName2-->options<!--/paramName2-->
<!--paramType2-->object<!--/paramType2-->
<!--paramDescription2-->
The required configuration options.
<!--/paramDescription2-->

<!--fullDescription-->
Using this method, you can set several options of a specific column from code. This method accepts one of the following as the first parameter.

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

    [note]In command columns, you can change only the [width](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#width) or the [visibleIndex](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#visibleIndex).  

The options of the first column matching the name, column index, data field or caption will be changed by this method.

For the list of accessible options, refer to the [columns](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/) option description. If you need to set only one option for a column, you can use the [columnOption(id, optionName, optionValue)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#columnOptionid_optionName_optionValue) method instead.
<!--/fullDescription-->