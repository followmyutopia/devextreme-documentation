<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Server operations<!--/d-->
===========================================================================
<!--default-->'auto'<!--/default-->
<!--type-->string | boolean | object<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the operations that must be performed on the server side.
<!--/shortDescription-->

<!--fullDescription-->
Data that you use in your grid can be stored on the client side or come from a remote server. In many cases, manipulating data on a server enhances grid performance. However, your server might be falling short in performing certain operations. In that case, specify to perform them client side using the **remoteOperations** option.

Remote operations include basic (filtering, sorting and paging) and advanced operations (grouping and summary calculation). Their default settings differ. Whether basic operations are performed on the client or server side by default depends on the type of the [data source](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#dataSource). The use of an [array of objects](/Documentation/Guide/UI_Widgets/Data_Grid/Data_Binding/#Provide_Data/Using_an_Array_of_Objects), an [ArrayStore](/Documentation/Guide/UI_Widgets/Data_Grid/Data_Binding/#Provide_Data/Using_the_Data_Layer/Using_an_ArrayStore) or a [LocalStore](/Documentation/Guide/UI_Widgets/Data_Grid/Data_Binding/#Provide_Data/Using_the_Data_Layer/Using_a_LocalStore) forces **DataGrid** to perform basic operations locally. If you use an [ODataStore](/Documentation/Guide/UI_Widgets/Data_Grid/Data_Binding/#Provide_Data/Using_the_Data_Layer/Using_an_ODataStore) or a [CustomStore](/Documentation/Guide/UI_Widgets/Data_Grid/Data_Binding/#Provide_Data/Using_the_Data_Layer/Using_a_CustomStore), basic operations are performed remotely. Advanced operations are performed on the client side by default.

To control individual operations, assign a boolean value to a corresponding field of the **remoteOperations** object. To control all operations simultaneously, assign a boolean value directly to the **remoteOperations** option.

[note]When this option is given *false* or an object with field(s) set to *false*, corresponding operations are performed locally. Nevertheless, if your actual data is located on a remote server, it will be loaded from this server and saved in the cache after the widget is initialized. Later, the widget may reload data if it will be necessary, for example, when calculating groups or summary.

[note]Data operations in **DataGrid** have mutual dependencies. Therefore, disabling an individual operation does not guarantee that the widget will not query the server during this operation being performed. For example, **DataGrid** implements grouping by means of basic operations. Therefore, the combination of client-side grouping and server-side basic operations may produce queries to the server.
<!--/fullDescription-->