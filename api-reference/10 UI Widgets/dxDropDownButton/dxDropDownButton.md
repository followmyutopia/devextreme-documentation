<!--widgettree-->
displayExpr: "name",
keyExpr: "id",
selectedItemKey: 1,
width: 120,
stylingMode: "text",
onButtonClick: function(e){
    e.component.toggle();
},
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
<!--inherits-->..\Widget\Widget.md,..\DataHelperMixin\DataHelperMixin.md<!--/inherits-->
===========================================================================

<!--shortDescription-->
The **DropDownButton** is a button that opens a drop-down menu.
<!--/shortDescription-->

<!--fullDescription-->

<!-- DEMO LINK -->

<!--/fullDescription-->