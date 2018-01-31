===================================================================
<!--module-->viz/export<!--/module-->
<!--export-->exportFromMarkup<!--/export-->
===================================================================

<!--shortDescription-->
Allows you to export widgets using their SVG markup.
<!--/shortDescription-->

<!--paramName1-->markup<!--/paramName1-->
<!--paramType1-->String<!--/paramType1-->
<!--paramDescription1-->
The SVG markup of the widgets you need to export.
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
<!--paramType2_field2-->String<!--/paramType2_field2-->
<!--paramDescription2_field2-->
The file's format. One of 'PNG', 'PDF', 'JPEG', 'SVG' and 'GIF'.
<!--/paramDescription2_field2-->
<!--paramName2_field3-->backgroundColor<!--/paramName2_field3-->
<!--paramType2_field3-->String<!--/paramType2_field3-->
<!--paramDescription2_field3-->
The color that fills transparent regions.
<!--/paramDescription2_field3-->
<!--paramName2_field4-->proxyUrl<!--/paramName2_field4-->
<!--paramType2_field4-->String<!--/paramType2_field4-->
<!--paramDescription2_field4-->
The URL of a server-side proxy required for export in IE9 and Safari on Mac OS. See [proxyUrl](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/export/#proxyUrl) for details.
<!--/paramDescription2_field4-->
<!--paramName2_field5-->width<!--/paramName2_field5-->
<!--paramType2_field5-->Number<!--/paramType2_field5-->
<!--paramDescription2_field5-->
The SVG block's width in pixels.
This field is <font color="red">required</font>.
<!--/paramDescription2_field5-->
<!--paramName2_field6-->height<!--/paramName2_field6-->
<!--paramType2_field6-->Number<!--/paramType2_field6-->
<!--paramDescription2_field6-->
The SVG block's height in pixels.
This field is <font color="red">required</font>.
<!--/paramDescription2_field6-->
<!--paramName2_field7-->onExporting<!--/paramName2_field7-->
<!--paramType2_field7-->function()<!--/paramType2_field7-->
<!--paramDescription2_field7-->
Allows you to request exporting details and prevent exporting.      
The parameter contains the following fields:

<div>
    <ul>
        <li>
            <b>fileName</b> - the name of the file to be saved.
        </li>
        <li>
            <b>format</b> - the file's format. One of 'PNG', 'PDF', 'JPEG', 'SVG' and 'GIF'.
        </li>
        <li>
            <b>cancel</b> - when assigned <b>true</b>, prevents exporting.
        </li>
    </ul>
</div>
<!--/paramDescription2_field7-->
<!--paramName2_field8-->onExported<!--/paramName2_field8-->
<!--paramType2_field8-->function()<!--/paramType2_field8-->
<!--paramDescription2_field8-->
Allows you to notify a user when exporting completes.
<!--/paramDescription2_field8-->
<!--paramName2_field9-->onFileSaving<!--/paramName2_field9-->
<!--paramType2_field9-->function()<!--/paramType2_field9-->
<!--paramDescription2_field9-->
Allows you to access exported data and/or prevent it from being saved into a file on the user's local storage.      
The parameter contains the following fields:

<div>
    <ul>
        <li>
            <b>fileName</b> - the name of the file to be saved.
        </li>
        <li>
            <b>format</b> - the file's format. One of 'PNG', 'PDF', 'JPEG', 'SVG' and 'GIF'.
        </li>
        <li>
            <b>data</b> - exported data as a <a href="https://en.wikipedia.org/wiki/Binary_large_object">BLOB</a>.
        </li>
        <li>
            <b>cancel</b> - when assigned <b>true</b>, prevents the file from being saved.
        </li>
    </ul>
</div>
<!--/paramDescription2_field9-->

<!--fullDescription-->

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Charts/ExportSeveralCharts/jQuery/Light/"
}

#####See Also#####
- [DevExpress.viz.getMarkup(widgetInstances)](/Documentation/ApiReference/Common/utils/viz/Methods/#getMarkupwidgetInstances)
- [exportTo(fileName, format)](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#exportTofileName_format)
- [print()](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#print)
<!--/fullDescription-->