<article data-show="/Content/Applications/16_2/framework/ManageNavigation/step2/index.html" data-show-first="views/home.js">

Run the application prepared in the previous step. Press the "Home 1" navigation item. Then press **forward** in the displayed view, and after press **forward** in the invoked view. Press **forward** in each subsequent view. As a result, the following navigation stack will be built in the navigation history based on the "Home 1" navigation item. 

"home 1.1" -> "home 1.2" -> "home 1.3" -> "home 1.4" -> "home 1.5" -> "home 1.6" -> "home 1.7" -> "home 1.8" -> etc.

Each view in this stack will have the Back button available. This button appears automatically when there is a previous view in the navigation stack and returns to this previous view.

If you press the "Home 2" navigation item and then navigate from a view to a view using the **forward** button, you will build a navigation stack based on the "Home 2" navigation item. 

"home 2.1" -> "home 2.2" -> "home 2.3" -> "home 2.4" -> "home 2.5" -> "home 2.6" -> "home 2.7" -> "home 2.8" -> etc.

Each view in this stack will have the Back button available - the same behavior as in the navigation stack based on the  "Home 1" navigation item.

The root views "home 1.1" and "home 2.1" do not have the Back button, since they are the first views in their navigation stacks and there is no a way back. By the same reason, the Back button is not added to a root view when navigating to it from a view from another navigation stack. A root view always starts a new navigation stack and stands in the first place in it.

To learn more about navigation in mobile DevExtreme applications, refer to the [Navigation History in Mobile Apps](/Documentation/Guide/SPA_Framework/Navigation_and_Routing/#Navigation_History_in_Mobile_Apps) topic.

</article>