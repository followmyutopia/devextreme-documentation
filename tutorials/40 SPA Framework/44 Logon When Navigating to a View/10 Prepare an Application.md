<article data-show="/Content/Applications/16_1/framework/LogonPopup/step1/index.html" data-show-first="views/home.html">

Use an [application project template](/Documentation/Guide/SPA_Framework/Application_Project/) for your sample application. Leave the [Navbar](/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Ready-to-Use_Layout_Sets) layout set that is used in the application by default and implement the following views.

- **Home View**  
The 'home' view is included into the application template. This view will be accessible without logging on. Indicate this within the view's content for demo purposes. In addition, add the [Button](/Documentation/ApiReference/UI_Widgets/dxButton/) widget to allow an end user to navigate to an inner secured view.

- **Secured Inner View**  
Add a 'secureInner' view to the application. This is a simple view. Just indicate that this view is secured within the view's content.

- **Secured Root View**  
Add a 'secureRoot' view to the application. Indicate that this view is secured within the view's content. In addition, add the **Button** widget to navigate to the inner secured view.

Remove the 'about' view from the application. The views listed above will be enough for the sample.

Specify the [navigation](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#navigation) option of the **HtmlApplication** object so that the 'home' and 'secureRoot' view are accessible from the global navigation of the application.

</article>