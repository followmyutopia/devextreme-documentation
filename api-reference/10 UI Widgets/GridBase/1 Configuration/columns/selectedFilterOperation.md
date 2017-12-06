<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--acceptValues-->'=' | '<>' | '<' | '<=' | '>' | '>=' | 'notcontains' | 'contains' | 'startswith' | 'endswith' | 'between'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the selected filter operation for the column.
<!--/shortDescription-->

<!--fullDescription-->
By default, the selected filter operation depends on the [data type]({basewidgetpath}/Configuration/columns/#dataType) of the column as follows.

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

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `FilterOperations` enum. This enum accepts the following values: `Equal`, `NotEqual`, `LessThan`, `LessThanOrEqual`, `GreaterThan`, `GreaterThanOrEqual`, `NotContains`, `Contains`, `StartsWith`, `EndsWith` and `Between`.

#####See Also#####
- [Filtering API](/Documentation/Guide/Widgets/{WidgetName}/Filtering_and_Searching/#API)
<!--/fullDescription-->