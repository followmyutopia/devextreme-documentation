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
    <div id="drawer"><span>Here is the view content.</span></div>

#####[**Angular**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/) 

    <!--HTML-->
    <dx-button
        [(text)]="text"
        (onClick)="clickHandler()">
    </dx-button>
    <dx-drawer
        openedStateMode="shrink"
        revealMode="expand"
        [maxSize]="200"
        [minSize]="50"
        [(opened)]="isOpened"
        template="drawerTemplate">
        <span>Here is the view content.</span>
        <div *dxTemplate="let data of 'drawerTemplate'">
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
            template: 'drawerTemplate',
            bindingOptions: { opened: 'isOpened' }
        }">
            <span>Here is the view content.</span>
            <div data-options="dxTemplate: { name: 'drawerTemplate' }">
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
        template: 'drawerTemplate'
    }">
        <span>Here is the view content.</span>
        <div data-options="dxTemplate: { name: 'drawerTemplate' }">
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
            <span>Here is the view content</span>
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
                    <span>Here is the view content</span>
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

##### Vue

    <template>
        <div>
            <dx-button
            :text="text"
            @click="clickHandler" />
            <dx-drawer
                opened-state-mode="shrink"
                reveal-mode="expand"
                :max-size="200"
                :min-size="50"
                :opened="isOpened"
                template="drawerTemplate">
                <div slot="drawerTemplate" slot-scope="data">
                    <dx-list
                        :data-source="navigation"
                        :width="200">
                    </dx-list>
                </div>
                <span>Here is the view content.</span>
            </dx-drawer>
        </div>
    </template>
    <script>
    import DxDrawer from "devextreme-vue/drawer";
    import DxButton from "devextreme-vue/button";
    import DxList from "devextreme-vue/list";

    export default {
        components: {
            DxDrawer,
            DxButton,
            DxList
        },
        methods: {
            clickHandler: function() {
                this.text = this.isOpened ? "Open Drawer" : "Close Drawer";
                this.isOpened = !this.isOpened;
            }
        },
        data() {
            return {
                isOpened: true,
                text: "Close Drawer",
                navigation: [
                    { id: 1, text: "Inbox"},
                    { id: 2, text: "Sent Mail"},
                    { id: 3, text: "Trash"},
                    { id: 4, text: "Spam"}
                ]
            };
        }
    }
    </script>

##### React

    import React from "react";
    import Drawer from "devextreme-react/drawer";
    import Button from "devextreme-react/button";
    import List from "devextreme-react/list";

    const navigation = [
        { id: 1, text: "Inbox"},
        { id: 2, text: "Sent Mail"},
        { id: 3, text: "Trash"},
        { id: 4, text: "Spam"}
    ];
    function renderDrawer() {
        return <List dataSource={navigation} width={200} />;
    }
    class App extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                isOpened: true,
                text: "Close Drawer"
            };
            this.clickHandler = this.clickHandler.bind(this);
        }
        clickHandler() {
            this.setState({
                text: this.state.isOpened ? "Open Drawer" : "Close Drawer",
                isOpened: !this.state.isOpened
            });
        }
        render() {
            return (
                <div>
                    <Button 
                        text={this.state.text} 
                        onClick={this.clickHandler} />
                    <Drawer
                        openedStateMode={"shrink"}
                        revealMode={"expand"}
                        maxSize={200}
                        minSize={50}
                        opened={this.state.isOpened}
                        render={renderDrawer}>
                        <span>Here is the view content.</span>
                    </Drawer>
                </div>
            );
        }
    }
    export default App;

---

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Drawer/HorizontalOpening/jQuery/Light/"
}

#####See Also#####
- **Configure a Widget**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/) | [ASP.NET MVC](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Specifying_the_Options)
<!--/fullDescription-->