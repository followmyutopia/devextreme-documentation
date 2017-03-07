<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->PivotGrid widget.<!--/d-->
<!--widgettree-->
dataSource: {
        fields: [
            { dataField: "[Product].[Category]", area: "row" },
            { dataField: "[Product].[Subcategory]", area: "row" },
            { dataField: "[Ship Date].[Calendar Year]", area: "column" },
            { dataField: "[Ship Date].[Month of Year]", area: "column" },
            { dataField: "[Measures].[Customer Count]", area: "data" }
        ],
        store: {
            type: "xmla",
            url: "https://demos.devexpress.com/Services/OLAP/msmdpump.dll",
            catalog: "Adventure Works DW Standard Edition",
            cube: "Adventure Works"
        }
    }
<!--/widgettree-->
===========================================================================
<!--module--><a href="/Documentation/16_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_pivot_grid">ui/pivot_grid</a><!--/module-->
<!--inherits-->..\Widget\Widget.md<!--/inherits-->
<!--lib-->
dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **PivotGrid** is a widget that allows you to display and analyze multi-dimensional data from a local storage or an OLAP cube.
<!--/shortDescription-->

<!--fullDescription-->
You can create the **PivotGrid** widget using one of the following approaches.

- **jQuery**  
 Use the `dxPivotGrid` jQuery plug-in.

        <!--HTML--><div id="pivotGridContainer"></div>

    <!---->

        <!--JavaScript-->$("#pivotGridContainer").dxPivotGrid({
            dataSource: {
                store: orders,
                fields: [
                    { area: 'column', dataField: 'OrderDate', dataType: 'date', groupInterval: 'year' },
                    { area: 'column', dataField: 'OrderDate', dataType: 'date', groupInterval: 'quarter' },
                    { area: 'column', dataField: 'OrderDate', dataType: 'date', groupInterval: 'month' },
                    { area: 'row', dataField: 'ShipCountry' },
                    { area: 'row', dataField: 'ShipCity' },
                    { area: 'row', dataField: 'ShipName' },
                    { area: 'data', summaryType: 'count' }
                ]
            }
        });
- **Knockout**  
 Add a div element and apply the `dxPivotGrid` binding to this element.

        <!--HTML-->
        <div data-bind="dxPivotGrid: {
			dataSource: {
                store: orders,
                fields: [
                    { area: 'column', dataField: 'OrderDate', dataType: 'date', groupInterval: 'year' },
                    { area: 'column', dataField: 'OrderDate', dataType: 'date', groupInterval: 'quarter' },
                    { area: 'column', dataField: 'OrderDate', dataType: 'date', groupInterval: 'month' },
                    { area: 'row', dataField: 'ShipCountry' },
                    { area: 'row', dataField: 'ShipCity' },
                    { area: 'row', dataField: 'ShipName' },
                    { area: 'data', summaryType: 'count' }
                ]
            }
        }"></div>

- **AngularJS**  
 Add a div element and apply the `dx-pivot-grid` directive to this element.

        <!--HTML-->
        <div dx-pivot-grid="{
			dataSource: {
                store: orders,
                fields: [
                    { area: 'column', dataField: 'OrderDate', dataType: 'date', groupInterval: 'year' },
                    { area: 'column', dataField: 'OrderDate', dataType: 'date', groupInterval: 'quarter' },
                    { area: 'column', dataField: 'OrderDate', dataType: 'date', groupInterval: 'month' },
                    { area: 'row', dataField: 'ShipCountry' },
                    { area: 'row', dataField: 'ShipCity' },
                    { area: 'row', dataField: 'ShipName' },
                    { area: 'data', summaryType: 'count' }
                ]
            }
        }"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/Documentation/Guide/UI_Widgets/Basics/Installation/) article.

To provide data for the **PivotGrid** widget, specify a data source. **PivotGrid** accepts the [PivotGridDataSource](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/) data source only. You can pass its configuration to the [dataSource](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/#dataSource) field without creating the separate **PivotGridDataSource** object as shown above.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/data_grid-pivot_grid_data_binding-local_data_source" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

<a href="http://www.youtube.com/watch?v=a3B0XLSIEBM&index=49&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Watch Video</a>

<a href="/Documentation/16_1/Tutorial/UI_Widgets/Configure_PivotGrid/" class="button orange small fix-width-155" style="margin-right: 20px;">Start Tutorial</a>

<!--/fullDescription-->