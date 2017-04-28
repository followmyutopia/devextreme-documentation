To bind the **TreeList** to an array, pass this array to the [dataSource](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#dataSource) option.

    <!--JavaScript-->
    var employees = [
        { id: '1', fullName: "John Heart", position: "CEO" }, 
        { id: '1_1', parentId: '1', fullName: "Samantha Bright",  position: "COO" }, 
        { id: '2_1', parentId: '2', fullName: "Robert Reagan", position: "CMO" }, 
        { id: '2', fullName: "Greta Sims", position: "HR Manager" }
    ];

    $(function(){
        $("#treeListContainer").dxTreeList({
            dataSource: employees
        });
    });

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_List/LocalDataPlainStructure/jQuery/Light/" class="button orange small fix-width-155" target="_blank">View Demo</a>

If objects in the array need to be processed (sorted or filtered), you can create a [Query](/Documentation/Guide/Data_Layer/Data_Layer/#Query_Concept). For example, in the following code, a Query sorts objects in the `employees` array in the descending order by the `fullName` field and filters out objects without a `position` containing *'CO'*.

    <!--JavaScript-->
    var books = [
        { id: '1', parentId: '1', fullName: "Samantha Bright",  position: "COO" },
        // ...
    ];

    $(function(){
        $("#treeListContainer").dxTreeList({
            dataSource: DevExpress.data.query(employees)
                            .filter("position", "contains", "CO")
                            .sortBy("fullName", true)
                            .toArray()
        });
    });

#####See Also#####
- [Data Layer - Query Concept](/Documentation/Guide/Data_Layer/Data_Layer/#Query_Concept)
- [TreeList | Data Binding - ArrayStore](/Documentation/Guide/Widgets/TreeList/Data_Binding/Simple_Array/ArrayStore/)

[tags]treeList, data binding, provide data, array, process data, query