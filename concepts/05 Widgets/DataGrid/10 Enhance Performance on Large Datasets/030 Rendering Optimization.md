The widget renders all rows and columns once the data is loaded. To improve performance, set the [rowRenderingMode](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/scrolling/#rowRenderingMode) and [columnRenderingMode](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/scrolling/#columnRenderingMode) options in the **scrolling** object to *"virtual"*. These options specify that UI elements are only rendered when they come into the viewport.

Use virtual row rendering when [paging is disabled](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/paging/#enabled) or the [pageSize](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/paging/#pageSize) is more than the default value.

Virtual column rendering can be used when there are more than 20 columns outside the viewport.

Cells with complex content (predefined templates, command columns, editors) can be rendered after cells with simple content. To do that, enable the [renderAsync](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#renderAsync) option. In addition, you can enable [the same option](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#renderAsync) for individual columns if they use a content-heavy [cellTemplate](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#cellTemplate).
