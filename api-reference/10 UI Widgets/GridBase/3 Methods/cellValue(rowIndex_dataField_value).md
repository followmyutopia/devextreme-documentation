===================================================================
===================================================================

<!--shortDescription-->
Sets a new value to a cell with a specific row index and a data field.
<!--/shortDescription-->

<!--paramName1-->rowIndex<!--/paramName1-->
<!--paramType1-->Number<!--/paramType1-->
<!--paramDescription1-->
The index of the row to which the cell belongs.
<!--/paramDescription1-->

<!--paramName2-->dataField<!--/paramName2-->
<!--paramType2-->String<!--/paramType2-->
<!--paramDescription2-->
The data field.
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
    var {widgetName} = $("{widgetName}Container").dx{WidgetName}("instance");
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
            this.{widgetName}.cellValue(rowIndex, dataField, value);
            this.{widgetName}.saveEditData();
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