<!--playground--><!--/playground-->
<article data-show-web="/Content/Applications/17_1/Framework/CollectionWidgetSearch/Step4/markup.html">

To handle a text box value change, pass the handling function to the [onValueChanged](/Documentation/ApiReference/UI_Widgets/dxTextBox/Configuration/#onValueChanged) option of the **TextBox** widget. According to the task considered in this tutorial, the handling function should include the following method calls.

- [searchValue()](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#searchValuevalue)  
 Sets a search value to the **DataSource** instance.

- [load()](/Documentation/ApiReference/Data_Layer/DataSource/Methods/#load)  
 Reloads data from the data source according to the current search criteria, which causes a list update.

By default, the value change event fires when a user commits the value typed in the text box. To update the list each time a key is pressed, pass the 'keyup' value to the [valueChangeEvent](/Documentation/ApiReference/UI_Widgets/dxTextBox/Configuration/#valueChangeEvent) option of the **TextBox** widget. From now, the value change event fires each time a user releases a key.
</article>