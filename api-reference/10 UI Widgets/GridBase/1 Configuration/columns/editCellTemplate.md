<!--id-->GridBaseColumn.editCellTemplate<!--/id-->
===========================================================================
<!--type-->template<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a custom template for column cells in the editing state.
<!--/shortDescription-->

<!--fullDescription-->
The **cellInfo** object has the following fields:

- **setValue(newValue, newText)**: <font size="-1">Method</font>        
A method that you should call to change the cell value and, optionally, the displayed value after the editor's value is changed.

 [note] In batch [editing mode]({basewidgetpath}/Configuration/editing/#mode), check that the value changed before calling this method to ensure correct cell highlighting.
 
- **data**: <font size="-1">Object</font>        
The data of the row the cell belongs to.
- **component**: <font size="-1">Object</font>  
The widget's instance.
- **value**: <font size="-1">Any</font>        
The cell value as it is specified in the data source.
- **displayValue**: <font size="-1">Any</font>        
The displayed cell value. Differs from the **value** field only when the column uses [lookup]({basewidgetpath}/Configuration/columns/lookup/) or [calculateDisplayValue]({basewidgetpath}/Configuration/columns/#calculateDisplayValue).
- **text**: <font size="-1">String</font>        
**displayValue** after applying [format]({basewidgetpath}/Configuration/columns/#format) and [customizeText]({basewidgetpath}/Configuration/columns/#customizeText).
- **columnIndex**: <font size="-1">Number</font>        
The index of the column the cell belongs to. Refer to the [Column and Row Indexes](/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/) topic for more information on how this index is calculated.
- **rowIndex**: <font size="-1">Number</font>        
The index of the row the cell belongs to. Begins with 0 on each page. Group rows are included. Refer to the [Column and Row Indexes](/Documentation/Guide/Widgets/DataGrid/Columns/Column_and_Row_Indexes/) topic for more information on row indexes.
- **column**: <font size="-1">Object</font>        
The settings of the column the cell belong to.
- **rowType**: <font size="-1">String</font>        
The row's [type]({basewidgetpath}/Row/#rowType).

In the following example, the **editCellTemplate** is used to substitute the [Switch](/Documentation/Guide/Widgets/Switch/Overview/) widget for a default editor. This configuration may be useful in [batch editing mode](/Documentation/Guide/Widgets/DataGrid/Editing/#User_Interaction/Batch_Mode).

---
##### jQuery

    <!-- tab: index.js -->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            columns: [{
                dataField: "isChecked",
                editCellTemplate: function(cellElement, cellInfo) {
                    $("<div />").dxSwitch({
                        width: 50,
                        switchedOnText: "YES",
                        switchedOffText: "NO",
                        value: cellInfo.value,
                        onValueChanged: function(e) {
                            cellInfo.setValue(e.value);
                        }
                    }).appendTo(cellElement);
                }
            }],
            editing: {
                mode: "batch",
                allowUpdating: true
            }
        });
    });

##### Angular
    
    <!-- tab: app.component.html -->
    <dx-data-grid ... >
        <dxi-column
            dataField="isChecked"
            editCellTemplate="editCellTemplate">
        </dxi-column>
        <div *dxTemplate="let cellInfo of 'editCellTemplate'">
            <dx-switch
                [width]="50"
                switchedOnText="YES"
                switchedOffText="NO"
                [(value)]="cellInfo.value"
                (onValueChanged)="setEditedValue($event, cellInfo)">
            </dx-switch>
        </div>
        <dxo-editing mode="batch" [allowUpdating]="true"></dxo-editing>
    </dx-data-grid>

    <!-- tab: app.component.ts -->
    import { Component } from '@angular/core';
    import { AppComponent, Service } from './app.service';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent {
        setEditedValue (valueChangedEventArg, cellInfo) {
            cellInfo.setValue(valueChangedEventArg.value);
        }
    }

    <!-- tab: app.module.ts -->
    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { AppComponent } from './app.component';

    import { DxDataGridModule, DxSwitchModule } from 'devextreme-angular';

    @NgModule({
        declarations: [
            AppComponent
        ],
        imports: [
            BrowserModule,
            DxDataGridModule,
            DxSwitchModule
        ],
        bootstrap: [AppComponent]
    })
    export class AppModule { }

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().DataGrid()
        // ...
        .Columns(cols => {
            // ...
            cols.Add().DataField("isChecked")
                .EditCellTemplate(new TemplateName("edit-cells"));
        })
        .Editing(m => m.Mode(GridEditMode.Batch).AllowUpdating(true))
    )

    @using (Html.DevExtreme().NamedTemplate("edit-cells")) {
        @(Html.DevExtreme().Switch()
            .Width(50)
            .SwitchedOnText("YES")
            .SwitchedOffText("NO")
            .Value(new JS("value"))
            .OnValueChanged("function(e) { setValue(e.value) }")
        )
    }
    
---

[note]If you implement two-way data binding in your template, make sure that you switch off the built-in implementation of this feature by setting the [twoWayBindingEnabled]({basewidgetpath}/Configuration/#twoWayBindingEnabled) option to **false**.

#####See Also#####
- [Customize Editors](/Documentation/Guide/Widgets/DataGrid/Editing/#Customize_Editors)
- [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates)
<!--/fullDescription-->
<!--typeFunctionParamName1-->cellElement<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->dxElement<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
#include common-ref-elementparam with { element: "current cell" }
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->cellInfo<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->Object<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The cell's properties.
<!--/typeFunctionParamDescription2-->
