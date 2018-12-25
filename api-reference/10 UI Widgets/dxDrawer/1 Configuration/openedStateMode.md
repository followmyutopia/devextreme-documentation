===========================================================================
<!--default-->'shrink'<!--/default-->
<!--acceptValues-->'overlap' | 'shrink' | 'push'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies how the drawer interacts with the view in the opened state.
<!--/shortDescription-->

<!--fullDescription-->
The following modes are available:

- *"overlap"*       
The drawer overlaps the view.

- *"shrink"*        
The view's width decreases to accommodate the drawer.

- *"push"*      
The drawer partially displaces the view.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Drawer/HorizontalOpening/jQuery/Light/"
}

#include common-ref-enum with {
    enum: "`DrawerOpenedStateMode`",
    values: "`Overlap`, `Shrink`, and `Push`"
}

#####See Also#####
- [revealMode](/Documentation/ApiReference/UI_Widgets/dxDrawer/Configuration/#revealMode)
<!--/fullDescription-->
