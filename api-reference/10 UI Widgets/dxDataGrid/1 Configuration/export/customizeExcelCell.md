===========================================================================
<!--type-->function(options)<!--/type-->
===========================================================================

<!--shortDescription-->
Customizes an Excel cell after it is created.
<!--/shortDescription-->

<!--fullDescription-->

<!--/fullDescription-->
<!--typeFunctionParamName1-->options<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The Excel cell's settings.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->dxDataGrid<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget's instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->horizontalAlignment<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->'center' | 'centerContinuous' | 'distributed' | 'fill' | 'general' | 'justify' | 'left' | 'right'<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The cell's horizontal alignment.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->verticalAlignment<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->'bottom' | 'center' | 'distributed' | 'justify' | 'top'<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The cell's vertical alignment.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->wrapTextEnabled<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->Boolean<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
Specifies whether the cell's text should be line-wrapped.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->backgroundColor<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->String<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The cell's background color specified as a *"#RRGGBBAA"* value. <br/> R (red), G (green), B (blue), and A (alpha) are hexadecimal characters (0-9, A-F). A is optional.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->fillPatternType<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->'darkDown' | 'darkGray' | 'darkGrid' | 'darkHorizontal' | 'darkTrellis' | 'darkUp' | 'darkVertical' | 'gray0625' | 'gray125' | 'lightDown' | 'lightGray' | 'lightGrid' | 'lightHorizontal' | 'lightTrellis' | 'lightUp' | 'lightVertical' | 'mediumGray' | 'none' | 'solid'<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The cell's fill pattern.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->fillPatternColor<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->String<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
The foreground color of the cell's fill pattern specified as a *"#RRGGBBAA"* value. <br/> R (red), G (green), B (blue), and A (alpha) are hexadecimal characters (0-9, A-F). A is optional.
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->font<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->ExcelFont<!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
The cell's font.
<!--/typeFunctionParamDescription1_field8-->
<!--typeFunctionParamName1_field9-->value<!--/typeFunctionParamName1_field9-->
<!--typeFunctionParamType1_field9-->String | Number | Date<!--/typeFunctionParamType1_field9-->
<!--typeFunctionParamDescription1_field9-->
The cell's value.
<!--/typeFunctionParamDescription1_field9-->
<!--typeFunctionParamName1_field10-->numberFormat<!--/typeFunctionParamName1_field10-->
<!--typeFunctionParamType1_field10-->String<!--/typeFunctionParamType1_field10-->
<!--typeFunctionParamDescription1_field10-->
A format that specifies how the cell value is displayed. <br/> Refer to the [Review guidelines for customizing a number format](https://support.office.com/en-us/article/review-guidelines-for-customizing-a-number-format-c0a1d1fa-d3f4-4018-96b7-9c9354dd99f5) article for more information.
<!--/typeFunctionParamDescription1_field10-->
<!--typeFunctionParamName1_field11-->gridCell<!--/typeFunctionParamName1_field11-->
<!--typeFunctionParamType1_field11-->ExcelDataGridCell<!--/typeFunctionParamType1_field11-->
<!--typeFunctionParamDescription1_field11-->
A **DataGrid** cell that corresponds to the Excel cell.
<!--/typeFunctionParamDescription1_field11-->
