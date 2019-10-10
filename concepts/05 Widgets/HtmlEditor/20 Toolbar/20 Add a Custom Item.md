The toolbar can contain different DevExtreme widgets other than [buttons and select boxes](/concepts/05%20Widgets/HtmlEditor/20%20Toolbar/00%20Predefined%20Items/00%20Predefined%20Items.md '/Documentation/Guide/Widgets/HtmlEditor/Toolbar/Predefined_Items/'). Assign the widget's name to the [widget](/api-reference/_hidden/dxHtmlEditorToolbarItem/widget.md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#widget') option and configure it in the [options](/api-reference/10%20UI%20Widgets/dxToolbar/5%20Default%20Item%20Template/options.md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#options') object. In this case, you need to implement all the logic.

You can find an example in the [widget](/api-reference/_hidden/dxHtmlEditorToolbarItem/widget.md '/Documentation/ApiReference/UI_Widgets/dxHtmlEditor/Configuration/toolbar/items/#widget') description or the following demo:

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/HtmlEditor/ToolbarCustomization/jQuery/Light/"
}