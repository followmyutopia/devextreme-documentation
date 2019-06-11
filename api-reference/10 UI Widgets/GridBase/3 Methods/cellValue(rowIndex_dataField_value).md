<!--id-->GridBase.cellValue(rowIndex, dataField, value)<!--/id-->
===================================================================
===================================================================

<!--shortDescription-->
Sets a new value to a cell with a specific row index and a data field, column caption or name.
<!--/shortDescription-->

<!--paramName1-->rowIndex<!--/paramName1-->
<!--paramType1-->Number<!--/paramType1-->
<!--paramDescription1-->
The index of the row to which the cell belongs. Refer to [Column and Row Indexes](/Documentation/Guide/Widgets/{WidgetName}/Columns/Column_and_Row_Indexes/) for more information.
<!--/paramDescription1-->

<!--paramName2-->dataField<!--/paramName2-->
<!--paramType2-->String<!--/paramType2-->
<!--paramDescription2-->
The [data field]({basewidgetpath}/Configuration/columns/#dataField), [caption]({basewidgetpath}/Configuration/columns/#caption), or [unique name]({basewidgetpath}/Configuration/columns/#name) of the column to which the cell belongs.
<!--/paramDescription2-->

<!--paramName3-->value<!--/paramName3-->
<!--paramType3-->any<!--/paramType3-->
<!--paramDescription3-->
The cell's new value.
<!--/paramDescription3-->

<!--fullDescription-->
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
<!--/fullDescription-->