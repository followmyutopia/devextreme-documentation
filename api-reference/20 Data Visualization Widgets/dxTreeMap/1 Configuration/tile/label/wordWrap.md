===========================================================================
<!--default-->'normal'<!--/default-->
<!--acceptValues-->'normal' | 'break-word' | 'none'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies how to wrap texts that do not fit into a single line.
<!--/shortDescription-->

<!--fullDescription-->
The following modes are available:

- *"normal"*    
Text breaks only at allowed breakpoints (for example, a space between two words).

- *"breakWord"*     
Words can be broken if there are no available breakpoints in the line.

- *"none"*  
Word wrap is disabled.

If the text overflows the container even after word wrap, the widget applies the [textOverflow](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Configuration/tile/label/#textOverflow) option. 

#include common-ref-enum with {
    enum: "`VizWordWrap`",
    values: "`Normal`, `BreakWord`, and `None`"
}
<!--/fullDescription-->