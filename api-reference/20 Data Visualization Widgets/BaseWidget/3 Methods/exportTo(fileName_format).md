<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
API for exporting
<!--/d-->
<!--p1d-->File name for result file.<!--/p1d-->
<!--p2d-->Exporting format.<!--/p2d-->
===================================================================
===================================================================

<!--shortDescription-->
Exports the widget into a document with a specified name and format.
<!--/shortDescription-->

<!--paramName1-->fileName<!--/paramName1-->
<!--paramType1-->string<!--/paramType1-->
<!--paramDescription1-->
The name of a destination file.
<!--/paramDescription1-->

<!--paramName2-->format<!--/paramName2-->
<!--paramType2-->string<!--/paramType2-->
<!--paramDescription2-->
A required format.<br/>
Accepted Values: 'PNG' | 'PDF' | 'JPEG' | 'SVG' | 'GIF'
<!--/paramDescription2-->

<!--fullDescription-->
[note]**IE9** and **Safari on Mac OS** do not implement an API for saving files. Therefore, exporting in these browsers requires setting up a server-side proxy. For details, refer to the **export** | [proxyUrl]({basewidgetpath}/Configuration/export#proxyUrl) option description.

#####See Also#####
- [DevExpress.viz.exportFromMarkup(markup, options)](/Documentation/ApiReference/Common/utils/viz/Methods/#exportFromMarkupmarkup_options) - exports the widget using its SVG markup.
- [export]({basewidgetpath}/Configuration/export) - configures client-side export and printing.
- [print()]({basewidgetpath}/Methods#print) - opens the browser's print window.
<!--/fullDescription-->