//<!--@Knockout-->
var myViewModel = {
    menuItems: [
        {
            text: "Tutorials",
            items: [
                { text: "VS Integration" },
                { text: "UI Widgets" },
                { text: "Data Visualization" },
                { text: "Data Layer" }
            ]
        },
        {
            text: "Guides",
            items: [
                { text: "Demos Inside" },
                { text: "UI Widgets" },
                { text: "Data Visualization" },
                { text: "Themes" },
                { text: "Common" }
            ]
        },
        {
            text: "Reference",
            items: [
                { text: 'Data Library' },
                { text: 'UI Widgets' },
                { text: 'Data Visualization Widgets' },
                { text: 'CSS Classes' },
                { text: 'UI Events' }
            ]
        }
    ],
    rtlEnabledValue: ko.observable(false)
}
ko.applyBindings(myViewModel);
//<!--/@Knockout-->
//<!--@AngularJS-->
var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.menuItems = [
        {
            text: "Tutorials",
            items: [
                { text: "VS Integration" },
                { text: "UI Widgets" },
                { text: "Data Visualization" },
                { text: "Data Layer" }
            ]
        },
        {
            text: "Guides",
            items: [
                { text: "Demos Inside" },
                { text: "UI Widgets" },
                { text: "Data Visualization" },
                { text: "Themes" },
                { text: "Common" }
            ]
        },
        {
            text: "Reference",
            items: [
                { text: 'Data Library' },
                { text: 'UI Widgets' },
                { text: 'Data Visualization Widgets' },
                { text: 'CSS Classes' },
                { text: 'UI Events' }
            ]
        }
    ];
    $scope.rtlEnabledValue = false;
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
//<!--/@AngularJS-->
//<!--@jQuery-->
$("#myMenu").dxMenu({
    items: [
        {
            text: "Tutorials",
            items: [
                { text: "VS Integration" },
                { text: "UI Widgets" },
                { text: "Data Visualization" },
                { text: "Data Layer" }
            ]
        },
        {
            text: "Guides",
            items: [
                { text: "Demos Inside" },
                { text: "UI Widgets" },
                { text: "Data Visualization" },
                { text: "Themes" },
                { text: "Common" }
            ]
        },
        {
            text: "Reference",
            items: [
                { text: 'Data Library' },
                { text: 'UI Widgets' },
                { text: 'Data Visualization Widgets' },
                { text: 'CSS Classes' },
                { text: 'UI Events' }
            ]
        }
    ]
});
$("#rtlSelector").dxCheckBox({
    text: "rtlEnabled",
    value: false,
    onValueChanged: function (e) {
        $("#myMenu").dxMenu("instance").option("rtlEnabled", e.value);
    }
});
//<!--/@jQuery-->