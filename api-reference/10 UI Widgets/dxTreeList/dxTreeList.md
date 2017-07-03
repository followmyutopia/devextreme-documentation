<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
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
===========================================================================

<!--shortDescription-->
The **TreeList** is a widget that represents data from a local or remote source in the form of a multi-column tree view. This widget offers such features as sorting, filtering, editing, selection, etc.
<!--/shortDescription-->

<!--fullDescription-->
You can create this widget using one of the following approaches.

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--JavaScript-->$(function () {
        $("#treeList").dxTreeList({
            dataSource: customers,
            columns: ['CompanyName', 'City', 'State', 'Phone', 'Fax']
        });
    });

    <!--HTML--><div id="treeList"></div>

#####[**Angular**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <dx-tree-list [dataSource]="customers">
        <dxi-column dataField="CompanyName"></dxi-column>
        <dxi-column dataField="City"></dxi-column>
        <dxi-column dataField="State"></dxi-column>
        <dxi-column dataField="Phone"></dxi-column>
        <dxi-column dataField="Fax"></dxi-column>
    </dx-tree-list>

    <!--TypeScript-->
    export class AppComponent {
        customers = [
            // ...   
        ];
    }

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML--><div ng-controller="DemoController">
        <div dx-tree-list="{
            dataSource: customers,
            columns: ['CompanyName', 'City', 'State', 'Phone', 'Fax']
        }"></div>
    </div>

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller("DemoController", function ($scope) {
            $scope.customers = [
                // ...   
            ];
        });

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

    <!--HTML--><div data-bind="dxTreeList: {
        dataSource: customers,
        columns: ['CompanyName', 'City', 'State', 'Phone', 'Fax']
    }"></div>

    <!--JavaScript-->var viewModel = {
        customers: [
            // ...
        ]
    };
    ko.applyBindings(viewModel);

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().TreeList()
        .ID("treeList")
        .DataSource(Customers)
        .Columns(columns => {
            columns.Add().DataField("CompanyName");
            columns.Add().DataField("City");
            columns.Add().DataField("State");
            columns.Add().DataField("Phone");
            columns.Add().DataField("Fax");
        })
    )

    <!--Razor VB-->@(Html.DevExtreme().TreeList() _
        .ID("treeList") _
        .DataSource(Customers) _
        .Columns(Sub(columns)
            columns.Add().DataField("CompanyName")
            columns.Add().DataField("City")
            columns.Add().DataField("State")
            columns.Add().DataField("Phone")
            columns.Add().DataField("Fax")
        End Sub)
    )

---

Note that DevExtreme widgets require linking the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information about linking these libraries to your project, refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_List/LocalDataPlainStructure/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<a href="https://www.youtube.com/watch?v=jiqYFESy_Hw&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [TreeList - Overview](/Documentation/Guide/Widgets/TreeList/Overview/)
- [TreeList - Data Binding](/Documentation/Guide/Widgets/TreeList/Data_Binding/)
- [ASP.NET MVC Controls - Data Binding](/Documentation/Guide/ASP.NET_MVC_Controls/Data_Binding/)
<!--/fullDescription-->