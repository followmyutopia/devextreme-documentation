===================================================================
===================================================================

<!--shortDescription-->
Exports the widget.
<!--/shortDescription-->

<!--paramName1-->fileName<!--/paramName1-->
<!--paramType1-->String<!--/paramType1-->
<!--paramDescription1-->
The name of the file to which the widget is about to be exported.
<!--/paramDescription1-->

<!--paramName2-->format<!--/paramName2-->
<!--paramType2-->String<!--/paramType2-->
<!--paramDescription2-->
The file's format.  
Possible values: 'PNG' | 'PDF' | 'JPEG' | 'SVG' | 'GIF'
<!--/paramDescription2-->

<!--fullDescription-->
[note]**IE9** and **Safari on Mac OS** do not implement an API for saving files. Therefore, exporting in these browsers requires setting up a server-side proxy. For details, refer to the **export** | [proxyUrl]({basewidgetpath}/Configuration/export#proxyUrl) option description.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Charts/ExportAndPrintingAPI/jQuery/Light/"
}

#####See Also#####
- [DevExpress.viz.exportFromMarkup(markup, options)](/Documentation/ApiReference/Common/utils/viz/Methods/#exportFromMarkupmarkup_options)
- [export]({basewidgetpath}/Configuration/export)
- [print()]({basewidgetpath}/Methods#print)
#include common-link-callmethods
<!--/fullDescription-->