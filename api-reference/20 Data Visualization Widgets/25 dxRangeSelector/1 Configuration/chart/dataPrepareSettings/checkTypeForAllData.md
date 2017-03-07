<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->check type for all data availability<!--/d-->
===========================================================================
<!--default-->false<!--/default-->
<!--type-->boolean<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether or not to validate values from a data source.
<!--/shortDescription-->

<!--fullDescription-->
Use this option when the values of your data source are of a different type and you need to display all of them on one axis.

If this option is set to *true*, the type of each data source value is checked, and the axis type is chosen optimally to display all of these values. Otherwise, only the type of the first data source value is checked, and the axis type is chosen according to the type of this value. In this case, the values that cannot be cast to the type of the axis will be ignored.

Since checking each value of a data source affects performance, it is useful to set this option to *false* when you have a vast data source with values of the same type, and this type is known beforehand.
<!--/fullDescription-->