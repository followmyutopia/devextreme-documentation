===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->any<!--/type-->
<!--firedEvents-->focusedRowChanged<!--/firedEvents-->
===========================================================================

<!--shortDescription-->
Specifies initially or currently focused grid row's key. Use it when [focusedRowEnabled]({basewidgetpath}/Configuration/#focusedRowEnabled) is **true**.
<!--/shortDescription-->

<!--fullDescription-->
The focused row has a key and [index]({basewidgetpath}/Configuration/#focusedRowIndex) on a page. When the [pager]({basewidgetpath}/Configuration/pager/) is used for navigation, the focused row's index persists from page to page but corresponds to a different row with a different key on each page.

In the **DataGrid**, group rows can also be focused. See the [Group Index and Key](/Documentation/Guide/Widgets/DataGrid/Grouping/#API/Group_Index_and_Key) topic for more information on how group keys are formed.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/DataGrid/FocusedRow/jQuery/Light/"
}

#####See Also#####
- [focusedRowIndex]({basewidgetpath}/Configuration/#focusedRowIndex)
- [onFocusedRowChanging]({basewidgetpath}/Configuration/#onFocusedRowChanging) | [onFocusedRowChanged]({basewidgetpath}/Configuration/#onFocusedRowChanged)
- [focusedColumnIndex]({basewidgetpath}/Configuration/#focusedColumnIndex)
<!--/fullDescription-->