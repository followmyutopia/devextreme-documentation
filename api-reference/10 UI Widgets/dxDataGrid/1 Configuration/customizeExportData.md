===========================================================================
<!--type-->function(columns, rows)<!--/type-->
===========================================================================

<!--shortDescription-->
Customizes data before export. You can use the **export**.[customizeExcelCell](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/#customizeExcelCell) function instead.
<!--/shortDescription-->

<!--fullDescription-->
This function is called between the [onExporting](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onExporting) and [onExported](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onExported) functions. This function customizes data; the other functions can be used to customize grid columns.
 
In the following code, the **customizeExportData** function replaces empty values with the *"Is Blank"* value:

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            customizeExportData: function (columns, rows) {
                rows.forEach(function (row) {
                    var rowValues = row.values;
                    for (var i = 0; i < rowValues.length; i++) {
                        if (rowValues[i] == "")
                            rowValues[i] = "Is Blank";
                    }
                })
            }
        });
    });

#####Angular

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        customizeExportData (columns, rows) {
            rows.forEach(function (row) {
                let rowValues =  row.values;
                for(let i = 0; i < rowValues.length; i++) {
                    if (rowValues[i] == "")
                        rowValues[i] = "Is Blank";
                }
            })
        };
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-data-grid ...
        [customizeExportData]="customizeExportData">
    </dx-data-grid>

---

#####See Also#####
- [Client-Side Exporting](/Documentation/Guide/Widgets/DataGrid/Client-Side_Exporting/)
- [export](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/).**enabled**
- **columns[]**.[allowExporting](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowExporting)
<!--/fullDescription-->
<!--typeFunctionParamName1-->columns<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Array<dxDataGridColumn><!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
All column [configurations](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/).
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->rows<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->Array<dxDataGridRowObject><!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The [Row](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/) objects. This array contains only exported rows.
<!--/typeFunctionParamDescription2-->
