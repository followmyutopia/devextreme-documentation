<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->Object<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the list of entities to be accessed with the ODataContext.
<!--/shortDescription-->

<!--fullDescription-->
The object passed to this option should contain Fields whose names equal the corresponding entity names. The ODataContext will create an ODataStore instance for each entity. Therefore, each of these properties takes on an [ODataStore configuration](/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/) object.

    <!--JavaScript-->
    var context = new DevExpress.data.ODataContext({
        url: "http://www.example.com/Northwind.svc",
        entities: {
            Categories: { 
                key: "CategoryID", 
                keyType: "Int32" 
            },
            MyCustomers: { 
                name: "Customers",
                key: "CustomerID", 
                keyType: "String" 
            }
        }
    });
<!--/fullDescription-->