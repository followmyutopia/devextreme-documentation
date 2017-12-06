===========================================================================
<!--type-->Object<!--/type-->
<!--inherits-->..\commonAxisSettings\commonAxisSettings.md<!--/inherits-->
===========================================================================

<!--shortDescription-->
Specifies [argument axis](/Documentation/Guide/Widgets/PolarChart/Visual_Elements/#Axes/Argument_Axis) options for the **PolarChart** widget.
<!--/shortDescription-->

<!--fullDescription-->
For charting, the polar coordinate system is used to determine each point uniquely on a plane through two numbers, the argument and the value of the point. A circular and straight lines (the axis of arguments and the axis of values) are specified to define the coordinates. To define the argument axis, use the **argumentAxis** configuration object. To define the value axis, use the [valueAxis](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/valueAxis/) configuration object. To set the properties of all axes to a common value, use the [commonAxisSettings](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/commonAxisSettings/) configuration object. This object exposes the properties that can be specified for all axes simultaneously. Note that the value specified for an axis individually (in the **argumentAxis** or **valueAxis** object) overrides the value specified in the **commonAxisSettings** object.
<!--/fullDescription-->