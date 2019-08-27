---
id: GridBaseColumn.filterOperations
acceptValues: '=' | '<>' | '<' | '<=' | '>' | '>=' | 'notcontains' | 'contains' | 'startswith' | 'endswith' | 'between'
type: Array<String>
default: undefined
---
---
##### shortDescription
Specifies a set of available filter operations. Applies only if [filterRow]({basewidgetpath}/Configuration/filterRow/).**visible** and [allowFiltering]({basewidgetpath}/Configuration/columns/#allowFiltering) are **true**.

---
The following table lists available filters by [data types]({basewidgetpath}/Configuration/columns/#dataType). The same filters are assigned to columns of a specific data type by default.

<div class="simple-table">
<table>
  <thead>
  <tr>
    <th>dataType</th>
    <th>filterOperations</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>"string"</td>
    <td>[ "contains", "notcontains", "startswith", "endswith", "=", "<>" ]</td>
  </tr>
  <tr>
    <td>"numeric"</td>
    <td>[ "=", "<>", "<", ">", "<=", ">=", "between" ]</td>
  </tr>
  <tr>
    <td>"date"</td>
    <td>[ "=", "<>", "<", ">", "<=", ">=", "between" ]</td>
  </tr>
  </tbody>
</table>
</div>

The **filterOperations** option can also accept an empty array. In this case, the selected filter operation is *"="* for all data types, and a user cannot change it.

#include common-ref-enum with {
    enum: "`FilterOperations`",
    values: "`Equal`, `NotEqual`, `LessThan`, `LessThanOrEqual`, `GreaterThan`, `GreaterThanOrEqual`, `NotContains`, `Contains`, `StartsWith`, `EndsWith`, and `Between`"
}

#####See Also#####
- **columns[]**.[selectedFilterOperation]({basewidgetpath}/Configuration/columns/#selectedFilterOperation)
- **columns[]**.[filterValue]({basewidgetpath}/Configuration/columns/#filterValue)