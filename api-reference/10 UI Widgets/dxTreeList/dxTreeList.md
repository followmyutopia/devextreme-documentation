<!--widgettree-->
dataSource: 
[{
      id:1, parentId: 0, fullName:"John Heart", position:"CEO", email:"jheart@dx-email.com"
    }, {
      id:2, parentId: 1, fullName:"Samantha Bright", position:"COO", email:"samanthab@dx-email.com"
    }, {
      id:3, parentId: 1, fullName:"Arthur Miller", position:"CTO", email:"arthurm@dx-email.com"
    }, {
      id:4, parentId: 1, fullName:"Robert Reagan", position:"CMO", email:"robertr@dx-email.com"
    }, {
      id:5, parentId: 2, fullName:"Greta Sims", position:"HR Manager", email:"gretas@dx-email.com"
}],
autoExpandAll: true,
showRowLines: true,
columns: ["position", "fullName", "email"]
<!--/widgettree-->
===========================================================================
<!--module-->ui/tree_list<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\GridBase\GridBase.md<!--/inherits-->
<!--lib-->
dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **TreeList** is a widget that represents data from a local or remote source in the form of a multi-column tree view. This widget offers such features as sorting, filtering, editing, selection, etc.
<!--/shortDescription-->

<!--fullDescription-->
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--JavaScript-->$(function () {
        $("#treeList").dxTreeList({
            dataSource: [
                { key: "1", fullName: "John Heart", position: "CEO" }, 
                { key: "1_1", head: "1", fullName: "Samantha Bright", position: "COO" }, 
                { key: "2_1", head: "2", fullName: "Robert Reagan", position: "CMO" }, 
                { key: "2", fullName: "Greta Sims", position: "HR Manager" }
            ],
            keyExpr: "key",
            parentIdExpr: "head",
            columns: ["fullName", "position"]
        });
    });

    <!--HTML--><div id="treeList"></div>

#####[**Angular**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <dx-tree-list 
        [dataSource]="employees"
        keyExpr="key"
        parentIdExpr="head">
        <dxi-column dataField="fullName"></dxi-column>
        <dxi-column dataField="position"></dxi-column>
    </dx-tree-list>

    <!--TypeScript-->
    export class AppComponent {
        employees = [
            { key: "1", fullName: "John Heart", position: "CEO" }, 
            { key: "1_1", head: "1", fullName: "Samantha Bright", position: "COO" }, 
            { key: "2_1", head: "2", fullName: "Robert Reagan", position: "CMO" }, 
            { key: "2", fullName: "Greta Sims", position: "HR Manager" }
        ];
    }

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML--><div ng-controller="DemoController">
        <div dx-tree-list="{
            dataSource: employees,
            keyExpr: 'key',
            parentIdExpr: 'head',
            columns: ['fullName', 'position']
        }"></div>
    </div>

    <!--JavaScript-->angular.module("DemoApp", ["dx"])
        .controller("DemoController", function ($scope) {
            $scope.employees = [
                { key: "1", fullName: "John Heart", position: "CEO" }, 
                { key: "1_1", head: "1", fullName: "Samantha Bright", position: "COO" }, 
                { key: "2_1", head: "2", fullName: "Robert Reagan", position: "CMO" }, 
                { key: "2", fullName: "Greta Sims", position: "HR Manager" }
            ];
        });

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

    <!--HTML--><div data-bind="dxTreeList: {
        dataSource: employees,
        keyExpr: 'key',
        parentIdExpr: 'head',
        columns: ['fullName', 'position']
    }"></div>

    <!--JavaScript-->var viewModel = {
        employees: [
            { key: "1", fullName: "John Heart", position: "CEO" }, 
            { key: "1_1", head: "1", fullName: "Samantha Bright", position: "COO" }, 
            { key: "2_1", head: "2", fullName: "Robert Reagan", position: "CMO" }, 
            { key: "2", fullName: "Greta Sims", position: "HR Manager" }
        ]
    };
    ko.applyBindings(viewModel);

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().TreeList()
        .ID("treeList")
        .DataSource(new object[] {
            new { key = "1", fullName = "John Heart", position = "CEO" },
            new { key = "1_1", head = "1", fullName = "Samantha Bright", position = "COO" },
            new { key = "2_1", head = "2", fullName = "Robert Reagan", position = "CMO" },
            new { key = "2", fullName = "Greta Sims", position = "HR Manager" }
        }, "key")
        .ParentIdExpr("head")
        .Columns(columns =>
        {
            columns.Add().DataField("fullName");
            columns.Add().DataField("position");
        })
    )

    <!--Razor VB-->@(Html.DevExtreme().TreeList() _
        .ID("treeList") _
        .DataSource({
            New With { .key = "1", .fullName = "John Heart", .position = "CEO" },
            New With { .key = "1_1", .head = "1", .fullName = "Samantha Bright", .position = "COO" },
            New With { .key = "2_1", .head = "2", .fullName = "Robert Reagan", .position = "CMO" },
            New With { .key = "2", .fullName = "Greta Sims", .position = "HR Manager" }
        }, "key") _
        .ParentIdExpr("head") _
        .Columns(Sub(columns)
            columns.Add().DataField("fullName")
            columns.Add().DataField("position")
        End Sub)
    )

---

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Tree_List/LocalDataPlainStructure/jQuery/Light/"
}
<a href="https://www.youtube.com/watch?v=jiqYFESy_Hw&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [TreeList - Overview](/Documentation/Guide/Widgets/TreeList/Overview/)
- [TreeList - Data Binding](/Documentation/Guide/Widgets/TreeList/Data_Binding/)
- [ASP.NET MVC Controls - Data Binding](/Documentation/Guide/ASP.NET_MVC_Controls/Data_Binding/)
<!--/fullDescription-->