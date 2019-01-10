===========================================================================
<!--default-->'contains'<!--/default-->
<!--acceptValues-->'contains' | 'startswith'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether found items should contain the typed-in string or start with it. Applies only if [searchEnabled]({basewidgetpath}/Configuration/#searchEnabled) is **true**.
<!--/shortDescription-->

<!--fullDescription-->
#include common-ref-enum with {
    enum: "`DropDownSearchMode`",
    values: "`Contains` and `StartsWith`"
}

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/SelectBox/SearchAndEditing/jQuery/Light/"
}
<!--/fullDescription-->