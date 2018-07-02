Use the third-party [devextreme-query-mongodb](https://github.com/oliversturm/devextreme-query-mongodb/blob/master/README.md) extension to query data from MongoDB. This extension implements data processing on a server according to the protocol the **TagBox** uses. To access the server from the client, configure the [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/) as described in the [Custom Sources](/Documentation/Guide/Widgets/TagBox/Data_Binding/Custom_Sources/) article or use the [createStore](https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/docs/client-side-with-jquery.md#api-reference) method. This method is a part of the [DevExtreme.AspNet.Data](https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/README.md) extension. The following code shows how to use this method.

    <!--JavaScript-->
    $(function() {
        var serviceUrl = "http://url/to/my/service";
        $("#tagBoxContainer").dxTagBox({
            dataSource: DevExpress.data.AspNet.createStore({
                key: "ID",
                loadUrl: serviceUrl,
                insertUrl: serviceUrl
            }),
            // ...
        })
    });

See [this series of blog posts](https://community.devexpress.com/blogs/oliver/archive/2017/03/24/devextreme-real-world-patterns.aspx) for more information on using DevExterme widgets in applications with MongoDB.