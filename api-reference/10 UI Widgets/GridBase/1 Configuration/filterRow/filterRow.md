---
id: GridBase.Options.filterRow
type: Object
---
---
##### shortDescription
Configures the filter row.

---
The filter row allows a user to filter data by values of individual columns.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout {WidgetName} FilterRow](/Content/images/doc/19_2/{WidgetName}/visual_elements/filter_row.png)

Each cell in the filter row contains a magnifying glass icon, pausing on which opens a drop-down list with filters [available for the column]({basewidgetpath}/Configuration/columns/#filterOperations).

![DevExtreme HTML5 JavaScript jQuery Angular Knockout {WidgetName} FilterRow](/Content/images/doc/19_2/{WidgetName}/visual_elements/filter_row_operation_chooser.png)

To make the filter row visible, assign **true** to the **filterRow**.[visible]({basewidgetpath}/Configuration/filterRow/#visible) option.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/{WidgetName}/Filtering/jQuery/Light/"
}

#####See Also#####
- [Filter Row](/Documentation/Guide/Widgets/{WidgetName}/Filtering_and_Searching/#Filter_Row)
- [filter(filterExpr)]({basewidgetpath}/Methods/#filterfilterExpr)
- [clearFilter(filterName)]({basewidgetpath}/Methods/#clearFilterfilterName)