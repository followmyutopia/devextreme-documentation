The API for filtering differs depending on the UI element that it affects. To specify an initial value for a [filter row cell](/Documentation/Guide/Widgets/TreeList/Filtering_and_Searching/#Filter_Row), set a column's [selectedFilterOperation](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#selectedFilterOperation) and [filterValue](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#filterValue) options. You can also change these options with the [columnOption](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#columnOptionid_optionName_optionValue) method to assign a new value to a fitler row cell at runtime.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
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

    <!--JavaScript-->$("#treeListContainer").dxTreeList("columnOption", "isOnVacation", "filterValue", false);

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxo-filter-row [visible]="true"></dxo-filter-row>
        <dxi-column ...
            dataField="isOnVacation"
            selectedFilterOperation="="
            [filterValue]="true">
        </dxi-column>
    </dx-tree-list>

<!---->

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxTreeListModule, DxTreeListComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        setFilterValue (dataFieldName, newValue) {
            this.treeList.instance.columnOption(dataFieldName, "filterValue", newValue);
        }
    }
    
---

To specify initial values for a [header filter](/Documentation/Guide/Widgets/TreeList/Filtering_and_Searching/#Header_Filter), set a column's [filterType](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#filterType) and [filterValues](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#filterValues) options. You can change these options with the **columnOption** method at runtime as well.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
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

    <!--JavaScript-->$("#treeListContainer").dxTreeList("columnOption", "OrderDate", "filterValues", [2014, 2015]);

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxo-header-filter [visible]="true"></dxo-header-filter>
        <dxi-column ...
            dataField="OrderDate"
            filterType="exclude"
            [filterValues]="[2014]">
        </dxi-column>
    </dx-tree-list>

<!---->

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxTreeListModule, DxTreeListComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        setFilterValues (dataFieldName, newValue) {
            this.treeList.instance.columnOption(dataFieldName, "filterValues", newValue);
        }
    }
    
---

You can specify an initial text for the [search panel](/Documentation/Guide/Widgets/TreeList/Filtering_and_Searching/#Search_Panel) using the **searchPanel** | [text](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/searchPanel/#text) option. Call the [searchByText(text)](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#searchByTexttext) method to change the text at runtime.

---
##### jQuery


    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            searchPanel: {
                visible: true,
                text: "Pending"
            }
        });
    });

<!---->

    <!--JavaScript-->$("#treeListContainer").dxTreeList("searchByText", "Solved");

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxo-search-panel [visible]="true" text="Pending"></dxo-search-panel>
    </dx-tree-list>

<!---->

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxTreeListModule, DxTreeListComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        setSearchString (newString) {
            this.treeList.instance.searchByText(newString);
        }
    }
    
---

All the aforementioned options and methods filter data that was returned by the data source. If you need to pre-filter data in the data source, call the [filter(filterExpr)](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#filterfilterExpr) method passing a [filter expression](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering) as an argument. Note that this filter can be cleared only [programmatically](/Documentation/Guide/Widgets/TreeList/Filtering_and_Searching/#API/Clear_Filtering_Settings).

---
##### jQuery

    <!--JavaScript-->$("#treeListContainer").dxTreeList("filter", [
        [ "Cost", ">", 1000 ],
        "and",
        [ "Cost", "<=", 2000 ]
    ]);

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxTreeListModule, DxTreeListComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        filterByCost () {
            this.treeList.instance.filter([
                [ "Cost", ">", 1000 ],
                "and",
                [ "Cost", "<=", 2000 ]
            ]);
        }
    }
    
---

Since there are many ways to filter data, you may need to get a filter combined from all applied filters. For this, call the [getCombinedFilter()](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#getCombinedFilter) method. It returns the filter with [getters](/Documentation/Guide/Data_Layer/Data_Layer/#Getters_And_Setters) by default. Call it passing **true** as the argument to get the combined filter with [data fields](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#dataField).

---
##### jQuery

    <!--JavaScript-->$("#treeListContainer").dxTreeList("getCombinedFilter", true);

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxTreeListModule, DxTreeListComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        getCombinedFilter () {
            return this.treeList.instance.getCombinedFilter(true);
        }
    }
    
---

#####See Also#####
- [Filtering API - Clear Filtering Settings](/Documentation/Guide/Widgets/TreeList/Filtering_and_Searching/#API/Clear_Filtering_Settings)