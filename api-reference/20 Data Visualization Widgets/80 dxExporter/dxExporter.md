<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->export viz widjet.<!--/d-->
<!--dep-->Use the API method 'export' for all widgets or the 'export' option for all widgets except sparklines.<!--/dep-->
===========================================================================
<!--type-->object<!--/type-->
<!--inherits-->..\..\10 UI Widgets\Component\Component.md<!--/inherits-->
<!--lib-->
dx.viz.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--deprecated-->
[note]This widget is <span style="color:red">deprecated</span>. Instead of it, use the built-in client-side exporting. For further information, refer to the **export** option of a particular widget.
<!--/deprecated-->

<!--shortDescription-->
The **Exporter** widget allows you to export your chart, gauge or any other DevExtreme data visualization widget into an image or a document. The **Exporter** works in conjunction with other widgets and should not be used separately.
<!--/shortDescription-->

<!--fullDescription-->
To operate, **Exporter** requires the [PhantomJS](http://phantomjs.org/) WebKit version 1.9.X, which allows you to use the client-server model where PhantomJS performs as a server. Refer to the [Deploy a Server](/Documentation/Guide/Data_Visualization/Common/Client-Side_Exporting_and_Printing/#Exporting_and_Printing_Using_dxExporter/Deploy_a_Server) topic for details on how to setup your server.

When your server is ready, add **Exporter** onto your page.

You can add the widget using one of the following approaches.

- **jQuery**  
 Use the `dxExporter` jQuery plug-in.

        <!--HTML--><div id="exportMenu"></div>

    <!---->

        <!--JavaScript-->$("#exportMenu").dxExporter();

- **Knockout**  
 Add a div element and apply the `dxExporter` binding to this element.

        <!--HTML-->
        <div data-bind="dxExporter: {}"></div>

- **AngularJS**  
 Add a div element and apply the `dx-exporter` directive to this element.

        <!--HTML-->
        <div dx-exporter="{}"></div>

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the [Installation](/Documentation/Guide/Data_Visualization/Basics/Installation/) article.
<!--/fullDescription-->