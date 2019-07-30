<!--id-->GridBaseColumn.lookup.dataSource<!--/id-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->Array<any> | DataSource_Options | Store | function(options)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the data source for the lookup column.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts one of the following:

- **Array of objects or primitives**       
A JavaScript array that contains plain objects or primitives.

- [**DataSource configuration object**](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/)       
A **DataSource** configuration object. More information about the **DataSource** and the DevExtreme Data Layer is available in the [Data Layer](/Documentation/Guide/Data_Layer/Data_Layer/) article.

- **Store instance**     
An [ArrayStore](/Documentation/ApiReference/Data_Layer/ArrayStore/), [LocalStore](/Documentation/ApiReference/Data_Layer/LocalStore/), [ODataStore](/Documentation/ApiReference/Data_Layer/ODataStore/), or [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/) instance.

- **Function**      
A function that returns one of the above.

If the lookup data source contains objects, specify the [valueExpr]({basewidgetpath}/Configuration/columns/lookup/#valueExpr) and [displayExpr]({basewidgetpath}/Configuration/columns/lookup/#displayExpr) options in addition to the **dataSource**.

[note] Collections of primitives are not supported if they are loaded from a remote data source by using the <a href="https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/README.md" target="_blank">DevExtreme.AspNet.Data</a> library API either <a href="https://github.com/DevExpress/DevExtreme.AspNet.Data/blob/master/docs/client-side-with-jquery.md#api-reference" target="_blank">directly</a> or via a server-side wrapper, <a href="https://docs.devexpress.com/DevExtremeAspNetMvc/400704/concepts/data-binding#aspnet-mvc-and-web-api-controllers" target="_blank">as done in the DevExtreme ASP.NET MVC Controls</a>. Reconfigure the remote data source to return collections of objects.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/DataGrid/CascadingLookups/jQuery/Light/"
}

#####See Also#####
- [How to: Bind a Lookup Column to a Custom Data Source](/Documentation/Guide/Widgets/{WidgetName}/How_To/Bind_a_Lookup_Column_to_a_Custom_Data_Source/)
<!--/fullDescription-->
<!--typeFunctionParamName1-->options<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information on the current row.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->data<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->Object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The row's data.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->key<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->any<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The row's key.
<!--/typeFunctionParamDescription1_field2-->

<!--typeFunctionReturnType-->Array<any>|DataSource_Options|Store<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
An array of objects or primitives, a store instance, or a **DataSource** configuration.
<!--/typeFunctionReturnDescription-->
