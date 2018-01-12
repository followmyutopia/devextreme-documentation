===========================================================================
<!--type-->template<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a custom template for detail sections.
<!--/shortDescription-->

<!--fullDescription-->
---
#####jQuery

    <!--JavaScript-->
    $("#dataGridContainer").dxDataGrid({
        // ...
        masterDetail: {
            enabled: true,
            template: function (container, info) {
                $('<div>').dxDataGrid({ 
                    // configure the widget here
                }).appendTo(container); 
            }
        }
    });

#####Angular

    <!--HTML-->
    <dx-data-grid  ...
        [masterDetail]="{ enabled: true, template: 'detail' }">
        <div *dxTemplate="let employee of 'detail'">
            <div class="internal-grid-container">
                <dx-data-grid ... ></dx-data-grid>
            </div>
        </div>
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

---

#####See Also#####
- [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates)
<!--/fullDescription-->
<!--typeFunctionParamName1-->detailElement<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->dxElement<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The detail section's container.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->detailInfo<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->Object<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
Information about the master row.
<!--/typeFunctionParamDescription2-->
<!--typeFunctionParamName2_field1-->key<!--/typeFunctionParamName2_field1-->
<!--typeFunctionParamType2_field1-->any<!--/typeFunctionParamType2_field1-->
<!--typeFunctionParamDescription2_field1-->
The master row's key.
<!--/typeFunctionParamDescription2_field1-->
<!--typeFunctionParamName2_field2-->data<!--/typeFunctionParamName2_field2-->
<!--typeFunctionParamType2_field2-->Object<!--/typeFunctionParamType2_field2-->
<!--typeFunctionParamDescription2_field2-->
The master row's data object.
<!--/typeFunctionParamDescription2_field2-->
