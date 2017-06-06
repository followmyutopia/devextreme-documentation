<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--module-->ui/pivot_grid/xmla_store<!--/module-->
<!--export-->default<!--/export-->
<!--type-->object<!--/type-->
<!--lib-->
dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
A [Store](/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores) that provides access to an OLAP cube using the XMLA standard.
<!--/shortDescription-->

<!--fullDescription-->
To create an **XmlaStore** instance, specify the [URL](/Documentation/ApiReference/Data_Layer/XmlaStore/Configuration/#url) of your OLAP server, the [database name](/Documentation/ApiReference/Data_Layer/XmlaStore/Configuration/#catalog) and the [name of the cube](/Documentation/ApiReference/Data_Layer/XmlaStore/Configuration/#cube) whose data should be displayed by the [PivotGrid](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/) widget.

    <!--JavaScript-->var store = new DevExpress.data.XmlaStore({
        url: "http://my-web-srv01/OLAP/msmdpump.dll",
        catalog: "AdventureWorksDW2012",
        cube: "Adventure Works"
    });

For now, **XmlaStore** supports only Microsoft Analysis Services. The comprehensive information about Microsoft Analysis Services OLAP tool is presented in the [Multidimensional Modeling](https://msdn.microsoft.com/en-us/library/ms170208.aspx) MSDN tutorial. To learn how to configure HTTP access to analysis services on IIS, refer to the [Configure HTTP Access to Analysis Services on IIS 8.0](https://technet.microsoft.com/en-us/library/gg492140.aspx) article. 

<a href="/Documentation/17_2/Tutorial/UI_Widgets/Use_OLAP_Data_for_PivotGrid/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">Start Tutorial</a>

When using a widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), declare the **XmlaStore** using the syntax shown in the following example. This example configures the [PivotGrid](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/) widget.

    <!--Razor C#-->@(Html.DevExtreme().PivotGrid()
        .DataSource(ds => ds
            .Store(s => s.Xmla()
                .Url("http://my-web-srv01/OLAP/msmdpump.dll")
                .Catalog("AdventureWorksDW2012")
                .Cube("Adventure Works")
            )
        )
    )

    <!--Razor VB-->@(Html.DevExtreme().PivotGrid() _
        .DataSource(Function(ds)
            Return ds.Store(Function(s)
                    Return s.Xmla() _
                            .Url("http://my-web-srv01/OLAP/msmdpump.dll") _
                            .Catalog("AdventureWorksDW2012") _
                            .Cube("Adventure Works")
                    End Function)
        End Function)
    )

<!--/fullDescription-->