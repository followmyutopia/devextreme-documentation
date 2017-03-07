The **ContextMenu** widget is not supposed to be opened programmatically, but rare scenarios demand this. This article shows how to do this using the **Button** widget. This choice is made for purely demonstrational purposes, and you can do the same with another widget following the same guidelines.

#####See Also#####
- [ContextMenu - Overview](/Documentation/Guide/Widgets/ContextMenu/Overview/)
- [Button - Overview](/Documentation/Guide/Widgets/Button/Overview/)

To open or close the **ContextMenu** from code, call the [show()](/Documentation/ApiReference/UI_Widgets/dxContextMenu/Methods/#show) or [hide()](/Documentation/ApiReference/UI_Widgets/dxContextMenu/Methods/#hide) method. You can do the same thing using the [toggle(showing)](/Documentation/ApiReference/UI_Widgets/dxContextMenu/Methods/#toggle) method. Pass *true* or *false* to this method to open or close the context menu, respectively.

    <!--JavaScript-->var contextMenuItems = [
        { text: "Zoom In", icon: "plus" },
        { text: "Share", icon: "message" },
        { text: "Download", icon: "download" }
    ];

    $(function () {
        $("#buttonContainer").dxButton({
            text: "Open the context menu",
            onClick: function () {
                $("#contextMenuContainer").dxContextMenu("show");
                // ---------- or ----------
                $("#contextMenuContainer").dxContextMenu("toggle", true);
            }
        });

        $("#contextMenuContainer").dxContextMenu({
            items: contextMenuItems,
            target: "#someElement"
        });
    });

When using AngularJS or Knockout, use a different approach. Bind the [visible](/Documentation/ApiReference/UI_Widgets/dxContextMenu/Configuration/#visible) property of the **ContextMenu** widget to a scope property (in AngularJS) or an observable variable (in Knockout). After that, change this scope property or observable variable, and the context menu will be opened or closed.

**AngularJS**

    <!--HTML--><div ng-controller="DemoController">
        <div dx-button="{
            text: 'Open the context menu',
            onClick: showContextMenu
        }"></div>
        <div dx-context-menu="{
            items: contextMenuItems,
            target: '#someElement',
            bindingOptions: {
                visible: 'isContextMenuVisible'
            }
        }"></div>
    </div>

<!---->

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller('DemoController', function DemoController($scope) {
            $scope.contextMenuItems = [
                { text: "Zoom In", icon: "plus" },
                { text: "Share", icon: "message" },
                { text: "Download", icon: "download" }
            ];
            $scope.isContextMenuVisible = false;
            $scope.showContextMenu = function () {
                $scope.isContextMenuVisible = true;
            }
        });

**Knockout**

    <!--HTML--><div data-bind="dxButton: {
        text: 'Open the context menu',
        onClick: function (e) {
            e.model.isContextMenuVisible(true);
        }
    }"></div>
    <div data-bind="dxContextMenu: {
        items: contextMenuItems,
        target: '#someElement',
        visible: isContextMenuVisible
    }"></div>

<!---->

    <!--JavaScript-->var viewModel = {
        contextMenuItems: [
            { text: "Zoom In", icon: "plus" },
            { text: "Share", icon: "message" },
            { text: "Download", icon: "download" }
        ],
        isContextMenuVisible: ko.observable(false)
    };

    ko.applyBindings(viewModel);

When invoking the context menu from code, you may want to specify its [position](/Documentation/ApiReference/UI_Widgets/dxContextMenu/Configuration/#position).

    <!--JavaScript-->$(function () {
        $("#buttonContainer").dxButton({
            text: "Open the context menu",
            onClick: function () {
                $("#contextMenuContainer").dxContextMenu("show");
            }
        });

        $("#contextMenuContainer").dxContextMenu({
            items: contextMenuItems,
            target: "#someElement",
            position: {
                my: "top right",
                at: "top left"
            }
        });
    });

This configuration of the **position** option reads as follows: "place **my** _top right_ corner **at** the _top left_ corner of the target element".