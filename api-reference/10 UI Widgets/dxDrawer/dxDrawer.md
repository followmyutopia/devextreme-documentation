===========================================================================
<!--module-->ui/drawer<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\Widget\Widget.md<!--/inherits-->
===========================================================================

<!--shortDescription-->
The **Drawer** is a dismissible or permanently visible panel used for navigation in responsive web application layouts.
<!--/shortDescription-->

<!--fullDescription-->
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--JavaScript-->$(function() {
        var drawer = $("#drawer").dxDrawer({
            openedStateMode: "shrink",
            revealMode: "expand",
            opened: true,
            maxSize: 200,
            minSize: 50,
            template: function($content) {
                var $list = $("<div/>");
                $list.dxList({
                    dataSource: [
                        { id: 1, text: "Inbox"},
                        { id: 2, text: "Sent Mail"},
                        { id: 3, text: "Trash"},
                        { id: 4, text: "Spam"}
                    ],
                    width: 200
                });
                return $list;
            }
        }).dxDrawer("instance"); 
        var button = $("#button").dxButton({
            text: "Close Drawer",
            onClick: function(e) {
                var opened = drawer.option("opened");
                var text = opened ? "Open Drawer" : "Close Drawer";
                button.option("text", text);
                drawer.toggle(!opened);
            }
        }).dxButton("instance");
    });

    <!--HTML-->
    <div id="button"></div>
    <div id="drawer">Here is the view content.</div>

#####[**Angular**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/) 

    <!--HTML-->
    <dx-button
        [(text)]="text"
        (onClick)="clickHandler">
    </dx-button>
    <dx-drawer
        openedStateMode="shrink"
        revealMode="expand"
        [maxSize]="200"
        [minSize]="50"
        [(opened)]="isOpened">
        Here is the view content.
        <div *dxTemplate="let data of 'template'">
            <dx-list 
                [dataSource]="navigation"
                [width]="200">
            </dx-list>
        </div>
    </dx-drawer>

    <!--TypeScript-->
    import { DxDrawerModule, DxListModule, DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        navigation = [
            { id: 1, text: "Inbox"},
            { id: 2, text: "Sent Mail"},
            { id: 3, text: "Trash"},
            { id: 4, text: "Spam"}
        ];
        text = "Close Drawer";
        isOpened: boolean = true;
        clickHandler() {
            this.text = this.isOpened ? "Open Drawer" : "Close Drawer";
            this.isOpened = !this.isOpened;
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDrawerModule, 
            DxListModule, 
            DxButtonModule
        ],
        // ...
    })

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-button="{
            onClick: clickHandler,
            bindingOptions: { text: 'text' }
        }"></div>
        <div dx-drawer="{
            openedStateMode: 'shrink',
            revealMode: 'expand',
            maxSize: 200,
            minSize: 50,
            template: 'template',
            bindingOptions: { opened: 'isOpened' }
        }">
            Here is the view contnet    
            <div data-options="dxTemplate: { name: 'template' }">
                <div dx-list="{
                    dataSource: navigation,
                    width: 200
                }"></div>
            </div>
        </div>
    </div>

    <!--JavaScript-->
    angular.module("DemoApp", ["dx"])
        .controller("DemoController", function ($scope) {
            $scope.text = "Close Drawer";
            $scope.isOpened = true;
            $scope.navigation = [
                { id: 1, text: "Inbox"},
                { id: 2, text: "Sent Mail"},
                { id: 3, text: "Trash"},
                { id: 4, text: "Spam"}
            ];
            $scope.clickHandler = function() {
                $scope.text = $scope.isOpened ? "Open Drawer" : "Close Drawer";
                $scope.isOpened = !$scope.isOpened;
            }
        });

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/) 

    <!--HTML-->
    <div data-bind="dxButton: {
        text: text,
        onClick: clickHandler
    }"></div>
    <div data-bind="dxDrawer: {
        maxSize: 200,
        minSize: 50,
        opened: isOpened,
        openedStateMode: 'shrink',
        revealMode: 'expand',
        template: 'template'
    }">
        Here is the view content.
        <div data-options="dxTemplate: { name: 'template' }">
            <div data-bind="dxList: {
                dataSource: navigation
            }"></div>
        </div>
    </div>

    <!--JavaScript-->
    var viewModel = {
        isOpened: ko.observable(true),
        navigation: [
            { id: 1, text: "Inbox"},
            { id: 2, text: "Sent Mail"},
            { id: 3, text: "Trash"},
            { id: 4, text: "Spam"}
        ],
        maxSize: 200,
        minSize: 50,
        text: ko.observable("Close Drawer"),
        clickHandler: function() {
            viewModel.text(viewModel.isOpened() ? "Open Drawer" : "Close Drawer");
            viewModel.isOpened(!viewModel.isOpened());
        }
    };
    ko.applyBindings(viewModel);

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)
    
    <!--Razor C#-->
    @(Html.DevExtreme().Button()
        .ID("button")
        .Text("Close Drawer")
        .onClick("button_clickHandler")
    )
    @(Html.DevExtreme().Drawer()
        .ID("drawer")
        .OpenedStateMode(DrawerOpenedStateMode.Shrink)
        .RevealMode(DrawerRevealMode.Expand)
        .Opened(true)
        .MaxSize(200)
        .MinSize(100)
        .Template(@<text>
            @(Html.DevExtreme().List()
                .DataSource(new JS("navigation"))
                .Width(200)
            )
        </text>)
        .ContentTemplate(@<text>
            <p>Here is the view content</p>
        </text>)
    )

    <script>
        var navigation = [
            { id: 1, text: "Inbox"},
            { id: 2, text: "Sent Mail"},
            { id: 3, text: "Trash"},
            { id: 4, text: "Spam"}
        ];
        function button_clickHandler() {
            var drawer = $("#drawer").dxDrawer("instance");
            var opened = drawer.option("opened");
            var text = opened ? "Open Drawer" : "Close Drawer";
            button.option("text", text);
            drawer.toggle(!opened);
        }
    </script>

    <!--Razor VB-->
    @Code
        Html.DevExtreme().Button() _
            .ID("button") _
            .Text("Close Drawer") _
            .onClick("button_clickHandler")
    End Code
    @Code
        Html.DevExtreme().DropDownBox() _
            .ID("drawer") _
            .OpenedStateMode(DrawerOpenedStateMode.Shrink) _
            .RevealMode(DrawerRevealMode.Expand) _
            .Opened(True) _
            .MaxSize(200) _
            .MinSize(100) _
            .Template(Sub()
                @<text>
                    @Html.DevExtreme().List() _
                        .DataSource(New JS("navigation")) _
                        .Width(200)
                </text>
            End Sub).Render()
            .ContentTemplate(Sub()
                @<text>
                    <p>Here is the view content</p>
                </text>
            End Sub).Render()
    End Code

    <script>
        var navigation = [
            { id: 1, text: "Inbox"},
            { id: 2, text: "Sent Mail"},
            { id: 3, text: "Trash"},
            { id: 4, text: "Spam"}
        ];
        function button_clickHandler() {
            var drawer = $("#drawer").dxDrawer("instance");
            var opened = drawer.option("opened");
            var text = drawer.option("opened") ? "Open Drawer" : "Close Drawer";
            button.option("text", text);
            drawer.toggle(!opened);
        }
    </script>

---


<!--/fullDescription-->