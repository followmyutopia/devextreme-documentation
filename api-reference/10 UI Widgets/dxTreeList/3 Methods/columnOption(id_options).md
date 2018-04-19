===================================================================
<!--handmade--><!--/handmade-->
<!--merge--><!--/merge-->
===================================================================

<!--fullDescription-->
This method changes options of the first column found by either of the below:

* **Name**        
The [unique name](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#name) of the column.

* **Column Index**        
The index of the column in the [columns](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/) array.

* **Data Field**        
The name of the [data source field](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#dataField) assigned to the column.

* **Caption**        
The text displayed in the column header.

* **Service String**  
One of the following values:
 - *"command:edit"*    
    Gets the editing column.

 - *"command:adaptive"*  
    Gets the adaptive column.
 
 - Any string matching the following format: *"optionName:value"*  
    Here, *optionName* is one of the [column options](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/).

    [note]In command columns, you can change only the [width](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#width) and the [visibleIndex](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#visibleIndex). See the [Command Columns](/Documentation/Guide/Widgets/TreeList/Columns/Column_Types/Command_Columns/) topic for details.  

#####See Also#####
- [columns](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/)
#include common-link-callmethods
<!--/fullDescription-->