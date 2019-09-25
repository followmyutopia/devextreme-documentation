---
id: dxDiagram.import(data, updateExistingItemsOnly)
---
---
##### shortDescription
Imports the diagram data.
##### param(data): String
The diagram data in JSON format.
##### param(updateExistingItemsOnly): Boolean
**true** to apply diagram data without rewriting diagram items; **false** to apply diagram data and replace diagram items with items from the data parameter.
---
The [export](/Documentation/ApiReference/UI_Widgets/dxDiagram/Methods/#export) method allows you to save information about a diagram's layout, appearance, and the diagram's shape positions. 

Use the **import** method to load this data on demand.
