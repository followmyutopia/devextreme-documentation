DevExtreme ASP.NET MVC Wrappers mirror the [options of the client-side widgets](/Documentation/ApiReference/UI_Widgets/) with only one difference: instead of the lower camel case usual in JavaScript, wrapper methods use the upper camel case common in .NET. For example:

<div class="simple-table" style="font-size:14px; font-style:normal; text-align:center">
  <table>
    <thead>
    <tr>
      <th>Widget Option</th>
      <th>Wrapper Method</th>
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

Wrapper methods are called using a [fluent interface](https://en.wikipedia.org/wiki/Fluent_interface). In Visual Studio, IntelliSense prompts you the names of available methods, their accepted values and short descriptions.

![DevExtreme HTML5 ASPNET MVCWrappers](/Content/images/doc/16_1/Common/MvcWrappers/fluent-interface.png)

To specify a simple widget option, call the corresponding wrapper method and pass the required option value.

    @(Html.DevExtreme().Button()
        .ID("submitButton") // sets the "id" attribute of the widget container
        .Text("submit") // sets the button text
        .Width(100) // sets the button width
    )

[note]Specifying the `ID` option is not necessary, however, you may need it if you plan to access the widget JavaScript API at runtime (to [call a method](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/#Calling_Methods), for example). The value of the `ID` option should meet certain requirements. It must always be unique in the context of a page. If a partial view is loaded multiple times, each instance of this partial view must render all widgets with unique IDs. Also, the value of the `ID` option should meet the [requirements for the `id` attribute in HTML5](https://www.w3.org/TR/html5/dom.html#the-id-attribute).

Nested options are configured using lambda expressions. A lambda parameter starts a new chain of methods that specify the nested options.

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

Options that represent collections of items are configured using lambda expressions as well, but in this case, the lambda parameter performs the role of an item factory. Its `Add()` method adds a new item to the collection and then returns it for further configuration by the chain that follows.

    @(Html.DevExtreme().DataGrid()
        .Columns(columns => { // specifies a collection of columns
            columns.Add() // adds the "CustomerID" column
                .DataField("CustomerID");
                
            columns.Add() // adds the "OrderDate" column
                .DataField("OrderDate")
                .DataType(GridColumnDataType.Date);
        })
    )

Options that accept a predefined set of values are specified by .NET enums.

    @(Html.DevExtreme().DateBox()
        .Format(DateBoxFormat.Datetime) // sets the format using the DateBoxFormat .NET enum
    )
    
More examples on each case are available in our [sample application](/Documentation/Guide/ASP.NET_MVC_Wrappers/Overview/#Sample_Application).