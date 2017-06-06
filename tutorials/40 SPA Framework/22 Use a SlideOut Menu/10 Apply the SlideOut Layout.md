<article data-show="/Content/Applications/17_2/framework/AddSlideOutMenu/step1/index.html" data-show-first="index.js">

Use an [application project template](/Documentation/Guide/SPA_Framework/Application_Project/). In this application template, global navigation is organized via a navbar. You can modify this application so that a slide-out menu is used as a global navigation control. 

- *index.js*  
    Set the [layoutSet](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#layoutSet) configuration option of the [HtmlApplication object](/Documentation/Guide/SPA_Framework/Application_Project/#Application_Object) to *DevExpress.framework.html.layoutSets['slideout']*. This is a predefined layout set that includes the [SlideOut layout](/Documentation/Guide/SPA_Framework/Built-in_Layouts/#SlideOut_Layout) that will be applied to the application views. In this layout, the [SlideOut](/Documentation/ApiReference/UI_Widgets/dxSlideOut/) widget serves as a navigation control.
    
- *index.html*  
    Add links to the "slideout" layout in the application page. 
    
- *index.js*  
    To define items for the slideout menu, specify the [navigation](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#navigation) option of the **HtmlApplication** object. This option takes on an array of [command configuration objects](/Documentation/ApiReference/SPA_Framework/Markup_Components/dxCommand/). The commands that will be created using these configuration objects will be displayed by slide-out menu items. Use the commands' **onExecute** configuration option to specify the views to which end-users will navigate when pressing the corresponding menu items.

</article>