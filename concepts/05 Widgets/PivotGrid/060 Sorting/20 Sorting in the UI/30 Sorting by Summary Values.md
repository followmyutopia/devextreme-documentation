To understand how fields are sorted by summary values, consider two dimensions: [column header and row header](/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Headers). To sort fields of one dimension, the user right-clicks (or performs a long tap) on a field of another dimension. In the appeared context menu, he or she chooses the required item.

![DevExtreme PivotGrid FieldChooser SortingIcons](/Content/images/doc/18_2/DataGrid/PivotGrid_sortingBySummary_contextMenu.png)

To allow the user to perform this type of sorting, set the [allowSortingBySummary](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/#allowSortingBySummary) option to **true**.

    <!--JavaScript-->var pivotGridOptions = {
        // ...
        allowSortingBySummary: true // allows the end-user to sort by summary for all column and row fields
    };
    
If you need to allow sorting by summary for an individual field only, set the [same option](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#allowSortingBySummary) inside the configuration object of this field.

    <!--JavaScript-->var pivotGridOptions = {
        // ...
        dataSource: {
            // ...
            fields: [{
                dataField: "FirstName",
                allowSortingBySummary: true // allows the end-user to sort by summary for the "FirstName" field only
                // ...
            }, {
                // ...
            }]
        },
        allowSortingBySummary: false
    };