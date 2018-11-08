<!--EventForAction-->..\4 Events\exporting.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A function that is executed before data is exported.
<!--/shortDescription-->

<!--fullDescription-->
You can use this function with the [onExported](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onExported) function to adjust columns before export. In the following code, these functions are used to export a hidden `ID` column:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                dataField: "ID",
                visible: false
            }, // ...
            ]
            onExporting: function (e) {
                e.component.beginUpdate();
                e.component.columnOption("ID", "visible", true);
            },
            onExported: function (e) {
                e.component.columnOption("ID", "visible", false);
                e.component.endUpdate();
            }
        });
    });


##### Angular

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onExporting (e) {
            e.component.beginUpdate();
            e.component.columnOption("dataField", "visible", true);
        };
        onExported (e) {
            e.component.columnOption("dataField", "visible", false);
            e.component.endUpdate();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

    <!--HTML--><dx-data-grid ...
        (onExporting)="onExporting($event)"
        (onExported)="onExported($event)">
        <!-- ... -->
        <dxi-column dataField="ID" [visible]="false"></dxi-column>
    </dx-data-grid>

---

#####See Also#####
- [Client-Side Exporting](/Documentation/Guide/Widgets/DataGrid/Client-Side_Exporting/)
- [export](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/export/)
- [customizeExportData](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#customizeExportData)
- [onFileSaving](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onFileSaving)
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event that caused the function execution.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->{WidgetName}<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
A widget instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->dxElement<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
A widget container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](http://api.jquery.com/Types/#jQuery) when you use jQuery.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->Object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only if Knockout is used.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->fileName<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->String<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The name of the file where grid data is about to be exported.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->cancel<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->Boolean<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
Allows you to cancel exporting data.
<!--/typeFunctionParamDescription1_field5-->
