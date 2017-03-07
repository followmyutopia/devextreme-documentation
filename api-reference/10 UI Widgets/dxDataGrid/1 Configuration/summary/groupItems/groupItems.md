<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Summary options for grouping row<!--/d-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->array<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies items of the group summary.
<!--/shortDescription-->

<!--fullDescription-->
The group summary provides a synopsis of a group of data. Groups of data are formed in the process of [grouping](/Documentation/Guide/UI_Widgets/Data_Grid/Grouping/). The group summary contains several items. Each item displays a value that is a product of applying an aggregate function to a group of data.

To specify the items of the group summary, declare an array of objects, each of which contains at least two fields: [column](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/#column) and [summaryType](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/#summaryType). The **column** field specifies the identifier of the column that provides data for an aggregate function. The **summaryType** specifies the aggregate function to be applied. The following code snippet shows how to declare two summary items.

	<!--JavaScript-->$("#gridContainer").dxDataGrid({
		// ...
		summary: {
			groupItems: [{
				column: 'Age',
				summaryType: 'avg'
			}, {
				column: 'LastName',
				summaryType: 'count'
			}]
		}
	});

A group summary item may be located either in the group row or the group footer. By default, the group row holds all summary items. To locate a summary item in the group footer, set the [showInGroupFooter](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/#showInGroupFooter) option of this item to *true*.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridgriddatasummariesgroupsummarytotals/" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a>
<a href="https://www.youtube.com/watch?v=Ru43cnfrqGM&index=40&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>
<!--/fullDescription-->