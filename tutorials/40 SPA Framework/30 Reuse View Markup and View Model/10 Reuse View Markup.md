<article data-show="/Content/Applications/17_1/framework/PartialView/step1/index.html" data-show-first="views/home.html">

- Use an [application project template](/Documentation/Guide/SPA_Framework/Application_Project/) for your sample application.

- Add a *partialView.html* file to the project and include a link to it within the application page. In this file, define a markup that will be reused within the 'home' and 'about' views. Enclose this markup into a **div** element with the **data-options** attribute set to [dxView](/Documentation/ApiReference/SPA_Framework/Markup_Components/dxView/). Specify a name for this partial view using the [name](/Documentation/ApiReference/SPA_Framework/Markup_Components/dxView/Configuration/#name) option of the **dxView** markup component.

- Add a placeholder for the partial view to the markup of the 'home' and 'about' views. For this purpose, add a **div** element with the **data-options** attribute set to [dxViewPlaceholder](/Documentation/ApiReference/SPA_Framework/Markup_Components/dxViewPlaceholder/). Specify the name of the partial view using the [viewName](/Documentation/ApiReference/SPA_Framework/Markup_Components/dxViewPlaceholder/Configuration/#viewName) option of the **dxViewPlaceholder** markup component.

</article>