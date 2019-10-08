---
id: GridBase.Options.onAdaptiveDetailRowPreparing
type: function(e)
default: null
EventForAction: GridBase.adaptiveDetailRowPreparing
---
---
##### shortDescription
A function that is executed before an adaptive detail row is rendered.

##### param(e): Object
Information about the event that caused the function's execution.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.formOptions): Object
The options of the [Form](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/) widget.

##### field(e.model): Object
Model data. Available only if you use Knockout.

---
Adaptive detail rows display information from columns that were hidden when the widget adapted to the screen or container size. Each adaptive detail row contains the [Form](/Documentation/Guide/Widgets/Form/Overview/) widget that you can customize within the **onAdaptiveDetailRowPreparing** function using the **formOptions** object. Refer to the [Form Configuration](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/) section for details on options of the **Form** widget.

[note]

The following **Form** options cannot be specified using **formOptions**:

- [template](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#template)        
- [editorType](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#editorType)        
- any [event](/Documentation/ApiReference/UI_Widgets/dxForm/Events/) handler ([options](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/#onContentReady) whose name starts with *"on..."*)

[/note]

#####See Also#####
- [columnHidingEnabled]({basewidgetpath}/Configuration/#columnHidingEnabled)
- **columns[]**.[hidingPriority]({basewidgetpath}/Configuration/columns/#hidingPriority)
- [Adaptability](/Documentation/Guide/Widgets/{WidgetName}/Columns/Adaptability/)