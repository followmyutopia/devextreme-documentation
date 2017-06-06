<article data-show="/Content/Applications/17_2/framework/YourFirstApplication/step1/YourFirstApplication.html">

- Create an HTML file and give it the "index.html" name.

- In the created file, reference the [framework scripts](/Documentation/Guide/SPA_Framework/Application_Project/#Scripts) and the scripts that are required by the framework scripts.  
 [note]The dx.mobile/dx.web library must be referenced last.

- To turn your simple HTML page into an application, create an [HtmlApplication](/Documentation/ApiReference/SPA_Framework/HtmlApplication/) object within the **document.ready** event handler or the jQuery "$()" function. The **HtmlApplication** object will control the application life cycle and display views. Pass "mobileApp" to the [mode](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#mode) option to notify that the current application is a mobile application.

</article>