===================================================================
===================================================================

<!--shortDescription-->
Gets the selected rows' data objects.
<!--/shortDescription-->

<!--paramName1-->mode<!--/paramName1-->
<!--paramType1-->String<!--/paramType1-->
<!--paramDescription1-->
*"all"*, *"excludeRecursive"*, or *"leavesOnly"*.
<!--/paramDescription1-->

<!--returnType-->Array<any><!--/returnType-->
<!--returnDescription-->
The selected rows' data objects.
<!--/returnDescription-->

<!--fullDescription-->
Below is an example of a **TreeList** with several selected rows:

![Selection in the DevExtreme TreeList widget](/Content/images/doc/19_1/treelist/getselectedrowkeys.png)

The **getSelectedRowsData(mode)** method called for this **TreeList** returns different results depending on the **mode** argument:

- *"all"*        
Returns all the selected rows' data objects.

        getSelectedRowsData("all") // returns data objects with the following keys: 2, 5, 8, 9, 6, 10, and 4

- *"excludeRecursive"*        
Excludes recursively selected rows' data objects.

        getSelectedRowsData("excludeRecursive") // returns data objects with the following keys: 2, 6, 10, and 4

- *"leavesOnly"*          
Returns only leaves' data objects.

        getSelectedRowsData("leavesOnly") // returns data objects with the following keys: 8, 9, 6, 10, and 4

[note][Calculated values](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#calculateCellValue) cannot be obtained because this method gets data objects from the data source.

#####See Also#####
#include common-link-callmethods
- [getSelectedRowKeys(mode)](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#getSelectedRowKeysmode)
<!--/fullDescription-->