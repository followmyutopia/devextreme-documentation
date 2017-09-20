Add the required DevExtreme localization files to your project. Add links to these files within the main page of your application.

Take a look below for an example of links in code. 

    <!--HTML-->
    <script type="text/javascript" src="js/dx.web.js"></script>
    <script type="text/javascript" src="js/localization/dx.messages.de.js"></script>

[note]Dictionary scripts must be linked in the same order as they were presented in the example above. DevExtreme scripts must be linked above dictionary scripts.

If you are using the modular approach, link the localization module as demonstrated below.

    <!--JavaScript-->
    //Loads the localization modules
    var localization = require("devextreme/localization");

    //Loads dictionary for the "de" locale
    var deMessages = require("devextreme/localization/messages/de.json!json");

    //Loads messages from the dictionary.
    localization.loadMessages(deMessages);


[note]The way you link modules depends on the selected module loader (for example, [jspm](https://jspm.io/docs/plugins.html), [Webpack](https://webpack.js.org/loaders/#json) or others).

If you are using Globalize, refer to the [Localization - Use Globalize](/Documentation/Guide/Widgets/Common/UI_Widgets/Localization_-_Use_Globalize/) article to learn how to link Globalize modules.

For information on linking modules required for Intl localization, refer to [Intl](https://github.com/DevExpress/DevExtreme-Intl#getting-started) documentation.