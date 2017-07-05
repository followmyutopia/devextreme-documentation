<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--acceptValues-->'=' | '<>' | '<' | '<=' | '>' | '>=' | 'notcontains' | 'contains' | 'startswith' | 'endswith' | 'between'<!--/acceptValues-->
<!--type-->array<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a set of available filter operations. Applies only if [filterRow]({basewidgetpath}/Configuration/filterRow/) | **visible** and [allowFiltering]({basewidgetpath}/Configuration/columns/#allowFiltering) are **true**.
<!--/shortDescription-->

<!--fullDescription-->
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

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `FilterOperations` enum. This enum accepts the following values: `Equal`, `NotEqual`, `LessThan`, `LessThanOrEqual`, `GreaterThan`, `GreaterThanOrEqual`, `NotContains`, `Contains`, `StartsWith`, `EndsWith` and `Between`.

#####See Also#####
- **columns[]** | [selectedFilterOperation]({basewidgetpath}/Configuration/columns/#selectedFilterOperation)
- **columns[]** | [filterValue]({basewidgetpath}/Configuration/columns/#filterValue)
<!--/fullDescription-->