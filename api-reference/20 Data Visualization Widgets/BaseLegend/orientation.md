---
id: BaseLegend.orientation
acceptValues: 'horizontal' | 'vertical'
type: String
default: undefined
---
---
##### shortDescription
Arranges legend items vertically (in a column) or horizontally (in a row). The default value is *"horizontal"* if the **legend**.[horizontalAlignment]({basewidgetpath}/Configuration/legend/#horizontalAlignment) is *"center"*. Otherwise, it is *"vertical"*.

---
#include common-ref-enum with {
    enum: "`Orientation`",
    values: "`Horizontal` and `Vertical`"
}

#####See Also#####
- **legend**.[verticalAlignment]({basewidgetpath}/Configuration/legend/#verticalAlignment)
- **legend**.[horizontalAlignment]({basewidgetpath}/Configuration/legend/#horizontalAlignment)