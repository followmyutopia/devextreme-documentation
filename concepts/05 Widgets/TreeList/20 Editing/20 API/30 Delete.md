Call the [deleteRow(rowIndex)](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#deleteRowrowIndex) method to delete a specific row from the data source. This method invokes a confirmation dialog that allows a user to cancel deletion. The following code hides this dialog, thus a row is instantly deleted from the data source:

    <!--JavaScript-->
    $(function() {
        var treeList = $("#treeListContainer").dxTreeList({
            // ...
            editing: {
                mode: "row", 
                allowDeleting: true,
                texts: {
                    // Hides the confirmation dialog
                    confirmDeleteMessage: null
                }
            }
        }).dxTreeList("instance");

        $("#deleteRowButton").dxButton({
            text: "Delete Row",
            onClick: function() {
                // Deletes the second row
                treeList.deleteRow(1);
            }
        });
    });

Note that in the [batch mode](/Documentation/Guide/Widgets/TreeList/Editing/#User_Interaction/Batch_Mode) a row is only marked as deleted. To save changes, call the [saveEditData()](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#saveEditData) method. Calling the [undeleteRow(rowIndex)](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#undeleteRowrowIndex) method cancels row deletion.

    <!--JavaScript-->
    $("#treeListContainer").dxTreeList("undeleteRow", 1);

#####See Also#####
- **Call Methods**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Call_Methods/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/)
