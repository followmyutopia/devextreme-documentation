By default, the basic remote operations (**filtering**, **sorting** and **paging**) are performed remotely server side. This requires the data service to be capable of processing data by request and the data source to be configured for requesting the processed data. Refer to the [Custom Store](/Documentation/Guide/UI_Widgets/Data_Grid/Use_Custom_Store/#Use_Custom_Store) section of this article to learn how to configure the data source to support basic remote operations.

The default mode has a number of peculiarities related to consequential conditions for loading data for all pages. They are especially significant when you have a lot of data and its reloading takes significant time. The conditions are listed below.

1. Setting the [autoExpandAll](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/grouping/#autoExpandAll) option to *false* at runtime.
2. Calling the [collapseAll(groupIndex)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#collapseAllgroupIndex) method.
3. Using the [header filter](/Documentation/Guide/UI_Widgets/Data_Grid/Filtering/#Column_Header_Filter) feature (assuming the [header filter data source](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/headerFilter/#dataSource) is generated automatically).
4. Using the [summaries](/Documentation/Guide/UI_Widgets/Data_Grid/Summaries/) feature.

To avoid the redundant data load in cases 1-3, enable the [Remote Grouping](/Documentation/Guide/UI_Widgets/Data_Grid/Use_Custom_Store/#Remote_Operations/Advanced_Remote_Operations/Remote_Grouping). The [Remote Summary](/Documentation/Guide/UI_Widgets/Data_Grid/Use_Custom_Store/#Remote_Operations/Advanced_Remote_Operations/Remote_Summary) prevents data from being reloaded in case number 4.