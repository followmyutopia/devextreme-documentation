===========================================================================
<!--default-->'auto'<!--/default-->
<!--acceptValues-->'auto' | 'keep' | 'reset' | 'shift'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies how the axis's [visual range](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/visualRange/) should behave when chart data is updated.
<!--/shortDescription-->

<!--fullDescription-->
The following modes are available:

- *"shift"*     
The visual range moves to the axis's end. The range's length does not change.

- *"reset"*     
The visual range becomes equal to the [whole range](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/wholeRange/).

- *"keep"*      
The visual range does not change.

- *"auto"*      
The applied mode changes depending on the visual range's position on the axis:
    - at the start or middle, then *"keep"*;
    - at the end, then *"shift"*;
    - if set to view the whole range, then *"reset"* (the visual range remains equal to the whole range).

#####See Also#####
- **Axis**.[visualRange()](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Axis/Methods/#visualRange)
<!--/fullDescription-->