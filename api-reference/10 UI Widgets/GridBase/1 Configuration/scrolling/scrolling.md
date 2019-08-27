---
id: GridBase.Options.scrolling
type: Object
---
---
##### shortDescription
Overridden.
A configuration object specifying scrolling options.

---
The **DataGrid** widget supplies a user with an opportunity to scroll grid records. Scrolling can be performed within one page when used in conjunction with the [pager](/Documentation/Guide/Widgets/DataGrid/Paging/#User_Interaction) or throughout the whole data source. In the latter case, data is still loaded by pages but a user moves through them continuously without noticing it. To specify required scrolling behavior, use the [mode]({basewidgetpath}/Configuration/scrolling/#mode) property of the **scrolling** configuration object.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/datagridgridpagingandscrollingvirtualscrolling/"
}

#####See Also#####
- [Scrolling](/Documentation/Guide/Widgets/DataGrid/Scrolling/)