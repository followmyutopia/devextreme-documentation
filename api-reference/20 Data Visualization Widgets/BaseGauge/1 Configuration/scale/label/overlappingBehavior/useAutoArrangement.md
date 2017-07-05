<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--dep-->overlappingBehavior.md<!--/dep-->
===========================================================================
<!--default-->true<!--/default-->
<!--type-->boolean<!--/type-->
===========================================================================

<!--deprecated-->
Instead, use the [overlappingBehavior]({basewidgetpath}/Configuration/scale/label/overlappingBehavior/) option directly.
<!--/deprecated-->

<!--shortDescription-->
Specifies whether or not to expand the current **major tick interval** if labels overlap each other.
<!--/shortDescription-->

<!--fullDescription-->
If this property is set to **true**, the major tick interval always changes automatically when labels overlap each other. For instance, when labels are large due to the formatting that is applied, the tick interval will increase. In addition, when you set a custom tick interval that is so small that labels overlap each other, the tick interval will increase. To prohibit the automatic arrangement of ticks, set the **useTicksAutoArrangement** property to **false**.
<!--/fullDescription-->