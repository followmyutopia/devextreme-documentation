A pager is a grid element that allows a user to navigate through grid pages and change their size at runtime.

![DevExtreme DataGrid Pager](/Content/images/doc/16_2/DataGrid/Pager.png)

As illustrated in the image above, the pager consists of a page navigator and a page size selector, both configured by the [pager](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/pager/) object.

	<!--JavaScript-->$("#gridContainer").dxDataGrid({
		// ...
		pager: {
			// Pager is configured here
		}
    });

By default, the page navigator contains page numbers only. Clicking a page number navigates the user to that page. Additionally, the page navigator can contain buttons that navigate the user to the previous or next page. To make them visible, assign *true* to the [showNavigationButtons](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/pager/#showNavigationButtons) property.

	<!--JavaScript-->$("#gridContainer").dxDataGrid({
		// ...
		pager: {
			showNavigationButtons: true
			// ...
		}
    });

Moreover, you can accompany the page navigator with a text displaying information on the current page number and the total page count. To make this text visible, assign *true* to the [showInfo](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/pager/#showInfo) property. To change this text, use the [infoText](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/pager/#infoText) property.

	<!--JavaScript-->$("#gridContainer").dxDataGrid({
		// ...
		pager: {
			showInfo: true,
			infoText: 'Your text goes here'
			// ...
		}
    });

The page size selector contains page sizes that can be selected. They are specified by the [allowedPageSizes](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/pager/#allowedPageSizes) option of the **pager** configuration object. Note that the page size selector is hidden by default. To make it visible, assign *true* to the [showPageSizeSelector](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/pager/#showPageSizeSelector) option of the same object.

	<!--JavaScript-->$("#gridContainer").dxDataGrid({
		// ...
		pager: {
			allowedPageSizes: [3, 5, 8],
			showPageSizeSelector: true,
			// ...
		}
    });

Whether the pager is visible depends on whether [paging](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/paging/) is enabled. If required, you can change the visibility of the whole pager (page navigator and page size selector) explicitly using its [visible](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/pager/#visible) property.

	<!--JavaScript-->$("#gridContainer").dxDataGrid({
		// ...
		pager: {
			visible: true,
			// ...
		}
    });