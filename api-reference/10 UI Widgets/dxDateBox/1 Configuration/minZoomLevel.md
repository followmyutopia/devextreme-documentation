---
id: dxDateBox.Options.minZoomLevel
acceptValues: 'century' | 'decade' | 'month' | 'year'
type: String
default: 'century'
dep: dxDateBox.Options.calendarOptions
---
---
##### shortDescription
Specifies the [minimal zoom level](/Documentation/ApiReference/UI_Widgets/dxCalendar/Configuration/#minZoomLevel) of a [calendar](/Documentation/ApiReference/UI_Widgets/dxCalendar/), which is used to pick the date.

---
The zoom level ascends from "month" to "century" ("month"->"year"->"decade"->"century").

The option makes sense only if the [pickerType](/Documentation/ApiReference/UI_Widgets/dxDateBox/Configuration/#pickerType) option is set to "calendar".

#include common-ref-enum with {
    enum: "`CalendarZoomLevel`",
    values: "`Month`, `Year`, `Decade`, and `Century`"
}