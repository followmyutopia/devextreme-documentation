<article data-show="/Content/Applications/16_1/framework/DisableCache/step1/index.html" data-show-first="views/nonCachedView.html">

Use a [simple project template](/Documentation/Tutorial/SPA_Framework/Change_a_View_Title_Dynamically/#Prepare_a_Simple_Application) for your sample application.

- Add two views to the application - 'cachedView' and 'nonCachedView'. Define an HTML template for these views. It will be enough for the task. You will have only the *cachedView.html* and *nonCachedView.html* files added (include links to these files in the application page).

- To disable caching of the 'nonCachedView' view, set the [disableCache](/Documentation/ApiReference/SPA_Framework/Markup_Components/dxView/Configuration/#disableCache) configuration option of the **dxView** markup component representing this view to *true*.

- Add two buttons to the 'home' view - to navigate to 'cachedView' and 'nonCachedView'.

As you can see in the running application, 'cachedView' is not recreated when navigating to it repeatedly, while 'nonCachedView' is recreated. You can notice this by the loading indicator that is displayed each time 'nonCachedView' is displayed.

</article>