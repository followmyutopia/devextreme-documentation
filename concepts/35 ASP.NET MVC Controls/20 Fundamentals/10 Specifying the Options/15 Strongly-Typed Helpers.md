Many item collections can be configured using strongly-typed helpers. This approach automatically adds [client-side validation](/Documentation/Guide/ASP.NET_MVC_Controls/Client-Side_Data_Validation/Overview/) based on Data Annotations, ensures compile-time type safety, and enables IntelliSense. In the following code, the **DataGrid** is strongly-typed to the type `Order`, and the columns are configured using the `AddFor()` method. Note that this and the previous codes are equivalent.

    <!--Razor C#-->
    @(Html.DevExtreme().DataGrid<Order>()
        .Columns(columns => {
            columns.AddFor(m => m.CustomerID);
            columns.AddFor(m => m.OrderDate);
        })
    )

    <!--Razor VB-->
    @(Html.DevExtreme().DataGrid(Of Order)() _
        .Columns(Sub(columns)
            columns.AddFor(Function(m) m.CustomerID)
            columns.AddFor(Function(m) m.OrderDate)
        End Sub)
    )

Strongly-typed helpers can also be used for configuring standalone editors. Methods that create the editors end with `For`. For example, the `DateBoxFor()` method creates the **DateBox** control. Browse IntelliSense suggestions for a full list of available strongly-typed helpers.

    <!--Razor C#-->
    @model ApplicationName.Models.Order

    @(Html.DevExtreme().DateBoxFor(m => m.OrderDate))

    <!--Razor VB-->
    @ModelType ApplicationName.Models.Order

    @(Html.DevExtreme().DateBoxFor(Function(m) m.OrderDate))

More examples are available in our [technical demos](/Demos/WidgetsGallery/Demo/DataGrid/Overview/Mvc/Light/) and [sample applications](/Documentation/Guide/ASP.NET_MVC_Controls/Prerequisites_and_Installation/#Sample_Applications).