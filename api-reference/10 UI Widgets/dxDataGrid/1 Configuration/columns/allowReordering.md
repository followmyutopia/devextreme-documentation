<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Allows reordering by column<!--/d-->
===========================================================================
<!--default-->true<!--/default-->
<!--type-->boolean<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether or not a particular column can be used in column reordering. Setting this option makes sense only when the [allowColumnReordering](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#allowColumnReordering) option is set to *true*.
<!--/shortDescription-->

<!--fullDescription-->
Initially, grid columns appear in the order specified by the **columns** array. When this array is not specified, grid columns have the same order as the fields of the first object in the data source. A user can reorder columns if the **allowColumnReordering** option is set to *true*. If you need to prohibit using a specific column in the reordering process, set the **allowReordering** option of this column to *false*.
<!--/fullDescription-->