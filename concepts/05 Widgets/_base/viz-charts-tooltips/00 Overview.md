A tooltip is a small pop-up rectangle that displays information about a series point if it is pressed or the mouse pointer hovers over it. The information is the point value by default, but it is possible to display anything in a tooltip.

![DevExtreme HTML5 JavaScript {WidgetName} Tooltip](/Content/images/doc/18_1/{WidgetName}/visual_elements/tooltip.png)

All options configuring tooltips are collected in the [tooltip](/Documentation/ApiReference/Data_Visualization_Widgets/dx{WidgetName}/Configuration/tooltip/) object. For example, to enable the tooltips, assign **true** to the **enabled** option of this object.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            tooltip: {
                enabled: true
            }
        });
    });

##### Angular

    <!--HTML--><dx-{widget-name} ... >
        <dxo-tooltip
            [enabled]="true">
        </dxo-tooltip>
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

Options declared in the **tooltip** object apply to all tooltips in the **{WidgetName}**. If you want to customize a specific tooltip, assign a function to the [customizeTooltip](/Documentation/ApiReference/Data_Visualization_Widgets/dx{WidgetName}/Configuration/tooltip/#customizeTooltip) option. This function must return an object with options for the tooltip that you want to customize.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            tooltip: {
                enabled: true,
                color: 'yellow',
                // Tooltips with the value more than 100 turn red
                // Other tooltips remain yellow
                customizeTooltip: function (pointInfo) {
                    return pointInfo.value > 100 ? { color: 'red' } : { }
                }
            }
        });
    });

##### Angular

    <!--HTML--><dx-{widget-name} ... >
        <dxo-tooltip
            [enabled]="true"
            color="yellow"
            [customizeTooltip]="customizeTooltip">
        </dxo-tooltip>
    </dx-{widget-name}>

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // Tooltips with the value more than 100 turn red
        // Other tooltips remain yellow
        customizeTooltip (pointInfo: any) {
            return pointInfo.value > 100 ? { color: 'red' } : { }
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

#if Chart
#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Charts/TooltipHTMLSupport/jQuery/Light/"
}
#endif

#if PieChart
#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Charts/PieWithMultipleSeries/jQuery/Light/"
}
#endif

#####See Also#####
- [Show and Hide a Tooltip](/Documentation/Guide/Widgets/{WidgetName}/Tooltips/Show_and_Hide_a_Tooltip/)
- [Handle Tooltip Events](/Documentation/Guide/Widgets/{WidgetName}/Tooltips/Handle_Tooltip_Events/)