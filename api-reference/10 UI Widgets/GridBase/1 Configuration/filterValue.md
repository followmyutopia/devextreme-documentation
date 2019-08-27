---
id: GridBase.Options.filterValue
type: Filter expression
default: null
firedEvents: optionChanged
---
---
##### shortDescription
Specifies a filter expression.

---
If [filterSyncEnabled]({basewidgetpath}/Configuration/#filterSyncEnabled) is **true**, the filter expression includes a combination of the [filter row](/Documentation/Guide/Widgets/{WidgetName}/Filtering_and_Searching/#Filter_Row), [header filter](/Documentation/Guide/Widgets/{WidgetName}/Filtering_and_Searching/#Header_Filter), and [filter builder]({basewidgetpath}/Configuration/#filterBuilder) filters. Otherwise, it contains only the filter builder filter.

The filter expression can contain the following operations: *"="*, *"<>"*, *"<"*, *">"*, *"<="*, *">="*, *"between"*, *"contains"*, *"notcontains"*, *"startswith"*, *"endswith"*, *"anyof"*, *"noneof"*, and the filter builder's [custom operations](/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/customOperations/). Use *"anyof"* and *"noneof"* to select and clear the selection of items in the header filter's popup menu. In the following code, *"anyof"* is used to select items with IDs `500` and `700`:

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            filterSyncEnabled: true,
            headerFilter: { visible: true },
            filterValue: ["ID", "anyof", [500, 700]], 
        })
    });

#####Angular

    <!--HTML-->
    <dx-{widget-name} ...
        [filterSyncEnabled]="true"
        [(filterValue)]="['ID', 'anyof', [500, 700]]"> 
        <dxo-header-filter 
            [visible]="true">
        </dxo-header-filter>
    </dx-{widget-name}>

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })

---

If a column's [groupInterval]({basewidgetpath}/Configuration/columns/headerFilter/#groupInterval) option is set, the *"anyof"* and *"noneof"* operations for this column accept the beginning of intervals instead of exact values:

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            filterValue: ["ID", "anyof", [500, 700]], // Filter intervals are 500-600 and 700-800
            columns: [{
                dataField: "ID",
                dataType: "number",
                headerFilter: { groupInterval: 100 }
            },
            // ...
            ]
        })
    });

#####Angular

    <!--HTML-->
    <dx-{widget-name} ...
        <!-- Filter intervals are 500-600 and 700-800 -->
        [(filterValue)]="['ID', 'anyof', [500, 700]]"> 
            <dxi-column
                dataField="ID"
                dataType="number">
                    <dxo-header-filter 
                        [groupInterval]="100">
                    </dxo-header-filter>
            </dxi-column>
    </dx-{widget-name}>

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })

---


[note] The **DataSource** does not support the *"anyof"*, *"noneof"*, and custom operations. Use the [getCombinedFilter(returnDataField)]({basewidgetpath}/Methods/#getCombinedFilterreturnDataField) method to get the **DataSource**-compatible filter expression.

#####See Also#####
- [Filter Panel with Filter Builder](/Documentation/Guide/Widgets/{WidgetName}/Filtering_and_Searching/#Filter_Panel_with_Filter_Builder)