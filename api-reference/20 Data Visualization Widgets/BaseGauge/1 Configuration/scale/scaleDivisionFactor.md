===========================================================================
<!--default-->17<!--/default-->
<!--type-->Number<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the minimum distance between two neighboring [major ticks]({basewidgetpath}/Configuration/scale/tick/) in pixels.
<!--/shortDescription-->

<!--fullDescription-->
The distance between major ticks depends on two interrelated options: **scaleDivisionFactor** and [tickInterval]({basewidgetpath}/Configuration/scale/#tickInterval). If the specified tick interval results in a pixel distance between two ticks that is less than the **scaleDivisionFactor** value, this tick interval is ignored.

Use the **scaleDivisionFactor** option only if you want to set the distance between ticks when the scale's measurement units are unknown. Otherwise, utilize **tickInterval**.
<!--/fullDescription-->