===========================================================================
<!--default-->''<!--/default-->
<!--type-->format<!--/type-->
===========================================================================

<!--shortDescription-->
Formats a value before it is displayed.
<!--/shortDescription-->

<!--fullDescription-->
This option also controls the user input in cells that use the [DateBox](/Documentation/Guide/Widgets/DateBox/Overview/) widget for editing. For cells that use other widgets, you can specify the [editorOptions](/Documentation/ApiReference/UI_Widgets/dxFilterBuilder/Field/#editorOptions).**format** option.

---
#####jQuery

    <!--JavaScript-->
    $(function(){
        $("#filterBuilderContainer").dxFilterBuilder({
            fields: [{
                dataField: "SaleAmount",
                format: "currency",
                editorOptions: {
                    format: "$ #,##0.##"
                }
            }, 
            // ...
            ]
        });
    });

#####Angular

    <!--TypeScript-->
    import { DxFilterBuilderModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        fields = [{
            dataField: "SaleAmount",
            format: "currency",
            editorOptions: {
                format: "$ #,##0.##"
            }
        }, 
        // ...
        ];
    }
    @NgModule({
        imports: [
            // ...
            DxFilterBuilderModule
        ],
        // ...
    })
    <!--HTML-->
    <dx-filter-builder
        [fields]="fields">
    </dx-filter-builder>

---

#####See Also#####
- [format](/Documentation/ApiReference/Common/Object_Structures/format/)
<!--/fullDescription-->