Bind the **TagBox** to an array by passing it to the [dataSource](/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#dataSource) option. The array may contain primitive values...

---
#####jQuery

    <!--JavaScript-->var products = ["HD Video Player", "SuperHD Video Player", "SuperPlasma 50", "SuperLED 50"];

    $(function() {
        $("#tagBoxContainer").dxTagBox({
            dataSource: products
        });
    });

#####Angular

    <!--TypeScript-->
    import { DxTagBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        products = [
            "HD Video Player",
            "SuperHD Video Player",
            "SuperPlasma 50",
            "SuperLED 50"
        ];
    }
    @NgModule({
         imports: [
             // ...
             DxTagBoxModule
         ],
         // ...
     })

    <!--HTML-->
    <dx-tag-box
        [dataSource]="products">
    </dx-tag-box>

---

... or objects.

---
#####jQuery

    <!--JavaScript-->var products = [
        { name: "HD Video Player", price: 100 },
        { name: "SuperHD Video Player", price: 420 },
        { name: "SuperPlasma 50", price: 1500 },
        { name: "SuperLED 50", price: 200 }
    ];

    $(function() {
        $("#tagBoxContainer").dxTagBox({
            dataSource: products,
            valueExpr: 'price',
            displayExpr: 'name'
        });
    });

#####Angular

    <!--TypeScript-->
    import { DxTagBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        products =  [
            { name: "HD Video Player", price: 100 },
            { name: "SuperHD Video Player", price: 420 },
            { name: "SuperPlasma 50", price: 1500 },
            { name: "SuperLED 50", price: 200 }
        ];
    }
    @NgModule({
         imports: [
             // ...
             DxTagBoxModule
         ],
         // ...
     })

    <!--HTML-->
    <dx-tag-box
        [dataSource]="products"
        valueExpr="price"
        displayExpr="name">
    </dx-tag-box>

---

You can create a [Query](/Documentation/Guide/Data_Layer/Data_Layer/#Query_Concept) if objects in an array need to be processed (sorted, filtered, grouped, etc.). For example, in the following code, a Query sorts objects in the `products` array by the `price` field in descending order:

---
#####jQuery

    <!--JavaScript-->var products = [
        { name: "HD Video Player", price: 100 },
        // ...
    ];

    $(function() {
        $("#tagBoxContainer").dxTagBox({
            dataSource: DevExpress.data.query(products)
                            .sortBy("price", true)
                            .toArray(),
            valueExpr: 'price',
            displayExpr: 'name'
        });
    });

#####Angular

    <!--TypeScript-->
    import query from "devextreme/data/query";
    import { DxTagBoxModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        products = [
            { name: "HD Video Player", price: 100 },
            // ...
        ];
        getSortedProducts () {
            return query(this.products)
                    .sortBy("price", true)
                    .toArray();
        }
    }
    @NgModule({
         imports: [
             // ...
             DxTagBoxModule
         ],
         // ...
     })

    <!--HTML-->
    <dx-tag-box ...
        valueExpr="price"
        displayExpr="name"
        dataSource="getSortedProducts()">
    </dx-tag-box>

---

#####See Also#####
- [Data Layer - Query Concept](/Documentation/Guide/Data_Layer/Data_Layer/#Query_Concept)
- [Bind to the ArrayStore](/Documentation/Guide/Widgets/TagBox/Data_Binding/Simple_Array/ArrayStore/)
- [Access the DataSource](/Documentation/Guide/Widgets/TagBox/Data_Binding/Access_the_DataSource/)
- [TagBox Demos](/Demos/WidgetsGallery/Demo/Tag_Box/Overview/jQuery/Light/)

[tags]TagBox, data binding, provide data, array, process data, query