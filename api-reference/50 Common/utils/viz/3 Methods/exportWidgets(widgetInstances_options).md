<!--id-->viz.exportWidgets(widgetInstances, options)<!--/id-->
===================================================================
<!--module-->viz/export<!--/module-->
<!--export-->exportWidgets<!--/export-->
===================================================================

<!--shortDescription-->
Exports one or several widgets.
<!--/shortDescription-->

<!--paramName1-->widgetInstances<!--/paramName1-->
<!--paramType1-->Array<Array<DOMComponent>><!--/paramType1-->
<!--paramDescription1-->
An array with the following format:

    [
        [ widgetInstance0_1, widgetInstance0_2, ..., widgetInstance0_N ],
        [ widgetInstance1_1, widgetInstance1_2, ..., widgetInstance1_M ],
        ...
        [ widgetInstanceP_1, widgetInstanceP_2, ..., widgetInstanceP_R ]
    ]

Each nested array contains widget instances that should be in the same row in the exported document.
<!--/paramDescription1-->

<!--paramName2-->options<!--/paramName2-->
<!--paramType2-->Object<!--/paramType2-->
<!--paramDescription2-->
Export options.
<!--/paramDescription2-->
<!--paramName2_field1-->fileName<!--/paramName2_field1-->
<!--paramType2_field1-->String<!--/paramType2_field1-->
<!--paramDescription2_field1-->
The name of the file to be saved.
<!--/paramDescription2_field1-->
<!--paramName2_field2-->format<!--/paramName2_field2-->
<!--paramType2_field2-->'GIF' | 'JPEG' | 'PDF' | 'PNG' | 'SVG'<!--/paramType2_field2-->
<!--paramDescription2_field2-->
The file's format. PNG is used if the browser cannot export the file in the specified format.
<!--/paramDescription2_field2-->
<!--paramName2_field3-->backgroundColor<!--/paramName2_field3-->
<!--paramType2_field3-->String<!--/paramType2_field3-->
<!--paramDescription2_field3-->
The background color.
<!--/paramDescription2_field3-->
<!--paramName2_field4-->margin<!--/paramName2_field4-->
<!--paramType2_field4-->Number<!--/paramType2_field4-->
<!--paramDescription2_field4-->
Margins to be added to each side of the document; measured in pixels.
<!--/paramDescription2_field4-->
<!--paramName2_field5-->gridLayout<!--/paramName2_field5-->
<!--paramType2_field5-->Boolean<!--/paramType2_field5-->
<!--paramDescription2_field5-->
If **true**, widgets are arranged in columns with equal widths (the width of the widest widget).     
If **false**, widgets are placed next to each other in rows (default).      
In any case, each row has the height of the highest widget in it. 
<!--/paramDescription2_field5-->
<!--paramName2_field6-->verticalAlignment<!--/paramName2_field6-->
<!--paramType2_field6-->'bottom' | 'center' | 'top'<!--/paramType2_field6-->
<!--paramDescription2_field6-->
Vertically aligns widgets in their rows.
<!--/paramDescription2_field6-->
<!--paramName2_field7-->horizontalAlignment<!--/paramName2_field7-->
<!--paramType2_field7-->'center' | 'left' | 'right'<!--/paramType2_field7-->
<!--paramDescription2_field7-->
Horizontally aligns widgets in their columns. Applies only when **gridLayout** is **true**.
<!--/paramDescription2_field7-->
<!--paramName2_field8-->proxyUrl<!--/paramName2_field8-->
<!--paramType2_field8-->String<!--/paramType2_field8-->
<!--paramDescription2_field8-->
The URL of a server-side proxy required for export in Safari on Mac OS. See [proxyUrl](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/export/#proxyUrl) for more details.
<!--/paramDescription2_field8-->
<!--paramName2_field9-->onExporting<!--/paramName2_field9-->
<!--paramType2_field9-->function()<!--/paramType2_field9-->
<!--paramDescription2_field9-->
Allows you to request export details and prevent export.      
The parameter contains the following fields:

- **fileName** - the name of the file to be saved.
- **format** - the file's format. One of 'PNG', 'PDF', 'JPEG', 'SVG' and 'GIF'.
- **cancel** - prevents export when assigned **true**.
<!--/paramDescription2_field9-->
<!--paramName2_field10-->onExported<!--/paramName2_field10-->
<!--paramType2_field10-->function()<!--/paramType2_field10-->
<!--paramDescription2_field10-->
Allows you to notify a user when the export is completed.
<!--/paramDescription2_field10-->
<!--paramName2_field11-->onFileSaving<!--/paramName2_field11-->
<!--paramType2_field11-->function()<!--/paramType2_field11-->
<!--paramDescription2_field11-->
Allows you to access exported data and/or prevent it from being saved to a file in the user's local storage.      
The parameter contains the following fields:

- **fileName** - the name of the file to be saved.
- **format** - the file's format. One of 'PNG', 'PDF', 'JPEG', 'SVG' and 'GIF'.
- **data** - exported data as a [BLOB](https://en.wikipedia.org/wiki/Binary_large_object).
- **cancel** - when assigned **true**, prevents the file from being saved.
<!--/paramDescription2_field11-->

<!--fullDescription-->
#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Charts/ExportSeveralCharts/jQuery/Light/"
}

#####See Also#####
- [exportTo(fileName, format)](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#exportTofileName_format)
<!--/fullDescription-->