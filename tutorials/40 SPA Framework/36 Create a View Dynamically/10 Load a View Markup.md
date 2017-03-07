<article data-show="/Content/Applications/16_1/framework/DynamicView/step1/index.html" data-show-first="views/home.js">

Use a [simple application](/Documentation/Tutorial/SPA_Framework/Change_a_View_Title_Dynamically/#Prepare_a_Simple_Application) with one view ('home'). Add the [Button](/Documentation/ApiReference/UI_Widgets/dxButton/) widget to the view. Set the button's [onClick](/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#onClick) configuration option to a function that navigates to a view called 'dynamicView'. Since this view is not referenced in the application page, load the view template to the application and then call the [navigate()](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Methods/#navigateuri_options) method.

To load a view template to the application, call the [loadTemplates()](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Methods/#loadTemplatessource) method of the **HtmlApplication** object passing the view markup as a parameter.

To prevent loading of the same template repeatedly, when the view is displayed for the next time, check whether or not the application obtains this view's template. For this purpose, use the [getViewTemplateInfo()](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Methods/#getViewTemplateInfoviewName) method of the **HtmlApplication** object passing 'dynamicView' (a view name) as a parameter. This method will return the view template if the template has already been loaded. In this instance, you can navigate to the view immediately.

</article>