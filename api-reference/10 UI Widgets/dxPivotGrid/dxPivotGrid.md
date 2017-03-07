<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
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
<!--module--><a href="/Documentation/16_2/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_pivot_grid">ui/pivot_grid</a><!--/module-->
<!--export-->default<!--/export-->
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

- [**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

        <!--HTML--><div id="pivotGrid"></div>

    <!---->

        <!--JavaScript-->$(function () {
            $("#pivotGrid").dxPivotGrid({
                dataSource: {
                    store: {
                        type: 'odata',
                        url: 'http://url/to/the/service',
                        key: 'OrderID',
                        keyType: 'Int32'
                    },
                    fields: [
                        { area: 'column', dataField: 'OrderDate', dataType: 'date' },
                        { area: 'row', dataField: 'ShipCountry' },
                        { area: 'row', dataField: 'ShipCity' },
                        { area: 'row', dataField: 'ShipName' },
                        { area: 'data', summaryType: 'count' }
                    ]
                }
            });
        });

- [**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

        <!--HTML--><div dx-pivot-grid="{
			dataSource: {
                store: {
                    type: 'odata',
                    url: 'http://url/to/the/service',
                    key: 'OrderID',
                    keyType: 'Int32'
                },
                fields: [
                    { area: 'column', dataField: 'OrderDate', dataType: 'date'},
                    { area: 'row', dataField: 'ShipCountry' },
                    { area: 'row', dataField: 'ShipCity' },
                    { area: 'row', dataField: 'ShipName' },
                    { area: 'data', summaryType: 'count' }
                ]
            }
        }"></div>

- [**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

        <!--HTML--><div data-bind="dxPivotGrid: {
			dataSource: {
                store: {
                    type: 'odata',
                    url: 'http://url/to/the/service',
                    key: 'OrderID',
                    keyType: 'Int32'
                },
                fields: [
                    { area: 'column', dataField: 'OrderDate', dataType: 'date' },
                    { area: 'row', dataField: 'ShipCountry' },
                    { area: 'row', dataField: 'ShipCity' },
                    { area: 'row', dataField: 'ShipName' },
                    { area: 'data', summaryType: 'count' }
                ]
            }
        }"></div>

- [**ASP.NET MVC Wrappers**](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/#Creating_a_Widget)

        @(Html.DevExtreme().PivotGrid()
            .ID("pivotGrid")
            .DataSource(ds => ds
                .Store(store => store.OData()
                    .Url("http://url/to/the/service")
                    .Key(new string[] { "OrderID" })
                    .KeyType(EdmType.Int32)
                )
                .Fields(fields => {
                    fields.Add().Area(PivotGridArea.Column)
                        .DataField("OrderDate")
                        .DataType(PivotGridDataType.Date);
                    fields.Add().Area(PivotGridArea.Row).DataField("ShipCountry");
                    fields.Add().Area(PivotGridArea.Row).DataField("ShipCity");
                    fields.Add().Area(PivotGridArea.Row).DataField("ShipName");
                    fields.Add().Area(PivotGridArea.Data).SummaryType(SummaryType.Count);
                })
            )
        )

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.

To provide data for the **PivotGrid** widget, specify a data source. **PivotGrid** accepts the [PivotGridDataSource](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/) data source only. You can pass its configuration to the [dataSource](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/#dataSource) field without creating the separate **PivotGridDataSource** object as shown above.

<a href="/Documentation/16_2/Tutorial/UI_Widgets/Configure_PivotGrid/" class="button orange small fix-width-155" style="margin-right:5px;">Start Tutorial</a>
<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/data_grid-pivot_grid_data_binding-local_data_source" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a>
<a href="http://www.youtube.com/watch?v=a3B0XLSIEBM&index=49&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>
<!--/fullDescription-->