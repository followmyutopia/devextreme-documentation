===========================================================================
<!--type-->Boolean<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether the **DataSource** requests the total count of data items in the storage.
<!--/shortDescription-->

<!--fullDescription-->
If this option is set to **true**, the Promise that the [load()](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load) method returns is resolved with a second argument that contains the **totalCount** field:

    <!--JavaScript-->
    var ds = new DevExpress.data.DataSource({
        // ...
        requireTotalCount: true
    });

    ds.load()
        .done(function (data, extra) {
            // "data" contains the loaded data
            // "extra" contains the "totalCount" field
        });

<!--/fullDescription-->