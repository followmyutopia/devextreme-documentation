---
id: dxHtmlEditorMention.template
type: template
default: null
---
---
##### shortDescription
Specifies a custom template for mentions.

##### param(mentionData): Object
The current mention's data.

##### field(mentionData.id): String | Number
The mention's identifier provided by the [valueExpr](/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/mentions/#valueExpr).

##### field(mentionData.marker): String
The [marker](/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/mentions/#marker) that precedes the mention.

##### field(mentionData.value): any
The displayed value provided by the [displayExpr](/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/mentions/#displayExpr).

##### param(contentElement): dxElement
#include common-ref-elementparam with { element: "mention" }

##### return: String | Node | jQuery
The name or container of a template.

---
#####See Also#####
- [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates)