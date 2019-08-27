---
id: dxTreeListRowObject.key
type: any
---
---
##### shortDescription
The row's key. Available if [rowType](/Documentation/ApiReference/UI_Widgets/dxTreeList/Row/#rowType) is *"data"*, *"detail"* or *"detailAdaptive"*.

---
Keys are provided by the [key](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#key) field of the store that underlies the [dataSource](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#dataSource). Alternatively, you can set the widget's [keyExpr](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#keyExpr) option. With hierarchical data, keys can be generated automatically if **key** and **keyExpr** are not set.