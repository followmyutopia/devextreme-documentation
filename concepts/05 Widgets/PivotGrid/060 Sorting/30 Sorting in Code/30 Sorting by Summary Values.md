If you need to sort fields by summary values, change the field's [sortBySummaryField](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#sortBySummaryField) option. Set this option to the data field that provides summary values. For example, consider that a grid contains a *"Region"* field located in the row header, a *"Date"* field located in the column header, and an *"Amount"* field that provides summary values. The configuration may be as follows.

    <!--JavaScript-->var pivotGridOptions = {
        // ...
        dataSource: {
            // ...
            fields: [{
                dataField: 'Region',
                area: 'row'
            }, {
                dataField: 'Date',
                area: 'column'
            }, {
                dataField: 'Amount',
                area: 'data',
                summaryType: 'count'
            }]
        }
    };
    
In this case, to sort the *"Region"* field by summary values, call the [field(id, options)](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#fieldid_options) as shown in the code below.

    <!--JavaScript-->var pivotGridDataSource = pivotGridInstance.getDataSource();
    pivotGridDataSource.field("Region", {
        sortBySummaryField: 'Amount'
    });
    pivotGridDataSource.load();
    
The code snippet above will sort the *"Region"* field by [Grand Totals](/Documentation/Guide/Widgets/PivotGrid/Visual_Elements/#Totals). To sort the same field by Totals of a specific column, specify the path to this column using the [sortBySummaryPath](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#sortBySummaryPath) option. For example, the following code will sort the *"Region"* field by Totals of the *"2015"* column.

    <!--JavaScript-->var pivotGridDataSource = pivotGridInstance.getDataSource();
    pivotGridDataSource.field("Region", {
        sortBySummaryField: 'Amount',
        sortBySummaryPath: [2015]
    });
    pivotGridDataSource.load();
    
[note]After you have made changes in a PivotGridDataSource, call its [load()](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#load) method to refresh data in the bound **PivotGrid**.