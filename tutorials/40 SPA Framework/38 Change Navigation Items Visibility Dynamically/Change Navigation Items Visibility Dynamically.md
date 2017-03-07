<!--playground-->
<!--/playground-->
<article data-show="/Content/Applications/16_1/framework/DynamicNavItems/Solution/index.html" data-show-first="views/login.js">

The **HtmlApplication** object exposes the [navigation](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#navigation) option so that you can define items for the application's global navigation control. In the [Navbar](/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Navbar_Layout), [Pivot](/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Pivot_Layout) and [SlideOut](/Documentation/Guide/SPA_Framework/Built-in_Layouts/#SlideOut_Layout) predefined layouts, navbar, pivot and slideout items are generated according to the array assigned to the **navigation** option. In some scenarios, you may need to add/hide navigation items dynamically. There are two approaches to change the set of navigation items dynamically.

- Show/Hide navigation items created during application initialization.

- Rerender the navigation control passing a set of just generated navigation items.

In this tutorial, you will learn how to manage visibility of navigation items to change their set dynamically. Initially, the navbar contains the 'Login' and 'About' items that provide access to the 'login' and 'about' views respectively. After logging in to the application, the 'About', 'Home' and 'Logout' navigation items will be visible. The 'Logout' navigation item will navigate to the 'logon' view returning the initial set of navigation items.

To learn how to generate navigation items at runtime and rerender the navigation control to display the generated items, refer to the [Create Navigation Dynamically](/Documentation/Tutorial/SPA_Framework/Create_Navigation_Dynamically/#Create_Navigation_Dynamically) tutorial.
  
</article>