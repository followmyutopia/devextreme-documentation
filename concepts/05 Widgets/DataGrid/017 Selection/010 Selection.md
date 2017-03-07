Selection is a **DataGrid** feature that allows an end-user to mark certain rows in a grid as selected. Selected rows have a differing appearance from regular rows. After a row is selected, its data may be processed the way you require.

[note] Only [data rows](/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Grid_Rows) can be selected.

In the following subtopics, you will learn how to configure selection in the UI and in code, select rows initially and use the keyboard to perform selection.

[note]We strongly recommend specifying the **key** option of the underlying [Store](/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores) of the [dataSource](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource) to uniquely identify records within a table.