<!--id-->GridBase.Options.headerFilter<!--/id-->
===========================================================================
<!--type-->Object<!--/type-->
===========================================================================

<!--shortDescription-->
Configures the header filter feature.
<!--/shortDescription-->

<!--fullDescription-->
A header filter allows a user to filter values in an individual column by including/excluding them in/from the applied filter. A click on a header filter icon invokes a popup menu with all unique values in the column. By selecting or clearing the selection of values in this menu, the user includes/excludes them in/from the filter.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout Widget {WidgetName} HeaderFilter](/Content/images/doc/19_2/{WidgetName}/visual_elements/header_filter.png)

To make header filter icons visible, assign **true** to the **headerFilter**.[visible]({basewidgetpath}/Configuration/headerFilter/#visible) option. Data in the popup menu can be customized using the [headerFilter]({basewidgetpath}/Configuration/columns/headerFilter/) option of a specific column.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/{WidgetName}/Filtering/jQuery/Light/"
}

#####See Also#####
- [Header Filter](/Documentation/Guide/Widgets/{WidgetName}/Filtering_and_Searching/#Header_Filter)
- **columns[]**.[allowHeaderFiltering]({basewidgetpath}/Configuration/columns/#allowHeaderFiltering)
- [filter(filterExpr)]({basewidgetpath}/Methods/#filterfilterExpr)
- [clearFilter(filterName)]({basewidgetpath}/Methods/#clearFilterfilterName)
<!--/fullDescription-->