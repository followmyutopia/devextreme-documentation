<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--dep--><!--/dep-->
===========================================================================
<!--default-->true<!--/default-->
<!--type-->Boolean<!--/type-->
===========================================================================

<!--deprecated-->

<!--/deprecated-->

<!--shortDescription-->
Indicates whether or not to set ticks of a date-time scale at the beginning of each date-time interval.
<!--/shortDescription-->

<!--fullDescription-->
This property is used when a date-time scale is divided. If this property is set to **true**, ticks are set at the beginning of date-time units (months, days, years, etc.). The following examples will help you understand the logic:

<div class="simple-table">
<table>
  <thead>
  <tr >
    <th>Tick Interval</th>
    <th>Start Value</th>
    <th>Ticks Generated</th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td>2 hours</td>
    <td>11 (h) : 35 (min) : 25 (s) : 10 (ms)</td>
    <td>"13 (h) : 00 (min) : 00 (s) : 00 (ms)"; "15 (h): 00 (min) : 00 (s) : 00 (ms)"; ...</td>
  </tr>
  <tr>
    <td>2 days</td>
    <td>6 (d) : 11 (h) : 35 (min)</td>
    <td>"8 (d) : 00 (h) : 00 (min)"; "10 (d) : 00 (h) : 00 (min)"; ...</td>
  </tr>
  <tr>
    <td>2 months</td>
    <td>March : 13 (d)</td>
    <td>"May : 0 (d)"; "July: 0 (d)"; ...</td>
  </tr>
  </tbody>
</table>
</div>

The values that will be generated for the scale ticks can be formatted using the **format** property.
<!--/fullDescription-->