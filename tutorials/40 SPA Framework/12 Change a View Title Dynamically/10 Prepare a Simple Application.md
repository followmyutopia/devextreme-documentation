<article data-show="/Content/Applications/17_2/framework/ViewTitle/step1/index.html" data-show-first="index.js">

Use an [application project template](/Documentation/Tutorial/SPA_Framework/Add_a_Navigation_Bar/#Use_an_Application_Template). Since a single view is needed for implementing the defined task, remove the "about" view (the *about.html* file and a link to this file in the application page). Then, replace the "navbar" layout set with "simple". For this purpose, do the following.

- *index.js*  
    Set the [layoutSet](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#layoutSet) configuration option of the [HtmlApplication object](/Documentation/Guide/SPA_Framework/Application_Project/#Application_Object) to *DevExpress.framework.html.layoutSets['simple']*. This is a predefined layout set that includes the [simple](/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Simple_Layout) layout only. In this layout, there is nothing except for a toolbar and a placeholder for a view.
    
- *index.html*  
    Add a link to the "simple" layout to the application page.
    
- *index.js*  
    Remove the [navigation](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#navigation) configuration option of the **HtmlApplication** object, since it is not used by the "simple" layout.
    
</article>