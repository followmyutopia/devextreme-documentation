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
A required format.  
Accepted Values: 'PNG' | 'PDF' | 'JPEG' | 'SVG' | 'GIF'
<!--/paramDescription2-->

<!--fullDescription-->
[note]**IE9** and **Safari on Mac OS** do not implement an API for saving files. Therefore, exporting in these browsers requires setting up a server-side proxy. For details, refer to the **export** | [proxyUrl]({basewidgetpath}/Configuration/export#proxyUrl) option description.

#####See Also#####
- [DevExpress.viz.exportFromMarkup(markup, options)](/Documentation/ApiReference/Common/utils/viz/Methods/#exportFromMarkupmarkup_options)
- [export]({basewidgetpath}/Configuration/export)
- [print()]({basewidgetpath}/Methods#print)
#include common-link-callmethods
<!--/fullDescription-->