===========================================================================
<!--acceptValues-->'String' | 'Int32' | 'Int64' | 'Guid' | 'Boolean' | 'Single' | 'Decimal'<!--/acceptValues-->
<!--type-->String | Object<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the type of the key property or properties.
<!--/shortDescription-->

<!--fullDescription-->
Set this option if you do not need to [filter data](/Documentation/Guide/Data_Layer/Data_Layer/#Reading_Data/Filtering). Otherwise, use the [fieldTypes](/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#fieldTypes) option. In the following code, the `Product_ID` and `Product_Code` key properties are `Guid` and `Int32`, respectively:

---
#####jQuery

    <!--JavaScript-->
    var store = new DevExpress.data.ODataStore({
        url: "https://js.devexpress.com/Demos/DevAV/odata/Products",
        key: [ "Product_ID", "Product_Code" ],
        keyType: {
            Product_ID: "Guid",
            Product_Code: "Int32"
        }
    });

#####Angular

    <!--TypeScript-->
    import ODataStore from "devextreme/data/odata/store";
    // ...
    export class AppComponent {
        store: ODataStore;
        constructor() {
            this.store = new ODataStore({
                url: "https://js.devexpress.com/Demos/DevAV/odata/Products",
                key: [ "Product_ID", "Product_Code" ],
                keyType: {
                    Product_ID: "Guid",
                    Product_Code: "Int32"
                }
            });
        };
    }

---

When specifying this option in an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), use the `EdmType` enum that has the following values: `Int32`, `Int64`, `Guid`, `String`, `Boolean`, `Single` and `Decimal`.
<!--/fullDescription-->