===================================================================
===================================================================

<!--shortDescription-->
Sets a new value to a cell with specific row and column indexes.
<!--/shortDescription-->

<!--paramName1-->rowIndex<!--/paramName1-->
<!--paramType1-->Number<!--/paramType1-->
<!--paramDescription1-->
The index of the row to which the cell belongs. Refer to [Column and Row Indexes](/Documentation/Guide/Widgets/{WidgetName}/Columns/Column_and_Row_Indexes/) for more information.
<!--/paramDescription1-->

<!--paramName2-->visibleColumnIndex<!--/paramName2-->
<!--paramType2-->Number<!--/paramType2-->
<!--paramDescription2-->
The visible index of the column to which the cell belongs.
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
    {widgetName}.cellValue(0, 1, "newValue");
    {widgetName}.saveEditData();

#####Angular

    <!--TypeScript-->
    import { ..., ViewChild } from "@angular/core";
    import { Dx{WidgetName}Module, Dx{WidgetName}Component } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(Dx{WidgetName}Component) {widgetName}: Dx{WidgetName}Component;
        updateCell(rowIndex, columnIndex, value) {
            this.{widgetName}.instance.cellValue(rowIndex, columnIndex, value);
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