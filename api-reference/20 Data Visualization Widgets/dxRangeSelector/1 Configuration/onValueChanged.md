---
id: dxRangeSelector.Options.onValueChanged
type: function(e)
default: null
EventForAction: dxRangeSelector.valueChanged
---
---
##### shortDescription
A function that is executed after the widget's [value](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/#value) is changed.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.previousValue): Array<Number, String, Date>
Two values that represent old start and end values.

##### field(e.value): Array<Number, String, Date>
Two values that represent new start and end values.

##### notUsedInTheme

---
The **onValueChanged** function can be called when a user moves a slider or after he/she has stopped moving it. To specify the required mode, use the **behavior**.[callValueChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/behavior/#callValueChanged) option.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/RangeSelector/UseRangeSelectionForFiltering/jQuery/Light/"
}

#####See Also#####
#include common-link-handleevents
- [selectedRangeUpdateMode](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/#selectedRangeUpdateMode)