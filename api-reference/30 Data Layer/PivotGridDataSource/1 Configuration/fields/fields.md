<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Array of field options<!--/d-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->array<!--/type-->
===========================================================================

<!--shortDescription-->
An array of pivot grid fields.
<!--/shortDescription-->

<!--fullDescription-->
If the [store](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/store/) type you use is not [XmlaStore](/Documentation/ApiReference/Data_Layer/XmlaStore/), you need to describe data from the data source for **PivotGrid** by assigning a list of fields to this option. Each pivot grid field must be associated with the field in the [store](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/store/) using the [dataField](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#dataField) option. 

Fields can be instantly placed into the pivot grid by assigning a value to the [area](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area) option. If this option is *undefined*, the field will be displayed in the [Field Chooser](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/fieldChooser/) only.

[note] If this array is not specified and the [retrieveFields](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/#retrieveFields) option is set to *true*, the fields will be generated automatically and placed to the [Field Chooser](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/fieldChooser/).
<!--/fullDescription-->