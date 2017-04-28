If you want to extend the functionality of a JavaScript array, place it into an [ArrayStore](/Documentation/ApiReference/Data_Layer/ArrayStore/). It provides an interface for loading and editing data, and allows you to handle data-related events.

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            dataSource: new DevExpress.data.ArrayStore({
                data: employees,
                onLoaded: function () {
                    // Event handling commands go here
                }
            })
        });
    });

Data kept in the **ArrayStore** can be processed in the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/). For example, the **DataSource** can sort data.

    <!--JavaScript-->
    var employees = [
        { id: '1', fullName: "John Heart", position: "CEO" }, 
        { id: '1_1', parentId: '1', fullName: "Samantha Bright",  position: "COO" }, 
        { id: '1_2', parentId: '1', fullName: "Arthur Miller",  position:"CTO" },
        { id: '2_1', parentId: '2', fullName: "Robert Reagan", position: "CMO" }, 
        { id: '2', fullName: "Greta Sims", position: "HR Manager" }
    ];
    
    $(function() {
        $("#treeListContainer").dxTreeList({
            dataSource: new DevExpress.data.DataSource({
                store: employees,
                sort: { getter: "fullName", asc: true }
            })
        });
    });

[note]Even if you have [passed a JavaScript array](/Documentation/Guide/Widgets/TreeList/Data_Binding/Simple_Array/Array_Only/) to the **dataSource** option, the **TreeList** automatically places it into an **ArrayStore** wrapped in the **DataSource** that you can get using the [getDataSource()](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#getDataSource) method.

#####See Also#####
- [Data Layer - What Are Stores](/Documentation/Guide/Data_Layer/Data_Layer/#Data_Layer_Data_Layer_Creating_DataSource_What_Are_Stores)
- [Data Layer - DataSource Examples | In-memory Data](/Documentation/Guide/Data_Layer/Data_Source_Examples/#In-memory_Data)

[tags]treeList, data binding, provide data, ArrayStore, DataSource, process data