===========================================================================
<!--default-->'left'<!--/default-->
<!--acceptValues-->'left' | 'right' | 'top' | 'bottom' | 'before' | 'after'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the drawer's position in relation to the view.
<!--/shortDescription-->

<!--fullDescription-->
Use *"before"* and *"after"* if the **Drawer** should be positioned differently in right-to-left and regular representations. The following table shows the dependency between the [rtlEnabled](/Documentation/ApiReference/Common/Object_Structures/globalConfig/#rtlEnabled) value and *"before"* and *"after"* positions:

<div class="simple-table">
<table  style="text-align:center">
 <tr>
    <th></th>
    <th>"before"</th>
    <th>"after"</th>
 </tr>
 <tr>
    <td style="text-align:left">rtlEnabled: false</td>
    <td>left side of the view</td>
    <td>right side of the view</td>
 </tr>
 <tr>
    <td style="text-align:left">rtlEnabled: true</td>
    <td>right side of the view</td>
    <td>left side of the view</td>
 </tr>
</table>
</div>


#include common-demobutton-named with {
    url: "/Demos/WidgetsGallery/Demo/Drawer/TopOrBottomPosition/jQuery/Light/",
    name: "Top or Bottom Position"
}
#include common-demobutton-named with {
    url: "/Demos/WidgetsGallery/Demo/Drawer/LeftOrRightPosition/jQuery/Light/",
    name: "Left or Right Position"
}

#include common-ref-enum with {
    enum: "`DrawerPosition`",
    values: "`Left`, `Right`, `Top`, `Bottom`, `Before`, and `After`"
}
<!--/fullDescription-->