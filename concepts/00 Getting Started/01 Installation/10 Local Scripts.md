You can find all the required files in the [DevExtreme zip archive](/Download/#Alternative-Downloads) or DevExtreme folder (%ProgramFiles(x86)%\DevExpress 18.2\DevExtreme\Sources). Copy the Lib folder into the folder with your application. Then, link the required files in the `<head>` tag on your index page in the following order:

    <!--HTML-->
    <script type="text/javascript" src="js/jquery-3.1.0.min.js"></script>

    <!-- Reference either Knockout or AngularJS, if you do -->
    <script type="text/javascript" src="js/knockout-latest.js"></script>
    <script type="text/javascript" src="js/angular.min.js"></script>

    <!-- DevExtreme themes -->
    <link rel="stylesheet" type="text/css" href="/css/dx.common.css" />
    <link rel="stylesheet" type="text/css" href="/css/dx.light.css" />

    <!-- DevExtreme library -->
    <script type="text/javascript" src="js/dx.all.js"></script>
    <!-- <script type="text/javascript" src="js/dx.mobile.js"></script> -->
    <!-- <script type="text/javascript" src="js/dx.web.js"></script> -->
    <!-- <script type="text/javascript" src="js/dx.viz.js"></script> -->
    <!-- <script type="text/javascript" src="js/dx.viz-web.js"></script> -->

The stylesheets in the code above apply the Generic Light theme. See [Predefined Themes](/Documentation/Guide/Themes/Predefined_Themes/) for information about the other available themes.

Specific functionality requires additional libraries. For instance, [localization](/Documentation/Guide/Common/Localization/) uses the [Globalize](https://github.com/globalizejs/globalize/blob/master/README.md) library or [Intl API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl). Similarly, [client-side exporting](/Documentation/Guide/Widgets/DataGrid/Client-Side_Exporting/) in the **DataGrid** and **PivotGrid** widgets requires the [JSZip](https://stuk.github.io/jszip/) library. Refer to the dedicated topics for details.

#####See Also#####
- **Create and Configure a Widget**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)
