<!--id-->dxSparkline<!--/id-->
<!--widgettree-->
dataSource: [{
    arg: "1",
    val: 1
}, {
    arg: "2",
    val: 2
}, {
    arg: "3",
    val: 8
}, {
    arg: "4",
    val: 4
}, {
    arg: "5",
    val: 5
}, {
    arg: "6",
    val: 2
}, {
    arg: "7",
    val: 7
}, {
    arg: "8",
    val: 3
}]
<!--/widgettree-->
===========================================================================
<!--module-->viz/sparkline<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->BaseSparkline,DataHelperMixin<!--/inherits-->
<!--lib-->
dx.viz.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **Sparkline** widget is a compact chart that contains only one series. Owing to their size, sparklines occupy very little space and can be easily collected in a table or embedded straight in text.
<!--/shortDescription-->

<!--fullDescription-->
#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/chartssparklinessparklinesline/"
}
#include common-readguidesbutton with {
    url: "/Documentation/Guide/Widgets/Sparkline/Visual_Elements/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget
<!--/fullDescription-->