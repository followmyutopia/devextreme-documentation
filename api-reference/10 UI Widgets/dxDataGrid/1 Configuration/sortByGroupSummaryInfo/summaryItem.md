<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->String | Number<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the group summary item whose values must be used to sort groups.
<!--/shortDescription-->

<!--fullDescription-->
The **summaryItem** option accepts one of the following values.

- The [name](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/#name) of a summary item. The following code sorts groups according to the values of the *'Average Age Group Summary'* item.    

    ---
    #####jQuery

        <!--JavaScript-->
        $(function () {
            $("#dataGridContainer").dxDataGrid({
                // ...
                groupItems: [{
                    column: 'Age',
                    summaryType: 'avg',
                    name: 'Average Age Group Summary'
                }],
                sortByGroupSummaryInfo: [
                    { summaryItem: 'Average Age Group Summary' } 
                ]
            });
        });

    #####Angular

        <!--HTML-->
        <dx-data-grid ... >
            <dxo-summary>
                <dxi-group-item
                    column="Age"
                    summaryType="avg"
                    name="Average Age Group Summary">
                </dxi-group-item>
            </dxo-summary>
            <dxi-sort-by-group-summary-info 
                summaryItem="Average Age Group Summary"> 
            </dxi-sort-by-group-summary-info>
        </dx-data-grid>

    ---

- The index of a summary item in the [groupItems](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/) array. The following code sorts groups according to the values of the group summary item that has index 0.    

    ---
    #####jQuery
    
        <!--JavaScript-->
        $(function () {
            $("#dataGridContainer").dxDataGrid({
                // ...
                groupItems: [{
                    column: 'Age',
                    summaryType: 'min'
                }],
                sortByGroupSummaryInfo: [{ summaryItem: 0 }]
            });
        });

    #####Angular

        <!--HTML-->
        <dx-data-grid ... >
            <dxo-summary>
                <dxi-group-item
                    column="Age"
                    summaryType="min">
                </dxi-group-item>
            </dxo-summary>
            <dxi-sort-by-group-summary-info 
                summaryItem="0"> 
            </dxi-sort-by-group-summary-info>
        </dx-data-grid>

    ---

- A summary type. In this case, the grid will use the first item from the **groupItems** array whose [summaryType](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/#summaryType) option matches the **summaryItem** option. For example, the following code sorts groups according to the values of the group summary item whose **column** option is *'Income'*.        

    ---
    #####jQuery

        <!--JavaScript-->
        $(function () {
            $("#dataGridContainer").dxDataGrid({
                // ...
                summary: {
                    groupItems: [{
                        column: 'Age',
                        summaryType: 'avg',
                    }, {
                        column: 'Income',
                        summaryType: 'max'
                    }, {
                        column: 'Tasks',
                        summaryType: 'min'
                    }]
                },
                sortByGroupSummaryInfo: [{
                    summaryItem: 'min'
                }]
            });
        });

    #####Angular
    
        <!--HTML-->
        <dx-data-grid ... >
            <dxo-summary>
                <dxi-group-item
                    column="Age"
                    summaryType="avg">
                </dxi-group-item>
                <dxi-group-item
                    column="Income"
                    summaryType="max">
                </dxi-group-item>
                <dxi-group-item
                    column="Tasks"
                    summaryType="min">
                </dxi-group-item>
            </dxo-summary>
            <dxi-sort-by-group-summary-info 
                summaryItem="min">
            </dxi-sort-by-group-summary-info>
        </dx-data-grid>

    ---
        
- The [name](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#name), [data field](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#dataField) or [caption](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#caption) of a column. In this case, the grid will use the first item from the **groupItems** array whose [column](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/summary/groupItems/#column) option matches the **summaryItem** option. For example, the following code declares two group summary items with identical values to the **column** option. However, groups will be sorted only according to the values of the group summary item whose **summaryType** option equals *'min'*, because this item is declared before the other one.        

    ---
    #####jQuery

        <!--JavaScript-->
        $(function () {
            $("#dataGridContainer").dxDataGrid({
                // ...
                summary: {
                    groupItems: [{
                        column: 'Income',
                        summaryType: 'min'
                    },{
                        column: 'Income',
                        summaryType: 'avg'
                    }]
                },
                sortByGroupSummaryInfo: [{
                    summaryItem: 'Income'
                }]
            });
        });

    #####Angular
    
        <!--HTML-->
        <dx-data-grid ... >
            <dxo-summary>
                <dxi-group-item
                    column="Income"
                    summaryType="min">
                </dxi-group-item>
                <dxi-group-item
                    column="Income"
                    summaryType="avg">
                </dxi-group-item>
            </dxo-summary>
            <dxi-sort-by-group-summary-info 
                summaryItem="Income">
            </dxi-sort-by-group-summary-info>
        </dx-data-grid>

    ---

<!--/fullDescription-->