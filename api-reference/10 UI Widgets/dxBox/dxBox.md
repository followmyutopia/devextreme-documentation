===========================================================================
<!--module-->ui/box<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\CollectionWidget\CollectionWidget.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **Box** widget allows you to arrange various elements within it. Separate and adaptive, the **Box** widget acts as a building block for the layout.
<!--/shortDescription-->

<!--fullDescription-->
#include common-ref-roottopic-introduction with { WidgetName: "Box" }

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--HTML--><div id="box">
        <div id="item1" data-options="dxItem: { ratio: 1, baseSize: 10 }">
            <p>Item 1</p>
        </div>
        <div id="item2" data-options="dxItem: { ratio: 3, baseSize: 40 }">
            <p>Item 2</p>
        </div>
        <div id="item3" data-options="dxItem: { ratio: 2, baseSize: 20 }">
            <p>Item 3</p>
        </div>
    </div>

    <!--JavaScript-->$(function () {
        $("#box").dxBox({
            direction: 'row',
            height: '70%',
            width: '90%'
        });
    });

#####[**Angular**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <dx-box
        direction="row"
        height="70%"
        width="90%">
        <dxi-item 
            id="item1"
            [ratio]="1"
            [baseSize]="10">
            <p>Item 1</p>
        </dxi-item>
        <dxi-item 
            id="item2"
            [ratio]="3"
            [baseSize]="40">
            <p>Item 2</p>
        </dxi-item>
        <dxi-item 
            id="item3"
            [ratio]="2"
            [baseSize]="20">
            <p>Item 3</p>
        </dxi-item>
    </dx-box>

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML--><div dx-box="{
        direction: 'row',
        height: '70%',
        width: '90%'
    }">
        <div id="item1" data-options="dxItem: { ratio: 1, baseSize: 10 }">
            <p>Item 1</p>
        </div>
        <div id="item2" data-options="dxItem: { ratio: 3, baseSize: 40 }">
            <p>Item 2</p>
        </div>
        <div id="item3" data-options="dxItem: { ratio: 2, baseSize: 20 }">
            <p>Item 3</p>
        </div>
    </div>

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

    <!--HTML--><div data-bind="dxBox: {
        direction: 'row',
        height: '70%',
        width: '90%'
    }">
        <div id="item1" data-options="dxItem: { ratio: 1, baseSize: 10 }">
            <p>Item 1</p>
        </div>
        <div id="item2" data-options="dxItem: { ratio: 3, baseSize: 40 }">
            <p>Item 2</p>
        </div>
        <div id="item3" data-options="dxItem: { ratio: 2, baseSize: 20 }">
            <p>Item 3</p>
        </div>
    </div>

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().Box()
        .ID("box")
        .Direction(BoxDirection.Row)
        .Height("70%")
        .Width("90%")
        .Items(items => {
            items.Add().Ratio(1).BaseSize(10).Template("<p>Item 1</p>");
            items.Add().Ratio(3).BaseSize(40).Template("<p>Item 2</p>");
            items.Add().Ratio(2).BaseSize(20).Template("<p>Item 3</p>");
        })
    )

    <!--Razor VB-->@(Html.DevExtreme().Box() _
        .ID("box") _
        .Direction(BoxDirection.Row) _
        .Height("70%") _
        .Width("90%") _
        .Items(Sub(items)
            items.Add().Ratio(1).BaseSize(10).Template("<p>Item 1</p>")
            items.Add().Ratio(3).BaseSize(40).Template("<p>Item 2</p>")
            items.Add().Ratio(2).BaseSize(20).Template("<p>Item 3</p>")
        End Sub)
    )

---

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/formsandmulti-purposeboxboxbox/"
}
<a href="http://www.youtube.com/watch?v=xwBTIrX6aHk&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z&index=47" class="button orange small fix-width-155" target="_blank">Watch Video</a>

#####See Also#####
- [Box - Overview](/Documentation/Guide/Widgets/Box/Overview/)
<!--/fullDescription-->