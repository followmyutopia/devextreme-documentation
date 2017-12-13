===================================================================
<!--handmade--><!--/handmade-->
<!--merge--><!--/merge-->
===================================================================

<!--fullDescription-->
This method gets the options of the first column found by either of the below:

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

 - *"command:adaptive"*  
    Gets the adaptive column.  

 - Any string matching the following format: *"optionName:value"*  
    Here, the *optionName* is one of the [column options]({basewidgetpath}/Configuration/columns/).

#####See Also#####
#include common-link-callmethods
- [columns]({basewidgetpath}/Configuration/columns/)
<!--/fullDescription-->