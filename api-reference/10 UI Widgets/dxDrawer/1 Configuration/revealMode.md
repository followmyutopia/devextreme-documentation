===========================================================================
<!--default-->'slide'<!--/default-->
<!--acceptValues-->'slide' | 'expand'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the drawer's reveal mode.
<!--/shortDescription-->

<!--fullDescription-->
The following modes are available:

* *"slide"*     
The drawer slides in. The drawer and its content are animated.

* *"expand"*    
The drawer expands from the closed position. The drawer's width is animated; its content is not.

#include common-ref-enum with {
    enum: "DrawerRevealMode",
    values: "`Slide` and `Expand`"
}

#####See Also#####
- [openedStateMode](/Documentation/ApiReference/UI_Widgets/dxDrawer/Configuration/#openedStateMode)
<!--/fullDescription-->