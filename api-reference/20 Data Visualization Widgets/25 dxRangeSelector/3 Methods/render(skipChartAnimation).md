<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Redraws a widget.
<!--/shortDescription-->

<!--paramName1-->skipChartAnimation<!--/paramName1-->
<!--paramType1-->boolean<!--/paramType1-->
<!--paramDescription1-->
Specifies whether or not to animate the chart within a range selector on render.
<!--/paramDescription1-->

<!--fullDescription-->
When the size of a range selector container changes at runtime, the range selector should be redrawn explicitly. To do this, call its **render(skipChartAnimation)** method.

If your range selector contains a chart in the background, you can specify whether or not to animate it on render. Pass *false* as the parameter to animate the chart on redraw. Otherwise, pass *true* or call the **render** method without parameters.

#####See Also#####
- **Call Methods**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Call_Methods/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/)
- [getCombinedFilter()]({basewidgetpath}/Methods/#getCombinedFilter)
<!--/fullDescription-->