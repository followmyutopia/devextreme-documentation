If you need to split data into groups in a custom way, implement a [selector](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#selector) function. In this function, check the current field's value and return the group to which this value belongs. The default selector function acts in the following way.

1. The [dataField](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#dataField) value is acquired from the [dataSource](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/Configuration/#dataSource).
2. The acquired value is casted to the type specified in the [dataType](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#dataType) option.
3. The header item value is calculated according to existing items and the [groupInterval](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#groupInterval) value.

When implementing your own selector function, follow a procedure similar to the one described above. Keep in mind that the [dataType](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#dataType) and [groupInterval](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#groupInterval) options are ignored when the [selector](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#selector) function is defined. Also, the field's current value is not passed to the selector function explicitly, you should manually take it from the data source. This will allow you to build a selector for grouping data based on the values of several fields.

For instance, the alphabetic selector for strings can be implemented as follows.

    <!--JavaScript-->function(data){
        return data.name.charAt(0).toUpperCase()
    }

By default, values returned by the **selector** function are displayed in the UI as group names. If you need to change the text to be displayed in header groups, implement the [customizeText](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#customizeText) function.