<article data-show="/Content/Applications/17_2/framework/MenuItem/step1/index.html" data-show-first="index.js">

- Create a [simple application](/Documentation/Tutorial/SPA_Framework/Change_a_View_Title_Dynamically/#Prepare_a_Simple_Application).

- Add three commands to the "home" view as you did in the [Add Toolbar Buttons](/Documentation/Tutorial/SPA_Framework/Add_a_Toolbar_Button/#Add_a_Toolbar_Button) tutorial.

- To display the commands in a menu, specify the [commandMapping](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#commandMapping) configuration option of the **HtmlApplication** object in this *index.js* file. Observe the command containers that are exposed by the [predefined layouts](/Documentation/Guide/SPA_Framework/Built-in_Layouts/) that you use in this application. Within the object assigned to the **commandMapping** application option, add your commands to the required command containers. Set the **location** command option to *menu*.

</article>