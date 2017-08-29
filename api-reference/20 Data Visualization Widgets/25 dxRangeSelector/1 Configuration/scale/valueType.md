<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--acceptValues-->'datetime' | 'numeric' | 'string'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the type of values on the scale.
<!--/shortDescription-->

<!--fullDescription-->
When the scale is built on values from a [data source](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/#dataSource), scale values and data source values have the same type. For example, if numeric values are specified in the data source, scale values will also be of a numeric type. In some scenarios, you may need to convert data source values into another type if, for instance, numbers are stored as strings in your data source. In this case, use the **valueType** option to specify the type of scale values implicitly.

[note]If dates in your data source are stored as strings, make sure that they have a [valid format](http://www.w3schools.com/js/js_date_formats.asp).

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `ChartDataType` enum. This enum accepts the following values: `Numeric`, `DateTime` and `String`.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/formsandmulti-purposerangeselectorrangeselectorscaledatatypedatatimesupport/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Date-Time Scale Demo</a>
<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Range_Selector/NumericScale/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Numeric Scale Demo</a>
<!--/fullDescription-->