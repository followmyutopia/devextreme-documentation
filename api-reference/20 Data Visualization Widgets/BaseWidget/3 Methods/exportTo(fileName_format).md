<!--id-->BaseWidget.exportTo(fileName, format)<!--/id-->
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
The file's format. One of 'PNG', 'PDF', 'JPEG', 'SVG' and 'GIF'.  
PNG is used if the browser does not support exporting to the specified format.
<!--/paramDescription2-->

<!--fullDescription-->
[note]**Safari on Mac OS** does not implement an API for saving files, but you can [set up a server-side proxy](/Documentation/Guide/Widgets/Chart/Client-Side_Exporting_and_Printing/#Set_Up_a_Server-Side_Proxy).

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Charts/ExportAndPrintingAPI/jQuery/Light/"
}

#####See Also#####
- [DevExpress.viz.exportWidgets(widgetInstances, options)](/Documentation/ApiReference/Common/utils/viz/Methods/#exportWidgetswidgetInstances_options)
- [export]({basewidgetpath}/Configuration/export)
- [print()]({basewidgetpath}/Methods#print)
#include common-link-callmethods
<!--/fullDescription-->