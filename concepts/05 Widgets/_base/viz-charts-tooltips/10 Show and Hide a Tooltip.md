Each series point allows you to show or hide its tooltip programmatically by calling the **showTooltip()** or **hideTooltip()** method of the [Point](/Documentation/ApiReference/Data_Visualization_Widgets/dx{WidgetName}/Chart_Elements/Point/) object. You can access this object
#if Chart
[with the API methods](/Documentation/Guide/Widgets/Chart/Series_Points/Access_a_Series_Point_Using_the_API/)
#endif
#if PieChart
[with the API methods](/Documentation/Guide/Widgets/PieChart/Series/Access_a_Point_Using_the_API/)
#endif
or in the handlers of the point events, such as [pointClick](/Documentation/ApiReference/Data_Visualization_Widgets/dx{WidgetName}/Events/#pointClick), [pointHoverChanged](/Documentation/ApiReference/Data_Visualization_Widgets/dx{WidgetName}/Events/#pointHoverChanged), etc. The latter is demonstrated in the following code.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            // Shows the tooltip only when a user clicks a series point
            onPointClick: function (e) {
                var point = e.target;
                point.showTooltip();
            },
            // Hides the tooltip once the user moves the pointer away from the series point
            onPointHoverChanged: function (e) {
                var point = e.target;
                if (!point.isHovered()) {
                    point.hideTooltip();
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-{widget-name} ...
        (onPointClick)="onPointClick($event)"
        (onPointHoverChanged)="onPointHoverChanged($event)">
    </dx-{widget-name}>

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // Shows the tooltip only when a user clicks a series point
        onPointClick (e) {
            let point = e.target;
            point.showTooltip();
        },
        // Hides the tooltip once the user moves the pointer away from the series point
        onPointHoverChanged (e) {
            let point = e.target;
            if (!point.isHovered()) {
                point.hideTooltip();
            }
        }
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })

---

You can also hide the tooltip regardless of the point to which it belongs by calling the **hideTooltip()** method of the **{WidgetName}** instance.

---
##### jQuery

    <!--JavaScript-->$("#{widgetName}Container").dx{WidgetName}("hideTooltip");

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { Dx{WidgetName}Module, Dx{WidgetName}Component } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(Dx{WidgetName}Component) {widgetName}: Dx{WidgetName}Component;
        hideTooltip () {
            this.{widgetName}.instance.hideTooltip();
        };
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })

---

#####See Also#####
- [Handle Tooltip Events](/Documentation/Guide/Widgets/{WidgetName}/Tooltips/Handle_Tooltip_Events/)