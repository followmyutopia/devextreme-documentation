<article data-show="/Content/Applications/17_2/framework/YourFirstApplication/step5/YourFirstApplication.html" >
In this step, you will add one more view called "greeting" and display it instead of the "home" view on the page when clicking a button.

- Add an HTML template for the "greeting" view, as you did [above](/Documentation/Tutorial/SPA_Framework/Your_First_Application/#Create_a_View)
- Add a ViewModel for the "greeting" view, as you did [above](/Documentation/Tutorial/SPA_Framework/Your_First_Application/#Bind_a_View_to_ViewModel)
- Add the **h1** element to the HTML template and bind it to the ViewModel's **message** field
- Add the [Button](/Documentation/ApiReference/UI_Widgets/dxButton/) widget to the HTML template and bind its [onClick](/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#onClick) option to the built-in registered function "#_back". This function returns end users to the previously displayed view
- Add the **greet** function to the "home" view's ViewModel. In this function, call the [navigate](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Methods/#navigateuri_options) method of the **HtmlApplication** object, passing "greeting" as a parameter. "greeting" is the name of the view to which to navigate. This parameter value conforms to the routing format that you specified for the application's routing [above](/Documentation/Tutorial/SPA_Framework/Your_First_Application/#Create_an_Application)
- Add the **Button** widget to the "home" view's HTML template and bind its [onClick](/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#onClick) option to the ViewModel's **greet** function
 
</article>