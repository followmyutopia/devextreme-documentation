===========================================================================
<!--default-->'auto'<!--/default-->
<!--acceptValues-->'auto' | 'keep' | 'reset' | 'shift'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies how the axis's [visual range](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/visualRange/) should behave when chart data is updated.
<!--/shortDescription-->

<!--fullDescription-->
The following modes are available:

- *"reset"*     
The visual range becomes equal to the data range or the [whole range](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/wholeRange/) if it is a subrange of the data range.

- *"keep"*      
The visual range does not change.

- *"auto"*      
When the visual range is specified, the applied mode changes depending on the argument axis' [visualRangeUpdateMode](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#visualRangeUpdateMode) at the moment when data is updated:
    - if *"reset"* or *"shift"*, then *"reset"*;
    - if *"keep"*, then *"keep"*.

#####See Also#####
- **Axis**.[visualRange()](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Axis/Methods/#visualRange)
<!--/fullDescription-->