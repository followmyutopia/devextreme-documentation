The View Designer gives you the freedom from having to write HTML code for adding [widgets](/Documentation/ApiReference/UI_Widgets/) to a View. Choose a widget in the Toolbox, and drag and drop it to the required place in the view displayed in the device.

![Add Widget](Content/images/doc/18_1/DevExtreme/AddWidget.png)

A code template will be added to the corresponding place in the dxView's source automatically.

	<!--HTML--><div data-options="dxView : { name: 'Categories', title: 'Categories', targetFrame: 'navigation' } ">
		<div data-options="dxContent : { targetPlaceholder: 'content' } ">
			<div data-bind="dxTextBox: {}"></div>
		</div>
	</div>

Specify widget options. You can do this manually in code, setting the required properties proposed by the intellisense. Alternatively, you can use the Properties grid. It displays all options specified for the widget currently selected in the Source or Design View.

![Widget Properties](Content/images/doc/18_1/DevExtreme/WidgetProperties.png)
