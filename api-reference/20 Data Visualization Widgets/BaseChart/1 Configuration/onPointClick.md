---
id: BaseChart.Options.onPointClick
type: function(e) | String
default: null
EventForAction: BaseChart.pointClick
---
---
##### shortDescription
A function that is executed when a series point is clicked or tapped.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.event): event
#include common-ref-eventparam

##### field(e.jQueryEvent).deprecated
Use 'event' instead.

##### field(e.jQueryEvent): jQuery.Event
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.target): basePointObject
The clicked series point; described in the [Point]({basewidgetpath}/Chart_Elements/Point/) section.

##### notUsedInTheme

---
[note]

The [onSeriesClick]({basewidgetpath}/Configuration/#onSeriesClick) function is executed after this function. The following code shows how to prevent this: 

---
##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            onPointClick: function (e) {
                e.event.cancel = true;
            }
        });
    });

##### Angular

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from "devextreme-angular";
    // ...
    export class AppComponent {
        {widgetName}_onPointClick (e) {
            e.event.cancel = true;
        }
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })

    <!--HTML--><dx-{widget-name} ...
        (onPointClick)="{widgetName}_onPointClick($event)">
    </dx-{widget-name}>

---

[/note]

#include common-demobutton-named with {
    url: "/Demos/WidgetsGallery/Demo/Charts/Selection/jQuery/Light/",
    name: "Bar Chart"
}