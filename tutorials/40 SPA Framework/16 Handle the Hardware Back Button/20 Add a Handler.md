<article data-show="/Content/Applications/16_1/framework/HardwareBackButton/step2/index.html" data-show-first="index.js">

To execute custom code when the hardware Back button is pressed, add a handler to the application's [navigatingBack](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Events/#navigatingBack) event. This event is raised when the [HtmlApplication.back()](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Methods/#back) method is called. To ensure that the hardware Back button is pressed, use the **isHardwareButton** field of the object passed as the handler's parameter.

The **navigatingBack** event also allows you to cancel navigation. To learn more about this event, refer to the [event description](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Events/#navigatingBack).
  
</article>