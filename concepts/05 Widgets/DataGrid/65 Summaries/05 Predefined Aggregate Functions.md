The following predefined aggregate functions are supported:

- *"sum"*        
- *"min"*        
- *"max"*        
- *"avg"*        
- *"count"*        

These functions aggregate values from the whole grid or a single column (calculates a [total summary](/Documentation/Guide/Widgets/DataGrid/Summaries/Total_Summary/)) or from a group ([group summary](/Documentation/Guide/Widgets/DataGrid/Summaries/Group_Summary/)).

Predefined aggregate functions are performed on the client, but they can be delegated to the server (if the server supports them) by setting the [remoteOperations](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/), **remoteOperations**.[groupPaging](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/#groupPaging), or **remoteOperations**.[summary](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/#summary) option to **true**.

#####See Also#####
- [Custom Aggregate Function](/Documentation/Guide/Widgets/DataGrid/Summaries/Custom_Aggregate_Function/)
