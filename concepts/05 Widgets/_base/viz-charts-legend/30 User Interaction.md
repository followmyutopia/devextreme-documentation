A user can interact with the legend by pausing on legend items. When a user does this, the point(s) that corresponds to the legend item being paused on becomes highlighted. To disable this capability, set the [hoverMode](/Documentation/ApiReference/Data_Visualization_Widgets/dx{WidgetName}/Configuration/legend/#hoverMode) option to *"none"*.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            legend: {
                hoverMode: "none"
            }
        });
    });

##### Angular

    <!--HTML--><dx-{widget-name}>
        <dxo-legend hoverMode="none"></dxo-legend>
    </dx-{widget-name}>

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })

---

#if Chart
Series that consist of several elements rather than just series points ([Range Area](/Documentation/Guide/Widgets/Chart/Series_Types/Range_Series/), all [line](/Documentation/Guide/Widgets/Chart/Series_Types/Line_Series/) and [area](/Documentation/Guide/Widgets/Chart/Series_Types/Area_Series/) series) can be highlighted _without_ the series points. For this, set the **hoverMode** option to *"excludePoints"*. For other series, this setting has the same effect as *"none"*.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            legend: {
                hoverMode: "excludePoints"
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart>
        <dxo-legend hoverMode="excludePoints"></dxo-legend>
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

---
#endif

Pausing on a legend item causes the [pointHoverChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dx{WidgetName}/Events/#pointHoverChanged) event to raise. Refer to the [Series Hover Events](/Documentation/Guide/Widgets/{WidgetName}/Series/Hover/#Events) topic for details on handling this event.

#if Chart
#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Charts/HoverMode/jQuery/Light/"
}
#endif

In addition, a user can click legend items. The widget does not react to this by default, but you can instruct it to by handling the [legendClick](/Documentation/ApiReference/Data_Visualization_Widgets/dx{WidgetName}/Events/#legendClick) event. If the handling function is not going to be changed at runtime, assign it to the [onLegendClick](/Documentation/ApiReference/Data_Visualization_Widgets/dx{WidgetName}/Configuration/#onLegendClick) option when you configure the widget. Otherwise, or if you need several handlers for the **legendClick** event, subscribe to it using the [on(eventName, eventHandler)](/Documentation/ApiReference/Data_Visualization_Widgets/dx{WidgetName}/Methods/#oneventName_eventHandler) method. This approach is more typical of jQuery.

---
##### jQuery

    <!--JavaScript-->$(function() {
#if Chart
        $("#chartContainer").dxChart({
            // ...
            onLegendClick: function (e) {
                var series = e.target;
                // Event handling commands go here
            }
        });

        // ===== or =====
        var legendClickEventHandler1 = function (e) {
            var series = e.target;
            // First handler of the "legendClick" event
        };

        var legendClickEventHandler2 = function (e) {
            var series = e.target;
            // Second handler of the "legendClick" event
        };
#endif
#if PieChart
        $("#pieChartContainer").dxPieChart({
            // ...
            onLegendClick: function (e) {
                var points = e.points;
                // Event handling commands go here
            }
        });

        // ===== or =====
        var legendClickEventHandler1 = function (e) {
            var points = e.points;
            // First handler of the "legendClick" event
        };

        var legendClickEventHandler2 = function (e) {
            var points = e.points;
            // Second handler of the "legendClick" event
        };
#endif

        $("#{widgetName}Container").dx{WidgetName}("instance")
            .on("legendClick", legendClickEventHandler1)
            .on("legendClick", legendClickEventHandler2);
    });

##### Angular

    <!--HTML--><dx-{widget-name} ...
        (onLegendClick)="onLegendClick($event)">
    </dx-{widget-name}>

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from 'devextreme-angular';
    // ...
    export class AppComponent {
#if Chart
        onLegendClick (e) {
            var series = e.target;
            // Event handling commands go here
        }
#endif
#if PieChart
        onLegendClick (e) {
            var points = e.points;
            // Event handling commands go here
        }
#endif
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })

---

#if PieChart
#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Charts/Pie/jQuery/Light/"
}
#endif

#####See Also#####
#include common-link-handleevents
