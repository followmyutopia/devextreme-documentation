<!--EventForAction-->..\4 Events\editorPreparing.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A function that is executed before an editor is created.
<!--/shortDescription-->

<!--fullDescription-->
The widget offers a user a different editor for entering a value depending on the field's [dataType](/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Field/#dataType): [Calendar](/Documentation/Guide/Widgets/Calendar/Overview/), [TextBox](/Documentation/Guide/Widgets/TextBox/Overview/), [SelectBox](/Documentation/Guide/Widgets/SelectBox/Overview/), etc. Within this function, you can customize a default editor or substitute it for another DevExtreme editor. To do the latter, assign the editor's name to the **editorName** field and configure the editor in the **editorOptions** object. If you specify the editor's **onValueChanged** function, call the **setValue(newValue)** method in it to update the value.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#filterBuilder").dxFilterBuilder({
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
    import { DxFilterBuilderModule } from 'devextreme-angular';
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
            DxFilterBuilderModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-filter-builder ...
        (onEditorPreparing)="onEditorPreparing($event)">
    </dx-filter-builder>
    
---

If you use a third-party editor, cancel the default editor creation and implement this one instead. Call the **setValue(newValue)** method in the **onEditorPreparing** function to notify the **FilterBuilder** of the changed value.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#filterBuilder").dxFilterBuilder({
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
    import { DxFilterBuilderModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        onEditorPreparing (e) { 
            if(e.dataField === "hidden") {
                e.cancel = true;
                let checkbox = document.createElement("INPUT");
                checkbox.setAttribute("type", "checkbox");
                checkbox.setAttribute("checked", e.value);
                checkbox.addEventListener("change", function(args) {
                                                        e.setValue(args.target.checked);
                                                    });
                e.editorElement.appendChild(checkbox);
            }
        }
    }
    @NgModule({
        imports: [
            // ...
            DxFilterBuilderModule
        ],
        // ...
    })

    <!--HTML-->
    <dx-filter-builder ...
        (onEditorPreparing)="onEditorPreparing($event)">
    </dx-filter-builder>
    
---

[note]This function is not executed for fields that use the [editorTemplate](/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Field/#editorTemplate).

<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->{WidgetName}<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget's [instance](/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Methods/#instance).
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
<!--typeFunctionParamName1_field4-->value<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->any<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The editor's value.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->setValue(newValue)<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->any<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
A method that you should call to change the field's value after the editor's value changes.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamName1_field6-->cancel<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->Boolean<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
Allows you to cancel the creation of the editor.    
Set it to **true** and implement a custom editor if your scenario requires it.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->editorElement<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->dxElement<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
The editor's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](http://api.jquery.com/Types/#jQuery) when you use jQuery.
<!--/typeFunctionParamDescription1_field7-->
<!--typeFunctionParamName1_field8-->editorName<!--/typeFunctionParamName1_field8-->
<!--typeFunctionParamType1_field8-->String<!--/typeFunctionParamType1_field8-->
<!--typeFunctionParamDescription1_field8-->
Allows you to change the editor. Accepts names of DevExtreme widgets only, for example, *"dxTextBox"*.      
Import a new editor's module when using [DevExtreme modules](/Documentation/Guide/Common/Modularity/). 
<!--/typeFunctionParamDescription1_field8-->
<!--typeFunctionParamName1_field9-->editorOptions<!--/typeFunctionParamName1_field9-->
<!--typeFunctionParamType1_field9-->Object<!--/typeFunctionParamType1_field9-->
<!--typeFunctionParamDescription1_field9-->
Gets and sets the editor configuration.
<!--/typeFunctionParamDescription1_field9-->
<!--typeFunctionParamName1_field10-->dataField<!--/typeFunctionParamName1_field10-->
<!--typeFunctionParamType1_field10-->String<!--/typeFunctionParamType1_field10-->
<!--typeFunctionParamDescription1_field10-->
The data field's name.
<!--/typeFunctionParamDescription1_field10-->
<!--typeFunctionParamName1_field11-->filterOperation<!--/typeFunctionParamName1_field11-->
<!--typeFunctionParamType1_field11-->String<!--/typeFunctionParamType1_field11-->
<!--typeFunctionParamDescription1_field11-->
The applied filter operation.
<!--/typeFunctionParamDescription1_field11-->
<!--typeFunctionParamName1_field12-->updateValueTimeout<!--/typeFunctionParamName1_field12-->
<!--typeFunctionParamType1_field12-->Number<!--/typeFunctionParamType1_field12-->
<!--typeFunctionParamDescription1_field12-->
Gets and sets the delay between when a user stops typing the field value and when it is applied.
<!--/typeFunctionParamDescription1_field12-->
<!--typeFunctionParamName1_field13-->width<!--/typeFunctionParamName1_field13-->
<!--typeFunctionParamType1_field13-->Number<!--/typeFunctionParamType1_field13-->
<!--typeFunctionParamDescription1_field13-->
The editor's width.
<!--/typeFunctionParamDescription1_field13-->
<!--typeFunctionParamName1_field14-->readOnly<!--/typeFunctionParamName1_field14-->
<!--typeFunctionParamType1_field14-->Boolean<!--/typeFunctionParamType1_field14-->
<!--typeFunctionParamDescription1_field14-->
Indicates whether the editor is read-only.
<!--/typeFunctionParamDescription1_field14-->
<!--typeFunctionParamName1_field15-->disabled<!--/typeFunctionParamName1_field15-->
<!--typeFunctionParamType1_field15-->Boolean<!--/typeFunctionParamType1_field15-->
<!--typeFunctionParamDescription1_field15-->
Indicates whether the editor is disabled.
<!--/typeFunctionParamDescription1_field15-->
<!--typeFunctionParamName1_field16-->rtlEnabled<!--/typeFunctionParamName1_field16-->
<!--typeFunctionParamType1_field16-->Boolean<!--/typeFunctionParamType1_field16-->
<!--typeFunctionParamDescription1_field16-->
Indicates whether the editor uses right-to-left representation.
<!--/typeFunctionParamDescription1_field16-->
