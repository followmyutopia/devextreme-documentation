===========================================================================
<!--default-->'left'<!--/default-->
<!--acceptValues-->'left' | 'right' | 'top' | 'bottom' | 'before' | 'after'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the drawer's position in relation to the view.
<!--/shortDescription-->

<!--fullDescription-->
#include common-demobutton-named with {
    url: "/Demos/WidgetsGallery/Demo/Drawer/VerticalOpening/jQuery/Light/",
    name: "Vertical Opening"
}
#include common-demobutton-named with {
    url: "/Demos/WidgetsGallery/Demo/Drawer/HorizontalOpening/jQuery/Light/",
    name: "Horizontal Opening"
}

#include common-ref-enum with {
    enum: "`DrawerPosition`",
    values: "`Left`, `Right`, `Top`, `Bottom`, `Before`, and `After`"
}
<!--/fullDescription-->
