<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--widgettree-->
dataSource: [{
    "ID": 1,
    "CompanyName": "Super Mart of the West",
    "City": "Bentonville",
    "State": "Arkansas"
}, {
    "ID": 2,
    "CompanyName": "Electronics Depot",
    "City": "Atlanta",
    "State": "Georgia"
}, {
    "ID": 3,
    "CompanyName": "K&S Music",
    "City": "Minneapolis",
    "State": "Minnesota"
}, {
    "ID": 4,
    "CompanyName": "Tom's Club",
    "City": "Issaquah",
    "State": "Washington"
}, {
    "ID": 5,
    "CompanyName": "E-Mart",
    "City": "Hoffman Estates",
    "State": "Illinois"
}]
<!--/widgettree-->
===========================================================================
<!--module-->ui/data_grid<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\GridBase\GridBase.md<!--/inherits-->
<!--lib-->
dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **DataGrid** is a widget that represents data from a local or remote source in the form of a grid. This widget offers such basic features as [sorting](/Documentation/Guide/Widgets/DataGrid/Sorting/), [grouping](/Documentation/Guide/Widgets/DataGrid/Grouping/), [filtering](/Documentation/Guide/Widgets/DataGrid/Filtering_and_Searching/), as well as more advanced capabilities, like [state storing](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/stateStoring/), [export to Excel](/Documentation/Guide/Widgets/DataGrid/Client-Side_Exporting/), [master-detail interface](/Documentation/Guide/Widgets/DataGrid/Master-Detail_Interface/), and many others.
<!--/shortDescription-->

<!--fullDescription-->
You can create the widget using one of the following approaches.

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--JavaScript-->$(function () {
        $("#dataGrid").dxDataGrid({
            dataSource: customers,
            columns: ['CompanyName', 'City', 'State', 'Phone', 'Fax']
        });
    });

    <!--HTML--><div id="dataGrid"></div>

#####[**Angular**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <dx-data-grid [dataSource]="customers">            
        <dxi-column dataField="CompanyName"></dxi-column>
        <dxi-column dataField="City"></dxi-column>
        <dxi-column dataField="State"></dxi-column>
        <dxi-column dataField="Phone"></dxi-column>
        <dxi-column dataField="Fax"></dxi-column>
    </dx-data-grid>

    <!--TypeScript-->
    export class AppComponent {
        customers = [
            // ...   
        ];
    }

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML--><div ng-controller="DemoController">
        <div dx-data-grid="{
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

    <!--HTML--><div data-bind="dxDataGrid: {
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

    <!--Razor C#-->@(Html.DevExtreme().DataGrid()
        .ID("dataGrid")
        .DataSource(Customers)
        .Columns(columns => {
            columns.Add().DataField("CompanyName");
            columns.Add().DataField("City");
            columns.Add().DataField("State");
            columns.Add().DataField("Phone");
            columns.Add().DataField("Fax");
        })
    )

    <!--Razor VB-->@(Html.DevExtreme().DataGrid() _
        .ID("dataGrid") _
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

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.

#####See Also#####
- [DataGrid - Data Binding](/Documentation/Guide/Widgets/DataGrid/Data_Binding/)
- [ASP.NET MVC Controls - Data Binding](/Documentation/Guide/ASP.NET_MVC_Controls/Data_Binding/)

<a href="/Documentation/17_2/Tutorial/UI_Widgets/Configure_DataGrid#Configure_DataGrid" class="button orange small fix-width-155" style="margin-right:5px;">Start Tutorial</a>
<a href="http://js.devexpress.com/Demos/DataGridGallery/#chart/datagridspagingandscrollingpager" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a>
<a href="http://www.youtube.com/watch?v=KJpS2Iwrrg8&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&index=5" class="button orange small fix-width-155" target="_blank">Watch Video</a>
<!--/fullDescription-->