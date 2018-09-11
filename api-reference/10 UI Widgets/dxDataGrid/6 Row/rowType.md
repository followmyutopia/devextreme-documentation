===========================================================================
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
The row's type.
<!--/shortDescription-->

<!--fullDescription-->
This field can have one of the following values:

- *"data"*      
A row containing data.  

- *"detail"*    
A row that shows detail data. It appears when a user expands a [master row](/Documentation/Guide/Widgets/DataGrid/Master-Detail_Interface/) or edits a row in [*"form"* editing mode](/Documentation/Guide/Widgets/DataGrid/Editing/#User_Interaction/Form_Mode). To identify whether it is one or another, check the [isEditing](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/#isEditing) field's value. It is **true** while the editing takes place.

- *"detailAdaptive"*    
An [adaptive detail row](/Documentation/Guide/Widgets/DataGrid/Columns/Adaptability/).

- *"group"*     
A [group row](/Documentation/Guide/Widgets/DataGrid/Grouping/#User_Interaction/Expand_and_Collapse_Groups).        

- *"groupFooter"*       
A row in a group footer that shows the group summary.

- *"header"*    
The row containing [column headers](/Documentation/Guide/Widgets/DataGrid/Columns/Customize_Column_Headers/).

- *"filter"*    
The [filter row](/Documentation/Guide/Widgets/DataGrid/Filtering_and_Searching/#Filter_Row).

- *"totalFooter"*   
The row that shows the [total summary](/Documentation/Guide/Widgets/DataGrid/Summaries/Total_Summary/).

[note] Available row properties depend on the row type. For example, the [data](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/#data) and [key](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/#key) properties are undefined for *header*, *filter* and *totalFooter* rows, but have values for the other row types. Refer to a particular property's description for more information.
<!--/fullDescription-->