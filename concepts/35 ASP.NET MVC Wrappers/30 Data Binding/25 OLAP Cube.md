An OLAP cube is a multi-dimensional dataset that allows for data mining and analysis. For displaying data from an OLAP cube, DevExtreme provides the [PivotGrid](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/) widget. You can access the OLAP cube by calling the `DataSource()` method as shown in the following code. The lambda expression passed to this method configures the [XmlaStore](/Documentation/ApiReference/Data_Layer/XmlaStore/) data store.

    @(Html.DevExtreme().PivotGrid()
        .DataSource(ds => ds
            .Store(s => s.Xmla()
                .Url("http://my-web-srv01/OLAP/msmdpump.dll")
                .Catalog("AdventureWorksDW2012")
                .Cube("Adventure Works")
            )
        )
    )

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Pivot_Grid/OLAPDataSource/Mvc/Light/" class="button orange small fix-width-155" target="_blank">View Demo</a>