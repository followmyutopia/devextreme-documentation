<article data-show="/Content/Applications/17_1/framework/DynamicNavItems/step2/index.html" data-show-first="views/login.js">

You have set the **navigation** option of the **HtmlApplication** object to an array of objects in  the previous step. These objects are used by the application as configuration objects for creating [commands](/Documentation/ApiReference/SPA_Framework/Markup_Components/dxCommand/). In a UI, these commands will be displayed as navbar or slideout items depending on the layouts used in the application. You can access these commands in code, using the [navigation](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#navigation) field of the **HtmlApplication** object. In this application, you will use the **navigation** field to change the visibility of specific commands (navigation items in a UI).

Implement the **login** function that is called when pressing **Login** in the 'login' view. For the simplicity of the tutorial application, do not check credentials, but navigate to the 'home' view immediately using the application's [navigate()](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Methods/#navigateuri_options) method. To hide the "Login" navigation item, access the first item in the commands array returned by the **navigation** field of the **HtmlApplciation** object. This item is the [dxCommand](/Documentation/ApiReference/SPA_Framework/Markup_Components/dxCommand/) component. To change one of its configuration options, in particular its **visible** option, use the **option()** method. Pass the target option name as the first parameter and the required value as the second parameter.

    <!--JavaScript-->var navigation = MyApp.app.navigation;
    navigation[0].option("visible", false);

Show the "Home" and "Logout" navigation items in the same manner. Access the corresponding commands in the **navigation** array and set the **visible** option to *true*.

Implement the **logout** function that is called when pressing the **Logout** navigation item. In this function, navigate to the 'login' view using the application's **navigate()** method. Hide the "Home" and "Logout" navigation items by setting the **visible** option of the corresponding commands to *false*, as you did in the **login** function above. In addition, make the "Login" navigation item visible using the same technique.

</article>