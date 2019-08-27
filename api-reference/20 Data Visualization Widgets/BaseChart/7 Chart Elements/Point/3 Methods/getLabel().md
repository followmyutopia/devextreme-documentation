---
id: basePointObject.getLabel()
---
---
##### shortDescription
Allows you to obtain the label(s) of the series point.

##### return: baseLabelObject | Array<baseLabelObject>
The point label(s).

---
This method returns an array of two [Label](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Chart_Elements/Label/) objects if a series point has two labels, like in a _[range bar](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/RangeBarSeries/)_ or _[range area](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Series_Types/RangeAreaSeries/)_ series. Otherwise, it returns a single **Label** object.