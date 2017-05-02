<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--module--><a href="/Documentation/17_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_data_array_store">data/array_store</a><!--/module-->
<!--export-->default<!--/export-->
<!--type-->object<!--/type-->
<!--inherits-->..\Store\Store.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
A [Store](/Documentation/Guide/Data_Layer/Data_Layer/#Creating_DataSource/What_Are_Stores) accessing an in-memory array.
<!--/shortDescription-->

<!--fullDescription-->
To associate an array with the **ArrayStore**, pass this array to the `ArrayStore` constructor.

    <!--JavaScript-->
    var store = new DevExpress.data.ArrayStore(array);

If you need to specify configuration options of the **ArrayStore** other than data, pass an object to the `ArrayStore` constructor.

    <!--JavaScript-->
    var store = new DevExpress.data.ArrayStore({
        data: array,
        key: "id",
        onModified: function() {
            // 'modified' event handler
        },
        errorHandler: function(error) {
            // Error handler
        }
    });

Note, that the [key](/Documentation/ApiReference/Data_Layer/LocalStore/Configuration/#key) option is required if you are going to use the **ArrayStore** for read-write access to data.

#####See Also#####
- [DataSource Examples - In-memory Data](/Documentation/Guide/Data_Layer/Data_Source_Examples/#In-memory_Data)

When using a widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), declare the **ArrayStore** using the syntax shown in the following example. This example configures the [SelectBox](/Documentation/ApiReference/UI_Widgets/dxSelectBox/) widget.

    <!--Razor C#-->@(Html.DevExtreme().SelectBox()
        .ID("selectBox")
        .DataSource(ds => ds.Array()
            .Key("id")
            .Data(new [] {
                new { id = 1, state = "Alabama", capital = "Montgomery" },
                new { id = 2, state = "Alaska", capital = "Juneau" },
                new { id = 3, state = "Arizona", capital = "Phoenix" },
                // ...
            })
        )
        .DisplayExpr("state")
        .ValueExpr("id")
    )
    @* ===== or a simplified version ===== *@
    @(Html.DevExtreme().SelectBox()
        .ID("selectBox")
        .DataSource(new[] {
            new { id = 1, state = "Alabama", capital = "Montgomery" },
            new { id = 2, state = "Alaska", capital = "Juneau" },
            new { id = 3, state = "Arizona", capital = "Phoenix" },
            // ...
        }, "id")
        .DisplayExpr("state")
        .ValueExpr("id")
    )

    <!--Razor VB-->@(Html.DevExtreme().SelectBox() _
        .ID("selectBox") _
        .DataSource(Function(ds)
            Return ds.Array() _
                     .Key("id") _
                     .Data({
                         New With { .id = 1, .state = "Alabama", .capital = "Montgomery" },
                         New With { .id = 2, .state = "Alaska", .capital = "Juneau" },
                         New With { .id = 3, .state = "Arizona", .capital = "Phoenix" }
                     })
        End Function) _
        .DisplayExpr("state") _
        .ValueExpr("id")
    )
    @* ===== or a simplified version ===== *@
    @(Html.DevExtreme().SelectBox() _
        .ID("selectBox") _
        .DataSource({
            New With { .id = 1, .state = "Alabama", .capital = "Montgomery" },
            New With { .id = 2, .state = "Alaska", .capital = "Juneau" },
            New With { .id = 3, .state = "Arizona", .capital = "Phoenix" }
        }, "id") _
        .DisplayExpr("state") _
        .ValueExpr("id")
    )
<!--/fullDescription-->