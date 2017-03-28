<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--acceptValues-->'discrete' | 'continuous' | 'logarithmic'<!--/acceptValues-->
<!--type-->string<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the type of the value axis.
<!--/shortDescription-->

<!--fullDescription-->
The value axis can have one of the following types.

- **Continuous**        
Displays numeric and date-time values. To divide this axis into intervals, use the [tickInterval](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/tickInterval/) option.
- **Discrete**       
Displays string values called "categories". To sort them, use the [categories](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#categories) array.
- **Logarithmic**       
Displays numeric values. Each value is the [logarithmBase](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#logarithmBase) value raised to some power. For example, **logarithmBase** equaling to 10 produces the following values: 10<sup>-2</sup>, 10<sup>-1</sup>, 10<sup>0</sup>, 10<sup>1</sup>, 10<sup>2</sup>, etc. The logarithmic axis is useful when you visualize a dataset of rapidly-growing values.

Normally, there is no need to specify this option, because the axis type is determined automatically depending on the [type of values](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#valueType). However, you may force the use of a specific axis type, for example, to employ the *"discrete"* axis type with numeric or date-time values.

When configuring the widget using [ASP.NET MVC Wrappers](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/), specify this option using the `AxisScaleType` enum. This enum accepts the following values: `Discrete`, `Continuous` and `Logarithmic`.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/chartschartsadvancedfeatureslogarithmicaxis/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<!--/fullDescription-->