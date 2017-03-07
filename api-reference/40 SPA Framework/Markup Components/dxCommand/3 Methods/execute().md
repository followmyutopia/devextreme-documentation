<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
Executes the command action.
<!--/d-->
===================================================================
===================================================================

<!--shortDescription-->
Executes the [action](/Documentation/ApiReference/SPA_Framework/Markup_Components/dxCommand/Configuration/#onExecute) associated with this command.
<!--/shortDescription-->

<!--fullDescription-->
Depending on the [layout](/Documentation/Guide/SPA_Framework/Built-in_Layouts/) used for the current view, specific [command containers](/Documentation/ApiReference/SPA_Framework/Markup_Components/dxCommandContainer/) will be available for commands added to this view. Depending on how you define [command mapping](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#commandMapping), the command will be displayed by a specific item of the widget that serves as a command container. When clicking the widget item, the **execute()** method will be be called for the associated command. This method performs the function assigned to the [onExecute](/Documentation/ApiReference/SPA_Framework/Markup_Components/dxCommand/Configuration/#onExecute) command option or calls the [navigate()](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Methods/#navigateuri_options) function to navigate to the URL specified for the **onExecute** command option.
<!--/fullDescription-->