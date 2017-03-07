A default template for a widget is defined out-of-the-box. Default templates are based on a predefined set of fields in the widget. For example, every widget has a field that allows you to modify textual representation of the widget. 

 - **text**  
 Specifies the text inserted into the widget element.

Different widgets can have other additional fields (for example, **icon** field).

Collection widgets have default templates for item representation.They are based on a predefined set of fields in the widget data source, requiring you to provide the required set of fields for your widget's data source, so that widget items are displayed using a default template. The following are the fields that are used in a default item template of any widget.

- **disabled**  
Specifies whether or not the list item is disabled.
- **visible**  
Specifies whether or not the list item is visible.
- **html**  
Specifies the html code inserted into the item element.
- **template**  
Specifies an item template that should be used to render this item only.
- **text**  
Specifies the text inserted into the item element.

However, additional fields can be required for item templates of certain widgets. For instance, a default template for the [List](/Documentation/ApiReference/UI_Widgets/dxList/) widget is based on the set of fields above. However, the **key** field is also required to specify the group to which an item is related. To learn what set of fields is required for a specific widget, refer to the **Default Item Template** reference section of this widget.

In certain scenarios, it is enough to specify a simple array as a widget data source. In this instance, a default item template contains [text](http://knockoutjs.com/documentation/text-binding.html) binding associated with the current array value.