<article data-show="/Content/Applications/16_2/framework/ManageNavigation/step2/index.html" data-show-first="views/home.js">

- In the *home.html* file, remove the default content from the "home" Html template. Add the [Button](/Documentation/ApiReference/UI_Widgets/dxButton/) widget instead. This button will navigate forward to the next view. Give the "forward" name to this button via the [text](/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#text) configuration option. To handle the button click, assign a function to the [onClick](/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#onClick) configuration option. Let this function be defined within the view's ViewModel. So, bind the **onClick** option to the ViewModel's **navigateForward** field that will hold the click handler.

- In the *home.js* file, implement the **navigateForward** function and assign it to the ViewModel's **navigateForward** field. In this function, call the [navigate](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Methods/#navigateuri_options) method passing an object specifying navigation parameters according to the application's routing format. To navigate to a view with the "home" HTML template, pass *"home"* as the **view** navigation parameter. In addition, the navigation item ID should be passed as the **item** parameter. To get the current navigation item, use the **item** field of the object passed as the **home** function's parameter. To identify the navigated view specifically, register an extra **id** parameter within the application's [routing format](/Documentation/Guide/SPA_Framework/Navigation_and_Routing/#Declare_a_Routing)...

<!--....-->

    <!--JavaScript-->MyApp.app.router.register(":view/:item/:id", { view: "home", item: 1, id: 1 });
  
<!--....-->
  
... and pass an ID representing an incremented ID of the previous view. In this manner, you will have a chain of "home" views that are invoked one from another and indicated by the **item** and **id** navigation parameters.

- Set a title for each next view dynamically, as it was described in the [Change a View Title Dynamically](/Documentation/Tutorial/SPA_Framework/Change_a_View_Title_Dynamically/#Change_a_View_Title_Dynamically) tutorial. Form a view title from the values that are passed as navigation parameters when navigating to the current view.
</article>