<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
Sets the option value of column by option name.
<!--/d-->
<!--p1d-->column index or data field or caption<!--/p1d-->
<!--p2d-->The name of the option to get.<!--/p2d-->
<!--p3d-->A option value to set.<!--/p3d-->
===================================================================
===================================================================

<!--shortDescription-->
Sets an option of a specific column.
<!--/shortDescription-->

<!--paramName1-->id<!--/paramName1-->
<!--paramType1-->number|string<!--/paramType1-->
<!--paramDescription1-->
The name, index, data field, or caption of a column.
<!--/paramDescription1-->

<!--paramName2-->optionName<!--/paramName2-->
<!--paramType2-->string<!--/paramType2-->
<!--paramDescription2-->
The name of the option to change.
<!--/paramDescription2-->

<!--paramName3-->optionValue<!--/paramName3-->
<!--paramType3-->any<!--/paramType3-->
<!--paramDescription3-->
A new value for this option.
<!--/paramDescription3-->

<!--fullDescription-->
Using this method, you can set an option of a specific column from code. This method accepts one of the following as the first argument.

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

The specified option of the first column matching the name, column index, data field or caption will be changed by this method.

For the list of accessible options, refer to the [columns](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/) option description. Also, you can set several column options at once. Use the [columnOption(id, options)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#columnOptionid_options) method to do this.


<!--/fullDescription-->