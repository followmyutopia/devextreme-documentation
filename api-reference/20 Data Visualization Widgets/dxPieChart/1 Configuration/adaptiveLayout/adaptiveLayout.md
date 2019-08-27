---
id: dxPieChart.Options.adaptiveLayout
type: Object
---
---
##### shortDescription
Specifies adaptive layout options.

---
The adaptive layout enables the widget to hide optional elements if they do not fit in the container. Elements are hidden in the following sequence:

1. [Title]({basewidgetpath}/Configuration/title)
2. [Export menu icon]({basewidgetpath}/Configuration/export)
3. [Legend]({basewidgetpath}/Configuration/legend)
4. [Point labels]({basewidgetpath}/Configuration/commonSeriesSettings/label) (can be saved by setting the **adaptiveLayout**.[keepLabels]({basewidgetpath}/Configuration/adaptiveLayout#keepLabels) option to **true**)

Use the **height** and **width** options in the **adaptiveLayout** object to specify the minimum container size at which the layout begins to adapt.

<a href="https://jsfiddle.net/ChartJS/2arphpsx/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo on JSFiddle</a>

#####See Also#####
- [Adaptive Layout](/Documentation/Guide/Widgets/PieChart/Adaptive_Layout/)