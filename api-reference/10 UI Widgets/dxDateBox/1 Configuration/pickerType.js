//<!--@Knockout-->
ko.applyBindings();
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function () {});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#nativePicker").dxDateBox({
    pickerType: "native",
    type: "datetime"
});
$("#calendarPicker").dxDateBox({
    pickerType: "calendar",
    type: "date"
});
$("#rollersPicker").dxDateBox({
    pickerType: "rollers",
    type: "datetime"
});
$("#listPicker").dxDateBox({
    pickerType: "list",
    type: "time"
});
//<!--/@jQuery-->