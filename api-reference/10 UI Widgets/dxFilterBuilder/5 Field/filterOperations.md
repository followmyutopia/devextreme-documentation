<!--id-->dxFilterBuilderField.filterOperations<!--/id-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--acceptValues-->'=' | '<>' | '<' | '<=' | '>' | '>=' | 'contains' | 'endswith' | 'isblank' | 'isnotblank' | 'notcontains' | 'startswith' | 'between'<!--/acceptValues-->
<!--type-->Array<String><!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a set of available filter operations.
<!--/shortDescription-->

<!--fullDescription-->
The following table lists default operations by [data type](/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Field/#dataType):

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
    <td>[ "contains", "notcontains", "startswith", "endswith", "=", "<>", "isblank", "isnotblank" ]</td>
  </tr>
  <tr>
    <td>"numeric"</td>
    <td>[ "=", "<>", "<", ">", "<=", ">=", "between", "isblank", "isnotblank" ]</td>
  </tr>
  <tr>
    <td>"date", "datetime"</td>
    <td>[ "=", "<>", "<", ">", "<=", ">=", "between", "isblank", "isnotblank" ]</td>
  </tr>
  <tr>
    <td>"boolean"</td>
    <td>[ "=", "<>", "isblank", "isnotblank" ]</td>
  </tr>
  <tr>
    <td>"object"</td>
    <td>[ "isblank", "isnotblank" ]</td>
  </tr>
  </tbody>
</table>
</div>

The *"isblank"* operation returns null values and empty strings; *"isnotblank"* returns other values.

[note] [Lookup](/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Field/lookup/)'s default operations are [ "=", "<>", "isblank", "isnotblank" ] regardless of the data type.

#include common-ref-enum with {
    enum: "`FilterBuilderFieldFilterOperations`",
    values: "`Equal`, `NotEqual`, `LessThan`, `LessThanOrEqual`, `GreaterThan`, `GreaterThanOrEqual`, `Between`, `NotContains`, `Contains`, `StartsWith`, `EndsWith`, `IsBlank`, and `IsNotBlank`"
}
<!--/fullDescription-->