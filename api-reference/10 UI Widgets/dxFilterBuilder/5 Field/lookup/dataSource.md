===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->Array<any> | DataSource_Options<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the lookup data source.
<!--/shortDescription-->

<!--fullDescription-->
- **Array of Objects**       
A simple JavaScript array containing a collection of plain objects.

- [**DataSource Configuration Object**](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/)       
The [DataSource's](/Documentation/ApiReference/Data_Layer/DataSource/) configuration object. Learn more about the **DataSource** and the DevExtreme Data Layer concept from the [Data Layer](/Documentation/Guide/Data_Layer/Data_Layer/) topic.

    [note] When using a [CustomStore](/Documentation/ApiReference/Data_Layer/CustomStore/) for the lookup data source, you must implement the [load](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#load) and [byKey](/Documentation/ApiReference/Data_Layer/CustomStore/Configuration/#byKey) functions.

The lookup data source must contain fields assigned to the [valueExpr](/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Field/lookup/#valueExpr) and [displayExpr](/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Field/lookup/#displayExpr) options.

#####See Also#####
- [Data Layer](/Documentation/Guide/Data_Layer/Data_Layer/)
- [DataSource Examples](/Documentation/Guide/Data_Layer/Data_Source_Examples/)
<!--/fullDescription-->