<article data-show="/Content/Applications/17_2/framework/ClearCache/step1/index.html" data-show-first="views/home.js">

Use an [application project template](/Documentation/Guide/SPA_Framework/Application_Project/) for your sample application.

- Add a button to the 'home' view. In the button's click handler, access the application's view cache using the **viewChache** field of the **HtmlApplciation** object. Call the **removeView()** method of the view cache object. Pass the key of the view that must be removed from the cache as a parameter. To get the key of the currently displayed view, use the second parameter of the **home** function that is called when the 'home' view is displayed.

- To ensure that a view is removed from the cache when clicking the button, print the time when the view is rendered. For this purpose, add the **renderedAt** field to the 'home' view's ViewModel and set it to the current time. This field will be updated when the 'home' view is created once again to be displayed. The next time the view is displayed, this field will keep its value if you do not remove the view from the cache.

</article>