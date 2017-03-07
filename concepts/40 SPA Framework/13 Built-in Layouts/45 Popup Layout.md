The Popup Layout is available for all the platforms supported by the framework. This layout is used to show [modal views](/Documentation/ApiReference/SPA_Framework/Markup_Components/dxView/Configuration/#modal) in a popup window.

The Popup Layout uses the [Popup](/Documentation/ApiReference/UI_Widgets/dxPopup/) widget to display a view in a popup window. The content of the popup window is managed by a specified layout controller. By default, the SimpleLayoutController is used for the popup window. This means that when defining a modal view, find out which content placeholders and command containers are available in the [Simple Layout](/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Simple_Layout).

**Links**:

	<!--HTML--><link rel="dx-template" type="text/html" href="layouts/Simple/SimpleLayout.html" />
	<script type="text/javascript" src="layouts/Simple/SimpleLayout.js"></script>
	<link rel="stylesheet" type="text/css" href="layouts/Simple/SimpleLayout.css" />
	<link rel="dx-template" type="text/html" href="layouts/Popup/PopupLayout.html" />
	<script type="text/javascript" src="layouts/Popup/PopupLayout.js"></script>
	<link rel="stylesheet" type="text/css" href="layouts/Popup/PopupLayout.css" />

[note]Add links to the Popup Layout files after all other layout links, because the Popup Layout will be added to the [layout set](/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Ready-to-Use_Layout_Sets) that is used in your application, if you use one of the predefined layout sets - "navbar", "simple", "slideout" and "split".

**Customize Popup Layout Content**

You can replace the layout that is used in the popup window with another one. For this purpose, you will have to specify a [custom layout set](/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Custom_Layout_Sets) where you will create the PopupLayoutController controller passing an object with a specified **childController** field as a parameter.
