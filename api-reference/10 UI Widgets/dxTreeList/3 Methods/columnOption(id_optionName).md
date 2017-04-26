<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Gets the value of a specific option set for a specific column.
<!--/shortDescription-->

<!--paramName1-->id<!--/paramName1-->
<!--paramType1-->number|string<!--/paramType1-->
<!--paramDescription1-->
The name, index, data field or caption of the column.
<!--/paramDescription1-->

<!--paramName2-->optionName<!--/paramName2-->
<!--paramType2-->string<!--/paramType2-->
<!--paramDescription2-->
The name of the required option.
<!--/paramDescription2-->

<!--returnType-->any<!--/returnType-->
<!--returnDescription-->
The value of this option.
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

 - *"command:adaptive"*  
    Gets the adaptive column.  
 
 - Any string matching the following format: *"optionName:value"*  
    Here, the *optionName* is one of the [column options]({basewidgetpath}/Configuration/columns/).

#####See Also#####
- [columns]({basewidgetpath}/Configuration/columns/)
<!--/fullDescription-->

<!--handmade-->
<!--/handmade-->