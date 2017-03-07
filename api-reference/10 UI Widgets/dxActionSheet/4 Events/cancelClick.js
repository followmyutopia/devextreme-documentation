//<!--@Knockout-->
var viewModel = {
    actionSheetVisible: ko.observable(false),
    instance: {},
    actionSheetData: [
        { text: "Reply" },
        { text: "ReplyAll" },
        { text: "Forward" },
        { text: "Delete" }
    ],
    showActionSheet: function () {
        viewModel.actionSheetVisible(true);
    },
    onInitialized: function (e) {
        viewModel.instance = e.component;
        viewModel.instance.on('cancelClick', function (args) {
            DevExpress.ui.notify("Cancel button has been clicked.", "info", 1000);
        });
    }
};

ko.applyBindings(viewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.buttonInstance = {};
    $scope.onInitialized = function (e) {
        $scope.buttonInstance = e.component;
        $scope.buttonInstance.on('cancelClick', function (args) {
            DevExpress.ui.notify("Cancel button has been clicked.", "info", 1000);
        });
    };
    $scope.actionSheetVisible = false;
    $scope.actionSheetCancelText = "Cancel";
    $scope.actionSheetData = [
        { text: "Reply" },
        { text: "ReplyAll" },
        { text: "Forward" },
        { text: "Delete" }
    ];
    $scope.showActionSheet = function () {
        $scope.actionSheetVisible = true;
    };

});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$(function () {
    $("#myButton").dxButton({
        text: 'Show action sheet',
        onClick: function () {
            $('#actionSheetContainer').dxActionSheet("instance").show();
        }
    });
    $("#actionSheetContainer").dxActionSheet({
        dataSource: [
            { text: "Reply" },
            { text: "ReplyAll" },
            { text: "Forward" },
            { text: "Delete" }
        ],
        title: 'Choose action',
        showTitle: true
    });
    $('#actionSheetContainer').dxActionSheet("instance").on('cancelClick', function (args) {
        DevExpress.ui.notify("Cancel button has been clicked.", "info", 1000);
    });
});
//<!--/@jQuery-->
