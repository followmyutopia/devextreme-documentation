<!--dep--><!--/dep-->
===========================================================================
<!--module-->framework/html/html_application<!--/module-->
<!--export-->default<!--/export-->
<!--type-->Object<!--/type-->
<!--inherits-->..\..\10 UI Widgets\EventsMixin\EventsMixin.md<!--/inherits-->
<!--lib-->
dx.mobile.js, dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
An object that manages [views](/Documentation/17_2/Guide/SPA_Framework/Views_and_Layouts/) and controls the application life cycle.
<!--/shortDescription-->

<!--fullDescription-->
The **HtmlApplication** object connects markup elements, scripts and styles to a single application, and provides methods for controlling the application life cycle. To create an HtmlApplication object, call the **HtmlApplication** constructor within the document.ready event handler or the jQuery "$()" function.

    <!--JavaScript-->$(function () {
        MyApp.app = new DevExpress.framework.html.HtmlApplication();
    });

To configure the HtmlApplication object, pass a [configuration object](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/) as the constructor's parameter. Specify the required options within the configuration object. For instance, specify the [set of layouts](/Documentation/ApiReference/SPA_Framework/HtmlApplication/Configuration/#layoutSet) to be used as a skeleton for application views. Using the application object, register a [routing rule](/Documentation/17_2/Guide/SPA_Framework/Navigation_and_Routing/) for the application and navigate to a starting view.

    <!--JavaScript-->window.MyApp = {};
    $(function() {
        MyApp.app = new DevExpress.framework.html.HtmlApplication({
            namespace: MyApp,
            layoutSet: DevExpress.framework.html.layoutSets['navbar']
        });
        MyApp.app.router.register(":view", { view: "index"});
        MyApp.app.navigate();
    });
<!--/fullDescription-->