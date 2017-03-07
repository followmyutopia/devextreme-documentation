<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--module--><a href="/Documentation/16_2/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_data_odata_context">data/odata/context</a><!--/module-->
<!--export-->default<!--/export-->
<!--type-->object<!--/type-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
Provides access to the entire [OData](http://www.odata.org) service.
<!--/shortDescription-->

<!--fullDescription-->
The ODataContext object creates several [ODataStore](/Documentation/ApiReference/Data_Layer/ODataStore/) instances inside. Each of these instances accesses a separate entity. To create an ODataContext instance, pass the configuration object to the ODataContext constructor. Specify the service URL and the list of entities you need to access.

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

If you need to specify a composite key for an entity, assign an array of key expressions to the [key](/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#key) option. In this case, the [keyType](/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#keyType) option takes on an object providing corresponding properties for each key expression, as demonstrated in the following example.

    <!--JavaScript-->
    var context = new DevExpress.data.ODataContext({
        url: "http://www.example.com/Northwind.svc",
        entities: {
            Products: {
                key: [ "ProductID", "ProductCode" ],
                keyType: {
                    ProductID: "Guid",
                    ProductCode: "Int32" 
                }
            }
        }
    });


The ODataContext object also includes the [get()](/Documentation/ApiReference/Data_Layer/ODataContext/Methods/#getoperationName_params) and [invoke()](/Documentation/ApiReference/Data_Layer/ODataContext/Methods/#invokeoperationName_params_httpMethod) methods used to invoke service operations, and the [objectLink()](/Documentation/ApiReference/Data_Layer/ODataContext/Methods/#objectLinkentityAlias_key) helper method to [link entities](/Documentation/Guide/Data_Layer/Data_Source_Examples/#Data_Source_Examples_OData_Associations).

For more information on working with OData, refer to the [Data Source Examples](/Documentation/Guide/Data_Layer/Data_Source_Examples/#OData) article.
<!--/fullDescription-->