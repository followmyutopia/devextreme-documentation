When adapting to a small container or screen, the **TreeList** can hide columns. To enable this feature, set the [columnHidingEnabled](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#columnHidingEnabled) to *true*. Set the column's [allowHiding](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#allowHiding) option to *false* if it should never be hidden. Columns have hiding priorities - zero-based indexes that determine the order in which they are hidden. These indexes ascend from right to left by default, which means that the rightmost column is always at risk of being hidden. Use the [hidingPriority](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#hidingPriority) option to specify a custom hiding priority and cancel the default priorities.

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            columnHidingEnabled: true,
            columns: [{
                // ...
                allowHiding: false // an essential column
            }, {
                // ...
                hidingPriority: 2 // a valuable column
            }, {
                // ...
                hidingPriority: 1 // a not-so-valuable column 
            }, {
                // ...
                hidingPriority: 0 // a first-to-hide column
            }]
        });
    });

Data from hidden columns is still available in adaptive detail rows. A user can expand or collapse these rows by clicking the ellipsis buttons in the adaptive column.

![DevExtreme HTML5 JavaScript jQuery Knockout Angular TreeList Adaptability](/Content/images/doc/17_1/treelist/visual_elements/adaptive-column.png)

You can expand or collapse adaptive detail rows programmatically by calling the [expandAdaptiveDetailRow(key)](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#expandAdaptiveDetailRowkey) or [collapseAdaptiveDetailRow()](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#collapseAdaptiveDetailRow) method. Note that adaptive detail rows cannot be expanded simultaneously, therefore, calling the **expandAdaptiveDetailRow(key)** method collapses the previously expanded row. To check whether a specific row is expanded, call the [isAdaptiveDetailRowExpanded(key)](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#isAdaptiveDetailRowExpandedkey) method.

    <!--JavaScript-->var treeList = $("#treeListContainer").dxTreeList("instance");
    if (!treeList.isAdaptiveDetailRowExpanded(1)) {
        treeList.expandAdaptiveDetailRow(1);
    }

All adaptive detail rows contain the [DevExtreme Form widget](/Documentation/ApiReference/UI_Widgets/dxForm/), so you can customize a row by changing the [options of this widget](/Documentation/ApiReference/UI_Widgets/dxForm/Configuration/). To access them, implement the [onAdaptiveDetailRowPreparing](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onAdaptiveDetailRowPreparing) event handler. For example, the following code marks the form item whose data field is *"OrderID"* as required:

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            onAdaptiveDetailRowPreparing: function (e) {
                for (let formItem of e.formOptions.items) {
                    if (formItem.dataField == "OrderID") {
                        formItem.isRequired = true;
                    }
                }
            }
        });
    });

#####See Also#####
- [Column Fixing]()
- [Column Chooser]()
