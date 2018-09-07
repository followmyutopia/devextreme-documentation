===========================================================================
<!--type-->dxFormSimpleItem<!--/type-->
===========================================================================

<!--shortDescription-->
Configures the form item that the column produces in the editing state. Applies only if **editing**.[mode]({basewidgetpath}/Configuration/editing/#mode) is *"form"* or *"popup"*.
<!--/shortDescription-->

<!--fullDescription-->
In the following code, the `Full_Name` grid column in the editing state produces a form item that spans two form columns. The item's label is on top of the editor:

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#{widgetName}Container").dx{WidgetName}({
            // ...
            editing: {
                allowUpdating: true,
                mode: "form"
            },
            columns: [{
                dataField: "Full_Name",
                formItem: {
                    colSpan: 2,
                    label: {
                        location: "top"
                    }
                }
            },
            // ...
            ]
        });
    });

##### Angular
    
    <!--HTML-->
    <dx-{widget-name} ... >
        <dxo-editing
            [allowUpdating]="true"
            mode="form">
        </dxo-editing>
        <dxi-column dataField="Full_Name">
            <dxo-form-item [colSpan]="2">
                <dxo-label location="top"></dxo-label>
            </dxo-form-item>
        </dxi-column>
    </dx-{widget-name}>

    <!--TypeScript-->
    import { Dx{WidgetName}Module } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            Dx{WidgetName}Module
        ],
        // ...
    })

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().{WidgetName}()
        // ...
        .Editing(e => e
            .AllowUpdating(true)
            .Mode(GridEditMode.Form)
        )
        .Columns(cols => {
            // ...
            cols.Add().DataField("Full_Name")
                .FormItem(item => item
                    .ColSpan(2)
                    .Label(l => l.Location(FormLabelLocation.Top)
                )
            );
        })
    )
    
---

#####See Also#####
- [Form Edit Mode](/Documentation/Guide/Widgets/{WidgetName}/Editing/#User_Interaction/Form_Mode)
<!--/fullDescription-->