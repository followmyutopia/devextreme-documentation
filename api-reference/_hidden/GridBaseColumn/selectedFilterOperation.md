---
id: GridBaseColumn.selectedFilterOperation
acceptValues: '<' | '<=' | '<>' | '=' | '>' | '>=' | 'between' | 'contains' | 'endswith' | 'notcontains' | 'startswith'
type: String
default: undefined
firedEvents: optionChanged
---
---
##### shortDescription
Specifies the column's filter operation displayed in the [filter row](/Documentation/Guide/Widgets/{WidgetName}/Filtering_and_Searching/#Filter_Row).

---
The following table lists default filter operations by [data type](/api-reference/_hidden/GridBaseColumn/dataType.md '{basewidgetpath}/Configuration/columns/#dataType'):

<div class="simple-table">
<table>
  <thead>
  <tr>
    <th>dataType</th><th>Default filter operation</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>"string"</td><td>"contains"</td>
  </tr>
  <tr>
    <td>"number"</td><td>"="</td>
  </tr>
  <tr>
    <td>"date"</td><td>"="</td>
  </tr>
  </tbody>
</table>
</div>

#include common-ref-enum with {
    enum: "`FilterOperations`",
    values: "`Equal`, `NotEqual`, `LessThan`, `LessThanOrEqual`, `GreaterThan`, `GreaterThanOrEqual`, `NotContains`, `Contains`, `StartsWith`, `EndsWith`, and `Between`"
}

#####See Also#####
- [Filtering API](/Documentation/Guide/Widgets/{WidgetName}/Filtering_and_Searching/#API)