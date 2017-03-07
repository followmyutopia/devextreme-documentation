<article data-show="/Content/Applications/16_1/LearningCenter/Data-BoundApplication/step3-2/index.html">

As you can see in the running application, the **NavBar** layout uses the [NavBar](/Documentation/ApiReference/UI_Widgets/dxNavBar/) widget for the application's global navigation. NavBar items (such as About in the template application) represent [commands](/Documentation/ApiReference/SPA_Framework/Markup_Components/dxCommand/Configuration/) defined by the [navigation](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#navigation) object within the application's configuration object. Open the *application1.config.js* file from the Desktop and Mobile projects and specify the following set of commands.

    <!--JavaScript-->window.Application1 = $.extend(true, window.Application1, {
        "config": {
            "layoutSet": "navbar",
            "animationSet": "default",
            "navigation": [
                {
                    "title": "Categories",
                    "onExecute": "#categories",
                    "icon": "home"
                },
                {
                    "title": "About",
                    "onExecute": "#About",
                    "icon": "info"
                }
            ]
        }
    });
    
Set the "Categories" view - the first view displayed when the application runs. For this purpose, change the **startupView** variable to "categories" in the *index.js* file of each project.

    <!--JavaScript-->var layoutSet = Application1.config.layoutSet,
        startupView = "categories";
    //...
    Application1.app = new DevExpress.framework.html.HtmlApplication({
        namespace: Application1,
        layoutSet: DevExpress.framework.html.layoutSets[Application1.config.layoutSet],
        animationSet: DevExpress.framework.html.animationSets[Application1.config.animationSet],
        navigation: Application1.config.navigation
    });        
    //...
    Application1.app.router.register(":view/:id", { view: startupView, id: undefined });
    Application1.app.navigate();

</article>