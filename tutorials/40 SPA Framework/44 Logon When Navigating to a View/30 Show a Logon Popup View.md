<article data-show="/Content/Applications/16_2/framework/LogonPopup/step3/index.html" data-show-first="index.js">

To show the "login" popup view for non-authorized users only, declare a global **loggedIn** variable within the [HtmlApplication.initialized](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Events/#initialized) event handler. Set this variable to *false* by default. This variable will be accessed from any part of the application and you can change its value in the "login" ViewModel.

Since login parameters need not be requested for all application views, and only for the 'secureRoot' and 'secureInner' views, introduce the **secure** option for the **dxView** components representing the secured views. Set this option to *true*. 

To display the "login" view when a non-authorized user is navigating to a secured view, handle the [HtmlApplication.navigating](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Events/#navigating) event. Do the following within the event handler.

- Check the **secure** option of the navigated view.  
  To get this option value, use the [getViewTemplateInfo](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Methods/#getViewTemplateInfoviewName) method of the **HtmlApplication** object.

- If the currently navigated view is secure and the **loggedIn** global variable is set to *false*, cancel the current navigation and navigate to the "login" view.  
  To save the URI of the navigated view as a navigation parameter and then continue navigation to this view when the user is authorized, add a secondary rule for the application's router - "login/:backUri" - and navigate to the "login" view using this rule.

In the **logIn** function of the "login" view, check the entered login parameters and, if they are valid, set the **loggedIn** global variable to *true* and navigate to the target view. The target view is accessible as the **backUri* field of the object passed as a parameter of the function returning the ViewModel object.

Implement the **close** function of the "login" ViewModel. In this function, use the [HtmlApplication.back()](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Methods/#back) method to return back to the previous view when a user cancels authorization.

</article>