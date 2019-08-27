---
id: GridBase.cellValue(rowIndex, dataField, value)
---
---
##### shortDescription
Sets a new value to a cell with a specific row index and a data field, column caption or name.

##### param(rowIndex): Number
The index of the row to which the cell belongs. Refer to [Column and Row Indexes](/Documentation/Guide/Widgets/{WidgetName}/Columns/Column_and_Row_Indexes/) for more information.

##### param(dataField): String
The [data field]({basewidgetpath}/Configuration/columns/#dataField), [caption]({basewidgetpath}/Configuration/columns/#caption), or [unique name]({basewidgetpath}/Configuration/columns/#name) of the column to which the cell belongs.

##### param(value): any
The cell's new value.

---
Call [saveEditData()]({basewidgetpath}/Methods/#saveEditData) after this method to save the changes:

---
#####jQuery

    <!--JavaScript-->
    var {widgetName} = $("#{widgetName}Container").dx{WidgetName}("instance");
    {widgetName}.cellValue(0, "Position", "CEO");
    {widgetName}.saveEditData();

#####Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { Dx{WidgetName}Module, Dx{WidgetName}Component } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(Dx{WidgetName}Component) {widgetName}: Dx{WidgetName}Component;
        updateCell(rowIndex, dataField, value) {
            this.{widgetName}.instance.cellValue(rowIndex, dataField, value);
            this.{widgetName}.instance.saveEditData();
        }
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })

---

#####See Also#####
#include common-link-callmethods