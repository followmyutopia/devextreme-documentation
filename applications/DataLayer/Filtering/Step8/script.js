var dataSource = new DevExpress.data.DataSource({
    store: EMPLOYEES,
    filter: ["Title", "Engineer"]
});
dataSource.on("changed", function () {
    render(["FirstName", "LastName", "Title", "City", "Department"], dataSource.items());
});
function filterData(filteringOptions) {
    dataSource.filter(filteringOptions);
    dataSource.load();
}
$(function () {
    dataSource.load();
    $("#button1").click(function () {
        filterData(["Department", "IT"]);
    });
    $("#button2").click(function () {
        filterData([["Title", "Engineer"], "||", ["Title", "Shipping Assistant"]]);
    });
    var allowedCities = ["Los Angeles", "San Marino", "Pasadena", "Bakersfield"];
    $("#button3").click(function () {
        filterData(
            [
                [
                    ["Department", "Management"],
                    "||",
                    ["Title", "contains", "Manager"]
                ],
                "&&",
                function (itemData) { return allowedCities.indexOf(itemData.City) !== -1 }
            ]
        );
    });
    //highlight
    $("#clear").click(function () {
        filterData(null);
    });
    //highlight
});
