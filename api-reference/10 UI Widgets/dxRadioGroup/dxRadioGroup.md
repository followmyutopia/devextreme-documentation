<!--widgettree-->
dataSource: [
        { text: "red", value: "#FF0000" },
        { text: "green", value: "#00AA00" },
        { text: "blue", value: "#0000FF" }
    ]
<!--/widgettree-->
===========================================================================
<!--module-->ui/radio_group<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\Editor\Editor.md,..\DataExpressionMixin\DataExpressionMixin.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **RadioGroup** is a widget that contains a set of radio buttons and allows an end user to make a single selection from the set.
<!--/shortDescription-->

<!--fullDescription-->
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--JavaScript-->var radioGroupItems = [
        { text: "Low", color: "grey" },
        { text: "Normal", color: "green" },
        { text: "Urgent", color: "yellow" },
        { text: "High", color: "red" }
    ];
    $(function () {
        $("#radioGroup").dxRadioGroup({
            dataSource: radioGroupItems,
            displayExpr: "text",
            valueExpr: "color",
            value: "green"
        });
    });

    <!--HTML-->
    <div id="radioGroup"></div>

#####[**Angular**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <dx-radio-group
        [dataSource]="radioGroupItems"
        displayExpr="text"
        valueExpr="color"
        value="green">
    </dx-radio-group>

    <!--TypeScript-->
    export class AppComponent {
        radioGroupItems = [
            // ...
        ];
    }

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML--><div ng-controller="DemoController">
        <div dx-radio-group="{
            dataSource: radioGroupItems,
            displayExpr: 'text',
            valueExpr: 'color',
            value: 'green'
        }"></div>
    </div>

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller('DemoController', function DemoController($scope) {
            $scope.radioGroupItems = [
                // ...
            ];
        });

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  


    <!--HTML-->
    <div data-bind="dxRadioGroup: {
        dataSource: radioGroupItems,
        displayExpr: 'text',
        valueExpr: 'color',
        value: 'green'
    }"></div>

    <!--JavaScript-->var viewModel = {
        radioGroupItems: [
            // ...
        ]
    };
    ko.applyBindings(viewModel);

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().RadioGroup()
        .ID("radioGroup")
        .DisplayExpr("text")
        .ValueExpr("color")
        .Value("green")
        .DataSource(new object[] {
            new { text = "Low", color = "grey" },
            new { text = "Normal", color = "green" },
            new { text = "Urgent", color = "yellow" },
            new { text = "High", color = "red" }
        })
    )

    <!--Razor VB-->@(Html.DevExtreme().RadioGroup() _
        .ID("radioGroup") _
        .DisplayExpr("text") _
        .ValueExpr("color") _
        .Value("green") _
        .DataSource(New Object() {
            New With { .text = "Low", .color = "grey" },
            New With { .text = "Normal", .color = "green" },
            New With { .text = "Urgent", .color = "yellow" },
            New With { .text = "High", .color = "red" }
        })
    )

---

 

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/formsandmulti-purposeradiogroupradiogroupradiogroup/"
}
<a href="http://www.youtube.com/watch?v=VSr5aoDjtEk&index=6&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [RadioGroup - Overview](/Documentation/Guide/Widgets/RadioGroup/Overview/)
<!--/fullDescription-->