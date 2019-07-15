<!--id-->dxAccordion<!--/id-->
<!--widgettree-->
dataSource: [
{
    title: "Personal Data",
    text: "Name: John Smith, Birth Year: 1986",
},
{
    title: "Contacts",
    text: "Phone: (555)555-5555, Email: John.Smith@example.com",
}]
<!--/widgettree-->
===========================================================================
<!--module-->ui/accordion<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->CollectionWidget<!--/inherits-->
<!--lib-->
dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
The **Accordion** widget contains several panels displayed one under another. These panels can be collapsed or expanded by an end user, which makes this widget very useful for presenting information in a limited amount of space.
<!--/shortDescription-->

<!--fullDescription-->
#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/navigationaccordionaccordionaccordion/"
}
#include common-readguidesbutton with {
    url: "/Documentation/Guide/Widgets/Accordion/Overview/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget
<!--/fullDescription-->