---
id: dxCalendar.Options.cellTemplate
type: template
default: 'cell'
---
---
##### shortDescription
Specifies a custom template for calendar cells.

##### param(itemData): Object
The current cell's data.

##### field(itemData.date): Date
A Date object associated with the cell.

##### field(itemData.text): String
The cell's text.

##### field(itemData.view): String
The current view's name.

##### param(itemIndex): Number
The current cell's index.

##### param(itemElement): dxElement
#include common-ref-elementparam with { element: "cell" }

##### return: String | Node | jQuery
A template name or container.

---
#####See Also#####
- [Customize Cell Appearance](/Documentation/Guide/Widgets/Calendar/Customize_Cell_Appearance/)
- [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates)