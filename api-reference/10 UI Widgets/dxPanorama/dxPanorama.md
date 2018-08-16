<!--dep--><!--/dep-->
<!--widgettree-->
dataSource: [
    {
        header: "Main courses",
        text: "First and second course of a meal"
    },
    {
        header: "Seafood",
        text: "Seafood: ocean and sea"
    },
    {
        header: "Desserts",
        text: "Desserts: biscuits and cookies"
    },
    {
        header: "Drinks",
        text: "Drinks: Soft vine and tea"
    }
],
height: 300
<!--/widgettree-->
===========================================================================
<!--module-->ui/panorama<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\CollectionWidget\CollectionWidget.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.all.js
<!--/lib-->
===========================================================================

<!--deprecated-->
[note] The **Panorama** widget is <span style="color:red">deprecated</span> since v18.1. We recommend using the [TabPanel](/Documentation/Guide/Widgets/TabPanel/Overview/) or [MultiView](/Documentation/Guide/Widgets/MultiView/Overview/) widget instead.
<!--/deprecated-->

<!--shortDescription-->
The **Panorama** widget is a full-screen widget that allows you to arrange items on a long horizontal canvas split into several views. Each view contains several items, and an end user navigates the views with the swipe gesture. The **Panorama** is often used as a navigation map on the first page of an application.
<!--/shortDescription-->

<!--fullDescription-->
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--JavaScript-->
    $(function () {
        $("#panorama").dxPanorama({
            items: [{
                title: "Item 1 Title",
                text: "Item 1 Text Content"
            }, {
                title: "Item 2 Title",
                text: "Item 2 Text Content"
            }],
            backgroundImage: {
                url: "/here/goes/your/image.png",
                height: 600,
                width: 800
            }
        });
    });

    <!--HTML-->
    <div id="panorama"></div>

    <!--CSS-->#panorama {
        height: auto;
        position: absolute;
        top: 0; 
        bottom: 0;
        width: 100%;
    }

#####[**Angular**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <dx-panorama
        [items]="panoramaItems">
        <dxo-background-image
            url="/here/goes/your/image.png"
            [height]="600"
            [width]="800">
        </dxo-background-image>
    </dx-panorama>

    <!--TypeScript-->
    import { DxPanoramaModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        panoramaItems = [{
            title: "Item 1 Title",
            text: "Item 1 Text Content"
        }, {
            title: "Item 2 Title",
            text: "Item 2 Text Content"
        }];
    }
    @NgModule({
        imports: [
            // ...
            DxPanoramaModule
        ],
        // ...
    })

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML--><div ng-controller="DemoController">
        <div id="panorama" dx-panorama="{
            items: panoramaItems,
            backgroundImage: {
                url: '/here/goes/your/image.png',
                height: 600,
                width: 800
            }
        }"></div>
    </div>

    <!--JavaScript-->angular.module("DemoApp", ["dx"])
        .controller("DemoController", function ($scope) {
            $scope.panoramaItems = [{
                title: "Item 1 Title",
                text: "Item 1 Text Content"
            }, {
                title: "Item 2 Title",
                text: "Item 2 Text Content"
            }];
        });

    <!--CSS-->#panorama {
        height: auto;
        position: absolute;
        top: 0; 
        bottom: 0;
        width: 100%;
    }

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div id="panorama" data-bind="dxPanorama: {
        items: panoramaItems,
        backgroundImage: {
            url: '/here/goes/your/image.png',
            height: 600,
            width: 800
        }
    }"></div>

    <!--JavaScript-->var viewModel = {
        panoramaItems: [{
            title: "Item 1 Title",
            text: "Item 1 Text Content"
        }, {
            title: "Item 2 Title",
            text: "Item 2 Text Content"
        }]
    };
    ko.applyBindings(viewModel);

    <!--CSS-->#panorama {
        height: auto;
        position: absolute;
        top: 0; 
        bottom: 0;
        width: 100%;
    }

---

#####See Also#####
- [Panorama - Overview](/Documentation/Guide/Widgets/Panorama/Overview/)
<!--/fullDescription-->