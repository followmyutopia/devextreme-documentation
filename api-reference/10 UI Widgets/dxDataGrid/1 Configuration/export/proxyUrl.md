<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the URL of the server-side proxy that streams the resulting file to the end user to enable export in **IE9** and **Safari** browsers.
<!--/shortDescription-->

<!--fullDescription-->
Generally, exporting is performed using client-side API in browsers. However, the **IE9** and **Safari** (integrated in Mac OS) browsers do not implement an API for saving files. In this instance, the **DataGrid** widget can POST the content to a server-side proxy, which will stream the file back to the end user. To enable this functionality, set the **export**.**proxyUrl** option to the proxy, which will stream the file to the end user. When implementing the proxy, take the following information into account. 

- Your proxy will receive a POST request with the following parameters in the request body: **fileName**, **contentType** (the MIME type of the file) and **base64** (the base-64 encoded file content).
- The proxy should return the decoded file with the "Content-Disposition" header set to *attachment; filename="<fileName.xslx>"*.

The sample proxy implementation for ASPx-based and PHP-based web servers is presented in the [Set up a Server-Side Proxy](/Documentation/Guide/Widgets/DataGrid/Client-Side_Exporting/#Set_up_Server-side_Proxy) article.
<!--/fullDescription-->