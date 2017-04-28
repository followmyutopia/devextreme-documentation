A lookup column is a special case of [data columns](/Documentation/Guide/Widgets/TreeList/Columns/Column_Types/#Data_Columns). A lookup column contains a restricted set of values. It is useful for filtering and, often, editing.

![DevExtreme HTML5 JavaScript TreeList LookupColumns](/Content/images/doc/17_1/treelist/visual_elements/column-types_lookup.png)

Each lookup column has an individual [data source](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/lookup/#dataSource) - a collection of objects that map the column's actual values to display values...

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            dataSource: orders,
            columns: [{
                dataField: 'statusId', // provides actual values
                lookup: {
                    dataSource: [
                        { id: 1, name: 'Not Started' },
                        { id: 2, name: 'Need Assistance' },
                        { id: 3, name: 'In Progress' },
                        // ...
                    ],
                    valueExpr: 'id', // contains the same values as the "statusId" field provides
                    displayExpr: 'name' // provides display values
                }
            }]
        });
    });

... or simply an array of column values if actual and display values are the same.

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            dataSource: orders,
            columns: [{
                dataField: 'status', // provides column values
                lookup: {
                    dataSource: [ // contains the same values as the "status" field provides
                        'Not Started',
                        'Need Assistance',
                        'In Progress',
                        // ...
                    ]
                }
            }]
        });
    });

#####See Also#####
- [lookup](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/lookup/)
- [TreeList Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_List/UsingFilterRow/jQuery/Light/)

[tags] treelist, tree list, column types, lookup columns