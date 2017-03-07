<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->set maximum size of bubble (value - share of min(height, width) )<!--/d-->
===========================================================================
<!--propertyOf-->..\5 Series Types\BubbleSeries\BubbleSeries.md<!--/propertyOf-->
<!--default-->0.2<!--/default-->
<!--type-->number<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a coefficient determining the diameter of the largest bubble.
<!--/shortDescription-->

<!--fullDescription-->
When defining a bubble series, you are required to specify a [size field](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/BubbleSeries/#sizeField). The largest size value will be represented on the chart by the largest bubble. Its visual diameter will be calculated by the following formula.

*d = maxBubbleSize \* min(height, width)*

Normally, the *height* and *width* from this formula equal the size of the widget container. However, when several [panes](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/panes/) are used in the widget, the *height* and *width* equal the pane size.
<!--/fullDescription-->