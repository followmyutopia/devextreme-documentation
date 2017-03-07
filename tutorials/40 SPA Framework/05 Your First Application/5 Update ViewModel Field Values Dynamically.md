<article data-show="/Content/Applications/16_2/framework/YourFirstApplication/step4/YourFirstApplication.html" >
In this step, add a text box to the 'home' view to concatenate the "Welcome!" text with the text entered at runtime.

- Make the ViewModel's **message** field [observable](http://knockoutjs.com/documentation/observables.html)
- Add the [TextBox](/Documentation/ApiReference/UI_Widgets/dxTextBox/) widget to the view's HTML template to allow an end user to input the desired value
- Add an observable **name** field to the ViewModel and bind the text box's [value](/Documentation/ApiReference/UI_Widgets/dxTextBox/Configuration/#value) option to this field
- Add the [Button](/Documentation/ApiReference/UI_Widgets/dxButton/) widget to the view's HTML template to update the value of the ViewModel's **message** field when the **name** field is changed

The **TextBox** and **Button** widgets are supplied with [styles for each platform](/Documentation/Guide/Themes/Predefined_Themes/), so that your application looks native on any platform. These styles are collected in platform-specific CSS files. Include links to the [required CSS files](/Documentation/Guide/SPA_Framework/Application_Project/#Themes_and_Styles) on the application page.
  
</article>