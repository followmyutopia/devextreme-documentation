===========================================================================
<!--type-->template<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a custom template for rows.
<!--/shortDescription-->

<!--fullDescription-->
The **rowInfo** object has the following fields:

- **data**        
Contains the object of the data source represented by the current row.
- **component**  
Contains the **DataGrid** instance.
- **values**    
Contains an array of values of the current row in the order they exist in the data source.
- **rowIndex**        
Contains the index of the current row. When you have several pages in the grid, grid rows are indexed beginning with 0 on each page. Note that group cells count as rows and have row indexes. For further information about row indexes, see the [Column and Row Indexes](/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/) topic.
- **columns**        
Contains an array of grid columns. An object with column settings represents each column in this array. The order of columns in this array coincides with the [columns](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/) array.
- **isSelected**    
Indicates whether or not the current row is selected.
- **rowType**        
Defines the type of the current row. This field equals *'data'* for data rows or *'group'* for group rows. Use this field to distinguish rows by type.
- **groupIndex**    
Contains the group index of the current row. This field is useful if the **rowType** field is *'group'*.
- **isExpanded**    
Indicates whether or not the current row is expanded. This field is useful if the **rowType** field is *'group'*.

When using the [dxTemplate](/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/) markup component for AngularJS, and Knockout apps, declare it within a `<table>` HTML element. For Angular - within `<tbody>`.

---
#####Angular

    <!--HTML-->
    <dx-data-grid ...
        rowTemplate="rowTemplateName">
        <tbody *dxTemplate="let data of 'rowTemplateName'" >
            <tr class="dx-row main-row">
                <td>{{data.id}}</td>
                <td>{{data.name}}</td>
            </tr>
        </tbody>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

#####AngularJS

        <!--HTML--><div dx-data-grid="{
            ...
            rowTemplate: 'rowTemplateName'
        }" dx-item-alias="item">
            <table data-options="dxTemplate: { name: 'rowTemplateName' }" >
                <tr>
                    <td>{{item.id}}</td>
                    <td>{{item.name}}</td>
                </tr>
            </table>
        </div>

#####Knockout

        <!--HTML--><div data-bind="dxDataGrid: {
            ...
            rowTemplate: 'rowTemplateName'
        }">
            <table data-options="dxTemplate: { name: 'rowTemplateName' }" >
                <tr>
                    <td data-bind="text: id"></td>
                    <td data-bind="text: name"></td>
                </tr>
            </table>
        </div>

---

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/DataGrid/RowTemplate/jQuery/Light/"
}

You can also use a 3rd-party template engine to customize row appearance. For more information, see the [3rd-Party Template Engines](/Documentation/Guide/Widgets/Common/Templates/#3rd-Party_Template_Engines) article. Note that the `<tr>` element that represents a row should have the `dx-row` class for correct operation of all widget features.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Data_Grid/Row3RdPartyEngineTemplate/jQuery/Light/"
}

[note] Disable the [column reordering](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#allowColumnReordering), [grouping](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columns/#allowGrouping), and [column fixing](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/columnFixing/) features when specifying the row template. Its content cannot automatically synchronize with the column layout, which makes these features inoperative.

#####See Also#####
- [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates)
- [onRowPrepared](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#onRowPrepared)
<!--/fullDescription-->
<!--typeFunctionParamName1-->rowElement<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->dxElement<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The row's container.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->rowInfo<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->Object<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The [Row](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Row/) object.
<!--/typeFunctionParamDescription2-->
