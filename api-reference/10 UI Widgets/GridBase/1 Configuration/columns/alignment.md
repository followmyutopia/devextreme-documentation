<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--acceptValues-->undefined | 'left' | 'center' | 'right'<!--/acceptValues-->
<!--type-->string<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the content alignment within column cells.
<!--/shortDescription-->

<!--fullDescription-->
Default alignment of column content depends on the [type of data](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#dataType) represented by this column. The following table illustrates default values of alignment for the columns of different data types.

<div class="simple-table">
<table>
  <thead>
  <tr>
    <th>dataType</th>
    <th>alignment</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td><i>'number'</i></td>
    <td><i>'right'</i></td>
  </tr>
  <tr>
    <td><i>'boolean'</i></td>
    <td><i>'center'</i></td>
  </tr>
  <tr>
    <td><i>'string'</i></td>
    <td><i>'left'</i></td>
  </tr>
  <tr>
    <td><i>'date'</i></td>
    <td><i>'left'</i></td>
  </tr>
  </tbody>
</table>
</div>

When configuring the widget using [ASP.NET MVC Wrappers](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/), specify this option using the `HorizontalAlignment` enum. This enum accepts the following values: `Left`, `Center` and `Right`.
<!--/fullDescription-->