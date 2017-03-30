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
Specifies the set of available filter operations.
<!--/shortDescription-->

<!--fullDescription-->
When a column can be used for filtering grid records using the [filter row]({basewidgetpath}/Configuration/filterRow/) (i.e., when the [allowFiltering]({basewidgetpath}/Configuration/columns/#allowFiltering) option is *true*), you can specify filters that can be applied to this column. For this purpose, assign an array of filters chosen from the pool of accepted values to the **filterOperations** option.

The following table displays available filters by the [data type]({basewidgetpath}/Configuration/columns/#dataType). The same filters are assigned to the columns of a specific data type by default.

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
    <td>'string'</td>
    <td>[ 'contains', 'notcontains', 'startswith', 'endswith', '=', '<>' ]</td>
  </tr>
  <tr>
    <td>'numeric'</td>
    <td>[ '=', '<>', '<', '>', '<=', '>=', 'between' ]</td>
  </tr>
  <tr>
    <td>'date'</td>
    <td>[ '=', '<>', '<', '>', '<=', '>=', 'between' ]</td>
  </tr>
  </tbody>
</table>
</div>

To change an applied filter at runtime, a user must click a magnifying glass icon in the corresponding cell of a [filter row](/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Filter_Row).

[note]The **filterOperations** option also accepts an empty array. In this case, the selected filter operation is *"="* for all data types, and an end user cannot change it.

When configuring the widget using [ASP.NET MVC Wrappers](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/), specify this option using the `FilterOperations` enum. This enum accepts the following values: `Equal`, `NotEqual`, `LessThan`, `LessThanOrEqual`, `GreaterThan`, `GreaterThanOrEqual`, `NotContains`, `Contains`, `StartsWith`, `EndsWith` and `Between`.
<!--/fullDescription-->