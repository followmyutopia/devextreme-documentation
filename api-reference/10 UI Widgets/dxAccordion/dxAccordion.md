<!--id-->dxAccordion<!--/id-->
<!--widgettree-->
dataSource: [
{
    title: "Personal Data",
    text: "Name: John Smith, Birth Year: 1986",
},
{
    title: "Contacts",
    text: "Phone: (555)555-5555, Email: John.Smith@example.com",
}]
<!--/widgettree-->
===========================================================================
<!--module-->ui/accordion<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->CollectionWidget<!--/inherits-->
<!--lib-->
dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **Accordion** widget contains several panels displayed one under another. These panels can be collapsed or expanded by an end user, which makes this widget very useful for presenting information in a limited amount of space.
<!--/shortDescription-->

<!--fullDescription-->
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--JavaScript-->$(function () {
        $("#accordion").dxAccordion({
            dataSource: [
                { title: "Panel 1 Title", text: "Panel 1 Text Content" },
                { title: "Panel 2 Title", text: "Panel 2 Text Content" }
            ],
            collapsible: true,
            multiple: true
        });
    });

    <!--HTML-->
    <div id="accordion"></div>

##### Angular

    <!--HTML-->
    <dx-accordion
        [dataSource]="accordionData"
        [collapsible]="true"
        [multiple]="true">
    </dx-accordion>

    <!--TypeScript-->
    import { DxAccordionModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        accordionData = [
            { title: "Panel 1 Title", text: "Panel 1 Text Content" },
            { title: "Panel 2 Title", text: "Panel 2 Text Content" }
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxAccordionModule
        ],
        // ...
    })

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-accordion="{
            dataSource: accordionData,
            collapsible: true,
            multiple: true
        }"></div>
    </div>

    <!--JavaScript-->
    angular.module("DemoApp", ["dx"])
        .controller("DemoController", function DemoController($scope) {
            $scope.accordionData = [
                { title: "Panel 1 Title", text: "Panel 1 Text Content" },
                { title: "Panel 2 Title", text: "Panel 2 Text Content" }
            ];
        });

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div data-bind="dxAccordion: {
        dataSource: accordionData,
        collapsible: true,
        multiple: true
    }"></div>

    <!--JavaScript-->var viewModel = {
        accordionData: [
            { title: "Panel 1 Title", text: "Panel 1 Text Content" },
            { title: "Panel 2 Title", text: "Panel 2 Text Content" }
        ]
    };
    ko.applyBindings(viewModel);

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().Accordion()
        .ID("accordion")
        .DataSource(new[] {
            new { title = "Panel 1 Title", text = "Panel 1 Text Content" },
            new { title = "Panel 2 Title", text = "Panel 2 Text Content" }
        })
        .Collapsible(true)
        .Multiple(true)
    )

    <!--Razor VB-->@(Html.DevExtreme().Accordion() _
        .ID("accordion") _
        .DataSource({
            New With { .title = "Panel 1 Title", .text = "Panel 1 Text Content" },
            New With { .title = "Panel 2 Title", .text = "Panel 2 Text Content" }
        }) _
        .Collapsible(True) _
        .Multiple(True)
    )

---

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/navigationaccordionaccordionaccordion/"
}
<a href="http://www.youtube.com/watch?v=Dd0Nb6AU4B8&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&index=45" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [Accordion - Overview](/Documentation/Guide/Widgets/Accordion/Overview/)
<!--/fullDescription-->