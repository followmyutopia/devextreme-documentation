===========================================================================
<!--default-->false<!--/default-->
<!--type-->Boolean<!--/type-->
===========================================================================

<!--shortDescription-->
Indicates whether on not to use the title of the previously displayed view as text on the Back button.
<!--/shortDescription-->

<!--fullDescription-->
When using [predefined layouts](/Documentation/17_2/Guide/SPA_Framework/Built-in_Layouts/) for application views, the Back button is added automatically to a view's toolbar. This button is added when there is a previously displayed view in the current [navigation stack](/Documentation/17_2/Guide/SPA_Framework/Navigation_and_Routing/#Navigation_History_in_Mobile_Apps). To create this button, a command with the 'back' identifier is added to the application. This command is then displayed as a button. A place for this button on the toolbar is determined according to [default command mapping](/Documentation/17_2/Guide/SPA_Framework/Built-in_Layouts/#Default_Command_Mapping). You can influence the [text](/Documentation/ApiReference/SPA_Framework/Markup_Components/dxCommand/Configuration/#title) that will be displayed on the Back button. If the **useViewTitleAsBackText** option is set to **true**, the [title](/Documentation/ApiReference/SPA_Framework/Markup_Components/dxView/Configuration/#title) of the previous view will be displayed. Otherwise, the default **Back** text will be displayed.

[note]On some devices, text may be absent on the Back button. This is made intentionally, according to the platform guidelines provided for this device.

[note]In [web applications](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#mode), there are no navigation stacks and the browser's Back button is used to return to the previously displayed view. Thus, the **useViewTitleAsBackText** option is not considered.
<!--/fullDescription-->