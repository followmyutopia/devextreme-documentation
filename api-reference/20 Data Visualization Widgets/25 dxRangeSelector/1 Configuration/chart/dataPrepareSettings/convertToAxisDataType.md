<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->true<!--/default-->
<!--type-->boolean<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether or not to convert the values from a data source into the data type of an axis.
<!--/shortDescription-->

<!--fullDescription-->
If this option is set to *true*, all data source values will be converted from their initial type into the data type of an axis. To specify the axis data type, use the [argumentType](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#argumentType) or [valueType](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#valueType) option of the **argumentAxis** or **valueAxis** object respectively. If the axis data type is not specified explicitly, it will be determined automatically on the base of the first data source value.

It is recommended that you set this option to *true* in order to prevent the chart from behaving incorrectly. However, since conversion between types affects performance, it is useful to set this option to *false* when you have a vast data source with values of the same type, with this type known beforehand.
<!--/fullDescription-->