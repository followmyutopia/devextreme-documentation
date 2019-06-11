<!--id-->dxTreeList.getSelectedRowKeys(mode)<!--/id-->
===================================================================
===================================================================

<!--shortDescription-->
Gets the selected rows' keys.
<!--/shortDescription-->

<!--paramName1-->mode<!--/paramName1-->
<!--paramType1-->String<!--/paramType1-->
<!--paramDescription1-->
*"all"*, *"excludeRecursive"*, or *"leavesOnly"*.
<!--/paramDescription1-->

<!--returnType-->Array<any><!--/returnType-->
<!--returnDescription-->
The selected rows' keys.
<!--/returnDescription-->

<!--fullDescription-->
Below is an example of a **TreeList** with several selected rows:

![Selection in the DevExtreme TreeList widget](/Content/images/doc/19_1/treelist/getselectedrowkeys.png)

The **getSelectedRowKeys(mode)** method called for this **TreeList** returns different results depending on the **mode** argument:

- *"all"*        
Returns all the selected rows' keys.

        getSelectedRowKeys("all") // returns [2, 5, 8, 9, 6, 10, 4]

- *"excludeRecursive"*        
Excludes recursively selected rows' keys.

        getSelectedRowKeys("excludeRecursive") // returns [2, 6, 10, 4]

- *"leavesOnly"*          
Returns only leaves' keys.

        getSelectedRowKeys("leavesOnly") // returns [8, 9, 6, 10, 4]

#####See Also#####
#include common-link-callmethods
- [getSelectedRowsData(mode)](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#getSelectedRowsDatamode)
<!--/fullDescription-->