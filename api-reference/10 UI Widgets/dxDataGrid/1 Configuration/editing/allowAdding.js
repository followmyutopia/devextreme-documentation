//<!--@Knockout-->
var myViewModel = {
    books: books,
    columns: [
        'author',
        { dataField: 'title', width: 210 },
        'year', 'genre', 'format'
    ],
    checkBoxState: ko.observable(true)
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.books = books;
    $scope.columns = [
        'author',
        { dataField: 'title', width: 210 },
        'year', 'genre', 'format'
    ];
    $scope.checkBoxState = true;
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$(function () {
    $("#gridContainer").dxDataGrid({
        dataSource: books,
        columns: [
            'author',
            { dataField: 'title', width: 210 },
            'year', 'genre', 'format'
        ],
        paging: { pageSize: 8 },
        editing: {
            allowAdding: true,
            allowDeleting: true
        }
    });

    $("#enableInsertionCheckbox").dxCheckBox({
        text: 'Enable Row Insertion',
        value: true,
        onValueChanged: function (e) {
            $('#gridContainer').dxDataGrid('instance').option("editing.allowAdding", e.value);
        }
    });
});
//<!--/@jQuery-->