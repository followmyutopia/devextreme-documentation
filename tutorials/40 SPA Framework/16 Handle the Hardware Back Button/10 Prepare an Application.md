<article data-show="/Content/Applications/16_1/framework/HardwareBackButton/step1/index.html" data-show-first="views/home.js">

Use an [application project template](/Documentation/Tutorial/SPA_Framework/Add_a_Navigation_Bar/#Use_an_Application_Template) to create an application. To try handling the Back navigation forced by the hardware Back button, modify this application in the following way.

- Use the [simple layout set](/Documentation/Tutorial/SPA_Framework/Change_a_View_Title_Dynamically/#Prepare_a_Simple_Application).

- Add the [Button](/Documentation/ApiReference/UI_Widgets/dxButton/) widget to the "home" view to navigate to the "about" view. Handle the button click by calling the [navigate()](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Methods/#navigateuri_options) method in the function assigned to the button's [onClick](/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#onClick) configuration option.
    
</article>