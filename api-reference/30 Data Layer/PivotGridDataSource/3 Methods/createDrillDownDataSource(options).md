===================================================================
===================================================================

<!--shortDescription-->
Provides access to a list of records ([facts](/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Summary_Values)) that were used to calculate a specific summary.
<!--/shortDescription-->

<!--paramName1-->options<!--/paramName1-->
<!--paramType1-->Object<!--/paramType1-->
<!--paramDescription1-->
Configuration object.
<!--/paramDescription1-->
<!--paramName1_field1-->columnPath<!--/paramName1_field1-->
<!--paramType1_field1-->Array<String, Number, Date><!--/paramType1_field1-->
<!--paramDescription1_field1-->
A path to the cell in the 'column' area.
<!--/paramDescription1_field1-->
<!--paramName1_field2-->rowPath<!--/paramName1_field2-->
<!--paramType1_field2-->Array<String, Number, Date><!--/paramType1_field2-->
<!--paramDescription1_field2-->
A path to the cell in the 'row' area.
<!--/paramDescription1_field2-->
<!--paramName1_field3-->dataIndex<!--/paramName1_field3-->
<!--paramType1_field3-->Number<!--/paramType1_field3-->
<!--paramDescription1_field3-->
An index of the summary value in the 'data' area.
<!--/paramDescription1_field3-->
<!--paramName1_field4-->maxRowCount<!--/paramName1_field4-->
<!--paramType1_field4-->Number<!--/paramType1_field4-->
<!--paramDescription1_field4-->
Maximum items count in the resulting list.
<!--/paramDescription1_field4-->
<!--paramName1_field5-->customColumns<!--/paramName1_field5-->
<!--paramType1_field5-->Array<String><!--/paramType1_field5-->
<!--paramDescription1_field5-->
A list of field names that will be included in each fact.
<!--/paramDescription1_field5-->

<!--returnType-->DataSource<!--/returnType-->
<!--returnDescription-->
A drill-down data source.
<!--/returnDescription-->

<!--fullDescription-->
Use this method if you need to get information on what facts were involved in the calculation of a specific summary value. To get a drill-down data source that provides such information, you need to specify a full path to a summary value (including the **rowPath**, **columnPath** and **dataIndex**). You can also specify a list of fields to display for each fact (**customColumns**) and the maximum number of acquired facts (**maxRowCount**).

[note]By default, data in the returned data source is paginated. This means that when trying to load items from it, you will get only the items of the first page. To get all items, use the following code.

    <!--JavaScript-->drillDownDataSource.paginate(false);
    drillDownDataSource.load().done(function (items) {
        // the "items" array contains all items
    });

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Pivot_Grid/DrillDown/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<!--/fullDescription-->