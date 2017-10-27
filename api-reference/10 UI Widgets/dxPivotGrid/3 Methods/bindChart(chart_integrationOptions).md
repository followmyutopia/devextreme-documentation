<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Binds a [Chart](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/) to the **PivotGrid**.
<!--/shortDescription-->

<!--paramName1-->chart<!--/paramName1-->
<!--paramType1-->string|jQuery|object<!--/paramType1-->
<!--paramDescription1-->
**Chart** to be bound to **PivotGrid**.    
Accepts the [instance](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Methods/#instance), [jQuery element](http://api.jquery.com/Types/#jQuery) or [selector](https://api.jquery.com/category/selectors/) of **Chart**'s container.
<!--/paramDescription1-->

<!--paramName2-->integrationOptions<!--/paramName2-->
<!--paramType2-->object<!--/paramType2-->
<!--paramDescription2-->
Configures **Chart** contents and appearance.
<!--/paramDescription2-->
<!--paramName2_field1-->inverted<!--/paramName2_field1-->
<!--paramType2_field1-->boolean<!--/paramType2_field1-->
<!--paramDescription2_field1-->
Default Value: **false**.    
If **true**, [row field](/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Headers) values go to the [chart arguments](/Documentation/Guide/Widgets/Chart/Axes/Overview/) and [column field](/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Headers) values form [series](/Documentation/Guide/Widgets/Chart/Series/Overview/). If **false** - vice versa.
<!--/paramDescription2_field1-->
<!--paramName2_field2-->dataFieldsDisplayMode<!--/paramName2_field2-->
<!--paramType2_field2-->string<!--/paramType2_field2-->
<!--paramDescription2_field2-->
Default Value: *"splitAxes"*.   
Accepts one of the following values.   

- *"singleAxis"* - values of all data fields are displayed on a single [value axis](/Documentation/Guide/Widgets/Chart/Axes/Overview/).  
- *"splitAxes"* - each data field gets an individual value axis. Applies only if **putDataFieldsInto** is *"series"*.  
- *"splitPanes"* - each data field gets an individual [pane](/Documentation/Guide/Widgets/Chart/Panes/Overview/). Applies only if **putDataFieldsInto** is *"series"*.  

**NOTE:** Applies only if **PivotGrid** contains several [data fields](/Documentation/Guide/Widgets/PivotGrid/Fields_and_Areas/#Fields).
<!--/paramDescription2_field2-->
<!--paramName2_field3-->putDataFieldsInto<!--/paramName2_field3-->
<!--paramType2_field3-->string<!--/paramType2_field3-->
<!--paramDescription2_field3-->
Default Value: *"series"*.   
Accepts one of the following values.

- *"args"* - data fields go to the chart arguments.  
- *"series"* - data fields go to the chart series.  
<!--/paramDescription2_field3-->
<!--paramName2_field4-->alternateDataFields<!--/paramName2_field4-->
<!--paramType2_field4-->boolean<!--/paramType2_field4-->
<!--paramDescription2_field4-->
Default Value: *true*.   
Specifies whether to alternate data fields in the resulting chart or not.   
**NOTE:** Applies only if **PivotGrid** contains several data fields.
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

<!--returnType-->method|null<!--/returnType-->
<!--returnDescription-->
Unbinds the chart. If **null**, then binding failed.
<!--/returnDescription-->

<!--fullDescription-->
Main article: [Integration with Chart](/Documentation/Guide/Widgets/PivotGrid/Integration_with_Chart/)

<a href="/Demos/WidgetsGallery/Demo/PivotGrid/ChartIntegration/jQuery/Light/" class="button orange small fix-width-155" target="_blank">View Demo</a>

#####See Also#####
- **Call Methods**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Call_Methods/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Call_Methods/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Call_Methods/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Call_Methods/) | [ASP.NET MVC](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Calling_Methods)
<!--/fullDescription-->