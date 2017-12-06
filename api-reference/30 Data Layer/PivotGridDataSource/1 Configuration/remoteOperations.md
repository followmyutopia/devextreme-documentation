===========================================================================
<!--default-->false<!--/default-->
<!--type-->Boolean<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether or not all the operations (filtering, grouping and summary calculation) are performed remotely.
<!--/shortDescription-->

<!--fullDescription-->
Note that you cannot use the [selector](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#selector) option along with remote operations, because the **selector** function is ignored on the server side. Instead of using **selector**, create a calculated data field on your web server, and then bind the pivot grid field directly to it.

    <!--JavaScript-->
    var pivotGridDataSource = {
        remoteOperations: true,
        fields: [
            // ... 
            {
                dataField: "yourCalculatedField",
                area: "row"
            }
        ]
    }

#####See Also#####
- [PivotGrid - Configure Custom Store for Local and Remote Operations](/Documentation/Guide/Widgets/PivotGrid/Use_CustomStore/#Use_CustomStore)
<!--/fullDescription-->