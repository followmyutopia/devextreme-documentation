<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->[]<!--/default-->
<!--type-->Filter expression<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies [filters](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering) for the records that must appear initially selected.
<!--/shortDescription-->

<!--fullDescription-->
[note]This option applies only if selection is [deferred]({basewidgetpath}/Configuration/selection/#deferred).

This option also allows you to obtain [filter expressions](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering) for the currently selected rows. Note that if all records are selected, the **selectionFilter** value is *null*. If there are no selected records, the value contains an empty array.

In addition, you can obtain the selected row keys or data objects. For further information, see the [getSelectedRowKeys()]({basewidgetpath}/Methods/#getSelectedRowKeys) and [getSelectedRowsData()]({basewidgetpath}/Methods/#getSelectedRowsData) method descriptions.
<!--/fullDescription-->