A user can interact with the legend by pausing on legend items. When a user does this, the series that corresponds to the legend item being paused on becomes highlighted. To disable this capability, set the [hoverMode](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/legend/#hoverMode) option to *"none"*.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#chartContainer").dxChart({
            // ...
            legend: {
                hoverMode: "none"
            }
        });
    });

##### Angular

    <!--HTML--><dx-chart>
        <dxo-legend hoverMode="none"></dxo-legend>
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

Pausing on a legend item causes the [seriesHoverChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#seriesHoverChanged) event to raise. Refer to the [Series Hover Events](/Documentation/Guide/Widgets/Chart/Series/Hover/#Events) topic for details on handling this event.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/HoverMode/jQuery/Light/" class="button orange small fix-width-155" target="_blank">View Demo</a>

In addition, a user can click legend items. By default, the widget does not react to a click, but you can instruct it to by handling the [legendClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Events/#legendClick) event. If the handling function is not going to be changed at runtime, assign it to the [onLegendClick](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#onLegendClick) option when you configure the widget. Otherwise, or if you need several handlers for the **legendClick** event, subscribe to it using the [on(eventName, eventHandler)](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#oneventName_eventHandler) method. This approach is more typical of jQuery.

---
##### jQuery

    <!--JavaScript-->$(function() {
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

        $("#chartContainer").dxChart("instance")
            .on("legendClick", legendClickEventHandler1)
            .on("legendClick", legendClickEventHandler2);
    });

##### Angular

    <!--HTML--><dx-chart
        (onLegendClick)="onLegendClick($event)">
    </dx-chart>

    <!--TypeScript-->
    import { DxChartModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        onLegendClick (e) {
            let series = e.target;
            // Event handling commands go here
        }
    }
    @NgModule({
        imports: [
            // ...
            DxChartModule
        ],
        // ...
    })

---

#####See Also#####
- **Handle Events**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Handle_Events/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Handle_Events/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Handle_Events/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Handle_Events/) | [ASP.NET MVC](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Handling_Events_and_Defining_Callbacks)
- [Relocate the Legend](/Documentation/Guide/Widgets/Chart/Legend/Relocate_the_Legend/)
- [Rearrange Legend Items](/Documentation/Guide/Widgets/Chart/Legend/Rearrange_Legend_Items/)
- [Chart Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Charts/HoverMode/jQuery/Light/)
- [Chart API Reference](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/)

[tags]chart, legend, hover, hoverMode, legend click, onLegendClick
