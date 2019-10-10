---
id: dxFunnel.Options.adaptiveLayout
type: Object
---
---
##### shortDescription
Specifies adaptive layout options.

---
The adaptive layout enables the widget to hide optional elements if they do not fit in the container. Elements are hidden in the following sequence:

1. [Title](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/title/title.md '{basewidgetpath}/Configuration/title/')
2. [Export menu icon](/api-reference/20%20Data%20Visualization%20Widgets/BaseWidget/1%20Configuration/export/export.md '{basewidgetpath}/Configuration/export/')
3. [Legend](/api-reference/20%20Data%20Visualization%20Widgets/BaseLegend/BaseLegend.md '{basewidgetpath}/Configuration/legend/')
4. [Item labels](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/label/label.md '{basewidgetpath}/Configuration/label/') (can be saved by setting the **adaptiveLayout**.[keepLabels](/api-reference/20%20Data%20Visualization%20Widgets/dxFunnel/1%20Configuration/adaptiveLayout/keepLabels.md '{basewidgetpath}/Configuration/adaptiveLayout/#keepLabels') option to **true**)

Use the **height** and **width** options in the **adaptiveLayout** object to specify the minimum container size at which the layout begins to adapt.

<a href="https://jsfiddle.net/ChartJS/j1v235o8/" class="button orange small fix-width-155" target="_blank">View Demo on JSFiddle</a>

#####See Also#####
- [Adaptive Layout](/concepts/05%20Widgets/Funnel/89%20Adaptive%20Layout.md '/Documentation/Guide/Widgets/Funnel/Adaptive_Layout/')