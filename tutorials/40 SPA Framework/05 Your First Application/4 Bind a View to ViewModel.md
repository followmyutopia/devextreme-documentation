<article data-show="/Content/Applications/17_1/framework/YourFirstApplication/step3/YourFirstApplication.html" >
In this step, you will bind a View element to the ViewModel's field.

- Associate a JavaScript function with the View and this function will be called when the View is used. This function must have the same name as the View. In addition, it must be declared in the application's namespace and return an object. This object is a ViewModel for the View.
- Add the **message** field to the ViewModel object. Set this field to "Welcome!"
- In the view's HTML template, replace the simple "Hello World" string with the **h1** element bound to the **message** field of the ViewModel via [Knockout](http://knockoutjs.com/). 
  
</article>