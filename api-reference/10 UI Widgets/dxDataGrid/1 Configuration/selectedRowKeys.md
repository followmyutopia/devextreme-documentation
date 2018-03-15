===========================================================================
<!--handmade--><!--/handmade-->
<!--merge--><!--/merge-->
===========================================================================

<!--shortDescription-->
Allows you to select rows or learn which rows are selected. Applies only if **selection**.[deferred]({basewidgetpath}/Configuration/selection/#deferred) is **false**.
<!--/shortDescription-->

<!--fullDescription-->
You should specify the field that provides keys to access a row using its key. For this, use the [key](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#key) option of the [Store](/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores) that underlies the [dataSource]({basewidgetpath}/Configuration/#dataSource). The whole data object is considered the key if no key field is specified. However, we recommend specifying the **key** option to prevent duplicating the selection.

#####See Also#####
- [Initial and Runtime Selection](/Documentation/Guide/Widgets/{WidgetName}/Selection/#API/Initial_and_Runtime_Selection)
- [getSelectedRowKeys()]({basewidgetpath}/Methods/#getSelectedRowKeys)
- [getSelectedRowsData()]({basewidgetpath}/Methods/#getSelectedRowsData)
<!--/fullDescription-->