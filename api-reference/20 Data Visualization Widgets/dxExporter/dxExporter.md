<!--dep--><!--/dep-->
===========================================================================
<!--type-->Object<!--/type-->
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
To operate, **Exporter** requires the [PhantomJS](http://phantomjs.org/) WebKit version 1.9.X, which allows you to use the client-server model where PhantomJS performs as a server. Refer to the [Deploy a Server](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Client-Side_Exporting_and_Printing/#dxExporter/Deploy_a_Server) topic for details on how to setup your server.

When your server is ready, add **Exporter** onto your page.

#include common-ref-roottopic-introduction with { }

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

    <!--JavaScript-->$(function() {
        $("#exportMenu").dxExporter({
            // ...
            });
    });

    <!--HTML--><div id="exportMenu"></div>

#####[**Angular**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <dx-exporter></dx-exporter>

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div dx-exporter="{
        // ...
    }"></div>

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <div data-bind="dxExporter: {
        // ...
    }"></div>

---

 
<!--/fullDescription-->