The load panel is displayed while the widget loads data. It consists of a loading indicator and text, both placed on a pane.

![DevExtreme HTML5/JavaScript DataGrid Widget - Load Panel](/Content/images/doc/18_2/DataGrid/visual_elements/load_panel.png)

The load panel is shown only for remote data sources by default. To show it regardless of the data source type, assign **true** to the **loadPanel**.[enabled](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/loadPanel/#enabled) option. Setting the same option to **false** disables the load panel completely.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            loadPanel: {
                enabled: true
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxo-load-panel
            [enabled]="true">
        </dxo-load-panel>
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

You can also control the load panel programmatically using the [beginCustomLoading(messageText)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#beginCustomLoadingmessageText) and [endCustomLoading()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#endCustomLoading) methods.

---
##### jQuery

    <!--JavaScript-->var dataGrid = $("#dataGridContainer").dxDataGrid("instance");
    dataGrid.beginCustomLoading();
    // ...
    dataGrid.endCustomLoading();

##### Angular

    <!--TypeScript-->
    import { ..., ViewChild } from '@angular/core';
    import { DxDataGridModule, DxDataGridComponent } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        doSomeLongOperation () {
            this.dataGrid.instance.beginCustomLoading();
            // ...
            this.dataGrid.instance.endCustomLoading();
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

Since the load panel is a DevExtreme [LoadPanel](/Documentation/Guide/Widgets/LoadPanel/Overview/) widget, you can declare any [options of this widget](/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Configuration/) in the **DataGrid**'s [loadPanel](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/loadPanel/) object. For example, you can change the panel's size with the [height](/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Configuration/#height) and [width](/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Configuration/#width) options, or employ another loading indicator using the [indicatorSrc](/Documentation/ApiReference/UI_Widgets/dxLoadPanel/Configuration/#indicatorSrc) option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#dataGridContainer").dxDataGrid({
            loadPanel: {
                height: 100,
                width: 250,
                indicatorSrc: "https://js.devexpress.com/Content/data/loadingIcons/rolling.svg"
            }
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-data-grid ... >
        <dxo-load-panel
            [height]="100"
            [width]="250"
            indicatorSrc="https://js.devexpress.com/Content/data/loadingIcons/rolling.svg">
        </dxo-load-panel>
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

#####See Also#####
- [LoadPanel Demos](/Demos/WidgetsGallery/Demo/Load_Panel/Overview/jQuery/Light/)
- [DataGrid Demos](/Demos/WidgetsGallery/Demo/DataGrid/AjaxRequest/jQuery/Light/)
