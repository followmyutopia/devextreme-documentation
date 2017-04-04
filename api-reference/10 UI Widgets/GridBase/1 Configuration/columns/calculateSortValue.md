<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->string | function(rowData)<!--/type-->
===========================================================================

<!--shortDescription-->
Calculates custom values to be used in sorting.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts the name of the [data source field]({basewidgetpath}/Configuration/#dataSource) that provides values to be used in sorting...

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            columns: [{
                dataField: "Position", // provides values for the column
                calculateSortValue: "isOnVacation" // provides values to be used in sorting 
            }]
        });
    });

... or a function that returns such a value.

    <!--JavaScript-->$(function() {
        var dataGrid = $("#dataGridContainer").dxDataGrid({
            columns: [{
                dataField: 'Position',
                calculateSortValue: function (rowData) {
                    if (rowData.Position == "CEO")
                        return dataGrid.option('Position', 'sortOrder') == 'asc' ? 0 : data.length; // CEOs must go first
                    else
                        return rowData.Position; // Others are sorted as usual
                }
            }]
        }).dxDataGrid("instance");
    });
<!--/fullDescription-->
<!--typeFunctionParamName1-->rowData<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The data of the row to which the cell belongs.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->any<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The value to be used in sorting.
<!--/typeFunctionReturnDescription-->