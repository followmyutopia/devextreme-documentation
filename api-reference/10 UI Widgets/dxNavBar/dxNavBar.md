<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
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
<!--module--><a href="/Documentation/17_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_nav_bar">ui/nav_bar</a><!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\dxTabs\dxTabs.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **NavBar** is a widget that navigates the application views.
<!--/shortDescription-->

<!--fullDescription-->
You can create the widget using one of the following approaches.

- [**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

        <!--JavaScript-->
        $(function () {
            $("#navBar").dxNavBar({
                items: [
                    { text: "Home", icon: "home" },
                    { text: "About", icon: "info" },
                    { text: "favorites", icon: "favorites", badge: "new" }
                ]
            });
        });

        <!--HTML-->
        <div id="navBar"></div>

- [**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

        <!--HTML-->
        <div dx-nav-bar="{
            items: [
                { text: 'Home', icon: 'home' },
                { text: 'About', icon: 'info' },
                { text: 'favorites', icon: 'favorites', badge: 'new' }
            ]
        }"></div>

- [**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

        <!--HTML-->
        <div data-bind="dxNavBar: {
            items: [
                { text: 'Home', icon: 'home' },
                { text: 'About', icon: 'info' },
                { text: 'favorites', icon: 'favorites', badge: 'new' }
            ]
        }"></div>

- [**ASP.NET MVC Wrappers**](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/#Creating_a_Widget)

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

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/navigationnavbarnavbarnavbar/iphone/ios7/default/default" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

#####See Also#####
- [NavBar - Overview](/Documentation/Guide/Widgets/NavBar/Overview/)
<!--/fullDescription-->