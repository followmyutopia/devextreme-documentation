<!--id-->dxChart.Options.valueAxis.valueType<!--/id-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--acceptValues-->'datetime' | 'numeric' | 'string'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Casts values to a specified data type.
<!--/shortDescription-->

<!--fullDescription-->
If your data source stores, for example, numbers as strings, specify the proper data type using the **valueType** option.

[note]If dates in your data source are stored as strings, make sure that they have a [valid format](http://www.w3schools.com/js/js_date_formats.asp).

#include common-ref-enum with {
    enum: "`ChartDataType`",
    values: "`Numeric`, `DateTime`, and `String`"
}

#####See Also#####
- **argumentAxis**.[argumentType](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/argumentAxis/#argumentType) - casts arguments to a proper data type.
- **valueAxis**.[type](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/valueAxis/#type) - specifies the axis type.
- **dataPrepareSettings**.[checkTypeForAllData](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/dataPrepareSettings/#checkTypeForAllData) - validates the type of each value coming from the data source.
- **dataPrepareSettings**.[convertToAxisDataType](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/dataPrepareSettings/#convertToAxisDataType) - allows you to disable the type cast in favour of the widget performance.
<!--/fullDescription-->