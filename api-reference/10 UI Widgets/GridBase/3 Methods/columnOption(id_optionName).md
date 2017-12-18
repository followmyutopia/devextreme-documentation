===================================================================
===================================================================

<!--shortDescription-->
Gets the value of a single column option.
<!--/shortDescription-->

<!--paramName1-->id<!--/paramName1-->
<!--paramType1-->Number|String<!--/paramType1-->
<!--paramDescription1-->
The column's index, data field, caption or unique name.
<!--/paramDescription1-->

<!--paramName2-->optionName<!--/paramName2-->
<!--paramType2-->String<!--/paramType2-->
<!--paramDescription2-->
The option's name.
<!--/paramDescription2-->

<!--returnType-->any<!--/returnType-->
<!--returnDescription-->
The option's value.
<!--/returnDescription-->

<!--fullDescription-->
This method gets the value of an option of the first column found by either of the below:

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
    Here, the *optionName* is one of the [column options]({basewidgetpath}/Configuration/columns/).

#####See Also#####
#include common-link-callmethods
- [columns]({basewidgetpath}/Configuration/columns/)
<!--/fullDescription-->