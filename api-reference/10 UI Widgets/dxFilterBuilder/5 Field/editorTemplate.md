---
id: dxFilterBuilderField.editorTemplate
type: template
---
---
##### shortDescription
Specifies the editor's custom template.

##### param(conditionInfo): Object
The condition's settings.

##### field(conditionInfo.field): dxFilterBuilderField
The condition's configuration.

##### field(conditionInfo.filterOperation): String
The condition's operation.

##### field(conditionInfo.setValue): function()
A method that you should call to change the field value after the editor's value is changed.

##### field(conditionInfo.value): String | Number | Date
The condition's data field value.

##### param(container): dxElement
#include common-ref-elementparam with { element: "editor" }

##### return: String | Node | jQuery
A template name or container.

---
#####See Also#####
- [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates)