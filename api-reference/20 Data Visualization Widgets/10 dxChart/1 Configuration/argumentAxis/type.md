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
Specifies the type of the argument axis.
<!--/shortDescription-->

<!--fullDescription-->
The argument axis can have one of the following types.

- **Continuous**        
Displays numeric and date-time arguments. To divide this axis into intervals, use the [tickInterval](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/tickInterval/) option.
- **Discrete**       
Displays string arguments called "categories". To sort them, use the [categories](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#categories) array.
- **Logarithmic**       
Displays numeric arguments. Each argument is the [logarithmBase](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#logarithmBase) value raised to some power. For example, **logarithmBase** equaling to 5 produces the following arguments: 5<sup>0</sup>, 5<sup>1</sup>, 5<sup>2</sup>, 5<sup>3</sup> etc. The logarithmic axis is useful when you visualize a dataset of rapidly-growing values.

Normally, there is no need to specify this option, because the axis type is determined automatically depending on the [type of arguments](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#argumentType). However, you may force the use of a specific axis type, for example, to employ the *"discrete"* axis type with numeric or date-time arguments.

When configuring the widget using [ASP.NET MVC Wrappers](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/), specify this option using the `AxisScaleType` enum. This enum accepts the following values: `Discrete`, `Continuous` and `Logarithmic`.
<!--/fullDescription-->