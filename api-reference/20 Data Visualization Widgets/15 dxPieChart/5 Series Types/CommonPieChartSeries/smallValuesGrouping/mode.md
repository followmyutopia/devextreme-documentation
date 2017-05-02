<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->'none'<!--/default-->
<!--acceptValues-->'topN' | 'smallValueThreshold' | 'none'<!--/acceptValues-->
<!--type-->string<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the segment grouping mode.
<!--/shortDescription-->

<!--fullDescription-->
If you need to group specific chart segments into one, set the options of the **smallValuesGrouping** configuration object. Using the **mode** option of this object, you can define the grouping mode.

Use a *'topN'* mode to group all segments with an index that is equal to or greater than the value of the **topCount** option.

To group all segments with a value less than the value of the **threshold** option, set a *'smallValueThreshold'* mode.

To switch the grouping off, assign *'none'* to the **mode** option.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `SmallValuesGroupingMode` enum. This enum accepts the following values: `TopN`, `SmallValueThreshold` and `None`.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartsdoughnutseriesdoughnutwithtopnseries/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<!--/fullDescription-->