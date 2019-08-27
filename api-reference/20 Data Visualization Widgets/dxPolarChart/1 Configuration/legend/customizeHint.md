---
id: dxPolarChart.Options.legend.customizeHint
type: function(seriesInfo)
---
---
##### shortDescription
Specifies the text for a hint that appears when a user hovers the mouse pointer over a legend item.

##### param(seriesInfo): Object
Information on the series.

##### field(seriesInfo.seriesColor): String
The series' [color](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/#color).

##### field(seriesInfo.seriesIndex): Number
The index of the series in the [series](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/) array. To get the [Series](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Chart_Elements/Series/) object by this index, call the [getSeriesByPos(seriesIndex)](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Methods/#getSeriesByPosseriesIndex) method.

##### field(seriesInfo.seriesName): any
The series' [name](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Configuration/series/#name). To get the [Series](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Chart_Elements/Series/) object by this name, call the [getSeriesByName(seriesName)](/Documentation/ApiReference/Data_Visualization_Widgets/dxPolarChart/Methods/#getSeriesByNameseriesName) method.

##### return: String
The text for the hint to display.

---
#include dataviz-ref-functioncontext