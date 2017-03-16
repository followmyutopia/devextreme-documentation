You can find all the required files in the DevExtreme zip archive or in the folder where you have installed DevExtreme, which is **C:\Program Files (x86)\DevExpress 16.2\DevExtreme\Sources** by default. Copy the **Lib** folder into the folder with your application. Then, depending on the library or framework you use in your app, link the needed files within the `<head>` tag of your index page in the given order.

- **jQuery**

        <!--HTML-->
        <!-- DevExtreme dependencies -->
        <script type="text/javascript" src="/js/jquery-3.1.0.min.js"></script>
        <!-- DevExtreme themes -->
        <link rel="stylesheet" type="text/css" href="/css/dx.common.css" />
        <link rel="stylesheet" type="text/css" href="/css/dx.light.css" />
        <!-- A DevExtreme library -->
        <script type="text/javascript" src="/js/dx.all.js"></script>
        <!-- <script type="text/javascript" src="/js/dx.mobile.js"></script> -->
        <!-- <script type="text/javascript" src="/js/dx.web.js"></script> -->
        <!-- <script type="text/javascript" src="/js/dx.viz.js"></script> -->
        <!-- <script type="text/javascript" src="/js/dx.viz-web.js"></script> -->
        

- **Knockout**

        <!--HTML-->
        <!-- DevExtreme dependencies -->
        <script type="text/javascript" src="/js/jquery-3.1.0.min.js"></script>
        <!-- The Knockout library -->
        <script type="text/javascript" src="/js/knockout-3.4.0.js"></script>
        <!-- DevExtreme themes -->
        <link rel="stylesheet" type="text/css" href="/css/dx.common.css" />
        <link rel="stylesheet" type="text/css" href="/css/dx.light.css" />
        <!-- A DevExtreme library -->
        <script type="text/javascript" src="/js/dx.all.js"></script>
        <!-- <script type="text/javascript" src="/js/dx.mobile.js"></script> -->
        <!-- <script type="text/javascript" src="/js/dx.web.js"></script> -->
        <!-- <script type="text/javascript" src="/js/dx.viz.js"></script> -->
        <!-- <script type="text/javascript" src="/js/dx.viz-web.js"></script> -->
        

- **AngularJS**

        <!--HTML-->
        <!-- DevExtreme dependencies -->
        <script type="text/javascript" src="/js/jquery-3.1.0.min.js"></script>
        <!-- The AngularJS library -->
        <script type="text/javascript" src="/js/angular.min.js"></script>
        <!-- DevExtreme themes -->
        <link rel="stylesheet" type="text/css" href="/css/dx.common.css" />
        <link rel="stylesheet" type="text/css" href="/css/dx.light.css" />
        <!-- A DevExtreme library -->
        <script type="text/javascript" src="/js/dx.all.js"></script>
        <!-- <script type="text/javascript" src="/js/dx.mobile.js"></script> -->
        <!-- <script type="text/javascript" src="/js/dx.web.js"></script> -->
        <!-- <script type="text/javascript" src="/js/dx.viz.js"></script> -->
        <!-- <script type="text/javascript" src="/js/dx.viz-web.js"></script> -->
        
[note] DevExtreme provides a wide selection of predefined themes designed specifically for each platform. For more information, see the [Predefined Themes](/Documentation/Guide/Themes/Predefined_Themes/) article.

<div id="GlobalizeLocalScripts"></div>

Localized apps and apps that use custom date, number or currency formatting require the [Globalize](https://github.com/jquery/globalize) library as well.

    <!--HTML-->
    <!-- Globalize scripts -->
    <script type="text/javascript" src="/js/cldr.min.js"></script>
    <script type="text/javascript" src="/js/cldr/event.min.js"></script>
    <script type="text/javascript" src="/js/cldr/supplemental.min.js"></script>
    <script type="text/javascript" src="/js/globalize.min.js"></script>
    <script type="text/javascript" src="/js/globalize/message.min.js"></script>
    <script type="text/javascript" src="/js/globalize/number.min.js"></script>
    <script type="text/javascript" src="/js/globalize/currency.min.js"></script>
    <script type="text/javascript" src="/js/globalize/date.min.js"></script>

[note]Globalize scripts need to go _before_ DevExtreme scripts.

If you use the [client-side export feature](/Documentation/Guide/Widgets/DataGrid/Client-Side_Export/) in the [DataGrid](/Documentation/ApiReference/UI_Widgets/dxDataGrid/) and [PivotGrid](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/) widgets, reference the JSZip library.

    <!--HTML-->
    <!-- JSZip library -->
    <script type="text/javascript" src="/js/jszip.min.js"></script>
    
[note]Reference the *jszip.min.js* script *before* the DevExtreme scripts.

#####See Also#####
- [Predefined Themes](/Documentation/Guide/Themes/Predefined_Themes/)

[tags]getting started, install, local scripts