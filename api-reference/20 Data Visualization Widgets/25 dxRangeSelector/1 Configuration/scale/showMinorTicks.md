<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Show minor ticks<!--/d-->
<!--dep-->minorTick\visible.md<!--/dep-->
===========================================================================
<!--default-->true<!--/default-->
<!--type-->boolean<!--/type-->
===========================================================================

<!--deprecated-->
Use the **minorTick** | **visible** option instead.
<!--/deprecated-->

<!--shortDescription-->
Indicates whether or not to show minor ticks on the scale.
<!--/shortDescription-->

<!--fullDescription-->
A scale is divided by major and minor ticks by default. Major ticks have labels that display corresponding scale values. Major ticks cannot be positioned close to each other because of label overlap. Intermediate ticks are displayed between the major ticks. The intermediate ticks are called minor ticks. When the [snapToTicks](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/behavior/#snapToTicks) property is set to *true*, the sliders dock to both major and minor ticks.

To divide the scale by major ticks only, set the **showMinorTicks** property to *false*.

[note]Minor ticks are unavailable for a discrete scale.
<!--/fullDescription-->