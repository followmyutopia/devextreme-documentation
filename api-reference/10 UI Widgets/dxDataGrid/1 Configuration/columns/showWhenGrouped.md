<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Show grouped column in column headers<!--/d-->
===========================================================================
<!--default-->false<!--/default-->
<!--type-->boolean<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether or not to display the column when grid records are grouped by it.
<!--/shortDescription-->

<!--fullDescription-->
Displaying a grouping column may be useful if you calculate its grouping values. Consider that you need to group records by a column that contains dates. Grouping by full dates seems inconvenient. It would be smarter to group by months or years instead. For this purpose, you calculate grouping values within the [calculateGroupValue](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateGroupValue) function and leave the grouping column visible by setting the **showWhenGrouped** option to *true* so that the user can view the full dates.
<!--/fullDescription-->