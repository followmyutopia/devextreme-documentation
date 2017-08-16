In addition to sorting with the **DataGrid** interface, you can apply sorting in code.

####Specify Sort Order and Sort Index in Code

To do this for a column, change its [sortOrder](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#sortOrder) option using the [columnOption](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#columnOptionid_optionName_optionValue) method. Note that if you change this option for multiple columns one after another, sorting will be applied for all of them sequentially. Assume that you have two columns in a grid: *"Position"* and *"Name"*. The following code will sort grid records first by the *Position* column, and then by the *Name* column.

    <!--JavaScript-->dataGridInstance.columnOption('Position', 'sortOrder', 'asc');
    dataGridInstance.columnOption('Name', 'sortOrder', 'asc');

To specify the sequence of applying sorting to columns explicitly, assign sort indexes to these columns. For this purpose, change the column's [sortIndex](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#sortIndex) option using the **columnOption** method. Assume that the *"Position"* and *"Name"* columns already have sort orders. In that case, the code below will sort grid records first by the *Name* column, and then by the *Position* column.

    <!--JavaScript-->dataGridInstance.columnOption('Name', 'sortIndex', 0);
    dataGridInstance.columnOption('Position', 'sortIndex', 1);

Since sort order and sort index frequently go together, use the following construction to change them both.

	<!--JavaScript-->dataGridInstance.columnOption('Position', {
        sortOrder: 'asc',
        sortIndex: 0
    });
    dataGridInstance.columnOption('Name', {
        sortOrder: 'asc',
        sortIndex: 1
    });

####Define Custom Sorting Function

By default, sorting is conducted using the exact values that the column contains. However, in some cases, this approach may produce poor results. In such cases, it may be preferable to use calculated values for column cells to be used in sorting. For this purpose, assign a function to the [calculateSortValue](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#calculateSortValue) option. This function must return the calculated value to be used for sorting. For example, consider the following code. The **calculateSortValue**  function makes all employees that occupy the CEO position be displayed at the top of the grid when any sorting is applied to the *"Position"* column. Other employees are sorted as usual.

    <!--JavaScript-->var dataGridOptions = {
        // ...
        columns: [{
            // ...
            dataField: 'Position',
            sortOrder: "asc",
            calculateSortValue: function (data) {
                if (data.Position == "CEO")
                    return dataGridInstance.columnOption('Position', 'sortOrder') == 'asc' ? "aaa" : "zzz"; // CEOs are always displayed at the top
                else
                    return data.Position; // Others are sorted as usual
            }
        }, {
            // ...
        }]    
    }
    
Alternatively, the **calculateSortValue** option can accept the name of the data field whose values must be used to sort grid records. Assuming that data source items have an *"isOnVacation"* property, you can use the following construction to display those employees that aren't on vacation at the top of the grid.


    <!--JavaScript-->var dataGridOptions = {
        // ...
        columns: [{
            // ...
            dataField: 'Position',
            calculateSortValue: 'isOnVacation' // Grid records are sorted by this field instead of "Position"
        }, {
            // ...
        }]    
    }

####Clear Sorting in Code

To clear sorting settings of a column, assign *undefined* to the **sortIndex** option of this column using the **columnOption** method. The following command clears sorting settings from a *"Position"* column.

    <!--JavaScript-->dataGridInstance.columnOption('Position', 'sortIndex', undefined);

To clear sorting settings of all columns at once, call the grid's [clearSorting()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#clearSorting) method as shown in the code snippet below.

	<!--JavaScript-->dataGridInstance.clearSorting();

[note] When you [export](/Documentation/Guide/Widgets/DataGrid/Client-Side_Export/) data loaded from the OData service, the sort order of exported data may differ from the sort order of displayed data. It happens because data for export loads without paging, and if the OData service does not sort data before cutting it (for paging), results may not be repeatable. Sort data in the OData service before sending or use client-side sorting in the Data Source (by the primary key, for example).
