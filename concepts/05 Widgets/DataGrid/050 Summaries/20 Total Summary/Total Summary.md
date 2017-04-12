A total summary is a grid feature that provides the ability to aggregate the entire column of data using one of the available [aggregate functions](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#summaryType).

![Total Summary](/Content/images/doc/17_1/DataGrid/TotalSummary.png)

To configure the total summary, use the [summary](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/) | [totalItems](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/) array elements. The minimum required configuration of the total summary object includes the [column](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#column) and the [summaryType](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/totalItems/#summaryType) options.
    
    <!--JavaScript-->$("#gridContainer").dxDataGrid({
        // ...
        summary: {
            totalItems: [{
                column: 'OrderNumber',
                summaryType: 'count'
            }
			// ...
			]
        }
    });

[note] To learn about the total summary visual elements, refer to the **Visual Elements** | [Total Summary](/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Total_Summary) topic.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgriddatasummariesgridtotals/" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a>
<a href="https://www.youtube.com/watch?v=Ru43cnfrqGM&index=40&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>