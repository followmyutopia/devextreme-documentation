<!--id-->GridBaseColumn.filterType<!--/id-->
===========================================================================
<!--default-->'include'<!--/default-->
<!--acceptValues-->'exclude' | 'include'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether a user changes the current filter by including (selecting) or excluding (clearing the selection of) values. Applies only if [headerFilter]({basewidgetpath}/Configuration/headerFilter/).**visible** and [allowHeaderFiltering]({basewidgetpath}/Configuration/columns/#allowHeaderFiltering) are **true**.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts the following values.

- **include**       
Values in the header filter are unselected initially, and a user can select values to apply a filter.
- **exclude**       
All values in the header filter are selected initially. A user can deselect values to change the filter.

This option changes when the user clicks the **Select All** checkbox in the [header filter](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/headerFilter/):

<div class="simple-table">
    <table>
        <tr>
            <th>Select All</th>
            <th>filterType / filterValues</th>
        </tr>
        <tr>
            <td><img src="Content/images/doc/19_2/DataGrid/dg-selectall-unchecked.png"></td>
            <td><code>filterType: "include"</code><br><code>filterValues: null</code></td>
        </tr>
        <tr>
            <td><img src="Content/images/doc/19_2/DataGrid/dg-selectall-checked.png"></td>
            <td><code>filterType: "exclude"</code><br><code>filterValues: null</code></td>
        </tr>
    </table>
</div>

#include common-ref-enum with {
    enum: "`FilterType`",
    values: "`Include` and `Exclude`"
}

#####See Also#####
- [Filtering API](/Documentation/Guide/Widgets/{WidgetName}/Filtering_and_Searching/#API)
- **columns[]**.[filterValues]({basewidgetpath}/Configuration/columns/#filterValues)
<!--/fullDescription-->
