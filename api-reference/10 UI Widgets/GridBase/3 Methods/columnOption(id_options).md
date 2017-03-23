<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
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
The [unique name]({basewidgetpath}/Configuration/columns/#name) of the column.

* **Column Index**		
The index of the column in the [columns]({basewidgetpath}/Configuration/columns/) array.

* **Data Field**		
The name of the [data source field]({basewidgetpath}/Configuration/columns/#dataField) assigned to the column.

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
    Here, the *optionName* is one of the [column options]({basewidgetpath}/Configuration/columns/).

    [note]In command columns, you can change only the [width]({basewidgetpath}/Configuration/columns/#width) or the [visibleIndex]({basewidgetpath}/Configuration/columns/#visibleIndex).  

The options of the first column matching the name, column index, data field or caption will be changed by this method.

For the list of accessible options, refer to the [columns]({basewidgetpath}/Configuration/columns/) option description. If you need to set only one option for a column, you can use the [columnOption(id, optionName, optionValue)]({basewidgetpath}/Methods/#columnOptionid_optionName_optionValue) method instead.
<!--/fullDescription-->