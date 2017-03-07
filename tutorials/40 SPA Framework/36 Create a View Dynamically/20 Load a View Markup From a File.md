<article data-show="/Content/Applications/16_2/framework/DynamicView/step2/index.html" data-show-first="views/home.js">

Add one more [Button](/Documentation/ApiReference/UI_Widgets/dxButton/) widget to the 'home' view. Set the button's [onClick](/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#onClick) configuration option to a function that navigates to a view called 'dynamicViewFromFile'. Since this view is not referenced in the application page, load a file with the view template to the application and then call the [navigate()](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Methods/#navigateuri_options) method.

To load a file with a view template to the application, call the [loadTemplates()](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Methods/#loadTemplatessource) method of the **HtmlApplication** object passing a path to the file as a parameter.

To prevent loading of the same template repeatedly, when the view is displayed for the next time, check whether the application obtains this view's template. For this purpose, use the [getViewTemplateInfo()](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Methods/#getViewTemplateInfoviewName) method of the **HtmlApplication** object passing 'dynamicViewFromFile' (a view name) as a parameter. This method will return the view template, if the template has already been loaded. In this instance, you can navigate to this view immediately.

</article>