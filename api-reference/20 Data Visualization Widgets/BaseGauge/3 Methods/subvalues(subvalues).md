---
id: BaseGauge.subvalues(subvalues)
---
---
##### shortDescription
Updates subvalues.

##### param(subvalues): Array<Number>
New subvalues.

---
Use this method to change gauge subvalues at runtime.

[note]It is necessary to set the [subvalues]({basewidgetpath}/Configuration#subvalues) option in order to use the **subvalues(subvalues)** method. Set this option to an empty array, in case you don't need to show subvalues initially.

#include common-demobutton-named with {
    url: "/Demos/WidgetsGallery/Demo/Gauges/ValueIndicatorsAPI/jQuery/Light/",
    name: "Value Indicators API"
}
#include common-demobutton-named with {
    url: "/Demos/WidgetsGallery/Demo/Gauges/VariableNumberOfSubvalueIndicators/jQuery/Light/",
    name: "Subvalue Indicators"
}

#####See Also#####
#include common-link-callmethods