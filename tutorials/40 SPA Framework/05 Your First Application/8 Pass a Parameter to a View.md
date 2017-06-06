<article data-show="/Content/Applications/17_2/framework/YourFirstApplication/step7/YourFirstApplication.html">
In this step, pass the text entered in the "home" view to the "greeting" view and concatenate it to the "Hello" string.

- Add the **name** parameter to the application's [routing format](/Documentation/Tutorial/SPA_Framework/Your_First_Application/#Create_an_Application), and set the parameter's default value to an empty string
- In the "home" ViewModel's **greet** function, expand the parameter passed in the **navigate** function with the value of the **name** field (the value entered in the text box); this will conform to the new routing format
- Make the **message** field of the "greeting" ViewModel observable; set this field to the text passed as the parameter from the view's URL.
 
</article>