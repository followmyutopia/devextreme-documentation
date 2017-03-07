The DevExtreme SPA framework allows you to define a view markup specifically for the current context (for a particular platform, device orientation or any custom context). You can learn how to do this in the [Context Specific Markup](/Documentation/Guide/SPA_Framework/Views_and_Layouts/#Context_Specific_Markup) topic. At the same time, you may need to have ViewModel fields specific to the current context too. In this instance, use the view's [viewShown and viewHidden](/Documentation/Guide/SPA_Framework/Views_and_Layouts/#Handle_View_Events) events to subscribe to and unsubscribe from tracking a context change.

The following example demonstrates how to change a view [title](/Documentation/ApiReference/SPA_Framework/Markup_Components/dxView/Configuration/#title) when device orientation changes.

	<!--JavaScript-->function onOrientationChanged(e) { viewModel.title(e.orientation); }
	var viewModel = { 
		title: ko.observable(DevExpress.devices.orientation()), 
		viewShown: function() { 
			DevExpress.devices.on("orientationChanged", onOrientationChanged); 
		}, 
		viewHidden: function() { 
			DevExpress.devices.off("orientationChanged", onOrientationChanged);
		} 
	};