<!--id-->globalConfig.oDataFilterToLower<!--/id-->
===========================================================================
<!--default-->true<!--/default-->
<!--type-->Boolean<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether to convert string values to lowercase in filter and search requests to OData services. Applies to the following operations: *"startswith"*, *"endswith"*, *"contains"*, and *"notcontains"*.
<!--/shortDescription-->

<!--fullDescription-->
When the **oDataFilterToLower** option is **true**, the filter expression sent to the server contains a `tolower()` function call and a lowercase filter value. 

    DevExpress.config({
        oDataFilterToLower: true
    });
    // ===== or when using modules =====
    import config from "devextreme/core/config";

    config({
        oDataFilterToLower: true
    })

    // The filter expression in the request looks like the following:
    // https://...?filter=startswith(tolower(Product_Name), 'tel')

You can use the **filterToLower** option in an individual [ODataStore](/Documentation/ApiReference/Data_Layer/ODataStore/Configuration/#filterToLower) or [ODataContext](/Documentation/ApiReference/Data_Layer/ODataContext/Configuration/#filterToLower) to control the same functionality.
<!--/fullDescription-->