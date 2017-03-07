A group summary feature provides an ability to aggregate data in a group using one of the available [aggregate functions](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/#summaryType).

![DevExtreme DataGrid GroupPanel](/Content/images/doc/16_2/DataGrid/GroupSummary.png)

To configure the group summary, use the [summary](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/) | [groupItems](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/) array elements. The minimum required configuration of the group summary object includes the [column](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/#column) and the [summaryType](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/#summaryType) options.
    
    <!--JavaScript-->$("#gridContainer").dxDataGrid({
        // ...
        summary: {
            groupItems: [{
                column: 'SaleAmount',
                summaryType: 'sum'
            }
			// ...
			]
        }
    });


[note] To learn about the group summary visual elements, refer to the **Visual Elements** | [Group Summary](/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Group_Rows/Group_Summary) topic.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgriddatasummariesgroupsummarytotals/" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a>
<a href="https://www.youtube.com/watch?v=Ru43cnfrqGM&index=40&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>