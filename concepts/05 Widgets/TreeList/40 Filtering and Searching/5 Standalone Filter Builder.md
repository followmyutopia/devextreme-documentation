The **TreeList** widget has an integrated filter builder that can be invoked using the [filter panel](/Documentation/Guide/Widgets/TreeList/Filtering_and_Searching/#Filter_Panel). You can also use the [FilterBuilder](/Documentation/Guide/Widgets/FilterBuilder/Overview/) widget as a standalone component. Pass an array of columns that should be filtered to the **FilterBuilder**'s [fields](/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/#fields) option. Each item in this array should at least have the [dataField](/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Field/#dataField). The following code allows using **TreeList** columns in the **FilterBuilder**:

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
        $("#treeList").dxTreeList({
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
    <dx-tree-list 
        [dataSource]="products"  
        [columns]="columns">
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule, DxFilterBuilderModule } from 'devextreme-angular';
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
            DxTreeListModule,
            DxFilterBuilderModule
        ],
        // ...
    })

---

Then, add a button that updates a filter of the **TreeList**'s data source according to the filter expression:

---
#####jQuery

    <!--JavaScript-->
    $(function () {
        // ...
        $("#button").dxButton({
            text: "Apply Filter",
            onClick: function () {
                var filter = $("#filterBuilder").dxFilterBuilder("instance").getFilterExpression();
                $("#treeList").dxTreeList("instance").filter(filter);
            }
        });
    });

#####Angular

    <!--TypeScript-->
    import { 
        DxTreeListModule, 
        DxFilterBuilderModule, 
        DxTreeListComponent, 
        DxFilterBuilderComponent 
    } from 'devextreme-angular';
    // ...
    export class AppComponent {
        @ViewChild(DxTreeListComponent) treeList: DxTreeListComponent;
        @ViewChild(DxFilterBuilderComponent) filterBuilder: DxFilterBuilderComponent;
        // ...
        buttonClick() {
            this.treeList.filter(this.filterBuilder.getFilterExpression());
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule,
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

#####See Also#####
- [Filtering API - Initial and Runtime Filtering](/Documentation/Guide/Widgets/TreeList/Filtering_and_Searching/#API/Initial_and_Runtime_Filtering)
