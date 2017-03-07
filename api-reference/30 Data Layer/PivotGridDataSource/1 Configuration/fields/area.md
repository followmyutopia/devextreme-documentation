<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Type of area where field is located<!--/d-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--acceptValues-->undefined | 'row' | 'column' | 'data' | 'filter'<!--/acceptValues-->
<!--type-->string<!--/type-->
===========================================================================

<!--shortDescription-->
Type of the area where the field is located.
<!--/shortDescription-->

<!--fullDescription-->
If this option is *undefined*, the field is displayed in the [Field Chooser](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/fieldChooser/) only. An end-user can place this field to any area. Otherwise, the field is displayed in the corresponding area of the pivot grid and its area can be changed by an end-user using the Field Chooser. 

[note] You can allow users to place the field to the **Data Fields** area only by setting the [isMeasure](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#isMeasure) option to *true*. To deny using the integrated Field Chooser, set the **PivotGrid** | **fieldChooser** | [enabled](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/fieldChooser/#enabled) option to *false*.
 
<!--/fullDescription-->