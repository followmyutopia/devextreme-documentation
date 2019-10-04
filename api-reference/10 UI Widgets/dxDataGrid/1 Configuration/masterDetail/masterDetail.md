---
id: dxDataGrid.Options.masterDetail
type: Object
---
---
##### shortDescription
Allows you to build a [master-detail interface](/Documentation/Guide/Widgets/DataGrid/Master-Detail_Interface/) in the grid.

---
In **DataGrid**, a master-detail interface supplies a usual data row with an expandable section that contains the details on this data row. In that case, the data row is called "master row", while the section is called "detail section".

To enable the master-detail interface, assign **true** to the **masterDetail**.[enabled](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/masterDetail/#enabled) option. After that, specify the template for detail sections using the **masterDetail**.**template** option. Templates allow you to place virtually anything into the detail sections. For example, you can display another **DataGrid** or any other [UI widget](/Documentation/ApiReference/UI_Widgets/) there. For more information on specifying the template for the detail sections, see the [template](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/masterDetail/#template) option description.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Data_Grid/MasterDetailView/jQuery/Light/"
}

#####See Also#####
- [Master-Detail Interface](/Documentation/Guide/Widgets/DataGrid/Master-Detail_Interface/)