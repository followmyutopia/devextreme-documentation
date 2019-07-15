<!--id-->dxDropDownButton<!--/id-->
<!--widgettree-->
displayExpr: "name",
keyExpr: "id",
selectedItemKey: 1,
width: 120,
stylingMode: "text",
useSelectMode: true,
items: [
    {id: 1, name: "Left", icon: "alignleft"},
    {id: 4, name: "Right", icon: "alignright"},
    {id: 2, name: "Center", icon: "aligncenter"},
    {id: 3, name: "Justify", icon: "alignjustify"}
]
<!--/widgettree-->
===========================================================================
<!--module-->ui/drop_down_button<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->Widget,DataHelperMixin<!--/inherits-->
===========================================================================

<!--shortDescription-->
The **DropDownButton** is a button that opens a drop-down menu.
<!--/shortDescription-->

<!--fullDescription-->
#include common-tutorialbutton with {
    url: "/Documentation/Guide/Widgets/DropDownButton/Getting_Started_with_DropDownButton/"
}
#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/DropDownButton/Overview/jQuery/Light/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget
<!--/fullDescription-->