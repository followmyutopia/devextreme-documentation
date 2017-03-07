<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--hideDefaults-->true<!--/hideDefaults-->
<!--default-->undefined<!--/default-->
<!--type-->object | array<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies options for the **Chart** and **PieChart** widget series.
<!--/shortDescription-->

<!--fullDescription-->
<p>A Series represents a grouping of related data points. The most important characteristic of a series is its type, which determines a particular visual representation of data. You can find more details on each series type in the corresponding topics in the <a href="/Documentation/16_2/Guide/Widgets/Chart/Visual_Elements#Series">Series</a> help section.<br/>

To define a single series, assign an object defining the series to the **series** configuration object. In the series' object, specify the series type and data source fields. In addition, you can specify the appearance of the series points and other options.<br/>

To show several series, specify <b>series</b> as an array of objects. Each object will define a series. If you need to set similar values to properties of several series, use the <b>commonSeriesSettings</b> configuration object. It exposes the properties that can be specified for all series at once and for all series of a particular type at once. Note that the values specified for a series individually (in the <b>series</b> array) override the values that are specified for all series (in the <b>commonSeriesSettings</b> object).</p>
<!--/fullDescription-->