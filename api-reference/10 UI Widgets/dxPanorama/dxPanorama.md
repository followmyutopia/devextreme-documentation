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

<!--shortDescription-->
The **Panorama** widget is a full-screen widget that allows you to arrange items on a long horizontal canvas split into several views. Each view contains several items, and an end user navigates the views with the swipe gesture. The **Panorama** is often used as a navigation map on the first page of an application.
<!--/shortDescription-->

<!--fullDescription-->
#include common-ref-roottopic-introduction with { WidgetName: "Panorama" }

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--JavaScript-->var panoramaItems = [{
        title: "Main courses",
        text: "First and second courses of a meal"
    }, {
        title: "Seafood",
        text: "Seafood: ocean and sea"
    },
        // . . .
    ];
    $(function () {
        $("#panorama").dxPanorama({
            items: panoramaItems,
            title: "Online Menu",
            backgroundImage: {
                url: '/here/goes/your/image.png',
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
        [items]="panoramaItems"
        title="Online Menu">
        <dxo-background-image
            url="/here/goes/your/image.png"
            [height]="600"
            [width]="800">
        </dxo-background-image>
    </dx-panorama>

    <!--TypeScript-->
    export class AppComponent {
        panoramaItems = [
            // ...   
        ];
    }

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML--><div ng-controller="DemoController">
        <div id="panorama" dx-panorama="{
            items: panoramaItems,
            title: 'Online Menu',
            backgroundImage: {
                url: '/here/goes/your/image.png',
                height: 600,
                width: 800
            }
        }"></div>
    </div>

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller("DemoController", function ($scope) {
            $scope.panoramaItems = [
                // ...   
            ];
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
        title: 'Online Menu',
        backgroundImage: {
            url: '/here/goes/your/image.png',
            height: 600,
            width: 800
        }
    }"></div>

    <!--JavaScript-->var viewModel = {
        panoramaItems: [
            // ...
        ]
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

 

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/navigationpanoramapanoramapanorama/iphone/ios7/default/default"
}
<a href="http://www.youtube.com/watch?v=zVDFC0BuGG0&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&index=11" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [Panorama - Overview](/Documentation/Guide/Widgets/Panorama/Overview/)
<!--/fullDescription-->