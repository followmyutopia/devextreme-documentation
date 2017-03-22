<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->number<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the band column that owns the current column. Accepts the index of the band column in the **columns** array.
<!--/shortDescription-->

<!--fullDescription-->
A band column collects two or more data columns under one column header. To implement a band column, you can use a hierarchical structure. For example, the following code bands three columns under the *"Address"* header.

    <!--JavaScript-->var dataGridOptions = {
        // ...
        columns: [{
            caption: 'Address',
            columns: ['City', 'Street', 'Apartment']
        }, {
            // ...
        }]
    };
    
If you use the [customizeColumns](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#customizeColumns) option to configure columns, the hierarchical structure cannot be implemented. To band columns in this case, use the [isBand](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#isBand) and **ownerBand** options.

    <!--JavaScript-->var dataGridOptions = {
        // ...
        customizeColumns: function(columns) {
            columns.push({ // Pushes the "Address" band column into the "columns" array
                caption: 'Address',
                isBand: true
            });
            
            var addressFields = ['City', 'Street', 'Apartment'];
            for (var i = 0; i < columns.length-1; i++) {
                if (addressFields.indexOf(columns[i].dataField) > -1) // If the column belongs to "Address",
                    columns[i].ownerBand = columns.length-1; // assigns "Address" as the owner band column
            }
        }
    };
<!--/fullDescription-->