The Field Chooser allows you to organize fields from the *"All Fields"* section in folders. To display a field in a folder, set the field's [displayFolder](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#displayFolder) option to the folder name. The following code displays *"Country"* and *"City"* fields in an *"Address"* folder.

    <!--JavaScript-->var pivotGridOptions = {
        // ...
        dataSource: {
            // ...
            fields: [{
                // ...
                dataField: 'Country',
                displayFolder: 'Address'
            }, {
                // ...
                dataField: 'City',
                displayFolder: 'Address'
            }, {
                // ...
            }]
        }
    };
    
![DevExtreme PivotGrid FieldChooser](/Content/images/doc/16_1/DataGrid/PivotGrid_fieldChooser_foldering.png)