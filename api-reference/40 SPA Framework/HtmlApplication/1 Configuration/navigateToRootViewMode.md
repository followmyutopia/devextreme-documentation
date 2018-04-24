===========================================================================
<!--default-->'resetHistory'<!--/default-->
<!--acceptValues-->'keepHistory' | 'resetHistory'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies application behavior when the user navigates to a root view.
<!--/shortDescription-->

<!--fullDescription-->
A mobile application usually consists of several root views accessible from [global navigation](/Documentation/17_2/Guide/SPA_Framework/Built-in_Layouts/#Global_Navigation_Items). Each root view may have a stack of child views that are invoked one after another. For instance, a child view can be invoked to show detailed information on an item selected within a root view. To learn more about navigation stacks, refer to the [Navigation History in Mobile Apps](/Documentation/17_2/Guide/SPA_Framework/Navigation_and_Routing/?#Navigation_History_in_Mobile_Apps) topic.

The **navigateToRootViewMode** option specifies whether the child view stack of a root view is kept or reset when you return to this root view.

The default value is "resetHistory". In this case, the application always displays the root view when you navigate to it. If you change the value to "keepHistory", the application will show the last accessed child view of this root view.

[note]This option is not considered when the ['webSite'](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#mode) mode is set for the application. This is because there are no navigation stacks in this mode. Instead, there is only a single stack based on the browser's navigation history.
<!--/fullDescription-->