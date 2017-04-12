<article data-show="/Content/Applications/17_1/framework/YourFirstApplication/step2/YourFirstApplication.html" >
To add a view to your application, define the HTML template that will be used to display this view.

- Add a **div** element with the **data-options** attribute (a DevExtreme-specific attribute) set to [dxView](/Documentation/ApiReference/SPA_Framework/Markup_Components/dxView/)
- Give a name to the view by assigning a configuration object with the **name** option specified; the specified name will be used to identify this view
 
The framework follows the Model View ViewModel (MVVM) pattern to provide a clean separation of the user interface from the business logic. An application consists of a set of Views defined by an HTML5 markup and accompanying resources (images and CSS3 styles). Views can be bound to the corresponding ViewModels via the [Knockout](http://knockoutjs.com/) JavaScript library. The ViewModel is basically your custom JavaScript code, which is responsible for providing data from the Model to the View, taking into account different user interactions. The Model is represented by the data that you can obtain from virtually anywhere. So, you may choose to connect to remote data sources via AJAX requests, bind to JavaScript objects or even use HTML5 local storage.

Once the view is added, you can specify a [routing format](/Documentation/Guide/SPA_Framework/Navigation_and_Routing/#Declare_a_Routing) for the application's navigation and call the [navigate](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Methods/#navigateuri_options) method of the **HtmlApplication** object to navigate to the first view. The 'home' view will be navigated by default since it is set as the default view in the application's router.

The HTML template presented below is a View of the 'home' view in terms of the MVVM pattern, because no CSS classes are used in this template. Read further to learn how to bind this View to a ViewModel.

</article>