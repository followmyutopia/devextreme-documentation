---
id: dxFormGroupItem.template
type: template
---
---
##### shortDescription
A template to be used for rendering a group item.

##### param(data): Object
Information about the **Form**.

##### field(data.component): dxForm
The **Form** instance.

##### field(data.formData): Object
The [formData](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#formData) object.

##### param(itemElement): dxElement
#include common-ref-elementparam with { element: "current group item" }

##### return: String | Node | jQuery
A template name or container.

---
Use the **template** option of a group item to display custom content under a group caption, for instance an image. To specify a custom template for items contained in a group, define the **template** option of each of these items.

![Form With Image](/Content/images/doc/19_2/UiWidgets/FormWithImage.png)

[note]To define a custom template used to render group items, assign the required template name or template container to each simple item's template option.

#####See Also#####
- [Custom Content within a Group](/Documentation/Guide/Widgets/Form/Organize_Simple_Items/In_Groups/#Custom_Content_within_a_Group)