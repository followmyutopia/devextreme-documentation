<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Enable reordering of columns<!--/d-->
===========================================================================
<!--default-->false<!--/default-->
<!--type-->boolean<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether or not grid columns can be reordered by a user.
<!--/shortDescription-->

<!--fullDescription-->
Initially, grid columns appear in the order specified by the [columns](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/) array. When this array is not specified, grid columns have the same order as the fields of the first object from the data source. You can provide the capability for a user to reorder grid columns. To enable this capability, set the **allowColumnReordering** option to *true*. After that, grid columns can be reordered by dragging their headers.

Once enabled, all grid columns can be reordered by drag-and-drop. If you need to restrict a specific column from being reordered, set the [allowReordering](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowReordering) option of this column to *false*.
<!--/fullDescription-->