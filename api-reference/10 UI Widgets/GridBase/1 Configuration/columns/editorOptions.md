===========================================================================
<!--type-->Object<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies options for the underlain editor.
<!--/shortDescription-->

<!--fullDescription-->
Depending on the [dataType]({basewidgetpath}/Configuration/columns/#dataType), the column offers a user different widgets for editing: [TextBox](/Documentation/ApiReference/UI_Widgets/dxTextBox/), [DateBox](/Documentation/ApiReference/UI_Widgets/dxDateBox/), [Lookup](/Documentation/ApiReference/UI_Widgets/dxLookup/), etc. In the **editorOptions** object, you can specify options for the editing widget.

[note]

Do not specify the **onValueChanged** option in this object. If you need to add custom logic to the standard value change handler, override the handler in the [onEditorPreparing]({basewidgetpath}/Configuration/#onEditorPreparing) function in the following manner.

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#{widgetName}Container").dx{WidgetName}({
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
    import { Dx{WidgetName}Module } from 'devextreme-angular';
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
            Dx{WidgetName}Module
        ],
        // ...
    })

    <!--HTML-->
    <dx-data-grid ... 
        (onEditorPreparing)="onEditorPreparing($event)">
    </dx-data-grid>
    
---

[/note]
<!--/fullDescription-->