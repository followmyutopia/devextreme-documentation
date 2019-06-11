<!--id-->dxSlideOutView<!--/id-->
===========================================================================
<!--module-->ui/slide_out_view<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\Widget\Widget.md<!--/inherits-->
<!--lib-->
dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **SlideOutView** widget is a classic slide-out menu paired with a view. This widget is very similar to the [SlideOut](/Documentation/Guide/Widgets/SlideOut/Overview/) with only one difference - the **SlideOut** always contains the [List](/Documentation/Guide/Widgets/List/Overview/) in the slide-out menu, while the **SlideOutView** can hold any collection there.
<!--/shortDescription-->

<!--fullDescription-->
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div id="slideOutView">
        <div data-options="dxTemplate: { name: 'view' }">
            <p>View content</p>
        </div>
        <div data-options="dxTemplate: { name: 'menu' }">
            <p>Menu content</p>
        </div>
    </div>

    <!--JavaScript-->$(function () {
        $("#slideOutView").dxSlideOutView({
            contentTemplate: "view",
            menuTemplate: "menu",
        });
    });

    <!--CSS-->#slideOutView {
        height: auto;
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
    }

##### Angular

    <!--HTML-->
    <dx-slide-out-view
        id="slideOutView"
        contentTemplate="view"
        menuTemplate="menu">
            <div *dxTemplate="let viewData of 'view'">
                <p>View content</p>
            </div>
            <div *dxTemplate="let menuData of 'menu'">
                <p>Menu content</p>
            </div>
    </dx-slide-out-view>

    <!--TypeScript-->
    import { DxSlideOutViewModule } from "devextreme-angular"
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxSlideOutViewModule
        ],
        // ...
    })

    <!--CSS-->::ng-deep #slideOutView {
        height: auto;
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
    }

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div id="slideOutView" dx-slide-out-view="{
        contentTemplate: 'view',
        menuTemplate: 'menu'
    }">
        <div data-options="dxTemplate: { name: 'view' }">
            <p>View content</p>
        </div>
        <div data-options="dxTemplate: { name: 'menu' }">
            <p>Menu content</p>
        </div>
    </div>

    <!--CSS-->#slideOutView {
        height: auto;
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
    }

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div id="slideOutView" data-bind="dxSlideOutView: {
        contentTemplate: 'view',
        menuTemplate: 'menu'
    }">
        <div data-options="dxTemplate: { name: 'view' }">
            <p>View content</p>
        </div>
        <div data-options="dxTemplate: { name: 'menu' }">
            <p>Menu content</p>
        </div>
    </div>

    <!--CSS-->#slideOutView {
        height: auto;
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
    }

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().SlideOutView()
        .ID("slideOutView")
        .ContentTemplate(@<text>
            <p>View content</p>
        </text>)
        .MenuTemplate(@<text>
            <p>Menu content</p>
        </text>)
    )

    <!--Razor VB-->@Code
        Html.DevExtreme().SlideOutView() _
            .ID("slideOutView") _
            .ContentTemplate(Sub()
                @<text>
                    <p>View content</p>
                </text>
            End Sub) _
            .MenuTemplate(Sub()
                @<text>
                    <p>Menu content</p>
                </text>
            End Sub).Render()
    End Code

    <!--CSS-->#slideOutView {
        height: auto;
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
    }

---

 

#####See Also#####
- [SlideOutView - Overview](/Documentation/Guide/Widgets/SlideOutView/Overview/)
<!--/fullDescription-->