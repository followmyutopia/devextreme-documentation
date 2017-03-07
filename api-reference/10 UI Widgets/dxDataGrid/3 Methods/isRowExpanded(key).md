<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
Check expanded state of row by key
<!--/d-->
<!--p1d-->Key of the row<!--/p1d-->
<!--rd-->A Boolean value specifying whether row is expanded<!--/rd-->
===================================================================
===================================================================

<!--shortDescription-->
Allows you to find out whether a specific group or master row is expanded or collapsed.
<!--/shortDescription-->

<!--paramName1-->key<!--/paramName1-->
<!--paramType1-->any<!--/paramType1-->
<!--paramDescription1-->
The key of the group or master row.
<!--/paramDescription1-->

<!--returnType-->boolean<!--/returnType-->
<!--returnDescription-->
<i>true</i> if the row is expanded; <i>false</i> if collapsed.
<!--/returnDescription-->

<!--fullDescription-->
To find out whether a [group row](/Documentation/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Group_Rows) is expanded, call this method with an array, in which each member is a grouping value. To find out if a [master row](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/masterDetail/) is expanded, pass its key to this method.
<!--/fullDescription-->