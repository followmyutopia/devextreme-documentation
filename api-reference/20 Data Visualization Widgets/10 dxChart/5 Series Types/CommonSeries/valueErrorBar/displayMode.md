<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->'auto'<!--/default-->
<!--acceptValues-->'auto' | 'low' | 'high' | 'none'<!--/acceptValues-->
<!--type-->string<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether error bars must be displayed in full or partially.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts the following values.

<div class="simple-table">
    <table>
        <thead>
            <tr>
                <th>displayMode</th>
                <th>Result</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>"auto"</td>
                <td>Displays error bars in full.</td>
            </tr>
            <tr>
                <td>"low"</td>
                <td>Displays only the lower part of each error bar.</td>
            </tr>
            <tr>
                <td>"high"</td>
                <td>Displays only the higher part of each error bar.</td>
            </tr>
            <tr>
                <td>"none"</td>
                <td>Hides error bars.</td>
            </tr>
        </tbody>
    </table>
</div>

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `ValueErrorBarDisplayMode` enum. This enum accepts the following values: `Auto`, `Low`, `High` and `None`.
<!--/fullDescription-->