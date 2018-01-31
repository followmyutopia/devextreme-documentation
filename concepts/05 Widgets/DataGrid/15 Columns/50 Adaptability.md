When adapting to a small container or screen, the **DataGrid** can hide columns. To enable this feature, set the [columnHidingEnabled](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#columnHidingEnabled) to **true**. Columns have hiding priorities - zero-based indexes that determine the order in which they are hidden. These indexes ascend from right to left by default, which means that the rightmost column is always at risk of being hidden. Use the [hidingPriority](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#hidingPriority) option to specify a custom hiding priority and cancel the default priorities.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            columnHidingEnabled: true,
            columns: [{
                // ...
                hidingPriority: 2 // a valuable column
            }, {
                // ...
                hidingPriority: 1 // a not-so-valuable column 
            }, {
                // ...
                hidingPriority: 0 // a first-to-hide column
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... 
        [columnHidingEnabled]="true">
        <dxi-column [hidingPriority]="2" ... ></dxi-column> <!-- a valuable column -->
        <dxi-column [hidingPriority]="1" ... ></dxi-column> <!-- a not-so-valuable column -->
        <dxi-column [hidingPriority]="0" ... ></dxi-column> <!-- a first-to-hide column -->
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

Data from hidden columns is still available in adaptive detail rows. A user can expand or collapse these rows by clicking the ellipsis buttons in the adaptive column.

![DevExtreme HTML5 JavaScript jQuery Knockout Angular DataGrid Adaptability](/Content/images/doc/17_2/DataGrid/visual_elements/adaptive-column.png)

#include common-demobutton-named with {
    url: "/Demos/WidgetsGallery/Demo/DataGrid/GridAdaptabilityOverview/jQuery/Light/",
    name: "Adaptability"
}
#include common-demobutton-named with {
    url: "/Demos/WidgetsGallery/Demo/DataGrid/GridColumnsHidingPriority/jQuery/Light/",
    name: "Hiding Priority"
}

You can expand or collapse adaptive detail rows programmatically by calling the [expandAdaptiveDetailRow(key)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#expandAdaptiveDetailRowkey) or [collapseAdaptiveDetailRow()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#collapseAdaptiveDetailRow) method. Note that adaptive detail rows cannot be expanded simultaneously, therefore, calling the **expandAdaptiveDetailRow(key)** method collapses the previously expanded row. To check whether a specific row is expanded, call the [isAdaptiveDetailRowExpanded(key)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#isAdaptiveDetailRowExpandedkey) method.

---
##### jQuery

    <!--JavaScript-->var expandAdaptiveDetailRow = function (key, dataGridInstance) {
        if (!dataGridInstance.isAdaptiveDetailRowExpanded(key)) {
            dataGridInstance.expandAdaptiveDetailRow(key);
        }
    }

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxDataGridModule, DxDataGridComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        expandAdaptiveDetailRow (key) {
            if (!this.dataGrid.instance.isAdaptiveDetailRowExpanded(key)) {
                this.dataGrid.instance.expandAdaptiveDetailRow(key);
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

All adaptive detail rows contain the [DevExtreme Form widget](/Documentation/ApiReference/UI_Widgets/dxForm/), so you can customize a row by changing the [options of this widget](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/). To access them, implement the [onAdaptiveDetailRowPreparing](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onAdaptiveDetailRowPreparing) event handler. For example, the following code marks the form item whose data field is *"OrderID"* as required:

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            onAdaptiveDetailRowPreparing: function (e) {
                for (let formItem of e.formOptions.items) {
                    if (formItem.dataField == "OrderID") {
                        formItem.isRequired = true;
                    }
                }
            }
        });
    });

##### Angular
    
    <!--TypeScript-->
    import { DxDataGridModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        onAdaptiveDetailRowPreparing (e) {
            for (let formItem of e.formOptions.items) {
                if (formItem.dataField == "OrderID") {
                    formItem.isRequired = true;
                }
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

    <!--HTML-->
    <dx-data-grid ...
        (onAdaptiveDetailRowPreparing)="onAdaptiveDetailRowPreparing($event)">
    </dx-data-grid>
    
---

#####See Also#####
- [Column Fixing](/Documentation/Guide/Widgets/DataGrid/Columns/Column_Fixing/)
- [Column Chooser](/Documentation/Guide/Widgets/DataGrid/Columns/Column_Chooser/)
