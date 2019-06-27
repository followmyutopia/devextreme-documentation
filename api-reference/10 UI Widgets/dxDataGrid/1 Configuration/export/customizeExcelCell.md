<!--id-->dxDataGrid.Options.export.customizeExcelCell<!--/id-->
===========================================================================
<!--type-->function(options)<!--/type-->
===========================================================================

<!--shortDescription-->
Customizes an Excel cell after it is created.
<!--/shortDescription-->

<!--fullDescription-->
#include common-demobutton with { 
    url: "/Demos/WidgetsGallery/Demo/DataGrid/ExcelCellCustomization/jQuery/Light/"
}

The following table shows available fill patterns:

<table id="grid">
  <tbody>
  <tr>
  <td>

<div class="simple-table">
<table>
    <thead>
        <tr>
            <th>Fill Pattern</th>
            <th>Result</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><i>"darkDown"</i></td>
            <td><img src="/Content/images/doc/19_2/ExcelExport/FillPatterns/darkDown.png" /></td>
        </tr>
        <tr>
            <td><i>"darkGray"</i></td>
            <td><img src="/Content/images/doc/19_2/ExcelExport/FillPatterns/darkGray.png" /></td>
        </tr>
        <tr>
            <td><i>"darkGrid"</i></td>
            <td><img src="/Content/images/doc/19_2/ExcelExport/FillPatterns/darkGrid.png" /></td>
        </tr>
        <tr>
            <td><i>"darkHorizontal"</i></td>
            <td><img src="/Content/images/doc/19_2/ExcelExport/FillPatterns/darkHorizontal.png" /></td>
        </tr>
        <tr>
            <td><i>"darkTrellis"</i></td>
            <td><img src="/Content/images/doc/19_2/ExcelExport/FillPatterns/darkTrellis.png" /></td>
        </tr>
        <tr>
            <td><i>"darkUp"</i></td>
            <td><img src="/Content/images/doc/19_2/ExcelExport/FillPatterns/darkUp.png" /></td>
        </tr>
        <tr>
            <td><i>"darkVertical"</i></td>
            <td><img src="/Content/images/doc/19_2/ExcelExport/FillPatterns/darkVertical.png" /></td>
        </tr>
        <tr>
            <td><i>"gray0625"</i></td>
            <td><img src="/Content/images/doc/19_2/ExcelExport/FillPatterns/gray0625.png" /></td>
        </tr>
        <tr>
            <td><i>"gray125"</i></td>
            <td><img src="/Content/images/doc/19_2/ExcelExport/FillPatterns/gray125.png" /></td>
        </tr>
    </tbody>
</table>
</div>

  </td>
  <td style="padding-left:10px">

<div class="simple-table">
<table>
    <thead>
        <tr>
            <th>Fill Pattern</th>
            <th>Result</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><i>"lightDown"</i></td>
            <td><img src="/Content/images/doc/19_2/ExcelExport/FillPatterns/lightDown.png" /></td>
        </tr>
        <tr>
            <td><i>"lightGray"</i></td>
            <td><img src="/Content/images/doc/19_2/ExcelExport/FillPatterns/lightGray.png" /></td>
        </tr>
        <tr>
            <td><i>"lightGrid"</i></td>
            <td><img src="/Content/images/doc/19_2/ExcelExport/FillPatterns/lightGrid.png" /></td>
        </tr>
        <tr>
            <td><i>"lightHorizontal"</i></td>
            <td><img src="/Content/images/doc/19_2/ExcelExport/FillPatterns/lightHorizontal.png" /></td>
        </tr>
        <tr>
            <td><i>"lightTrellis"</i></td>
            <td><img src="/Content/images/doc/19_2/ExcelExport/FillPatterns/lightTrellis.png" /></td>
        </tr>
        <tr>
            <td><i>"lightUp"</i></td>
            <td><img src="/Content/images/doc/19_2/ExcelExport/FillPatterns/lightUp.png" /></td>
        </tr>
        <tr>
            <td><i>"lightVertical"</i></td>
            <td><img src="/Content/images/doc/19_2/ExcelExport/FillPatterns/lightVertical.png" /></td>
        </tr>
        <tr>
            <td><i>"mediumGray"</i></td>
            <td><img src="/Content/images/doc/19_2/ExcelExport/FillPatterns/mediumGray.png" /></td>
        </tr>
        <tr>
            <td><i>"solid"</i></td>
            <td><img src="/Content/images/doc/19_2/ExcelExport/FillPatterns/solid.png" /></td>
        </tr>
    </tbody>
</table>
</div>

  </td>
  </tr>
</tbody>
</table>

#####See Also#####
- [Customize Excel Data](/Documentation/Guide/Widgets/DataGrid/Client-Side_Exporting/#API/Customize_Excel_Data)
<!--/fullDescription-->
<!--typeFunctionParamName1-->options<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Excel cell settings.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->dxDataGrid<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget's instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->horizontalAlignment<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->'center' | 'centerContinuous' | 'distributed' | 'fill' | 'general' | 'justify' | 'left' | 'right'<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The horizontal cell alignment.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->verticalAlignment<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->'bottom' | 'center' | 'distributed' | 'justify' | 'top'<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The vertical cell alignment.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->wrapTextEnabled<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->Boolean<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
Specifies whether the cell text should be line-wrapped.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->backgroundColor<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->String<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The cell background color specified as a *"#RRGGBBAA"* value. <br/> R (red), G (green), B (blue), and A (alpha) are hexadecimal characters (0-9, A-F). A is optional.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->fillPatternType<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->'darkDown' | 'darkGray' | 'darkGrid' | 'darkHorizontal' | 'darkTrellis' | 'darkUp' | 'darkVertical' | 'gray0625' | 'gray125' | 'lightDown' | 'lightGray' | 'lightGrid' | 'lightHorizontal' | 'lightTrellis' | 'lightUp' | 'lightVertical' | 'mediumGray' | 'none' | 'solid'<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The cell fill pattern.        
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->fillPatternColor<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->String<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
The foreground color of the cell fill pattern specified as a *"#RRGGBBAA"* value. <br/> R (red), G (green), B (blue), and A (alpha) are hexadecimal characters (0-9, A-F). A is optional.
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->font<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->ExcelFont<!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
The cell font.
<!--/typeFunctionParamDescription1_field8-->
<!--typeFunctionParamName1_field9-->value<!--/typeFunctionParamName1_field9-->
<!--typeFunctionParamType1_field9-->String | Number | Date<!--/typeFunctionParamType1_field9-->
<!--typeFunctionParamDescription1_field9-->
The cell value.
<!--/typeFunctionParamDescription1_field9-->
<!--typeFunctionParamName1_field10-->numberFormat<!--/typeFunctionParamName1_field10-->
<!--typeFunctionParamType1_field10-->String<!--/typeFunctionParamType1_field10-->
<!--typeFunctionParamDescription1_field10-->
The format that specifies how the cell value is displayed.      
Refer to the <a href="https://support.office.com/en-us/article/review-guidelines-for-customizing-a-number-format-c0a1d1fa-d3f4-4018-96b7-9c9354dd99f5" target="_blank">Review guidelines for customizing a number format</a> article for more information.     
Note that you should use `&quot;` instead of `"` to include a text entry. For example, the `0.0&quot; items&quot;` format results in `5` exported as `5 items`.
<!--/typeFunctionParamDescription1_field10-->
<!--typeFunctionParamName1_field11-->gridCell<!--/typeFunctionParamName1_field11-->
<!--typeFunctionParamType1_field11-->ExcelDataGridCell<!--/typeFunctionParamType1_field11-->
<!--typeFunctionParamDescription1_field11-->
A **DataGrid** cell that corresponds to the Excel cell.
<!--/typeFunctionParamDescription1_field11-->
