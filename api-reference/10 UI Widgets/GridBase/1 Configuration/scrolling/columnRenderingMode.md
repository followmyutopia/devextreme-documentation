<!--id-->GridBase.Options.scrolling.columnRenderingMode<!--/id-->
===========================================================================
<!--default-->'standard'<!--/default-->
<!--acceptValues-->'standard' | 'virtual'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the rendering mode for columns. Applies when columns are left outside the viewport. Requires the [columnWidth]({basewidgetpath}/Configuration/#columnWidth), [columnAutoWidth]({basewidgetpath}/Configuration/#columnAutoWidth), or [width]({basewidgetpath}/Configuration/columns/#width) (for all columns) option specified.
<!--/shortDescription-->

<!--fullDescription-->
The following rendering modes are available in the widget: 

- *"standard"*        
Renders all columns at once.

- *"virtual"*     
Renders only those columns that get into the viewport.          
This mode is ignored if [banded columns](/Documentation/Guide/Widgets/{WidgetName}/Columns/Column_Types/Band_Columns/) are present in the widget.

#include common-ref-enum with {
    enum: "`GridColumnRenderingMode`",
    values: "`Standard` and `Virtual`"
}
<!--/fullDescription-->