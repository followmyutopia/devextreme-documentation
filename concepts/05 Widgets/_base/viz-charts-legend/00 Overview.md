#if Chart
The legend is a component that helps a user identify series. It contains several colored items, one per series. 
#endif

#if PieChart
The legend is a component that helps a user identify series points. It contains several colored items, one per point (or per several points with the same argument in a multi-series **{WidgetName}**).
#endif

![DevExtreme HTML5 JavaScript {WidgetName} Legend](/Content/images/doc/18_1/{WidgetName}/visual_elements/legend.png)

Options that configure the legend's appearance, location, and content are collected in the [legend](/Documentation/ApiReference/Data_Visualization_Widgets/dx{WidgetName}/Configuration/legend/) object.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            legend: {
                // ...
            }
        });
    });

##### Angular

    <!--HTML--><dx-{widget-name} ... >
        <dxo-legend ... ></dxo-legend>
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

#####See Also#####
- [Relocate the Legend](/Documentation/Guide/Widgets/{WidgetName}/Legend/Relocate_the_Legend/)
- [Rearrange Legend Items](/Documentation/Guide/Widgets/{WidgetName}/Legend/Rearrange_Legend_Items/)
- [User Interaction with the Legend](/Documentation/Guide/Widgets/{WidgetName}/Legend/User_Interaction/)
#if Chart
- [Chart Demos](/Demos/WidgetsGallery/Demo/Charts/StepLine/jQuery/Light/)
#endif
#if PieChart
- [PieChart Demos](/Demos/WidgetsGallery/Demo/Charts/PieWithMultipleSeries/jQuery/Light/)
#endif