The **HtmlApplication** object exposes the [events](/Documentation/Guide/SPA_Framework/Views_and_Layouts/#View_Life_Cycle) that are raised for each view displayed in the application. You can handle these events to perform certain actions for all the views in the application. At the same time, you may need to handle a particular event for a certain view only. In such a case, add a field with the event's name to the view's ViewModel and assign the required function to it. The following is the list of the events that can be handled in this manner.


- [viewRendered](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Events/#viewRendered)
- [viewShowing](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Events/#viewShowing)
- [viewShown](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Events/#viewShown)
- [viewHidden](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Events/#viewHidden)
- [viewDisposing](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Events/#viewDisposing)
- [viewDisposed](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Events/#viewDisposed)

For instance, you can handle the **viewShowing** event to get the required data for the view. In the following example, the **viewShown** event is handled to set a focus to a particular numberbox on the view.
 
	<!--HTML--><div data-options="dxView : { name: 'home' }">            
		<!-- ... -->
		<div class="dx-fieldset">            
			<div class="dx-field">
				<div class="dx-field-label">Bill Total:</div>                
				<div id="billTotalInput" class="dx-field-value" data-bind="dxNumberBox: { value: billTotal, placeholder: 'Type here...', valueChangeEvent: 'keyup', min: 0 }"></div>
			</div>
		</div>
	</div>
 
<!-- -->
 
	<!--JavaScript-->MyApp.home = function(params) {
		var billTotal = ko.observable(),
		//...
		function viewShown() {
			$("#billTotalInput").dxNumberBox("instance").focus();
		}
		return {
			billTotal: billTotal,
			viewShown: viewShown,
			//...
		};
	};

See a step-by-step example in the <a href="/Documentation/16_2/Tutorial/SPA_Framework/Handle_View_Events#Handle_View_Events">Handle View Events</a> tutorial.