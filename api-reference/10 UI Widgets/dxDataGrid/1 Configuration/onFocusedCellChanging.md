<!--EventForAction-->..\4 Events\focusedCellChanging.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A function that is executed before the focused cell changes.
<!--/shortDescription-->

<!--fullDescription-->
In the following code, the **onFocusedCellChanging** function is used to customize keyboard navigation within a row. The cell navigation is looped in a single row because focus moves to the row's first cell after reaching the last cell and vice versa:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#dataGridContainer").dxDataGrid({
            // ...
            onFocusedCellChanging: function (e) {
                if (e.newColumnIndex == e.prevColumnIndex) {
                    e.newColumnIndex = (e.newColumnIndex == 0 ? e.columns.length - 1 : 0)
                }
            }
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxDataGridModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onFocusedCellChanging (e) { 
            if (e.newColumnIndex == e.prevColumnIndex) {
                e.newColumnIndex = (e.newColumnIndex == 0 ? e.columns.length - 1 : 0)
            }
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-data-grid ...
        (onFocusedCellChanging)="onFocusedCellChanging($event)">
    </dx-data-grid>
    
---

#####See Also#####
- [focusedRowIndex](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#focusedRowIndex) | [focusedRowKey](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#focusedRowKey)
- [focusedColumnIndex](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Configuration/#focusedColumnIndex)
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event that caused the function's execution.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->{WidgetName}<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget's instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->dxElement<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](http://api.jquery.com/Types/#jQuery) when you use jQuery.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->Object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only if you use Knockout.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->cellElement<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->dxElement<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The container of the cell that should be focused. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](http://api.jquery.com/Types/#jQuery) when you use jQuery.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->prevColumnIndex<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->Number<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The index of the previously focused cell's column.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->prevRowIndex<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->Number<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The index of the previously focused cell's row.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->newColumnIndex<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->Number<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
The index of the column the cell that should be focused belongs to.
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->newRowIndex<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->Number<!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
The index of the row the cell that should be focused belongs to.
<!--/typeFunctionParamDescription1_field8-->
<!--typeFunctionParamName1_field9-->event<!--/typeFunctionParamName1_field9-->
<!--typeFunctionParamType1_field9-->event<!--/typeFunctionParamType1_field9-->
<!--typeFunctionParamDescription1_field9-->
The event that caused the function's execution. It is a [dxEvent](/Documentation/ApiReference/Common/Object_Structures/dxEvent/) or a [jQuery.Event](http://api.jquery.com/category/events/event-object/) when you use jQuery.
<!--/typeFunctionParamDescription1_field9-->
<!--typeFunctionParamName1_field10-->rows<!--/typeFunctionParamName1_field10-->
<!--typeFunctionParamType1_field10-->Array<dxDataGridRowObject><!--/typeFunctionParamType1_field10-->
<!--typeFunctionParamDescription1_field10-->
The visible rows' properties.
<!--/typeFunctionParamDescription1_field10-->
<!--typeFunctionParamName1_field11-->columns<!--/typeFunctionParamName1_field11-->
<!--typeFunctionParamType1_field11-->Array<dxDataGridColumn><!--/typeFunctionParamType1_field11-->
<!--typeFunctionParamDescription1_field11-->
The visible columns' properties.
<!--/typeFunctionParamDescription1_field11-->
<!--typeFunctionParamName1_field12-->cancel<!--/typeFunctionParamName1_field12-->
<!--typeFunctionParamType1_field12-->Boolean<!--/typeFunctionParamType1_field12-->
<!--typeFunctionParamDescription1_field12-->
Allows you to cancel focusing a new cell.
<!--/typeFunctionParamDescription1_field12-->
