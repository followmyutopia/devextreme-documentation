<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->string | function(rowData)<!--/type-->
===========================================================================

<!--shortDescription-->
Calculates custom values for column cells. Used when display values should differ from values for editing.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts the name of the [data source field]({basewidgetpath}/Configuration/#dataSource) that provides display values...

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            columns: [{
                dataField: "countryID", // provides values for editing
                calculateDisplayValue: "country" // provides display values
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-tree-list ... >
        <dxi-column
            dataField="countryID" <!-- provides values for editing -->
            calculateDisplayValue="country"> <!-- provides display values -->
        </dxi-column>
    </dx-tree-list>
    
---

... or a function that combines display values.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            columns: [{
                dataField: "countryID", // provides values for editing
                calculateDisplayValue: function (rowData) { // combines display values
                    return rowData.capital + " (" + rowData.country + ")";
                }
            }]
        });
    });

##### Angular

    <!--HTML-->
    <dx-tree-list ... >
        <dxi-column
            dataField="countryID" <!-- provides values for editing -->
            [calculateDisplayValue]="getCountryWithCapital"> <!-- combines display values -->
        </dxi-column>
    </dx-tree-list>

    <!--TypeScript-->
    export class AppComponent {
        getCountryWithCapital (rowData) {
            return rowData.capital + " (" + rowData.country + ")";
        }
    }
    
---

[note]Do not use this option to format text in the cells. Use [customizeText]({basewidgetpath}/Configuration/columns/#customizeText) for this.

#####See Also#####
- **columns[]** | [calculateCellValue]({basewidgetpath}/Configuration/columns/#calculateCellValue)
<!--/fullDescription-->
<!--typeFunctionParamName1-->rowData<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Data of the row to which the cell belongs.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->any<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A display value for the cell.
<!--/typeFunctionReturnDescription-->

<!--handmade-->
<!--/handmade-->