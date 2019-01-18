We recommend customizing a widget using its API. Unlike [CSS classes](/Documentation/Guide/Themes_and_Styles/CSS-Based_Widgets_Customization/#Individual_CSS_Classes), the API is changed rarely, and if it happens, the widget populates the browser console with warnings that help you mend your code.

Each widget has an API described in the widget's [API reference section](/Documentation/ApiReference/).

If your page contains multiple instances of the same widget, you can use the [defaultOptions(rule)](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#defaultOptionsrule) method to specify a default configuration for all of them in one place. The same method allows you to specify different default configurations for different devices.