var initialTop,
    initialLeft,
    initialPointerY,
    initialPointerX,
    draggedColor = "red";
//<!--@Knockout-->

dragStarted = function () {
    $("#innerElement").css("background-color", draggedColor);
    initialTop = parseInt($("#innerElement").css("top"));
    initialLeft = parseInt($("#innerElement").css("left"));
    initialPointerY = arguments[1].clientY;
    initialPointerX = arguments[1].clientX;
};
dragged = function () {
    $("#innerElement").css("top", initialTop + arguments[1].clientY - initialPointerY);
    $("#innerElement").css("left", initialLeft + arguments[1].clientX - initialPointerX);
};
dragStopped = function () {
    $("#innerElement").css("background-color", "green");
};
dragEnter = function () {
    draggedColor = "red";
    $("#innerElement").css("background-color", draggedColor);
};
dragLeave = function () {
    draggedColor = "yellow";
    $("#innerElement").css("background-color", draggedColor);
};
dropped = function () {
    DevExpress.ui.notify("The dragged element is dropped on the yellow element.", "success", 1000);
};
//<!--/@Knockout-->
//<!--@AngularJS-->

var initialTop,
    initialLeft,
    initialPointerY,
    initialPointerX,
    draggedColor = "red";

var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.dragStarted = function () {
        $("#innerElement").css("background-color", draggedColor);
        initialTop = parseInt($("#innerElement").css("top"));
        initialLeft = parseInt($("#innerElement").css("left"));
        initialPointerY = arguments[0].clientY;
        initialPointerX = arguments[0].clientX;
    };
    $scope.dragged = function () {
        $("#innerElement").css("top", initialTop + arguments[0].clientY - initialPointerY);
        $("#innerElement").css("left", initialLeft + arguments[0].clientX - initialPointerX);
    };
    $scope.dragStopped = function () {
        $("#innerElement").css("background-color", "green");
    };
    $scope.dragEnter = function () {
        draggedColor = "red";
        $("#innerElement").css("background-color", draggedColor);
    };
    $scope.dragLeave = function () {
        draggedColor = "yellow";
        $("#innerElement").css("background-color", draggedColor);
    };
    $scope.dropped = function () {
        DevExpress.ui.notify("The dragged element is dropped on the yellow element.", "success", 1000);
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->

var dragStarted = function () {
    $("#innerElement").css("background-color", draggedColor);
    initialTop = parseInt($("#innerElement").css("top"));
    initialLeft = parseInt($("#innerElement").css("left"));
    console.log(arguments);
    initialPointerY = arguments[0].clientY;
    initialPointerX = arguments[0].clientX;
};
var dragged = function () {
    $("#innerElement").css("top", initialTop + arguments[0].clientY - initialPointerY);
    $("#innerElement").css("left", initialLeft + arguments[0].clientX - initialPointerX);
};
var dragStopped = function () {
    $("#innerElement").css("background-color", "green");
};
var dragEnter = function () {
    draggedColor = "red";
    $("#innerElement").css("background-color", draggedColor);
};
var dragLeave = function () {
    draggedColor = "yellow";
    $("#innerElement").css("background-color", draggedColor);
};
var dropped = function () {
    DevExpress.ui.notify("The dragged element is dropped on the yellow element.", "success", 1000);
};

$("#myElement").on({
    "dxdragenter": dragEnter,
    "dxdragleave": dragLeave,
    "dxdrop": dropped
});
$("#innerElement").on({
    "dxdrag": dragged,
    "dxdragstart": dragStarted,
    "dxdragend": dragStopped
});
//<!--/@jQuery-->
