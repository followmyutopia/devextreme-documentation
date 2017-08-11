[note]Searching works with source data of plain structure only. Subsequently, data can be transformed to hierarchical structure using the **DataSource**'s [group](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group) option.

In addition to filtering capabilities, the [DataSource](/Documentation/ApiReference/Data_Layer/DataSource/) provides the search API. It is a convenient way to augment filtering by text search. The search API consists of three options: [searchExpr](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#searchExpr), [searchOperation](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#searchOperation), and [searchValue](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#searchValue).

    <!--JavaScript-->
    var dataSource = new DevExpress.data.DataSource({
        store: [
            { firstName: "John", lastName: "Doe", birthYear: 1970 },
            . . .
        ],
        filter: [ "birthYear" , "<", 2000 ],
        searchExpr: function(dataItem) {
            return dataItem.firstName + " " + dataItem.lastName;
        }
    });

    dataSource.searchValue("doe");
    dataSource.load().done(function(result) {
        //'result' contains items whose birthYear is less then 2000 and firstName or lastName contain "doe"
    });

The default search operation is "contains". It can be changed by providing the DataSource's [searchOperation](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#searchOperation) configuration option. You can also modify the search API options via the appropriate methods: [searchExpr(expr)](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#searchExprexpr), [searchOperation(op)](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#searchOperationop), and [searchValue(value)](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#searchValuevalue).
