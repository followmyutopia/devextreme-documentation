---
id: dxToolbarItem.showText
acceptValues: 'always' | 'inMenu'
type: String
default: 'always'
---
---
##### shortDescription
Specifies when to display the text for the widget item.

---
The text should be specified in the [options](/Documentation/ApiReference/UI_Widgets/dxToolbar/Default_Item_Template/#options) configuration object. 

[note]This option is available only for the dxButton [widget](/Documentation/ApiReference/UI_Widgets/dxToolbar/Default_Item_Template/#widget) that presents a toolbar item.

#include common-ref-enum with {
    enum: "`ToolbarItemShowTextMode`",
    values: "`Always` and `InMenu`"
}