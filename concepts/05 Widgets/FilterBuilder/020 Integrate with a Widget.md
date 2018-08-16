The **FilterBuilder**'s [fields](/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/#fields) array should 
contain data fields from a widget's data source. For example, the following code allows using the [List's](/Documentation/Guide/Widgets/List/Overview/) `Name` and `Price` fields in the **FilterBuilder**:

---
#####jQuery

    <!--JavaScript-->
    var products = [{
        ID: 1,
        Name: "HD Video Player",
        Price: 330,
        Category: "Video Players"
    }, {
        ID: 2,
        Name: "SuperPlasma 50",
        Price: 2400,
        Category: "Televisions"
    }, 
    // ...
    ];
    var fields = [{
        dataField: "Name"
    }, {
        dataField: "Price",
        dataType: "number",
        format: "currency"
    }];

    $(function () {
        $("#list").dxList({
            dataSource: products, 
            itemTemplate: function (data) {
                return $("<div>").text(data.Category ": " data.Name);
            }
        });
        $("#filterBuilder").dxFilterBuilder({
            fields: fields
        });
    });

#####Angular

    <!--HTML-->
    <dx-filter-builder 
        [fields]="fields">
    </dx-filter-builder>
    <dx-list 
        [dataSource]="products">
        <div *dxTemplate="let item of 'item'">
            <div>{{item.Category}}: {{item.Name}}</div>
        </div>
    </dx-list>

    <!--TypeScript-->
    import { DxListModule, DxFilterBuilderModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        products = [{
            ID: 1,
            Name: "HD Video Player",
            Price: 330,
            Category: "Video Players"
        }, {
            ID: 2,
            Name: "SuperPlasma 50",
            Price: 2400,
            Category: "Televisions"
        }, 
        // ...
        ];
        fields = [{
            dataField: "ID",
            dataType: "number"
        }, {
            dataField: "Name"
        }, {
            dataField: "Price",
            dataType: "number",
            format: "currency"
        }];
    }
    @NgModule({
        imports: [
            // ...
            DxListModule,
            DxFilterBuilderModule
        ],
        // ...
    })

---

To filter data, update the data source's [filter](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#filter) according to the built filter expression. The following code does this on a button click:

---
#####jQuery

    <!--JavaScript-->
    $(function () {
        // ...
        $("#button").dxButton({
            text: "Apply Filter",
            onClick: function () {
                var filter = $("#filterBuilder").dxFilterBuilder("instance").getFilterExpression();
                var listData = $("#list").dxList("instance").getDataSource();
                listData.filter(filter);
                listData.load();
            },
        });
    });

#####Angular

    <!--TypeScript-->
    import { 
        DxListModule, 
        DxFilterBuilderModule, 
        DxButtonModule,
        DxListComponent, 
        DxFilterBuilderComponent 
    } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxListComponent) list: DxListComponent;
        @ViewChild(DxFilterBuilderComponent) filterBuilder: DxFilterBuilderComponent;
        // ...
        buttonClick() {
            let listData = this.list.getDataSource();
            listData.filter(this.filterBuilder.getFilterExpression());
            listData.load();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxButtonModule,
            DxListModule,
            DxFilterBuilderModule
        ],
        // ...
    })

    <!--HTML-->
    <!-- ... -->
    <dx-button 
        text="Apply Filter"
        (onClick)="buttonClick()">
    </dx-button>   

---

#include common-demobutton-named with {
    name: "Filter Builder with Data Grid",
    url: "/Demos/WidgetsGallery/Demo/FilterBuilder/WithDataGrid/jQuery/Light/"
}
#include common-demobutton-named with {
    name: "Filter Builder with List",
    url: "/Demos/WidgetsGallery/Demo/FilterBuilder/WithList/jQuery/Light/"
}

#####See Also#####
- [Predefine Filter Values](/Documentation/Guide/Widgets/FilterBuilder/Predefine_Filter_Values/)
