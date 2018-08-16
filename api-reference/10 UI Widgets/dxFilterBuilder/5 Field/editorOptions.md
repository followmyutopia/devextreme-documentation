===========================================================================
<!--type-->Object<!--/type-->
===========================================================================

<!--shortDescription-->
Configures the widget used to edit the field value.
<!--/shortDescription-->

<!--fullDescription-->
Depending on the [dataType](/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Field/#editorOptions), the **FilterBuilder** offers a user different widgets for editing: [TextBox](/Documentation/ApiReference/UI_Widgets/dxTextBox/), [DateBox](/Documentation/ApiReference/UI_Widgets/dxDateBox/), [Lookup](/Documentation/ApiReference/UI_Widgets/dxLookup/), etc. In the **editorOptions** object, you can specify options for the widget.

[note]

Do not specify the **onValueChanged** option in this object. If you need to add custom logic to the standard value change handler, override the handler in the [onEditorPreparing](/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Configuration/#onEditorPreparing) function in the following manner.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#filterBuilderContainer").dxFilterBuilder({
            // ...
            onEditorPreparing: function(e) {
                if (e.dataField == "requiredDataField") {
                    var standardHandler = e.editorOptions.onValueChanged;
                    e.editorOptions.onValueChanged = function(e) { // Overriding the standard handler
                        // ...
                        // Custom commands go here
                        // ...
                        standardHandler(e); // Calling the standard handler to save the edited value
                    }
                }
            }
        });
    });

##### Angular
    
    <!--TypeScript-->
    import { DxFilterBuilderModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        onEditorPreparing (e) {
            if (e.dataField == "requiredDataField") {
                let standardHandler = e.editorOptions.onValueChanged;
                e.editorOptions.onValueChanged = function (e) { // Overriding the standard handler
                    // ...
                    // Custom commands go here
                    // ...
                    standardHandler(e); // Calling the standard handler to save the edited value
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

[/note]
<!--/fullDescription-->