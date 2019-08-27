---
id: GridBase.Options.columnResizingMode
acceptValues: 'nextColumn' | 'widget'
type: String
default: 'nextColumn'
---
---
##### shortDescription
Specifies how the widget resizes columns. Applies only if [allowColumnResizing]({basewidgetpath}/Configuration/#allowColumnResizing) is **true**.

---
The **columnResizingMode** option accepts one of the following values:

- **nextColumn**  
    When a user resizes a column, the width of the next column changes.  
- **widget**  
    When a user resizes a column, the width of the widget changes.  
    This mode is ignored if you specify the [width]({basewidgetpath}/Configuration/columns/#width) of any column in percent.