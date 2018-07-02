DevExtreme provides the [DevExtreme-PHP-Data](https://github.com/DevExpress/DevExtreme-PHP-Data/blob/master/README.md) extension that implements data processing on a PHP server according to the protocol the **TagBox** uses. To access the server from the client, configure the [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/) as described in the [Custom Sources](/Documentation/Guide/Widgets/TagBox/Data_Binding/Custom_Sources/) article or use the [createStore](https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/docs/client-side-with-jquery.md#api-reference) method. This method is a part of the [DevExtreme.AspNet.Data](https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/README.md) extension. The following code shows how to use this method.

    <!--JavaScript-->
    $(function() {
        var serviceUrl = "http://url/to/my/service.php";
        $("#tagBoxContainer").dxTagBox({
            dataSource: DevExpress.data.AspNet.createStore({
                key: "ID",
                loadUrl: serviceUrl,
                insertUrl: serviceUrl
            }),
            // ...
        })
    });
