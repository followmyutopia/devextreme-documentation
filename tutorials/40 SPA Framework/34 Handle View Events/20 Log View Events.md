<article data-show="/Content/Applications/16_1/framework/ViewEvents/step2/index.html" data-show-first="views/log.js">

The **HtmlApplication** object exposes the [events](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Events/) that are raised for each view displayed in the application. You can handle these events to perform certain actions for all the views in the application. To handle a particular event for a certain view only, add a field with the event's name to the view's ViewModel and assign the required function to it. In this manner, handle the following view events for the 'log' view.

-  [viewShowing](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Events/#viewShowing)
-  [viewRendered](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Events/#viewRendered)
-  [viewShown](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Events/#viewShown)
-  [viewHidden](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Events/#viewHidden)

<!--..-->

    <!--JavaScript-->var viewModel = {
          log: ko.observable(''),
          viewRendered: viewRendered,
          viewShowing: viewShowing,
          viewShown: viewShown,
          viewHidden: viewHidden
      };

In handlers for these events, call the **log()** function to log that a particular event has occurred. In the **log** function, concatenate the log information about the event that called this function to the ViewModel's **log** field value. As a result, when you navigate to the 'log' view, the **log** function will be called at each view event and will display information on the occurred events in the view's text area.

Note that the next time the 'log' view is displayed, its markup is ready and the **rendered** event does not occur. This is because information on views is cached so that it does not take time to display a view repeatedly.

</article>