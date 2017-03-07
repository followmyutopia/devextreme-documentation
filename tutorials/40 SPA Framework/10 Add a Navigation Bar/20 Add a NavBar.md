<article data-show="/Content/Applications/16_2/framework/AddNavBar/step2/index.html" data-show-first="index.js">
As you can see in the running template application, a navbar presents on both the application views. It has two items that navigate end users to the "home" and "about" views. Pay attention to the following code in the application template to learn how the navbar widget is added.

- *index.js*  
The [layoutSet](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#layoutSet) configuration option of the [HtmlApplication object](/Documentation/Guide/SPA_Framework/Application_Project/#Application_Object) is set to *DevExpress.framework.html.layoutSets['navbar']*. This is a [predefined layout set](/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Ready-to-Use_Layout_Sets) that includes the layouts that will be applied to the application views. Within these layouts, the [navbar](/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Navbar_Layout) layout is the layout that contains the [NavBar](/Documentation/ApiReference/UI_Widgets/dxNavBar/) widget.

- *index.html*  
The layouts that are included into the "navbar" layout set are referenced on the application page. The "navbar" layout is used for root views on all platforms except for the Windows8Phone, where the "pivot" layout is used for root views. The "pivot" layout includes the [Pivot](/Documentation/ApiReference/UI_Widgets/dxPivot/) widget as a global navigation control. The "simple" layout is used for child views (not root) on Android and WindowsPhone8 platforms.

- *index.js*  
The [navigation](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#navigation) option is set to an array of objects that are used as configuration objects for [commands](/Documentation/ApiReference/SPA_Framework/Markup_Components/dxCommand/). These commands are displayed by navbar (pivot) items and navigate end-users to the views that are set for the [onExecute](/Documentation/ApiReference/SPA_Framework/Markup_Components/dxCommand/Configuration/#onExecute) option - the "home" and "about" views.

</article>