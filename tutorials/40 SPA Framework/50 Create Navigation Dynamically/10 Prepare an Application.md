<article data-show="/Content/Applications/16_1/framework/CreateNavigationDynamically/step1/index.html" data-show-first="index.html">

Use the [application project template](/Documentation/Guide/SPA_Framework/Application_Project/) for the sample application.

- Add the following views to the application: **AdminView**, **GuestView**, **SharedView** and **Logon**. Don't forget to add links to the added files in the *index.html* file of your application project. See the view code in the Code block below.

- Implement the **LogOff** method that is called when executing the 'LogOff' command located in the 'AdminView', 'GuestView' and 'SharedView' views. Since this method is shared between three views, implement it within the application's namespace in the *index.js* file. This method will navigate to the 'Logon' view.

- Add the 'LogOff' command to the application's [command mapping](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#commandMapping), so that the application knows where and how this command must be displayed.

- According to the application template, the [NavBar layout](/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Navbar_Layout) is used for all application views. So that the 'logon' view is displayed using the [predefined simple layout](/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Simple_Layout), change the application [layout set](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#layoutSet) provided by the application template in the following way. 

        <!--JavaScript-->var layoutSet = DevExpress.framework.html.layoutSets['navbar'],
            simpleLayoutController = new DevExpress.framework.html.SimpleLayoutController();            
        layoutSet.push({ controller: simpleLayoutController, customResolveRequired: true });        
        MyApp.app = new DevExpress.framework.html.HtmlApplication({
            //...
            layoutSet: layoutSet,
            //...
        });
        
    As you can see, the **simpleLayoutController** layout controller is added with the **customResolveRequired** flag set to *true*. This means that this controller will be used in a specific context that is defined by the handler of the **htmlApplication** object's [resolveLayoutController](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Events/#resolveLayoutController) event. Handle this event so that the **simpleLayoutController** is applied to the 'Logon' view only.
    
        <!--JavaScript-->MyApp.app.on("resolveLayoutController", function(args) {
            if(args.viewInfo.viewName === "Logon") {
                args.layoutController = simpleLayoutController;
            }
        });
  
- Set the 'Logon' view as a startup view of the application. 

        <!--JavaScript-->MyApp.app.router.register(":view", { view: "Logon" });
        MyApp.app.navigate();

- Remove the [navigation](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#navigation) option from the configuration of the **htmlApplication** object. At this step, the 'Logon' view will be displayed. The 'simple' layout that will be used for this view, does not include a navigation control. In the next step, navigation will be created dynamically, when a user logs on to the application.

</article>