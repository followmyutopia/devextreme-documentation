<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->'hide'<!--/default-->
<!--acceptValues-->'stagger' | 'rotate' | 'hide' | 'none'<!--/acceptValues-->
<!--type-->String | Object<!--/type-->
===========================================================================

<!--shortDescription-->
Decides how to arrange axis labels when there is not enough space to keep all of them.
<!--/shortDescription-->

<!--fullDescription-->
When axis labels overlap each other, you can rearrange them by setting the **overlappingBehavior** option. Depending on whether an axis is horizontal or vertical, this option accepts different values.

[note]Unless the [rotated](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#rotated) option is set to **true**, the argument axis is horizontal and the value axis is vertical.

The following values can be specified for both horizontal and vertical axes.

- **hide**      
Hides certain axis labels leaving more space for the others.
- **none**      
Leaves axis labels overlapped.

The following values can be specified for horizontal axes only.

- **rotate**      
Rotates axis labels through the angle specified by the **rotationAngle** option.
- **stagger**      
Arranges axis labels in two rows in a staggering manner. An empty space between the rows is specified by the **staggeringSpacing** option.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `OverlappingBehavior` enum. This enum accepts the following values: `Stagger`, `Rotate`, `Hide` and `None`.

[note] Specifying this option with an object as well as with the *"enlargeTickInterval"* and *"ignore"* values is <span style="color:red">deprecated</span>.

#####See Also#####
- [Axis Labels](/Documentation/Guide/Widgets/Chart/Axes/Axis_Labels/)
<!--/fullDescription-->