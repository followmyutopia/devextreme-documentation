<!--id-->dxMenu.Options.submenuDirection<!--/id-->
===========================================================================
<!--default-->'auto'<!--/default-->
<!--acceptValues-->'auto' | 'leftOrTop' | 'rightOrBottom'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the direction at which the submenus are displayed.
<!--/shortDescription-->

<!--fullDescription-->
By default, the first submenu is displayed so that it is visible totally, based on the menu location on the page. Use the **submenuDirection** option to display the first submenu at the bottom or at the top of a root item when the widget's [orientation](/Documentation/ApiReference/UI_Widgets/dxMenu/Configuration/#orientation) is horizontal, and to the left or to the right when orientation is vertical.

#include common-ref-enum with {
    enum: "`SubmenuDirection`",
    values: "`LeftOrTop`, `RightOrBottom`, and `Auto`"
}

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Menu/Overview/jQuery/Light/"
}
<!--/fullDescription-->