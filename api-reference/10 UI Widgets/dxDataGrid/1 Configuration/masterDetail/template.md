===========================================================================
<!--type-->template<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the template for detail sections.
<!--/shortDescription-->

<!--fullDescription-->
Use the **template** option to define the markup of detail sections in a master-detail hierarchy. Implement a function defining the content of a detail section and assign it to this option. For example, to display another **DataGrid** widget in the detail section, you can use the following code.

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
    <dx-data-grid 
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

When using Knockout, AngularJS or Angular, you can specify the template using the [dxTemplate](/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/) markup component.

#####See Also#####
- [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates)
<!--/fullDescription-->
<!--typeFunctionParamName1-->detailElement<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->dxElement<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The detail section's container.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->detailInfo<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->object<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
Information about the master row.
<!--/typeFunctionParamDescription2-->
<!--typeFunctionParamName2_field1-->key<!--/typeFunctionParamName2_field1-->
<!--typeFunctionParamType2_field1-->any<!--/typeFunctionParamType2_field1-->
<!--typeFunctionParamDescription2_field1-->
The key of the master row.
<!--/typeFunctionParamDescription2_field1-->
<!--typeFunctionParamName2_field2-->data<!--/typeFunctionParamName2_field2-->
<!--typeFunctionParamType2_field2-->object<!--/typeFunctionParamType2_field2-->
<!--typeFunctionParamDescription2_field2-->
The object of the data source presented by the master row.
<!--/typeFunctionParamDescription2_field2-->
