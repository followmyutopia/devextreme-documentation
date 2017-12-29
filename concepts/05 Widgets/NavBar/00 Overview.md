The **NavBar** is a widget that navigates the application views. 

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/navigation-navbar-overview/ios7"
}

The following code adds the **NavBar** to your page. All navigation items have icons and one of them has a [badge](/Documentation/ApiReference/UI_Widgets/dxNavBar/Default_Item_Template/#badge). 

    <!--HTML-->
    <div id="navBarContainer"></div>

    <!--JavaScript-->
    $(function() {
        $("#navBarContainer").dxNavBar({
            items: [
                { text: "User", icon: "user" },
                { text: "Find", icon: "find" },
                { text: "Favorites", icon: "favorites", badge: "New" },
                { text: "About", icon: "info" }
            ]
        });
    });

Note that all data source items follow the [Default Item Template](/Documentation/ApiReference/UI_Widgets/dxNavBar/Default_Item_Template/) pattern. This provides a default item appearance, which can be customized later.

#####See Also#####
- **Widget Basics**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/) | [Angular](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/)
- [NavBar - Customize Item Appearance](/Documentation/Guide/Widgets/NavBar/Customize_Item_Appearance)
- [NavBar - Items Selection](/Documentation/Guide/Widgets/NavBar/Items_Selection)
- [NavBar API Reference](/Documentation/ApiReference/UI_Widgets/dxNavBar/)

[tags]nav bar, navBar, navigation bar, collection container, collection widget, navigation, overview