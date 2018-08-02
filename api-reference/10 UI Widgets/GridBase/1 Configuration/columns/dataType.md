===========================================================================
<!--default-->undefined<!--/default-->
<!--acceptValues-->'string' | 'number' | 'date' | 'boolean' | 'object' | 'datetime'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Casts column values to a specific data type.
<!--/shortDescription-->

<!--fullDescription-->
If your data source stores, for example, numbers as strings, specify the proper data type using this option.
 
[note] Date-time values stored as strings should have one of the following formats: `"yyyy/MM/dd"`, `"yyyy/MM/dd HH:mm:ss"`, `"yyyy-MM-ddTHH:mm:ssx"` or `"yyyy-MM-ddTHH:mm:ss"`. 

#include common-ref-enum with {
    enum: "`GridColumnDataType`",
    values: "`String`, `Number`, `Date`, `DateTime`, `Boolean`, and `Object`"
}

#####See Also#####
- [Data Columns](/Documentation/Guide/Widgets/{WidgetName}/Columns/Column_Types/Data_Columns/)
<!--/fullDescription-->