===================================================================
===================================================================

<!--shortDescription-->
Updates the values of several column options.
<!--/shortDescription-->

<!--paramName1-->id<!--/paramName1-->
<!--paramType1-->Number|String<!--/paramType1-->
<!--paramDescription1-->
The column's index, data field, caption or unique name.
<!--/paramDescription1-->

<!--paramName2-->options<!--/paramName2-->
<!--paramType2-->Object<!--/paramType2-->
<!--paramDescription2-->
The options with their new values.
<!--/paramDescription2-->

<!--fullDescription-->
This method changes options of the first column found by either of the below:

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
    Gets the editing column.

 - *"command:select"*    
    Gets the selection column.  

 - *"command:adaptive"*  
    Gets the adaptive column.
 
 - Any string matching the following format: *"optionName:value"*  
    Here, *optionName* is one of the [column options]({basewidgetpath}/Configuration/columns/).

    [note]In command columns, you can change only the [width]({basewidgetpath}/Configuration/columns/#width) and the [visibleIndex]({basewidgetpath}/Configuration/columns/#visibleIndex). See the [Command Columns](/Documentation/Guide/Widgets/{WidgetName}/Columns/Column_Types/Command_Columns/) topic for details.  

#####See Also#####
#include common-link-callmethods
- [columns]({basewidgetpath}/Configuration/columns/)
<!--/fullDescription-->