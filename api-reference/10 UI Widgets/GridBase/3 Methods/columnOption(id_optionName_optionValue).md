===================================================================
===================================================================

<!--shortDescription-->
Updates the value of a single column option.
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

<!--paramName3-->optionValue<!--/paramName3-->
<!--paramType3-->any<!--/paramType3-->
<!--paramDescription3-->
The option's new value.
<!--/paramDescription3-->

<!--fullDescription-->
This method sets an option of the first column found by either of the below:

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
 - *"command:commandColumn"*    
    Here, *commandColumn* is a value of the [command]({basewidgetpath}/Configuration/columns/#command) option.

 - Any string matching the following format: *"optionName:value"*  
    Here, *optionName* is one of the [column options]({basewidgetpath}/Configuration/columns/).

#####See Also#####
- [columns]({basewidgetpath}/Configuration/columns/)
- [Command Columns](/Documentation/Guide/Widgets/{WidgetName}/Columns/Column_Types/Command_Columns/)
#include common-link-callmethods
<!--/fullDescription-->
