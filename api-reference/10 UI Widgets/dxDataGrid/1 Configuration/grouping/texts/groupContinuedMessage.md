<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Group Continued Message<!--/d-->
===========================================================================
<!--default-->'Continued from the previous page'<!--/default-->
<!--type-->string<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the message displayed in a [group row](/Documentation/Guide/UI_Widgets/Data_Grid/Visual_Elements/#Group_Rows) when the corresponding group is continued from the previous page.
<!--/shortDescription-->

<!--fullDescription-->
When grid records are grouped, the groups might be parted due to the fact that their sizes don't fit the [page size](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/paging/#pageSize). In that case, the group row corresponding to a parted group is supplemented with a message notifying the user that the group is started on one of the previous pages. To specify the text of this message, use the **groupContinuedMessage** option.

Additionally, you can specify the message displayed in a group row when the corresponding group continues on the next page. Use the **groupContinuesMessage** option for this purpose.

[note]If a group simultaneously continues on the next page and is continued from the previous page, the texts specified by the **groupContinuedMessage** and **groupContinuesMessage** options will be concatenated.
<!--/fullDescription-->