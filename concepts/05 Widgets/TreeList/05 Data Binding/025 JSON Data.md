To bind the **TreeList** to data in the JSON format, assign a URL leading to data to the [dataSource](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/#dataSource) option.  

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            dataSource: "https://jsonplaceholder.typicode.com/posts"
        });
    });

##### Angular

    <!--HTML-->
    <dx-tree-list
        dataSource="http://www.example.com/dataservices/data.json">
    </dx-tree-list>

---

Note that you can also use a JSONP callback parameter supported by [jQuery.ajax()](http://api.jquery.com/jQuery.ajax/).

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            dataSource: "http://www.example.com/dataservices/jsonpdata?callback=?"
        });
    });

##### Angular

    <!--HTML-->
    <dx-tree-list
        dataSource="http://www.example.com/dataservices/jsonpdata?callback=?">
    </dx-tree-list>

---

If you need to process data after obtaining it, implement the [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/). For details, see the [Custom Sources](/Documentation/Guide/Widgets/TreeList/Data_Binding/Custom_Sources/) topic.

#####See Also#####
- [TreeList - Access the DataSource](/Documentation/Guide/Widgets/TreeList/Data_Binding/Access_the_DataSource/)
- [TreeList Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_List/LocalDataPlainStructure/jQuery/Light/)
- [TreeList API Reference](/Documentation/ApiReference/UI_Widgets/dxTreeList/)

[tags]treeList, data binding, json, jsonp, callback parameter