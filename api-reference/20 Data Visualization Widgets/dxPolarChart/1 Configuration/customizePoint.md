<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Custom style of individual point<!--/d-->
===========================================================================
<!--merge--><!--/merge-->
===========================================================================

<!--fullDescription-->
By default, all series points in a chart are identical, but you can specify a unique appearance for individual points using the **customizePoint** function. This function should return an object with options that will be changed for a certain point. See the [point]({basewidgetpath}/Configuration/series/point) object for information about all options available for changing.

[note]The **hoverMode** and **selectionMode** options cannot be changed using the **customizePoint** function, because they do not have anything to do with the appearance of series points.

The **customizePoint** function accepts an object providing information about the series point. This object contains the following fields.

<div class="simple-table">
    <table>
        <thead>
            <tr>
                <th>Field</th>
                <th>Description</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td style="text-align:left">argument</td>
                <td>The argument of the series point.</td>
            </tr>
            <tr>
                <td style="text-align:left">value</td>
                <td>The value of the series point.</td>
            </tr>
            <tr>
                <td style="text-align:left">tag</td>
                <td>The <a href="{basewidgetpath}/Configuration/series/#tagField">tag</a> of the series point.</td>
            </tr>
            <tr>
                <td style="text-align:left">seriesName</td>
                <td>The <a href="{basewidgetpath}/Configuration/series/#name">name</a> of the series that includes the series point.</td>
            </tr>
            <tr>
                <td style="text-align:left">index</td>
                <td>The index of the series point in the points array.</td>
            </tr>
        </tbody>
    </table>
</div>
<!--/fullDescription-->


<!--handmade-->
<!--/handmade-->