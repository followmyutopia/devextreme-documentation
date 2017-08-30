The API for filtering differs depending on the UI element that it affects. To specify an initial value for a [filter row cell](/Documentation/Guide/Widgets/DataGrid/Filtering_and_Searching/#Filter_Row), set a column's [selectedFilterOperation](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#selectedFilterOperation) and [filterValue](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#filterValue) options. You can also change these options with the [columnOption](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#columnOptionid_optionName_optionValue) method to assign a new value to a fitler row cell at runtime.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            fitlerRow: { visible: true },
            columns: [{
                // ...
                dataField: "isOnVacation",
                selectedFilterOperation: "=",
                filterValue: true
            }]
        });
    });

<!---->

    <!--JavaScript-->$("#dataGridContainer").dxDataGrid("columnOption", "isOnVacation", "filterValue", false);

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxo-filter-row [visible]="true"></dxo-filter-row>
        <dxi-column ...
            dataField="isOnVacation"
            selectedFilterOperation="="
            [filterValue]="true">
        </dxi-column>
    </dx-data-grid>

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxDataGridModule, DxDataGridComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        setFilterValue (dataFieldName, newValue) {
            this.dataGrid.instance.columnOption(dataFieldName, "filterValue", newValue);
        }
    }
    
---

To specify initial values for a [header filter](/Documentation/Guide/Widgets/DataGrid/Filtering_and_Searching/#Header_Filter), set a column's [filterType](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#filterType) and [filterValues](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#filterValues) options. You can change these options with the **columnOption** method at runtime as well.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            headerFilter: { visible: true },
            columns: [{
                // ...
                dataField: "OrderDate",
                filterType: "exclude",
                filterValues: [2014]
            }]
        });
    });

<!---->

    <!--JavaScript-->$("#dataGridContainer").dxDataGrid("columnOption", "OrderDate", "filterValues", [2014, 2015]);

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxo-header-filter [visible]="true"></dxo-header-filter>
        <dxi-column ...
            dataField="OrderDate"
            filterType="exclude"
            [filterValues]="[2014]">
        </dxi-column>
    </dx-data-grid>


    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxDataGridModule, DxDataGridComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        setFilterValues (dataFieldName, newValue) {
            this.dataGrid.instance.columnOption(dataFieldName, "filterValues", newValue);
        }
    }
    
---

You can specify an initial text for the [search panel](/Documentation/Guide/Widgets/DataGrid/Filtering_and_Searching/#Search_Panel) using the **searchPanel**.[text](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/searchPanel/#text) option. Call the [searchByText(text)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#searchByTexttext) method to change the text at runtime.

---
##### jQuery


    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            searchPanel: {
                visible: true,
                text: "Pending"
            }
        });
    });

<!---->

    <!--JavaScript-->$("#dataGridContainer").dxDataGrid("searchByText", "Solved");

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxo-search-panel [visible]="true" text="Pending"></dxo-search-panel>
    </dx-data-grid>

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxDataGridModule, DxDataGridComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        setSearchString (newString) {
            this.dataGrid.instance.searchByText(newString);
        }
    }
    
---

All the aforementioned options and methods filter data that was returned by the data source. If you need to pre-filter data in the data source, call the [filter(filterExpr)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#filterfilterExpr) method passing a [filter expression](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering) as an argument. Note that this filter can be cleared only [programmatically](/Documentation/Guide/Widgets/DataGrid/Filtering_and_Searching/#API/Clear_Filtering_Settings).

---
##### jQuery

    <!--JavaScript-->$("#dataGridContainer").dxDataGrid("filter", [
        [ "Cost", ">", 1000 ],
        "and",
        [ "Cost", "<=", 2000 ]
    ]);

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxDataGridModule, DxDataGridComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        filterByCost () {
            this.dataGrid.instance.filter([
                [ "Cost", ">", 1000 ],
                "and",
                [ "Cost", "<=", 2000 ]
            ]);
        }
    }
    
---

Since there are many ways to filter data, you may need to get a filter combined from all applied filters. For this, call the [getCombinedFilter()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#getCombinedFilter) method. It returns the filter with [getters](/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters) by default. Call it passing **true** as the argument to get the combined filter with [data fields](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#dataField).

---
##### jQuery

    <!--JavaScript-->$("#dataGridContainer").dxDataGrid("getCombinedFilter", true);

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxDataGridModule, DxDataGridComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        getCombinedFilter () {
            return this.dataGrid.instance.getCombinedFilter(true);
        }
    }
    
---

#####See Also#####
- [Filtering API - Clear Filtering Settings](/Documentation/Guide/Widgets/DataGrid/Filtering_and_Searching/#API/Clear_Filtering_Settings)