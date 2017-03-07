<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
get drillDown dataSource for a cell.
<!--/d-->
<!--p1d-->drilldown params<!--/p1d-->
<!--p1_field1d-->column path to cell<!--/p1_field1d-->
<!--p1_field2d-->row path to cell<!--/p1_field2d-->
<!--p1_field3d-->index of field in the data area<!--/p1_field3d-->
<!--p1_field4d-->max items count in result dataSource<!--/p1_field4d-->
<!--p1_field5d-->array of strings with fields in the result dataSource<!--/p1_field5d-->
<!--rd-->a DevExpress.data.DataSource instance<!--/rd-->
===================================================================
===================================================================

<!--shortDescription-->
Provides access to a list of records ([facts](/Documentation/Guide/UI_Widgets/Pivot_Grid/Visual_Elements/#Summary_Values)) that were used to calculate a specific summary.
<!--/shortDescription-->

<!--paramName1-->options<!--/paramName1-->
<!--paramType1-->object<!--/paramType1-->
<!--paramDescription1-->
Configuration object.
<!--/paramDescription1-->
<!--paramName1_field1-->columnPath<!--/paramName1_field1-->
<!--paramType1_field1-->array<!--/paramType1_field1-->
<!--paramDescription1_field1-->
A path to the cell in the 'column' area.
<!--/paramDescription1_field1-->
<!--paramName1_field2-->rowPath<!--/paramName1_field2-->
<!--paramType1_field2-->array<!--/paramType1_field2-->
<!--paramDescription1_field2-->
A path to the cell in the 'row' area.
<!--/paramDescription1_field2-->
<!--paramName1_field3-->dataIndex<!--/paramName1_field3-->
<!--paramType1_field3-->number<!--/paramType1_field3-->
<!--paramDescription1_field3-->
An index of the summary value in the 'data' area.
<!--/paramDescription1_field3-->
<!--paramName1_field4-->maxRowCount<!--/paramName1_field4-->
<!--paramType1_field4-->number<!--/paramType1_field4-->
<!--paramDescription1_field4-->
Maximum items count in the resulting list.
<!--/paramDescription1_field4-->
<!--paramName1_field5-->customColumns<!--/paramName1_field5-->
<!--paramType1_field5-->array<!--/paramType1_field5-->
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
<!--/fullDescription-->