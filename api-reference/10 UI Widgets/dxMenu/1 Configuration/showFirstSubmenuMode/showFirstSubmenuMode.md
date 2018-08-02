===========================================================================
<!--default-->{ name: 'onClick', delay: { show: 50, hide: 300 } }<!--/default-->
<!--acceptValues-->'onClick' | 'onHover'<!--/acceptValues-->
<!--type-->Object | String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies options for showing and hiding the first level submenu.
<!--/shortDescription-->

<!--fullDescription-->
If you assign a string that specifies the mode name to this option, the widget will use the default delay value.

    <!--JavaScript-->
    showFirstSubmenuMode: "onHover"

#include common-ref-enum with {
    enum: "`ShowSubmenuMode`",
    values: "`OnHover` and `OnClick`"
}

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Menu/Overview/jQuery/Light/"
}
<!--/fullDescription-->