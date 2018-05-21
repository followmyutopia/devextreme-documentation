The filter panel displays the applied filter expression.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout TreeList Filter Panel](/Content/images/doc/18_1/TreeList/visual_elements/filter_panel.png)

Clicking on the filter expression opens the integrated filter builder.

![DevExtreme HTML5 JavaScript jQuery Angular Knockout TreeList Filter Panel](/Content/images/doc/18_1/TreeList/visual_elements/integrated_filter_builder.png)

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/TreeList/FilterPanel/jQuery/Light/"
}

Set the **filterPanel**.[visible](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/filterPanel/#visible) option to **true** to make the filter panel visible. 

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            filterPanel: { visible: true }
        });
    });

#####Angular

    <!--HTML-->
    <dx-tree-list ... >
        <dxo-filter-panel [visible]="true"></dxo-filter-panel>
    </dx-tree-list>

---

If you change the filter expression in the filter panel or filter builder, the changes are reflected in the [filter row](/Documentation/Guide/Widgets/TreeList/Filtering_and_Searching/#Filter_Row) and [header filter](/Documentation/Guide/Widgets/TreeList/Filtering_and_Searching/#Header_Filter), and vice versa. You can disable this synchronization by setting the [filterSyncEnabled](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#filterSyncEnabled) option to **false**. In this case, the filter panel remains synchronized with the filter builder.

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            filterSyncEnabled: false
        });
    });

#####Angular

    <!--HTML-->
    <dx-tree-list ...
        [filterSyncEnabled]="false">
    </dx-tree-list>

---

You can predefine the filter expression with the [filterValue](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#filterValue) option and change it at runtime with the [option](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#optionoptionName_optionValue) method:

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            filterValue: ["SaleAmount", "<>", null],
            filterPanel: { 
                visible: true
            }
        });
    });

<!---->

    <!--JavaScript-->
    $("#treeListContainer").dxTreeList("option", "filterValue", ["Employee", "contains", "Clark"]);

#####Angular

    <!--HTML-->
    <dx-tree-list ...
        [(filterValue)]="filterValue">
        <dxo-filter-panel 
            [visible]="true">
        </dxo-filter-panel>
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from 'devextreme-angular';
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
            DxTreeListModule
        ],
        // ...
    })

---

The **TreeList** provides the [filterBuilder](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#filterBuilder) and [filterBuilderPopup](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#filterBuilderPopup) objects that configure the integrated filter builder and the popup in which it appears. These objects can contain the [FilterBuilder](/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/)'s and [Popup](/Documentation/ApiReference/UI_Widgets/dxPopup/)'s options. In the following code, the filter builder has an additional filter operation `Is Zero`; the filter builder's popup is customized and displayed on a button click:

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        var treeList = $("#treeListContainer").dxTreeList({
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
        }).dxTreeList("instance");
        $("#button").dxButton({
            text: "Show Filter Builder",
            onClick: function () {
                treeList.option("filterBuilderPopup", { visible: true });
            }
        });
    });

#####Angular

    <!--HTML-->
    <dx-tree-list ... 
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
    </dx-tree-list>
    <dx-button
        text="Show Filter Builder"
        (onClick)="showFilterBuilder()">
    </dx-button>

    <!--TypeScript-->
    import { DxTreeListModule } from 'devextreme-angular';
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
            DxTreeListModule
        ],
        // ...
    })

---

#####See Also#####
- [FilterBuilder - Overview](/Documentation/Guide/Widgets/FilterBuilder/Overview/)
