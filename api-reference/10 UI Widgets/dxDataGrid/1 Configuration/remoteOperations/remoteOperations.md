<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->'auto'<!--/default-->
<!--type-->String | Boolean | Object<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the operations that must be performed on the server side.
<!--/shortDescription-->

<!--fullDescription-->
Data for the **DataGrid** can be stored on the client or come from the server. As a rule, manipulating data on the server enhances **DataGrid** performance. However, the server might be falling short of implementing certain operations, in which case, they can be performed on the client.

Data operations can be categorized into basic operations ([filtering](/Documentation/Guide/Widgets/DataGrid/Filtering_and_Searching/), [sorting](/Documentation/Guide/Widgets/DataGrid/Sorting/), [paging](/Documentation/Guide/Widgets/DataGrid/Paging/)) and advanced operations ([grouping](/Documentation/Guide/Widgets/DataGrid/Grouping/), [group paging](/Documentation/Guide/Widgets/DataGrid/Enhance_Performance_on_Large_Datasets/#Remote_Group_Paging), [summary calculation](/Documentation/Guide/Widgets/DataGrid/Summaries/Total_Summary/)). The following table shows where data operations are performed by default.

<div class="simple-table">
<table>
  <tr>
    <th></th>
    <th>Basic operations</th>
    <th>Advanced operations</th>
 </tr>
 <tr>
    <td><a href="/Documentation/17_2/Guide/Widgets/DataGrid/Data_Binding/Custom_Sources/">CustomStore</a></td>
    <td style="text-align:center">client</td>
    <td style="text-align:center">client</td>
 </tr>
 <tr>
    <td><a href="/Documentation/17_2/Guide/Widgets/DataGrid/Data_Binding/OData_Service/">ODataStore</a></td>
    <td style="text-align:center">server</td>
    <td style="text-align:center">client (always)</td>
 </tr>
</table>
</div>

[note]You cannot perform data operations on the server with an [ArrayStore](/Documentation/Guide/Widgets/DataGrid/Data_Binding/Simple_Array/ArrayStore/), a [LocalStore](/Documentation/ApiReference/Data_Layer/LocalStore/) or an [array of objects](/Documentation/Guide/Widgets/DataGrid/Data_Binding/Simple_Array/Array_Only/).

To control individual operations, assign a Boolean value to a corresponding field of the **remoteOperations** object. To control all operations simultaneously, assign a Boolean value directly to the **remoteOperations** option. 

[note]If you assign **true** to **remoteOperations**, the group paging feature is still performed on the client. To delegate it to the server, assign **true** to the **remoteOperations**.[groupPaging](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/#groupPaging), but note that with this setting, all other operations are delegated to the server also.

[note]If actual data is stored on the server, making data operations local does _not_ guarantee that there won't be any queries for data to the server while these operations are being performed. It only guarantees that _calculations_ will be performed on the client.

Note that when operations are performed remotely, the **DataGrid** does not support:

- sorting, grouping and filtering by [calculated columns](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateCellValue);
- custom grouping and custom sorting using functions (that is, [calculateGroupValue](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateGroupValue) and [calculateSortValue](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateSortValue) accept strings only);
- [custom summary calculation](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/#calculateCustomSummary).

<a href="https://js.devexpress.com/Demos/WidgetsGallery/#demo/data_grid-grid_data_binding-custom_data_source" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<!--/fullDescription-->