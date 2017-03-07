<!--playground-->
<!--/playground-->
<article data-show="/Content/Applications/16_1/framework/CreateNavigationDynamically/Solution/index.html" data-show-first="views/Logon.js">

The **HtmlApplication** object exposes the [navigation](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#navigation) option so that you can define items for the application's global navigation control. In the [Navbar](/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Navbar_Layout), [Pivot](/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Pivot_Layout) and [SlideOut](/Documentation/Guide/SPA_Framework/Built-in_Layouts/#SlideOut_Layout) predefined layouts, navbar, pivot and slideout items are generated according to the array assigned to the **navigation** option. In some scenarios, you may need to add/hide navigation items dynamically. There are two approaches to change the set of navigation items dynamically.

- Show/Hide navigation items created during application initialization.

- Rerender the navigation control passing a set of just generated navigation items.

In this tutorial, you will learn how to generate navigation items at runtime and rerender the navigation control to display the generated items. Initially, the 'logon' view is displayed. It uses the [predefined simple layout](/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Simple_Layout). This layout does not include a navigation control. When an end-user logs on to the application, the navigation control of the layout used for the displayed views includes the navigation items that have been just generated. The set of generated navigation items depends on the role of the logged on user.

To learn how to manage visibility of navigation items to change their set dynamically, refer to the [Change Navigation Items Visibility Dynamically](/Documentation/Tutorial/SPA_Framework/Change_Navigation_Items_Visibility_Dynamically/#Change_Navigation_Items_Visibility_Dynamically) tutorial.
  
</article>