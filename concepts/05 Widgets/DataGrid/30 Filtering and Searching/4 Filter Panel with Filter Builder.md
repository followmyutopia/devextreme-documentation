The filter panel displays the applied filter expression.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout DataGrid Filter Panel](/Content/images/doc/19_2/DataGrid/visual_elements/filter_panel.png)

You can click the filter expression to open the integrated filter builder.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout DataGrid Filter Panel](/Content/images/doc/19_2/DataGrid/visual_elements/integrated_filter_builder.png)

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/DataGrid/FilterPanel/jQuery/Light/"
}

Set the **filterPanel**.[visible](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/filterPanel/#visible) option to **true** to make the filter panel visible. 

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            filterPanel: { visible: true }
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid ... >
        <dxo-filter-panel [visible]="true"></dxo-filter-panel>
    </dx-data-grid>

---

If a user changes the filter expression in the filter panel or filter builder, the changes are reflected in the [filter row](/Documentation/Guide/Widgets/DataGrid/Filtering_and_Searching/#Filter_Row) and [header filter](/Documentation/Guide/Widgets/DataGrid/Filtering_and_Searching/#Header_Filter), and vice versa. Set the [filterSyncEnabled](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#filterSyncEnabled) option to **false** to disable this synchronization. In this case, the filter panel remains synchronized with the filter builder.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            filterSyncEnabled: false
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid ...
        [filterSyncEnabled]="false">
    </dx-data-grid>

---

You can define the filter expression programmatically with the [filterValue](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#filterValue) option. See the option's description for the full list of available filter operations and their peculiarities.

The **filterValue** is updated when a user changes the filter expression from the UI. Use the [option](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#optionoptionName_optionValue) method to update it from the API:

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            filterValue: ["SaleAmount", "<>", null],
            filterPanel: { 
                visible: true
            }
        });
    });

<!---->

    <!--JavaScript-->
    $("#dataGridContainer").dxDataGrid("option", "filterValue", ["Employee", "contains", "Clark"]);

#####Angular

    <!--HTML-->
    <dx-data-grid ...
        [(filterValue)]="filterValue">
        <dxo-filter-panel 
            [visible]="true">
        </dxo-filter-panel>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        filterValue: Array<any> = ['SaleAmount', '<>', null];
        applyFilter (filterExpression) {
            this.filterValue = filterExpression;
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

The **DataGrid** provides the [filterBuilder](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#filterBuilder) and [filterBuilderPopup](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#filterBuilderPopup) objects that configure the integrated filter builder and the popup in which it appears. These objects can contain the [FilterBuilder](/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/)'s and [Popup](/Documentation/ApiReference/UI_Widgets/dxPopup/)'s options. In the following code, the filter builder has an additional filter operation `Is Zero`; the filter builder's popup is customized and displayed on a button click:

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        var dataGrid = $("#dataGridContainer").dxDataGrid({
            // ...
            filterPanel: { visible: false },
            filterSyncEnabled: true,
            filterBuilder: {
                customOperations: [{
                    name: "isZero",
                    caption: "Is Zero",
                    dataTypes: ["number"],
                    hasValue: false,
                    calculateFilterExpression: function(filterValue, field) {
                        return [field.dataField, "=", 0];
                    }
                }]
            }, 
            filterBuilderPopup: {
                width: 400,
                title: "Synchronized Filter"
            }
        }).dxDataGrid("instance");
        $("#button").dxButton({
            text: "Show Filter Builder",
            onClick: function () {
                dataGrid.option("filterBuilderPopup", { visible: true });
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-data-grid ... 
        [filterSyncEnabled]="true">
        <dxo-filter-panel [visible]="false"></dxo-filter-panel>
        <dxo-filter-builder 
            [customOperations]="customOperations">
        </dxo-filter-builder>
        <dxo-filter-builder-popup 
            [width]="400"
            title="Synchronized Filter"
            [(visible)]="popupVisible">
        </dxo-filter-builder-popup>
    </dx-data-grid>
    <dx-button
        text="Show Filter Builder"
        (onClick)="showFilterBuilder()">
    </dx-button>

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        popupVisible: boolean = false;
        customOperations = [{
            name: "isZero",
            caption: "Is Zero",
            dataTypes: ["number"],
            hasValue: false,
            calculateFilterExpression: function(filterValue, field) {
                return [field.dataField, "=", 0];
            }
        }];
        showFilterBuilder () {
            this.popupVisible = true;
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

#####See Also#####
- [FilterBuilder - Overview](/Documentation/Guide/Widgets/FilterBuilder/Overview/)
- [remoteOperations](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/remoteOperations/)
