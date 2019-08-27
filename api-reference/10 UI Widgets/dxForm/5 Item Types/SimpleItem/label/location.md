---
id: dxFormSimpleItem.label.location
acceptValues: 'left' | 'right' | 'top'
type: String
default: 'left'
---
---
##### shortDescription
Specifies the location of a label against the editor.

---
[note]This option has higher priority than the [labelLocation](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#labelLocation) option of the form.

#include common-ref-enum with {
    enum: "`FormLabelLocation`",
    values: "`Left`, `Right`, and `Top`"
}

#####See Also#####
- [Configure Labels - Location and Alignment](/Documentation/Guide/Widgets/Form/Configure_Item_Labels/Location_and_Alignment/#Align_Labels_Relatively_to_Editors)