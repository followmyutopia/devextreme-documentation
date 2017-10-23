Use the deferred mode to increase the **DataGrid**'s performance when [selecting multiple rows](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#allowSelectAll) at once. In this mode, only the API - for example, the [getSelectedRowsData()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getSelectedRowsData) or [getSelectedRowKeys()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getSelectedRowKeys) method - can request the **DataGrid** data. Assign **true** to the **selection**.[deferred](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/selection/#deferred) option to use deferred selection.

---

#####jQuery

    <!--JavaScript-->
    $(function(){
        $("#dataGridContainer").dxDataGrid({
            // ...
            dataSource: {
                store: {
                    type: "odata",
                    url: "https://js.devexpress.com/Demos/DevAV/odata/Products",
                    key: "Product_ID"
                }
            },
            selection: {
                mode: 'multiple',
                allowSelectAll: true,
                deferred: true
            }
        }); 
    });

#####Angular

    <!--HTML--><dx-data-grid
        [dataSource]="dataSource">
        <dxo-selection
            mode="multiple"
            [allowSelectAll]="true"
            [deferred]="true">
        </dxo-selection>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from 'devextreme-angular';
    import 'devextreme/data/odata/store';
    // ...
    export class AppComponent {
        dataSource = {
            store: {
                type: "odata",
                url: "https://js.devexpress.com/Demos/DevAV/odata/Products",
                key: "Product_ID"
            }
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

---

[note]You must specify the **key** option of the [Store](/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores) underlying the [dataSource](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource) to guarantee that the deferred selection works properly.

The following tasks require using different API in the deferred mode comparing with usual (instant) one:

- **Setting initial selection**  

    The deferred mode requires using the [selectionFilter](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#selectionFilter) instead of the [selectedRowKeys](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#selectedRowKeys) option to set the initially selected rows. Pass a [filter expression](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering) to define records that must be selected.

    ---

    #####jQuery

        <!--JavaScript-->
        $(function () {
            $("#dataGridContainer").dxDataGrid({
                // ...
                selectionFilter: ["Task_Status", "=", "Completed"]
            });
        });

    #####Angular

        <!--HTML-->
        <dx-data-grid ...
            selectionFilter="['Task_Status', '=', 'Completed']">
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
    
    The **DataGrid** changes the **selectionFilter** option's value internally each time a user selects a row. You can use the following code to obtain this option's current value and send it to the server:

    ---
    #####jQuery

        <!--JavaScript-->
        function sendSelectedRows() {
            var selectionFilter = dataGridInstance.option("selectionFilter");
            $.ajax({
                method: "POST",
                url: "url/to/data/processing/method",
                data: { 
                    filter: (selectionFilter ? JSON.stringify(selectionFilter) : null)
                }
            });
        }

    #####Angular

        <!--TypeScript-->
        import { ..., ViewChild } from '@angular/core';
        import { Http, HttpModule } from '@angular/http';
        import { DxDataGridModule, DxDataGridComponent } from 'devextreme-angular';
        // ...
        export class AppComponent {
            @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
            constructor(private http: Http) { }
            sendSelectedRows() {
                var selectionFilter = this.dataGrid.instance.option("selectionFilter");
                this.http
                    .post('url/to/data/processing/method',  
                    "filter: " + (selectionFilter ? JSON.stringify(selectionFilter) : null)
                    )
                    .subscribe();
            }
        }
        @NgModule({
            imports: [
                // ...
                DxDataGridModule,
                HttpModule
            ],
            // ...
        })

    ---

- **Checking whether a row is selected**  

    Use the [isRowSelected(data)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#isRowSelecteddata) method to find out whether a specific row is selected. 

- **Getting the selected rows' data**  

    In the deferred mode, the [getSelectedRowsData()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getSelectedRowsData) and [getSelectedRowKeys()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getSelectedRowKeys) methods return a Promise ([jQuery](http://api.jquery.com/Types/#Promise) or [native](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) depending on the [useJQuery](/Documentation/ApiReference/Common/Object_Structures/globalConfig/#useJQuery) flag's value). Get the selected data within the callback function that resolves this object.
    
<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Data_Grid/DeferredSelection/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
- **key** in [ArrayStore](/Documentation/ApiReference/Data_Layer/ArrayStore/Configuration/#key) | [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#key) | [LocalStore](/Documentation/ApiReference/Data_Layer/LocalStore/Configuration/#key) | [ODataStore](/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#key)
