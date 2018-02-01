//<!--@Knockout-->
var myViewModel = {
    autocompleteDataSource: new DevExpress.data.DataSource([]),
    events: ["change", "blur", "input", "keyup"],
    currentEvent: ko.observable("change"),
    valueChanged: function (e) {
        DevExpress.ui.notify("New widget value is \"" + e.value + "\"", "info", 2000);
    }
}
ko.applyBindings(myViewModel);
//Loads json data and passes it to the DataSource
$.get("/Content/data/countries.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        myViewModel.autocompleteDataSource.store().insert(data[i]);
    }
    myViewModel.autocompleteDataSource.load();
}, "json");
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.autocompleteDataSource = new DevExpress.data.DataSource([]);
    $scope.events = ["change", "blur", "input", "keyup"];
    $scope.currentEvent = "change";
    $scope.valueChanged = function (e) {
        DevExpress.ui.notify("New widget value is \"" + e.value + "\"", "info", 2000);
    };
    //Loads json data and passes it to the DataSource
    $.get("/Content/data/countries.txt", function (data) {
        for (var i = 0; i < data.length; i++) {
            $scope.autocompleteDataSource.store().insert(data[i]);
        }
        $scope.autocompleteDataSource.load();
    }, "json");
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
var autocompleteData = new DevExpress.data.DataSource([]);
$("#myAutocomplete").dxAutocomplete({
    dataSource: autocompleteData,
    valueExpr: 'country',
    placeholder: 'Type country name',
    valueChangeEvent: 'change',
    itemTemplate: function (itemData, itemIndex, itemElement) {
        itemElement.append("Country: <b>" + itemData.country + "</b><br/>\
        <span style=\"color:grey;\">Capital: " + itemData.capital + "</span>");
    },
    onValueChanged: function (e) {
        DevExpress.ui.notify("New widget value is \"" + e.value + "\"", "info", 2000);
    }
});
$("#eventSelector").dxSelectBox({
    dataSource: ["change", "blur", "input", "keyup"],
    value: "change",
    onValueChanged: function (e) {
        $("#myAutocomplete").dxAutocomplete("instance").option("valueChangeEvent", e.value);
    }
});
//Loads json data and passes it to the DataSource
$.get("/Content/data/countries.txt", function (data) {
    for (var i = 0; i < data.length; i++) {
        autocompleteData.store().insert(data[i]);
    }
    autocompleteData.load();
}, "json");
//<!--/@jQuery-->