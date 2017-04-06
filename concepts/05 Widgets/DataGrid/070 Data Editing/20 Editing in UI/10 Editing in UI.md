The fields of the [editing](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/) configuration object specify editing in a UI. Among them, you can find fields that enable/disable insertion and removing, as well as editing itself. By default, all these features are disabled. To enable them, add the following code to the grid's configuration object:

    <!--JavaScript-->$("#gridContainer").dxDataGrid({
        // ...
        editing: {
            allowUpdating: true, // Enables editing
            allowAdding: true, // Enables insertion
            allowDeleting: true // Enables removing
        }
    });

You can also specify whether a user can edit values in a specific column by using the [allowUpdating](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowUpdating) option of this column.

Editing in the **DataGrid** widget can be carried out in several modes. To specify the mode, set the **editing** | [mode](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/editing/#mode) option as shown in the code below.

    <!--JavaScript-->$("#gridContainer").dxDataGrid({
        // ...
        editing: {
            mode: 'row', // 'batch' | 'cell' | 'form' | 'popup'
            // ...
        }
    });

#####See Also#####
- [DataGrid - Data Modification Controls](/Documentation/Guide/Widgets/DataGrid/Visual_Elements/#Data_Modification_Controls)
