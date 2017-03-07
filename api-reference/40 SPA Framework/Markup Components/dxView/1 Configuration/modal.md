<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Specifies whether to treat this view as modal<!--/d-->
===========================================================================
<!--type-->Boolean<!--/type-->
===========================================================================

<!--shortDescription-->
Indicates whether the view should be displayed in a modal mode.
<!--/shortDescription-->

<!--fullDescription-->
To display a modal view in a popup window, add the [Popup Layout](/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Popup_Layout) to your application. This layout uses the [Popup](/Documentation/ApiReference/UI_Widgets/dxPopup/) widget to display a view in a popup window. By default the **SimpleLayoutController** controller is used to manage the popup window content. So, when defining a modal view, find out which [content placeholders](/Documentation/Guide/SPA_Framework/Views_and_Layouts/#Insert_View_into_Layout) and [command containers](/Documentation/Guide/SPA_Framework/Views_and_Layouts/#Add_Commands_to_Views) are available in the [Simple Layout](/Documentation/Guide/SPA_Framework/Built-in_Layouts/#Simple_Layout).

	<!--HTML--><div data-options="dxView : { name: 'login', title: 'Log in', modal: true } " >
		<div data-options="dxContent : { targetPlaceholder: 'content' } " >
			<!--...-->
        </div>
	</div>

To see an example of using a modal view in a DevExtreme application, refer to the [Logon When Navigating to a View](/Documentation/Tutorial/SPA_Framework/Logon_When_Navigating_to_a_View/#Logon_When_Navigating_to_a_View) tutorial.

If a view should be modal in specific scenarios only, do not set the **modal** option for it. Instead, use the **modal** parameter when navigating to the view using the [navigate()](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Methods/#navigateuri_options) method or the **modal** option when using a [command](/Documentation/ApiReference/SPA_Framework/Markup_Components/dxCommand/).

Pay attention to the recommendations given for using modal views in the [Modal Contexts](https://developer.apple.com/library/ios/documentation/userexperience/conceptual/mobilehig/Modal.html#//apple_ref/doc/uid/TP40006556-CH64-SW1) article. If it is better to display an "alert"/"confirm" dialog instead of a modal view, use an appropriate method of the [DevExpress.ui.dialog](/Documentation/ApiReference/Common/Utils/ui/dialog/) object.
<!--/fullDescription-->