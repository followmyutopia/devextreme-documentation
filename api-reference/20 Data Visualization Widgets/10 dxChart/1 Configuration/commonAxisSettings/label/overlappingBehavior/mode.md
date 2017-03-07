<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->mode<!--/d-->
===========================================================================
<!--default-->'enlargeTickInterval'<!--/default-->
<!--acceptValues-->'ignore' | 'stagger' | 'rotate' | 'enlargeTickInterval'<!--/acceptValues-->
<!--type-->string<!--/type-->
===========================================================================

<!--shortDescription-->
Decides how to arrange axis labels when there is not enough space to keep all of them.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts one of the following values.

- **enlargeTickInterval**      
Enlarges the tick interval and, consequently, the interval between axis labels.
- **ignore**      
Leaves axis labels as they are - overlapped by each other.
- **rotate**      
Rotates axis labels through the angle specified by the **rotationAngle** option.
- **stagger**      
Arranges axis labels in two rows in a staggering manner. An empty space between the rows is specified by the **staggeringSpacing** option.

Alternatively, you can assign any of these values directly to the **overlappingBehavior** option.
<!--/fullDescription-->