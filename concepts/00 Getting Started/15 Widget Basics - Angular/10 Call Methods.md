To call a widget method, get the widget's component with a [view query](https://angular.io/docs/ts/latest/api/core/index/ViewChild-decorator.html) and then access the widget instance using the component's **instance** property. In the following example, the **refresh()** method of the [DataGrid](/Documentation/ApiReference/UI_Widgets/dxDataGrid/) widget is called.

    import { Component, ViewChild } from '@angular/core';
    import { DxDataGridComponent } from "devextreme-angular";

    @Component({
        selector: 'my-app',
        template: `
            <dx-data-grid [dataSource]="dataSource"></dx-data-grid>
            <dx-button text="Refresh data" (onClick)="refresh()"></dx-button>
        `
    })
    export class AppComponent implements OnChanges {
        @ViewChild(DxDataGridComponent) dataGrid:DxDataGridComponent
        refresh() {
            this.dataGrid.instance.refresh();
        }
    }

#####See Also#####
- [API Reference](/Documentation/ApiReference/) | **WidgetName** | **Methods**
- [DevExtreme-Angular description on GitHub](https://github.com/DevExpress/devextreme-angular)

[tags]basics, angularjs, call methods, widget instance
