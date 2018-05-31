A user clicks the **Export** button to save an Excel file with exported data. Data types, sorting, filtering, and grouping settings are preserved.

![DevExtreme HTML5 JavaScript DataGrid Export Button](/Content/images/doc/18_2/DataGrid/exported_data.png)

Client-side exporting requires referencing the [JSZip](https://stuk.github.io/jszip/) library on the page. See the guides in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section for more information. After that, you can enable exporting in the **DataGrid** by setting the **export**.[enabled](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/#enabled) option to **true**.

---

#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            export: {
                enabled: true
            }
        });
    });


#####Angular

    <!--HTML-->
    <dx-data-grid ... >
        <dxo-export [enabled]="true"></dxo-export>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

---

The resulting file gets its name from the [fileName](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/#fileName) option, and may contain only selected rows if you set the [allowExportSelectedData](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/#allowExportSelectedData) option to **true**.

---

#####jQuery

    <!--JavaScript-->
    $(function () {
        $("#dataGridContainer").dxDataGrid({
            // ...
            export: {
                enabled: true,
                allowExportSelectedData: true,
                fileName: "NewFileName"
            }
        });
    });


#####Angular

    <!--HTML-->
    <dx-data-grid ... >
        <dxo-export 
            [enabled]="true"
            [allowExportSelectedData]="true"
            fileName="NewFileName">
        </dxo-export>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

---

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/DataGrid/ExportToExcel/jQuery/Light/"
}

