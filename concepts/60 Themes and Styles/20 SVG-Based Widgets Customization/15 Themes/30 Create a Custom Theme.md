You can define several custom SVG themes and switch between them. The following code declares a custom theme called `myTheme`:

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

[note] Particular options cannot be used in themes. Such options have a corresponding note in their description, for example, [dataSource](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#dataSource).

You should use the [DevExpress.viz.registerTheme(customTheme, baseTheme)](/Documentation/ApiReference/Common/utils/viz/Methods/#registerThemecustomTheme_baseTheme) method to register the custom theme. Pass the name of a [predefined theme](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Configuration/#theme) as the `baseTheme` argument. This theme complements the custom theme if specific options are absent in the latter. In the following code, Generic Light is used as the base theme:

    <!--JavaScript-->
    DevExpress.viz.registerTheme(customTheme, "generic.light");
    // ===== or when using modules =====
    import { registerTheme } from "devextreme/viz/themes";

    registerTheme(customTheme, "generic.light");

Next, use the theme's name (`myTheme`) to [apply the theme](/Documentation/Guide/Themes_and_Styles/SVG-Based_Widgets_Customization/#Themes/Apply_a_Theme).