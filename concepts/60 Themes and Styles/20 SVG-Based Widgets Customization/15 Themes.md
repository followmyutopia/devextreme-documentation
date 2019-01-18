Unlike [CSS themes](/Documentation/Guide/Themes_and_Styles/Predefined_Themes/), which are collections of CSS classes, themes for SVG-based widgets are widget configurations. You can use them to define several widget configurations in one place and switch between them.

Particular options cannot be used in widget configurations in themes. Such options have a corresponding note in their description, for example, [dataSource](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#dataSource).

The following code declares widget configurations for a custom theme called `myTheme`:

    <!--JavaScript-->
    var customTheme = {
        name: 'myTheme',
        barGauge: { /* BarGauge configuration */ },
        bullet: { /* Bullet configuration */ },
        chart: { /* Chart configuration */ },
        funnel: { /* Funnel configuration */ },
        gauge: { /* CircularGauge and LinearGauge configuration */ },
        map: { /* VectorMap configuration */ },
        pie: { /* PieChart configuration */ },
        polar: { /* PolarChart configuration */ },
        rangeSelector: { /* RangeSelector configuration */ },
        sankey: { /* Sankey configuration */ },
        sparkline: { /* Sparkline configuration */ },
        treeMap: { /* TreeMap configuration */ }
    };

The custom theme should be registered using the [DevExpress.viz.registerTheme(customTheme, baseTheme)](/Documentation/ApiReference/Common/utils/viz/Methods/#registerThemecustomTheme_baseTheme) method. Pass the name of a [predefined theme](/Documentation/Guide/Themes_and_Styles/Predefined_Themes/) as the `baseTheme` argument. This theme will complement the custom theme if specific options are absent in the latter. In the following code, Generic Light is used as the base theme.

    <!--JavaScript-->
    DevExpress.viz.registerTheme(customTheme, "generic.light");
    // ===== or when using modules =====
    import { registerTheme } from "devextreme/viz/themes";

    registerTheme(customTheme, "generic.light");

To apply a theme to all widgets, pass its name to the [DevExpress.viz.currentTheme(theme)](/Documentation/ApiReference/Common/utils/viz/Methods/#currentThemetheme) method. If the widgets were created before the method call, refresh the styling settings using the [DevExpress.viz.refreshTheme()](/Documentation/ApiReference/Common/utils/viz/Methods/#refreshTheme) method:

    <!--JavaScript-->
    DevExpress.viz.currentTheme("myTheme");
    DevExpress.viz.refreshTheme();
    // ===== or when using modules =====
    import { currentTheme, refreshTheme } from "devextreme/viz/themes";

    currentTheme("myTheme");
    refreshTheme();

To apply a theme to a single widget, assign its name to the widget's [theme](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#theme) option.