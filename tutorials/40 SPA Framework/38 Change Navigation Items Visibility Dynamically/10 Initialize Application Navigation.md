<article data-show="/Content/Applications/16_2/framework/DynamicNavItems/step1/index.html" data-show-first="index.js">

Use the [application project template](/Documentation/Tutorial/SPA_Framework/Add_a_Navigation_Bar/#Use_an_Application_Template) to start building an application. In this template, the [dxNavbar](/Documentation/ApiReference/UI_Widgets/dxNavBar/) widget is used as a navigation control by default. Modify the [navigation](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#navigation) configuration option of the **HtmlApplication** object so that it includes the 'Login' and 'Logout' items in addition to the default 'Home' and 'About' items. For the 'Login' item, set the [onExecute](/Documentation/ApiReference/SPA_Framework/Markup_Components/dxCommand/Configuration/#onExecute) option to "#login". This is a URI to the 'login' view that you will implement soon. For the 'Logout' item, set the **onExecute** option to an empty **logout()** function. You will implement it in the next step.

To hide the "Home" and "Logout" navigation items initially, set their [visible](/Documentation/ApiReference/SPA_Framework/Markup_Components/dxCommand/Configuration/#visible) option to *false*.

The application template includes the "home" and "about" views out-of-the box. The "Logout" navigation item will navigate to the "Login" view. So, add the "login" view only.

Add two [TextBox](/Documentation/ApiReference/UI_Widgets/dxTextBox/) widgets to the "Login" view for typing logon parameters - a user name and password. Bind the [value](/Documentation/ApiReference/UI_Widgets/dxTextBox/Configuration/#value) options of these widgets to the corresponding ViewModel fields: **userName** and **password**. In addition, add the [Button](/Documentation/ApiReference/UI_Widgets/dxButton/) widget to the view to check user credentials and navigate to the 'home' view in case of successful login.

To navigate to the 'login' view at the application start, pass 'login' as a parameter of the [navigate()](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Methods/#navigateuri_options) method that is called in the *index.js* file.

</article>