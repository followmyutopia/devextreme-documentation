<!--id-->dxNavBar<!--/id-->
<!--widgettree-->
dataSource: [{
        text: "Contacts",
        icon: "user"
    }, {
        text: "Missed",
        icon: "clock",
        badge: 3
    }, {
        text: "Favorites",
        icon: "favorites"
    }
]
<!--/widgettree-->
===========================================================================
<!--module-->ui/nav_bar<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\dxTabs\dxTabs.md<!--/inherits-->
<!--lib-->
dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **NavBar** is a widget that navigates the application views.
<!--/shortDescription-->

<!--fullDescription-->
#include common-ref-roottopic-introduction

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--JavaScript-->
    $(function () {
        $("#navBar").dxNavBar({
            items: [
                { text: "Home", icon: "home" },
                { text: "About", icon: "info" },
                { text: "Favorites", icon: "favorites", badge: "new" }
            ]
        });
    });

    <!--HTML-->
    <div id="navBar"></div>

##### Angular

    <!--HTML-->
    <dx-nav-bar>
        <dxi-item text="Home" icon="home"></dxi-item>
        <dxi-item text="About" icon="info"></dxi-item>
        <dxi-item text="Favorites" icon="favorites" badge="new"></dxi-item>
    </dx-nav-bar>

    <!--TypeScript-->
    import { DxNavBarModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxNavBarModule
        ],
        // ...
    })

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div dx-nav-bar="{
        items: [
            { text: 'Home', icon: 'home' },
            { text: 'About', icon: 'info' },
            { text: 'Favorites', icon: 'favorites', badge: 'new' }
        ]
    }"></div>

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div data-bind="dxNavBar: {
        items: [
            { text: 'Home', icon: 'home' },
            { text: 'About', icon: 'info' },
            { text: 'Favorites', icon: 'favorites', badge: 'new' }
        ]
    }"></div>

#####[**ASP.NET MVC Controls**](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Creating_a_Widget)

    <!--Razor C#-->@(Html.DevExtreme().NavBar()
        .ID("navBar")
        .Items(items => {
            items.Add().Text("Home").Icon("home");
            items.Add().Text("About").Icon("info");
            items.Add().Text("Favorites").Icon("favorites").Badge("new");
        })
    )

    <!--Razor VB-->@(Html.DevExtreme().NavBar() _
        .ID("navBar") _
        .Items(Sub(items)
            items.Add().Text("Home").Icon("home")
            items.Add().Text("About").Icon("info")
            items.Add().Text("Favorites").Icon("favorites").Badge("new")
        End Sub)
    )

---

 

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/navigationnavbarnavbarnavbar/iphone/ios7/default/default"
}

#####See Also#####
- [NavBar - Overview](/Documentation/Guide/Widgets/NavBar/Overview/)
<!--/fullDescription-->