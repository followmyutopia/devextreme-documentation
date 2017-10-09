<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--EventForAction-->..\4 Events\editorPreparing.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A handler for the **editorPreparing** event. Executed before an editor is created.
<!--/shortDescription-->

<!--fullDescription-->
Many **TreeList** elements are based on editors. For example, the search panel is based on a text box, the selection column uses check boxes, etc. Within this handler, you can customize a default editor or substitute it for another DevExtreme editor. To do the latter, assign the editor's name to the **editorName** field and then configure the editor in the **editorOptions** object. If you specify the editor's **onValueChanged** handler, call the **setValue(newValue)** method in it to update the cell value.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeList").dxTreeList({
            // ...
            onEditorPreparing: function(e) {
                if (e.dataField == "name") {
                    e.editorName = "dxTextArea";
                    e.editorOptions.showClearButton = true;
                    e.editorOptions.onValueChanged = function (e) {
                        var value = e.value;
                        if(value == "") {
                            alert("TextArea is empty");
                            return;
                        }
                        e.setValue(value);
                    }
                }
            }
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxTreeListModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        onEditorPreparing (e) { 
            if (e.dataField == "name") {
                e.editorName = "dxTextArea";
                e.editorOptions.showClearButton = true;
                e.editorOptions.onValueChanged = function (e) {
                    var value = e.value;
                    if (value == "") {
                        alert("TextArea is empty");
                        return;
                    }
                    e.setValue(value);
                }
            }
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-tree-list ...
        (onEditorPreparing)="onEditorPreparing($event)">
    </dx-tree-list>
    
---

If you use a third-party editor, cancel creation of the default editor and then implement your own one. To notify the **TreeList** of the changed value, call the **setValue(newValue)** method in the **onEditorPreparing** handler.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#treeList").dxTreeList({
            // ...
            onEditorPreparing: function(e) {
                if(e.dataField === "hidden") {
                    e.cancel = true;
                    $('<input type="checkbox">')
                        .prop("checked", e.value)
                        .on("change", function(args) {
                            e.setValue(args.target.checked);
                        })
                        .appendTo(e.editorElement);
                }
            }
        });
    });

##### Angular

    <!--TypeScript-->
    import { DxTreeListModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        onEditorPreparing (e) { 
            if(e.dataField === "hidden") {
                e.cancel = true;
                $('<input type="checkbox">')
                    .prop("checked", e.value)
                    .on("change", function(args) {
                        e.setValue(args.target.checked);
                    })
                    .appendTo(e.editorElement);
            }
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTreeListModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-tree-list ...
        (onEditorPreparing)="onEditorPreparing($event)">
    </dx-tree-list>
    
---

[note]For cells that use the [editCellTemplate](/Documentation/ApiReference/UI_Widgets/dxTreeList/Configuration/columns/#editCellTemplate), the **onEditorPreparing** handler is not executed.
<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->object<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget's [instance](/Documentation/ApiReference/UI_Widgets/dxTreeList/Methods/#instance).
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->Element<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only if you use Knockout.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->parentType<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->string<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The editor's location. One of *'dataRow'*, *'filterRow'*, *'headerRow'* or *'searchPanel'*.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->value<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->any<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The editor's value.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->setValue(newValue)<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->any<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
A method that you should call to change the cell value after the editor's value is changed.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->updateValueTimeout<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->number<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
Gets and sets the delay between the moment a user stops typing a filter value and the moment it is applied. Available if **parentType** is *'filterRow'* or *'searchPanel'*.
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->width<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->number<!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
The editor's width; equals **null** for editors of all parent types except for the *'searchPanel'*.  
<!--/typeFunctionParamDescription1_field8-->
<!--typeFunctionParamName1_field9-->disabled<!--/typeFunctionParamName1_field9-->
<!--typeFunctionParamType1_field9-->boolean<!--/typeFunctionParamType1_field9-->
<!--typeFunctionParamDescription1_field9-->
Indicates whether the editor is disabled.
<!--/typeFunctionParamDescription1_field9-->
<!--typeFunctionParamName1_field10-->rtlEnabled<!--/typeFunctionParamName1_field10-->
<!--typeFunctionParamType1_field10-->boolean<!--/typeFunctionParamType1_field10-->
<!--typeFunctionParamDescription1_field10-->
Indicates whether the editor uses right-to-left representation.
<!--/typeFunctionParamDescription1_field10-->
<!--typeFunctionParamName1_field11-->cancel<!--/typeFunctionParamName1_field11-->
<!--typeFunctionParamType1_field11-->boolean<!--/typeFunctionParamType1_field11-->
<!--typeFunctionParamDescription1_field11-->
Allows you to cancel the creation of the editor.    
Set it to **true** and implement a custom editor if your scenario requires it.
<!--/typeFunctionParamDescription1_field11-->
<!--typeFunctionParamName1_field12-->editorElement<!--/typeFunctionParamName1_field12-->
<!--typeFunctionParamType1_field12-->jQuery<!--/typeFunctionParamType1_field12-->
<!--typeFunctionParamDescription1_field12-->
The editor's container.
<!--/typeFunctionParamDescription1_field12-->
<!--typeFunctionParamName1_field13-->readOnly<!--/typeFunctionParamName1_field13-->
<!--typeFunctionParamType1_field13-->boolean<!--/typeFunctionParamType1_field13-->
<!--typeFunctionParamDescription1_field13-->
Indicates whether the editor is read-only.
<!--/typeFunctionParamDescription1_field13-->
<!--typeFunctionParamName1_field14-->editorName<!--/typeFunctionParamName1_field14-->
<!--typeFunctionParamType1_field14-->string<!--/typeFunctionParamType1_field14-->
<!--typeFunctionParamDescription1_field14-->
Allows you to change the editor. Accepts names of DevExtreme widgets only, for example, *"dxTextBox"*. 
<!--/typeFunctionParamDescription1_field14-->
<!--typeFunctionParamName1_field15-->editorOptions<!--/typeFunctionParamName1_field15-->
<!--typeFunctionParamType1_field15-->object<!--/typeFunctionParamType1_field15-->
<!--typeFunctionParamDescription1_field15-->
Gets and sets the editor configuration.
<!--/typeFunctionParamDescription1_field15-->
<!--typeFunctionParamName1_field16-->dataField<!--/typeFunctionParamName1_field16-->
<!--typeFunctionParamType1_field16-->string<!--/typeFunctionParamType1_field16-->
<!--typeFunctionParamDescription1_field16-->
The name of the field that provides data for the column to which the editor belongs.
<!--/typeFunctionParamDescription1_field16-->
<!--typeFunctionParamName1_field17-->row<!--/typeFunctionParamName1_field17-->
<!--typeFunctionParamType1_field17-->dxTreeListRowObject<!--/typeFunctionParamType1_field17-->
<!--typeFunctionParamDescription1_field17-->
The properties of the row to which the editor belongs.
<!--/typeFunctionParamDescription1_field17-->
