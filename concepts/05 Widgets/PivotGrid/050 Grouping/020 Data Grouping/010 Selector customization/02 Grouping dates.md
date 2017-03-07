To configure the data selector for [dates](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#dataType), assign one of the following strings to the [groupInterval](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#groupInterval) option.

- "*year*" &#8212 groups by years
- "*quarter*" &#8212 groups by quarters
- "*month*" &#8212 groups by months
- "*day*" &#8212 groups by days
- "*dayOfWeek*" &#8212 groups by days of the week

A sample column area configuration is presented below.

    <!--JavaScript-->var pivotGridOptions = {
        dataSource: {
            // ...
            fields: [
                // ...
                { area: "column", dataField: "OrderDate", dataType: "date", groupInterval: "year" },
                { area: "column", dataField: "OrderDate", dataType: "date", groupInterval: "quarter" },
                { area: "column", dataField: "OrderDate", dataType: "date", groupInterval: "month" },
                { area: "column", dataField: "OrderDate", dataType: "date", groupInterval: "day" }
            ]
        }
    }