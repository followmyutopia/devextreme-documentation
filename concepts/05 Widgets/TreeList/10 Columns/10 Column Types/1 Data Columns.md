Data columns are the most common type of columns used in the **TreeList** widget. They are generated for all members of the [columns](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/) array that do not configure [band columns](/Documentation/Guide/Widgets/TreeList/Columns/Column_Types/#Band_Columns). Usually, a data column displays values from a [data field](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#dataField) to which it is bound, but you can populate a data column with custom values (see [Customize Cells](/Documentation/Guide/Widgets/TreeList/Columns/Customize_Cells/)).

![DevExtreme HTML5 JavaScript TreeList DataColumns](/Content/images/doc/19_1/treelist/visual_elements/column-types_data.png)

If data column values should be cast to another type (for example, date values stored as strings), specify the target type using the [dataType](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#dataType) option.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#treeListContainer").dxTreeList({
            // ...
            columns: [{
                dataField: "HireDate",
                dataType: "date"
            }]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-tree-list ... >
        <dxi-column dataField="HireDate" dataType="date"></dxi-column>
    </dx-tree-list>

    <!--TypeScript-->
    import { DxTreeListModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })
    
---

#####See Also#####
- [Customize Cells](/Documentation/Guide/Widgets/TreeList/Columns/Customize_Cells/)
- [Lookup Columns](/Documentation/Guide/Widgets/TreeList/Columns/Column_Types/#Lookup_Columns)
- [TreeList Demos](/Demos/WidgetsGallery/Demo/TreeList/Overview/jQuery/Light/)

[tags] treelist, tree list, column types, data columns
