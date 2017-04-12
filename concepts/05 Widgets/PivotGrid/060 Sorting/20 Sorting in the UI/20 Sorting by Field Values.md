To sort fields by their own values, the user invokes the [Field Chooser](/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Chooser). There, each item of the *"Row Fields"* and *"Column Fields"* areas has an arrow icon on its right side. The user clicks (or taps) this icon to sort the values of the corresponding field.

![DevExtreme PivotGrid FieldChooser SortingIcons](/Content/images/doc/17_1/DataGrid/PivotGrid_fieldChooser_sortingIcons.png)

Alternatively, this type of sorting can be performed using the [Field Panel](/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Field_Panel). Each item on it has the same clickable arrow icon that sorts the values of the corresponding field.

![DevExtreme PivotGrid FieldPanel](/Content/images/doc/17_1/DataGrid/PivotGrid_fieldPanel_sortingIcons.png)

To allow the user to sort by field values, set the [allowSorting](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/#allowSorting) option to *true*.

    <!--JavaScript-->var pivotGridOptions = {
        // ...
        allowSorting: true // allows the end-user to sort all column and row fields
    };
    
If you need to allow sorting for an individual field only, set the [same option](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#allowSorting) inside the configuration object of this field.

    <!--JavaScript-->var pivotGridOptions = {
        // ...
        dataSource: {
            // ...
            fields: [{
                dataField: "FirstName",
                allowSorting: true // allows sorting by the "FirstName" only
                // ...
            }, {
                // ...
            }]
        },
        allowSorting: false
    };