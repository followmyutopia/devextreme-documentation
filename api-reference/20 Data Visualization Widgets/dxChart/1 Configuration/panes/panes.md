---
id: dxChart.Options.panes
type: Object | Array<Object>
inherits: dxChart.Options.commonPaneSettings
---
---
##### shortDescription
Declares a collection of panes.

##### notUsedInTheme

---
A pane is a chart area containing series. If there are many series an a chart, they can be distributed between multiple panes.

![DevExtreme HTML5 Charts Panes](/Content/images/doc/19_2/ChartJS/visual_elements/panes.png)

Each object in the **panes** array configures a single pane. If you have several panes, we recommend you to [name](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/panes/#name) each pane in order to be able to refer to them afterwards.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Charts/MultiplePanes/jQuery/Light/"
}

#####See Also#####
- [commonPaneSettings](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/commonPaneSettings/) - specifies common settings for all panes in a chart.
- **series**.[pane](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/series/#pane) - binds a series to a pane.
- [defaultPane](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#defaultPane) - specifies which pane must be used by default.