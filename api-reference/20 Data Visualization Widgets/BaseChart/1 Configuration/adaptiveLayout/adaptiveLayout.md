===========================================================================
<!--type-->Object<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies adaptive layout options.
<!--/shortDescription-->

<!--fullDescription-->
When adapting to small container size, the widget may hide its accessory elements, thus saving space for more valuable ones. The elements are being hidden in the following sequence.

1. [Title]({basewidgetpath}/Configuration/title)
2. [Export menu icon]({basewidgetpath}/Configuration/export)
3. [Legend]({basewidgetpath}/Configuration/legend)
4. [Axis titles]({basewidgetpath}/Configuration/commonAxisSettings/title)
5. [Axis labels]({basewidgetpath}/Configuration/commonAxisSettings/label)
6. [Point labels]({basewidgetpath}/Configuration/commonSeriesSettings/label) (can be saved by setting the **adaptiveLayout**.[keepLabels]({basewidgetpath}/Configuration/adaptiveLayout#keepLabels) option to **true**)

To specify the widget's size small enough for the layout to begin adapting, use the **height** and **width** options of the **adaptiveLayout** object.

<a href="https://jsfiddle.net/ChartJS/2m1pv4ag/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo on JSFiddle</a>
<!--/fullDescription-->