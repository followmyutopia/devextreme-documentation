---
id: dxDiagram.Options.export.proxyUrl
type: String
default: undefined
---
---
##### shortDescription
Specifies the URL of the server-side proxy that streams the resulting file and enables export in **Safari**.

---
Safari does not implement an API for saving files. In this case, the **Diagram** widget can POST the content to a server-side proxy which streams the file back to the user. To enable this functionality, set the **export**.**proxyUrl** option to the proxy.

[note]

- Your proxy receives a POST request with the following parameters in the request body: **fileName**, **contentType** (the MIME type of the file) and **base64** (the base-64 encoded file content).
- The proxy should return the decoded file with the "Content-Disposition" header set to *attachment; filename="<fileName.xslx>"*.

[/note]

The sample proxy implementation for ASPx-based and PHP-based web servers is presented in the [Set up a Server-Side Proxy](/Documentation/Guide/Widgets/DataGrid/Client-Side_Exporting/#Set_Up_a_Server-Side_Proxy) article.