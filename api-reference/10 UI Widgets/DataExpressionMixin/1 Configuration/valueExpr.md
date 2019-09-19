---
id: DataExpressionMixin.Options.valueExpr
type: String | function(item)
default: 'this'
---
---
##### shortDescription
Specifies which data field provides unique values to the widget's [value]({basewidgetpath}/Configuration/#value).

##### param(item): Object
<!-- Description goes here -->

##### return: String | Number | Boolean
<!-- Description goes here -->

---
Always set this option if the [dataSource]({basewidgetpath}/Configuration/#dataSource) contains objects. Alternatively, you can specify the [key](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#key) in the store. 

#include uiwidgets-ref-valueExpr-functionnote

#####See Also#####
- [displayExpr]({basewidgetpath}/Configuration/#displayExpr)