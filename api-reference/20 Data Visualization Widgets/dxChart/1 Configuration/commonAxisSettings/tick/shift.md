===========================================================================
<!--default-->0<!--/default-->
<!--type-->Number<!--/type-->
===========================================================================

<!--shortDescription-->
Shifts ticks from the reference position.
<!--/shortDescription-->

<!--fullDescription-->
In the reference position, the axis runs through the center of each tick:

![DevExtreme Chart - Reference position for tick shift](/Content/images/doc/19_1/ChartJS/shift-argumentaxis-reference-position.png)

Positive values shift ticks toward axis labels; negative values shift ticks in the opposite direction.

The following table illustrates this option:

<div class="simple-table">
    <table id="shift-ticks">
        <tr>
          <th>Shift Value</th>
          <th>Horizontal Axis</th>
          <th>Vertical Axis</th>
        </tr>
        <tr>
          <td><code>shift: 4</code></td>
          <td><img src="/Content/images/doc/19_1/ChartJS/shift-argumentaxis-positive.png" alt="DevExtreme Chart - Positive tick shift on the argument axis" /></td>
          <td><img src="/Content/images/doc/19_1/ChartJS/shift-valueaxis-positive.png" alt="DevExtreme Chart - Positive tick shift on the value axis" /></td>
        </tr>
        <tr>
          <td><code>shift: -4</code></td>
          <td><img src="/Content/images/doc/19_1/ChartJS/shift-argumentaxis-negative.png" alt="DevExtreme Chart - Negative tick shift on the argument axis" /></td>
          <td><img src="/Content/images/doc/19_1/ChartJS/shift-valueaxis-negative.png" alt="DevExtreme Chart - Negative tick shift on the value axis" /></td>
        </tr>
    </table>
</div>

<style>
    #shift-ticks {
        text-align: center;
    }
    #shift-ticks code {
        font-style: normal;
    }
    #shift-ticks td, th {
        background-color: white;
        border-right: 2px solid #ededed;
        border-bottom: 2px solid #ededed;
    }
    #shift-ticks th {
        border-right: 2px solid #ededed;
    }
    #shift-ticks tr:last-child > td {
        border-bottom: none;
    }
    #shift-ticks td:last-child {
        border-right: none;
    }
</style>
<!--/fullDescription-->