===========================================================================
<!--default-->'generic.light'<!--/default-->
<!--acceptValues-->'android5.light' | 'generic.dark' | 'generic.light' | 'generic.contrast' | 'ios7.default' | 'generic.carmine' | 'generic.darkmoon' | 'generic.darkviolet' | 'generic.greenmist' | 'generic.softblue' | 'material.blue.light' | 'material.lime.light' | 'material.orange.light' | 'material.purple.light' | 'material.teal.light'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Sets the name of the theme the widget uses.
<!--/shortDescription-->

<!--fullDescription-->
A theme is a widget configuration that gives the widget a distinctive appearance. Use can use one of the [predefined themes](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Appearance_Customization/#Themes) or create a [custom one](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Appearance_Customization/#Themes/Customize_a_Theme). Changing the option values in the widget's configuration object overrides the theme's corresponding values.

[note]The following themes were deprecated or renamed: _'desktop'_, _'desktop-dark'_, _'android'_, _'android-holo-light'_, _'ios'_, _'win8'_, _'win8-white'_, _'win8.white'_, _'win8.black'_, _'win10.white'_, _'win10.black'_. In new applications, use themes listed in the accepted values.

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `VizTheme` enum. This enum accepts the following values: `GenericLight`, `GenericDark`, `GenericContrast`, `GenericCarmine`, `GenericDarkMoon`, `GenericSoftBlue`, `GenericDarkViolet`, `GenericGreenMist`, `Android5Light`, `IOS7Default`, `MaterialBlueLight`, `MaterialLimeLight`, `MaterialOrangeLight`, `MaterialPurpleLight`, `MaterialTealLight`.
<!--/fullDescription-->