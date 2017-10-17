DevExtreme ASP.NET MVC Controls mirror the [client-side widget options](/Documentation/ApiReference/UI_Widgets/) with only one difference: instead of the lower camel case usual in JavaScript, control methods use the upper camel case common in .NET, for example:

<div class="simple-table" style="font-size:14px; font-style:normal; text-align:center">
  <table>
    <thead>
    <tr>
      <th>Widget Option</th>
      <th>Control Method</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <td style="font-style:normal">dataSource</td>
      <td>DataSource</td>
    </tr>
    <tr>
      <td style="font-style:normal">tooltip</td>
      <td>Tooltip</td>
    </tr>
    <tr>
      <td style="font-style:normal">showColumnHeaders</td>
      <td>ShowColumnHeaders</td>
    </tr>
    </tbody>
  </table>
</div>

Control methods are called using a [fluent interface](https://en.wikipedia.org/wiki/Fluent_interface). In Visual Studio, IntelliSense prompts you the available method names, their accepted values, and short descriptions.

![DevExtreme ASP.NET MVC Controls - InstelliSense](/Content/images/doc/17_2/Common/MvcWrappers/fluent-interface.png)

To specify a simple widget option, call the corresponding control method and pass the required option value.

    <!--Razor C#-->
    @(Html.DevExtreme().Button()
        .ID("submitButton") // sets the "id" attribute of the widget container
        .Text("submit") // sets the button text
        .Width(100) // sets the button width
    )

    <!--Razor VB-->
    @(Html.DevExtreme().Button() _
        .ID("submitButton") _
        .Text("submit") _
        .Width(100)
    )

[note]

Specifying the `ID` option is not necessary. However, you may need it if you plan to access the widget's JavaScript API at runtime (for example, to [call a method](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Calling_Methods)). The `ID` option's value should meet certain requirements: 

- It must always be unique in a page's context;     
- If a partial view is loaded multiple times, each partial view instance must render all the widgets with unique IDs;     
- It should meet the [`id` attribute's requirements in HTML5](https://www.w3.org/TR/html5/dom.html#the-id-attribute).

[/note]

Options that accept a predefined set of values are specified using .NET enums. Refer to a particular option's description to learn if it accepts a enum. 

    <!--Razor C#-->
    @(Html.DevExtreme().DateBox()
        .Type(DateBoxType.DateTime) // sets the type using the DateBoxType .NET enum
    )

    <!--Razor VB-->
    @(Html.DevExtreme().DateBox() _
        .Type(DateBoxType.DateTime) ' sets the type using the DateBoxType .NET enum
    )
    
Nested options are configured using lambda expressions. The lambda parameter starts a new chain of methods that specify the nested options.

    <!--Razor C#-->
    @(Html.DevExtreme().Chart()
        .Legend(l => l // configures the chart legend (l - lambda parameter)
            .Visible(false) // hides the legend in the chart
        )
        .Tooltip(t => t // configures the tooltip (t - lambda parameter)
            .Enabled(true) // enables the tooltip
            .Font(f => f // configures the tooltip's text (f - lambda parameter)
                .Color("blue") // paints the tooltip's text in blue
            )
        )
    )

    <!--Razor VB-->
    @(Html.DevExtreme().Chart() _
        .Legend(Sub(l)
            l.Visible(False)
        End Sub) _
        .Tooltip(Sub(t)
            t.Enabled(True) _
             .Font(Sub(f)
                 f.Color("blue")
             End Sub)
        End Sub)
    )

Options that represent item collections are configured using lambda expressions as well, but in this case, the lambda parameter performs the role of an item factory. Its `Add()` method adds a new item to the collection.

    <!--Razor C#-->
    @(Html.DevExtreme().DataGrid()
        .Columns(columns => { // specifies a collection of columns
            columns.Add() // adds the "CustomerID" column
                .DataField("CustomerID");
                
            columns.Add() // adds the "OrderDate" column
                .DataField("OrderDate")
                .DataType(GridColumnDataType.Date);
        })
    )

    <!--Razor VB-->
    @(Html.DevExtreme().DataGrid() _
        .Columns(Sub(columns)
            columns.Add() _
                .DataField("CustomerID")
                
            columns.Add() _
                .DataField("OrderDate") _
                .DataType(GridColumnDataType.Date)
        End Sub)
    )

Many item collections can be configured using strongly-typed helpers. This approach automatically adds [client-side validation](/Documentation/Guide/ASP.NET_MVC_Controls/Client-Side_Data_Validation/Overview/) based on Data Annotations, ensures compile-time type safety, and enables IntelliSense. In the following code, the **DataGrid** is strongly-typed to the type `Order`, and the columns are configured using the `AddFor()` method. Note that this and the previous codes are equivalent.

    <!--Razor C#-->
    @(Html.DevExtreme().DataGrid<Order>()
        .Columns(columns => {
            columns.AddFor(m => m.CustomerID);
                
            columns.AddFor(m => m.OrderDate)
                   .DataType(GridColumnDataType.Date);
        })
    )

    <!--Razor VB-->
    @(Html.DevExtreme().DataGrid(Of Order)() _
        .Columns(Sub(columns)
            columns.AddFor(Function(m) m.CustomerID)
                
            columns.AddFor(Function(m) m.OrderDate) _
                   .DataType(GridColumnDataType.Date)
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
