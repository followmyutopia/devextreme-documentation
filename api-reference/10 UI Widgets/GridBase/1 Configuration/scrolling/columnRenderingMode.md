---
id: GridBase.Options.scrolling.columnRenderingMode
acceptValues: 'standard' | 'virtual'
type: String
default: 'standard'
---
---
##### shortDescription
Specifies the rendering mode for columns. Applies when columns are left outside the viewport. Requires the [columnWidth]({basewidgetpath}/Configuration/#columnWidth), [columnAutoWidth]({basewidgetpath}/Configuration/#columnAutoWidth), or [width]({basewidgetpath}/Configuration/columns/#width) (for all columns) option specified.

---
The following rendering modes are available in the widget: 

- *"standard"*        
Renders all columns at once.

- *"virtual"*     
Renders only those columns that get into the viewport.          

#include common-ref-enum with {
    enum: "`GridColumnRenderingMode`",
    values: "`Standard` and `Virtual`"
}