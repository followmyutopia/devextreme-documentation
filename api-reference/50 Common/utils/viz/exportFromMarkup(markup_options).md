---
id: viz.exportFromMarkup(markup, options)
module: viz/export
export: exportFromMarkup
---
---
##### shortDescription
Allows you to export widgets using their SVG markup.

##### param(markup): String
The SVG markup of the widgets you want to export.

##### param(options): Object
Export options.

##### field(options.backgroundColor): String
The color that fills transparent regions.

##### field(options.fileName): String
The name of the file to be saved.

##### field(options.format): String
The file's format. One of 'PNG', 'PDF', 'JPEG', 'SVG' and 'GIF'.    
PNG is used if the browser does not support exporting to the specified format.

##### field(options.height): Number
The SVG block's height in pixels.
This field is <font color="red">required</font>.

##### field(options.margin): Number
An empty space to be added around the exported SVG block; measured in pixels.

##### field(options.onExported): function()
Allows you to notify a user when exporting completes.

##### field(options.onExporting): function()
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

##### field(options.onFileSaving): function()
Allows you to access exported data and/or prevent it from being saved to a file on the user's local storage.      
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

##### field(options.proxyUrl): String
The URL of a server-side proxy required for export in Safari on Mac OS. See [proxyUrl](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/export/#proxyUrl) for details.

##### field(options.svgToCanvas): function()
<!-- Description goes here -->

##### field(options.width): Number
The SVG block's width in pixels.
This field is <font color="red">required</font>.

---
#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Charts/ExportSeveralCharts/jQuery/Light/"
}

#####See Also#####
- [DevExpress.viz.getMarkup(widgetInstances)](/Documentation/ApiReference/Common/utils/viz/#getMarkupwidgetInstances)
- [exportTo(fileName, format)](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#exportTofileName_format)
- [print()](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#print)