<article data-show="/Content/Applications/16_1/framework/ViewTitle/step2/index.html" data-show-first="views/home.js">

- Within the *home.js* file, add the **title** field to the ViewModel object. This field will be used to get a title for the view.

- Within the *home.html* file, add the [TextBox](/Documentation/ApiReference/UI_Widgets/dxTextBox/) widget to the view HTML template. This text box will be used to type a new value for the view's title.

- To update the ViewModel's **title** field with the value typed by an end user within the text box, make the **title** field [observable](http://knockoutjs.com/documentation/observables.html) and bind the text box' [value](/Documentation/ApiReference/UI_Widgets/dxTextBox/Configuration/#value) configuration option to this field.
  
</article>