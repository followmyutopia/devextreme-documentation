<article data-show="/Content/Applications/16_2/framework/ToolbarButton/step1/index.html" data-show-first="views/home.html">

To add commands to views, create a [simple application](/Documentation/Tutorial/SPA_Framework/Change_a_View_Title_Dynamically/#Prepare_a_Simple_Application).

Add a **div** element to the root of the [view markup](/Documentation/ApiReference/SPA_Framework/Markup_Components/dxView/) with the **data-bind** attribute set to [dxCommand](/Documentation/ApiReference/SPA_Framework/Markup_Components/dxCommand/). Use the configuration options of the **dxCommand** component to define the command. These options include the action to be performed when executing the command, the title, the icon, and the enabled and visible states. The **id** option is obligatory. If you use one of the reserved identifiers, the command will be displayed on a toolbar in the place that is recommended by the platform guidelines. In this tutorial, the 'create' identifier is used for a command. According to the [default command mapping](/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Default_Command_Mapping), this command will be added to the right of the layout's toolbar.

To perform an action when pressing the toolbar button that presents a command, assign a function to the command's [onExecute](/Documentation/ApiReference/SPA_Framework/Markup_Components/dxCommand/Configuration/#onExecute) configuration option. This function can be implemented in the view's ViewModel (here, within the *home.js* file).

</article>