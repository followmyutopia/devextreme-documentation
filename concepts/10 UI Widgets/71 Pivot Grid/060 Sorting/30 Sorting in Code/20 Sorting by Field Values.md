To sort row or column fields by their own values, change the [sortOrder](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#sortOrder) option of the required field. For this purpose, call the [field(id, options)](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#fieldid_options) method. For example, the following code sorts the *"Region"* field in descending order.

    <!--JavaScript-->var pivotGridDataSource = pivotGridInstance.getDataSource();
    pivotGridDataSource.field("Region", {
        sortOrder: 'desc'
    });
    pivotGridDataSource.load();
    
[note]After you have made changes in a PivotGridDataSource, call its [load()](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Methods/#load) method to refresh data in the bound **PivotGrid**.