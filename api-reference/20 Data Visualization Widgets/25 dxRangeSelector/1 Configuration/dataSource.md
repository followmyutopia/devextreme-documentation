<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--notUsedInTheme--><!--/notUsedInTheme-->
<!--type-->array | DataSource | DataSource configuration | string<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a data source for the scale values and for the [chart](/Documentation/ApiReference/Data_Visualization_Widgets/dxRangeSelector/Configuration/chart/) at the background.
<!--/shortDescription-->

<!--fullDescription-->
Use this property in the following cases:

* to initialize a scale with data from one of the data source fields. Set the **dataSourceField** property to specify which field to use as the source for scale values.
* to plot a chart using data from the data source fields. In this case, define the chart series by setting their **argumentField** and **valueField** properties. The range selector's scale will represent the chart's argument axis. It is created using data from the field specified by the chart's **argumentField** property.

The maximum and minimum values of the field specified by the **argumentField**/**dataSourceField** property are used as the scale's start and end values. The major tick interval is determined automatically. You can also set the interval using the scale's **tickInterval** and **minorTickInterval** properties.

For details on how to configure a data source, refer to the [Data Binding](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_Data_Binding/Provide_Data/) topic.

#####See Also#####
- [dataSourceField]({basewidgetpath}/Configuration/dataSourceField)
- [getDataSource()]({basewidgetpath}/Methods/#getDataSource)
- [Data Layer - Overview](/Documentation/Guide/Data_Layer/Data_Layer)
- [Data Layer - Data Source Examples](/Documentation/Guide/Data_Layer/Data_Source_Examples)
<!--/fullDescription-->