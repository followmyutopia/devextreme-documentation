<article data-show="/Content/Applications/16_1/framework/ManageNavigation/step1/index.html" data-show-first="index.js">

Use an [application project template](/Documentation/Tutorial/SPA_Framework/Add_a_Navigation_Bar/#Use_an_Application_Template) to create an application. All the views that will be created in this application will use a single HTML template - the one that is defined within the *home.html* file. So, remove the "about" view from the application (the *about.html* file and a reference to it in the application page).

Change the commands that will be performed when pressing navbar items. For this purpose, modify the array assigned to the [navigation](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#navigation) configuration option of the **HtmlApplication** object. The command that is defined by the first array item should navigate to the "home" view with "1" passed as a navigation parameter. The command that is defined by the second array item should navigate to the "home" view with "2" passed as a navigation parameter.

    <!--JavaScript-->navigation: [
            {
                title: "Home 1",
                onExecute: "#home/1",
                icon: "home"
            },
            {
                title: "Home 2",
                onExecute: "#home/2",
                icon: "home"
            }
        ]

The extra navigation parameter should be registered in the application's [navigation routing](/Documentation/Guide/SPA_Framework/Navigation_and_Routing/#Declare_a_Routing) in the following manner.

    <!--JavaScript-->MyApp.app.router.register(":view/:item", { view: "home", item: 1 });
    
</article>