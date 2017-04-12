<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
<!--module--><a href="/Documentation/17_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_viz_export">viz/export</a><!--/module-->
<!--export-->exportFromMarkup<!--/export-->
===================================================================

<!--shortDescription-->
Allows you to export widgets using their SVG markup.
<!--/shortDescription-->

<!--paramName1-->markup<!--/paramName1-->
<!--paramType1-->string<!--/paramType1-->
<!--paramDescription1-->
The SVG markup of the widgets you need to export.
<!--/paramDescription1-->

<!--paramName2-->options<!--/paramName2-->
<!--paramType2-->object<!--/paramType2-->
<!--paramDescription2-->
Export options. Can contain the following fields.

<div>
    <ul>
        <li>
            <b>fileName</b> - the name of the file to be saved.
        </li>
        <li>
            <b>format</b> - the format of the file to be saved.<br />
            Accepted Values: 'PNG' | 'PDF' | 'JPEG' | 'SVG' | 'GIF'
        </li>
        <li>
            <b>height</b> - the pixel-measured height of the SVG block.<br/>
            This field is <font color="red">required</font>.
        </li>
        <li>
            <b>width</b> - the pixel-measured width of the SVG block.<br/>
            This field is <font color="red">required</font>.
        </li>
        <li>
            <b>backgroundColor</b> - the color that will fill transparent regions.</br>
        </li>
        <li>
            <b>proxyUrl</b> - the URL of a server-side proxy required for export in IE9 and Safari on Mac OS.<br />For details, refer to the <a href="/Documentation/17_1/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/export/#proxyUrl">proxyUrl</a> option of any widget.
        </li>
    </ul>
</div>
<!--/paramDescription2-->

<!--fullDescription-->
#####See Also#####
- [svg()](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#svg) - returns the widget's SVG markup.
- [exportTo(fileName, format)](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#exportTofileName_format) - exports a specific widget.
- [print()](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#print) - prints a specific widget.
<!--/fullDescription-->