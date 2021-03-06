---
id: dxFileUploader.progress
type: eventType
---
---
##### shortDescription
Raised when a file segment is uploaded.

##### param(e): Object
Information about the event.

##### field(e.bytesLoaded): Number
The total count of the uploaded bytes.

##### field(e.bytesTotal): Number
The total count of bytes in the XMLHttpRequest.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.file): File
An uploaded file.

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.

##### field(e.model): Object
Model data. Available only if Knockout is used.

##### field(e.request): XMLHttpRequest
An XMLHttpRequest for the file.

##### field(e.segmentSize): Number
The size of the uploaded file segment.

---
Main article: [onProgress](/api-reference/10%20UI%20Widgets/dxFileUploader/1%20Configuration/onProgress.md '/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#onProgress')

#####See Also#####
#include common-link-handleevents