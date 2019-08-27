---
id: dxTreeMap.Options.onDrill
type: function(e)
default: null
EventForAction: dxTreeMap.drill
---
---
##### shortDescription
A function that is executed when a user drills up or down.

##### param(e): Object
Information about the event.

##### field(e.component): {WidgetName}
The widget's instance.

##### field(e.element): dxElement
#include common-ref-elementparam with { element: "widget" }

##### field(e.model): Object
The model data. Available only if you use Knockout.

##### field(e.node): dxTreeMapNode
The [Node](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/) object.

##### notUsedInTheme

---
Although not provided out-of-the-box, the drill down capability is easy to implement using the API methods. Learn how to do this from the [drillDown()](/Documentation/ApiReference/Data_Visualization_Widgets/dxTreeMap/Node/Methods/#drillDown) method description.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Charts/DrillDown/jQuery/Light/"
}
<a href="https://www.youtube.com/watch?v=pCfBYtOcXxw&index=6&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>