---
id: dxDataGrid
module: ui/data_grid
export: default
inherits: GridBase
---
---
##### shortDescription
The **DataGrid** is a widget that represents data from a local or remote source in the form of a grid. This widget offers such basic features as [sorting](/concepts/05%20Widgets/DataGrid/25%20Sorting/Sorting.md '/Documentation/Guide/Widgets/DataGrid/Sorting/'), [grouping](/concepts/05%20Widgets/DataGrid/45%20Grouping/Grouping.md '/Documentation/Guide/Widgets/DataGrid/Grouping/'), [filtering](/concepts/05%20Widgets/DataGrid/30%20Filtering%20and%20Searching/Filtering%20and%20Searching.md '/Documentation/Guide/Widgets/DataGrid/Filtering_and_Searching/'), as well as more advanced capabilities, like [state storing](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/stateStoring/stateStoring.md '/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/stateStoring/'), [export to Excel](/concepts/05%20Widgets/DataGrid/70%20Client-Side%20Exporting/Client-Side%20Exporting.md '/Documentation/Guide/Widgets/DataGrid/Client-Side_Exporting/'), [master-detail interface](/concepts/05%20Widgets/DataGrid/60%20Master-Detail%20Interface/Master-Detail%20Interface.md '/Documentation/Guide/Widgets/DataGrid/Master-Detail_Interface/'), and many others.

##### widgettree
dataSource: [{
    "ID": 1,
    "CompanyName": "Super Mart of the West",
    "City": "Bentonville",
    "State": "Arkansas"
}, {
    "ID": 2,
    "CompanyName": "Electronics Depot",
    "City": "Atlanta",
    "State": "Georgia"
}, {
    "ID": 3,
    "CompanyName": "K&S Music",
    "City": "Minneapolis",
    "State": "Minnesota"
}, {
    "ID": 4,
    "CompanyName": "Tom's Club",
    "City": "Issaquah",
    "State": "Washington"
}, {
    "ID": 5,
    "CompanyName": "E-Mart",
    "City": "Hoffman Estates",
    "State": "Illinois"
}]

##### lib
dx.web.js, dx.viz-web.js, dx.all.js

---
#include common-demobutton with {
    url: "/Demos/DataGridGallery/#chart/datagridspagingandscrollingpager"
}
#include common-readguidesbutton with {
    url: "/Documentation/Guide/Widgets/DataGrid/Overview/"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget