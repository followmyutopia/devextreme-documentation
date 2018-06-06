===================================================================
===================================================================

<!--shortDescription-->
Gets a link to an entity with a specific key.
<!--/shortDescription-->

<!--paramName1-->entityAlias<!--/paramName1-->
<!--paramType1-->String<!--/paramType1-->
<!--paramDescription1-->
The alias of the entity's collection.
<!--/paramDescription1-->

<!--paramName2-->key<!--/paramName2-->
<!--paramType2-->Object|String|Number<!--/paramType2-->
<!--paramDescription2-->
The entity's key value.
<!--/paramDescription2-->

<!--returnType-->Object<!--/returnType-->
<!--returnDescription-->
An object that contains the link to the entity.
<!--/returnDescription-->

<!--fullDescription-->
Call this method within the [insert()](/Documentation/ApiReference/Data_Layer/ODataStore/Methods/#insertvalues) or the [update()](/Documentation/ApiReference/Data_Layer/ODataStore/Methods/#updatekey_values) method to change the relationships between entities. The following code links the order with ID `1` to the customer with ID `2`:

---
#####jQuery

    <!--JavaScript-->
    var context = new DevExpress.data.ODataContext({
        url: "https://js.devexpress.com/Demos/DevAV/odata/",
        entities: { 
            Orders: {  
                key: "Order_ID", 
                keyType: "Int32" 
            },
            Customers: { 
                key: "Customer_ID", 
                keyType: "Int32" 
            }
        } 
    });  
    context.Orders.update(1, {
        Customer: context.objectLink("Customers", 2) 
    });

#####Angular

    <!--TypeScript-->
    import ODataContext from "devextreme/data/odata/context";
    // ...
    export class AppComponent {
        context: ODataContext;
        constructor() {
            this.context = new ODataContext({
                url: "https://js.devexpress.com/Demos/DevAV/odata/",
                entities: { 
                    Orders: {  
                        key: "Order_ID", 
                        keyType: "Int32" 
                    },
                    Customers: { 
                        key: "Customer_ID", 
                        keyType: "Int32" 
                    }
                }
            });
            this.context.Orders.update(1, {
                Customer: context.objectLink("Customers", 2) 
            });
        }
    }

---

#####See Also#####
- [Associations](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Data_Source_Examples_OData_Associations)
<!--/fullDescription-->
