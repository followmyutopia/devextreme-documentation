Use the [addRow()](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#addRow) method to add an empty row.

    <!--JavaScript-->
    $("#treeListContainer").dxTreeList("addRow");

You can specify initial values for a newly added row in the [onInitNewRow](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#onInitNewRow) event handler.

    <!--JavaScript-->
    $(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            columns: [{
                dataField: "Hire_Date",
                dataType: "date"
            },
                // ...
            ],
            onInitNewRow: function(e) {
                e.data.Hire_Date = new Date();
            }
        });
    });

#####See Also#####
- **Call Methods**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Call_Methods/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/)