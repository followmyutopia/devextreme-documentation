The **DataGrid** widget has an integrated filter builder that can be invoked using the [filter panel](/Documentation/Guide/Widgets/DataGrid/Filtering_and_Searching/#Filter_Panel). You can also use the [FilterBuilder](/Documentation/Guide/Widgets/FilterBuilder/Overview/) widget as a standalone component. Pass an array of columns that should be filtered to the **FilterBuilder**'s [fields](/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/#fields) option. Each item in this array should at least have the [dataField](/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Field/#dataField). The following code allows using **DataGrid** columns in the **FilterBuilder**:

---
#####jQuery

    <!--JavaScript-->
    var columns = [{
        caption: "ID",
        dataField: "Product_ID",
        dataType: "number"
    }, {
        dataField: "Product_Name"
    }, {
        caption: "Cost",
        dataField: "Product_Cost",
        dataType: "number",
        format: "currency"
    }];

    $(function () {
        $("#dataGrid").dxDataGrid({
            dataSource: products, 
            columns: columns
        });
        $("#filterBuilder").dxFilterBuilder({
            fields: columns
        });
    });

#####Angular

    <!--HTML-->
    <dx-filter-builder 
        [fields]="columns">
    </dx-filter-builder>
    <dx-data-grid 
        [dataSource]="products"  
        [columns]="columns">
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule, DxFilterBuilderModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        columns = [{
            caption: "ID",
            dataField: "Product_ID",
            dataType: "number"
        }, {
            dataField: "Product_Name"
        }, {
            caption: "Cost",
            dataField: "Product_Cost",
            dataType: "number",
            format: "currency"
        }];
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule,
            DxFilterBuilderModule
        ],
        // ...
    })

---

Then, add a button that updates a filter of the **DataGrid**'s data source according to the filter expression:

---
#####jQuery

    <!--JavaScript-->
    $(function () {
        // ...
        $("#button").dxButton({
            text: "Apply Filter",
            onClick: function () {
                var filter = $("#filterBuilder").dxFilterBuilder("instance").getFilterExpression();
                $("#dataGrid").dxDataGrid("instance").filter(filter);
            },
        });
    });

#####Angular

    <!--TypeScript-->
    import { 
        DxDataGridModule, 
        DxFilterBuilderModule, 
        DxDataGridComponent, 
        DxFilterBuilderComponent 
    } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
        @ViewChild(DxFilterBuilderComponent) filterBuilder: DxFilterBuilderComponent;
        // ...
        buttonClick() {
            this.dataGrid.filter(this.filterBuilder.getFilterExpression());
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule,
            DxFilterBuilderModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-button 
        text="Apply Filter"
        (onClick)="buttonClick()">
    </dx-button>   

---

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/FilterBuilder/WithDataGrid/Angular/Light/"
}

#####See Also#####
- [Filtering API - Initial and Runtime Filtering](/Documentation/Guide/Widgets/DataGrid/Filtering_and_Searching/#API/Initial_and_Runtime_Filtering)
