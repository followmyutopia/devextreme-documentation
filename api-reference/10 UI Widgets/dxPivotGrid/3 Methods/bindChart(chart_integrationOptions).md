<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
Bind chart to pivot grid.
<!--/d-->
<!--p1d-->selector, dxChart instance or jQuery element<!--/p1d-->
<!--p2d-->binding options<!--/p2d-->
<!--p2_field1d-->whether should be generate series from columns or rows<!--/p2_field1d-->
<!--p2_field2d-->how display series with different dataFields. accepted values 'splitAxes'| 'singleAxis' | 'splitPanes'<!--/p2_field2d-->
<!--p2_field3d-->put data fields into series or arguments. accepted values 'seies'| 'args'<!--/p2_field3d-->
<!--p2_field4d-->whether group series or arguments by dataFields<!--/p2_field4d-->
<!--p2_field5d-->customize chart dataItem for corresponding pivot cell. returns customized cellData<!--/p2_field5d-->
<!--p2_field6d-->customize chart options. First parametr - options generated for binding.returns customized chart options.<!--/p2_field6d-->
<!--p2_field7d-->customize series. returns customized seriesOptions<!--/p2_field7d-->
<!--rd-->dispose biding<!--/rd-->
===================================================================
===================================================================

<!--shortDescription-->
Binds a [Chart](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/) to the **PivotGrid**.
<!--/shortDescription-->

<!--paramName1-->chart<!--/paramName1-->
<!--paramType1-->string|jQuery|object<!--/paramType1-->
<!--paramDescription1-->
<b>Chart</b> to be bound to <b>PivotGrid</b>.<br />
Accepts the <a href="/Documentation/16_1/ApiReference/UI_Widgets/dxPivotGrid/Methods/#instance">instance</a>, <a href="http://api.jquery.com/Types/#jQuery">jQuery element</a> or <a href="https://api.jquery.com/category/selectors/">selector</a> of <b>Chart</b>'s container.
<!--/paramDescription1-->

<!--paramName2-->integrationOptions<!--/paramName2-->
<!--paramType2-->object<!--/paramType2-->
<!--paramDescription2-->
Configures **Chart**contents and appearance.
<!--/paramDescription2-->
<!--paramName2_field1-->inverted<!--/paramName2_field1-->
<!--paramType2_field1-->boolean<!--/paramType2_field1-->
<!--paramDescription2_field1-->
Default Value: <i>false</i>.<br />
If <i>true</i>, <a href="/Documentation/16_1/Guide/UI_Widgets/Pivot_Grid/Visual_Elements/#Headers">row field</a> values go to the <a href="/Documentation/16_1/Guide/Data_Visualization/Charts/Chart_Elements/#Axes/Argument_Axis">chart arguments</a> and <a href="/Documentation/16_1/Guide/UI_Widgets/Pivot_Grid/Visual_Elements/#Headers">column field</a> values form <a href="/Documentation/16_1/Guide/Data_Visualization/Charts/Chart_Elements/#Series">series</a>. If <i>false</i> - vice versa.
<!--/paramDescription2_field1-->
<!--paramName2_field2-->dataFieldsDisplayMode<!--/paramName2_field2-->
<!--paramType2_field2-->string<!--/paramType2_field2-->
<!--paramDescription2_field2-->
Default Value: <i>"splitAxes"</i>.<br />
Accepts one of the following values.<br />
<ul>
    <li><i>"singleAxis"</i> - values of all data fields are displayed on a single <a href="/Documentation/16_1/Guide/Data_Visualization/Charts/Chart_Elements/#Axes/Value_Axis">value axis</a>.</li>
    <li><i>"splitAxes"</i> - each data field gets an individual value axis. Applies only if <b>putDataFieldsInto</b> is <i>"series"</i>.</li>
    <li><i>"splitPanes"</i> - each data field gets an individual <a href="/Documentation/16_1/Guide/Data_Visualization/Charts/Chart_Elements/#Panes">pane</a>. Applies only if <b>putDataFieldsInto</b> is <i>"series"</i>.</li>
</ul>
<b>NOTE:</b> Applies only if **PivotGrid** contains several <a href="/Documentation/16_1/Guide/UI_Widgets/Pivot_Grid/Fields_and_Areas/#Fields">data fields</a>.
<!--/paramDescription2_field2-->
<!--paramName2_field3-->putDataFieldsInto<!--/paramName2_field3-->
<!--paramType2_field3-->string<!--/paramType2_field3-->
<!--paramDescription2_field3-->
Default Value: <i>"series"</i>.<br />
Accepts one of the following values.
<ul>
    <li><i>"args"</i> - data fields go to the chart arguments.</li>
    <li><i>"series"</i> - data fields go to the chart series.</li>
</ul>
<!--/paramDescription2_field3-->
<!--paramName2_field4-->alternateDataFields<!--/paramName2_field4-->
<!--paramType2_field4-->boolean<!--/paramType2_field4-->
<!--paramDescription2_field4-->
Default Value: <i>true</i>.<br />
Specifies whether to alternate data fields in the resulting chart or not.<br />
<b>NOTE:</b> Applies only if **PivotGrid** contains several data fields.
<!--/paramDescription2_field4-->
<!--paramName2_field5-->processCell<!--/paramName2_field5-->
<!--paramType2_field5-->function(cellData)<!--/paramType2_field5-->
<!--paramDescription2_field5-->
Allows you to process data of a grid cell before it will be visualized by the chart.
<!--/paramDescription2_field5-->
<!--paramName2_field6-->customizeChart<!--/paramName2_field6-->
<!--paramType2_field6-->function(chartOptions)<!--/paramType2_field6-->
<!--paramDescription2_field6-->
Allows you to customize the appearance of the chart.
<!--/paramDescription2_field6-->
<!--paramName2_field7-->customizeSeries<!--/paramName2_field7-->
<!--paramType2_field7-->function(seriesName, seriesOptions)<!--/paramType2_field7-->
<!--paramDescription2_field7-->
Allows you to customize the chart series.
<!--/paramDescription2_field7-->

<!--returnType-->function | null<!--/returnType-->
<!--returnDescription-->
Unbinds the chart. If <b>null</b>, then binding failed.
<!--/returnDescription-->

<!--fullDescription-->
For a comprehensive overview of this feature, refer to the [Integration with Chart](/Documentation/Guide/UI_Widgets/Pivot_Grid/Integration_with_Chart/) article.
<!--/fullDescription-->