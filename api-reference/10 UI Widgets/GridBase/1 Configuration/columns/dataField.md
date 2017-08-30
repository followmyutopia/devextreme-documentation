<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Binds the column to a field of the [dataSource]({basewidgetpath}/Configuration/#dataSource).
<!--/shortDescription-->

<!--fullDescription-->
The **columns** array can contain only the names of data source fields, which is sufficient if you do not need to specify any other column options. But if you do, then this array should contain objects that configure columns. To bind the columns to data source fields, use the **dataField** option. Note that you can combine both declarations in a single array as shown in the following code.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [
                'CustomerID',
                { dataField: 'EmployeeID', width: 200 },
                'OrderDate',
                { dataField: 'Freight', format: 'fixedPoint' },
                'ShipName',
                'ShipCity'
            ]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxi-column dataField="CustomerID"></dxi-column>
        <dxi-column dataField="EmployeeID" [width]="200"></dxi-column>
        <dxi-column dataField="OrderDate"></dxi-column>
        <dxi-column dataField="Freight" format="fixedPoint"></dxi-column>
        <dxi-column dataField="ShipName"></dxi-column>
        <dxi-column dataField="ShipCity"></dxi-column>
    </dx-data-grid>
    
---

#####See Also#####
- [Columns - Overview](/Documentation/Guide/Widgets/DataGrid/Columns/Overview/)
<!--/fullDescription-->