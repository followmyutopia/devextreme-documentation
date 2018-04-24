The DevExtreme data visualization widgets consist of many elements, each of which has options that determine appearance. The default values of appearance options are united in a <i>theme</i>.

DevExtreme provides Android, iOS, and several generic themes. Generic themes are platform-agnostic and vary in color scheme.

Each DevExtreme visualization widget has a [theme](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#theme) configuration option that allows you to set a theme. It is also convenient to apply a theme for the entire page with several DevExtreme widgets. To do this, use the **DevExpress.viz.currentTheme** method passing the name of the required theme as a parameter.

    <!--JavaScript-->DevExpress.viz.currentTheme('android5.light');

If you are creating a cross-platform application, you can determine on which platform the page is currently running. Use the [DevExpress.devices.current()](/Documentation/ApiReference/Common/Utils/devices/Methods/#current) method. The method's return value can be used for auto-specifying the theme.

    <!--JavaScript-->DevExpress.viz.currentTheme(DevExpress.devices.current());

In addition to the current device, you can specify the required color scheme. For this purpose, pass 'light' or 'dark' as the second parameter of the **currentTheme** method.

    <!--JavaScript-->DevExpress.viz.currentTheme(DevExpress.devices.current(), 'light');

If you do not set the required theme, the "generic.light" theme is applied.

You can customize the applied themes by setting custom values when defining the widget's configuration object. However, if you need to have a custom theme, implement a new theme. In this topic, you will learn how to implement and use a custom theme.