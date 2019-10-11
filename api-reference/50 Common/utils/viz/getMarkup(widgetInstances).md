---
id: viz.getMarkup(widgetInstances)
module: viz/export
export: getMarkup
---
---
##### shortDescription
Gets the SVG markup of specific widgets for their subsequent export.

##### return: String
The widgets' SVG markup. Pass it to the [exportFromMarkup(markup, options)](/api-reference/50%20Common/utils/viz/exportFromMarkup(markup_options).md '/Documentation/ApiReference/Common/utils/viz/#exportFromMarkupmarkup_options') method to export the widgets.

##### param(widgetInstances): Array<DOMComponent>
The widget instances.

---
#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Charts/ExportSeveralCharts/jQuery/Light/"
}

#####See Also#####
- [svg()](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/3%20Methods/svg().md '/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#svg')