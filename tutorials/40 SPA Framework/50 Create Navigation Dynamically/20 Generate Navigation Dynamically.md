<article data-show="/Content/Applications/16_1/framework/CreateNavigationDynamically/step2/index.html" data-show-first="views/Logon.js">
In this application, different sets of views must be available for end-users, depending on the user's role that he/she specifies when logging onto the application.
 
- Administrator: 'AdminView' and 'SharedView';
- Guest: 'GuestView' and SharedView'.
 
These views must be available from the navbar of the applied layout. To create required navigation items dynamically, use the [createNavigation](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Methods/#createNavigationnavigationConfig) and [renderNavigation](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Methods/#renderNavigation) methods. The **createNavigation** method creates navigation commands by the passed [command configuration objects](/Documentation/ApiReference/SPA_Framework/Markup_Components/dxCommand/Configuration/) and maps these commands to the application's 'global-navigation' [command container](/Documentation/ApiReference/SPA_Framework/Markup_Components/dxCommandContainer/). The **renderNavigation** method renders the created navigation commands to the control representing the 'global-navigation' command container. Since, the NavBar layout is used for the application's views, the NavBar items will be created for the passed navigation commands.

To create navigation when a user is logging on, call the **createNavigation** and **renderNavigation** methods within the **logon** function, which is called when using the Logon command on the 'Logon' view.

</article>