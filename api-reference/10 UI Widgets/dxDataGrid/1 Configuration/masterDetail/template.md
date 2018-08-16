===========================================================================
<!--type-->template<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a custom template for detail sections.
<!--/shortDescription-->

<!--fullDescription-->
You should call the [updateDimensions()](/Documentation/ApiReference/UI_Widgets/dxDataGrid/Methods/#updateDimensions) method each time the size of the detail section's content changes to make the table layout automatically adapt its size. In the following code, the [TabPanel](/Documentation/Guide/Widgets/TabPanel/Overview/) in the detail section contains views that can have different heights. The **updateDimensions** method is called in the [onSelectionChanged](/Documentation/ApiReference/UI_Widgets/dxTabPanel/Configuration/#onSelectionChanged) handler to update the table layout when another view is selected.

---
#####jQuery

    <!--JavaScript-->
    $("#dataGridContainer").dxDataGrid({
        // ...
        masterDetail: {
            enabled: true,
            template: function (container, info) {
                $("<div>").dxTabPanel({ 
                    // ...
                    onSelectionChanged: function () {
                        $("#dataGridContainer").dxDataGrid("instance").updateDimensions();
                    }
                }).appendTo(container); 
            }
        }
    });

#####Angular

    <!--HTML-->
    <dx-data-grid  ...
        [masterDetail]="{ enabled: true, template: 'detail' }">
        <div *dxTemplate="let info of 'detail'">
            <dx-tab-panel ... 
                (onSelectionChanged)="onSelectionChanged()">
            </dx-tab-panel>
        </div>
    </dx-data-grid>

    <!--TypeScript-->
    import { DxDataGridModule, DxDataGridComponent, DxTabPanelModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent
        onSelectionChanged () {
           this.dataGrid.instance.updateDimensions();
        }
    }
    @NgModule({
        imports: [
            // ...
            DxDataGridModule,
            DxTabPanelModule
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
The detail section's container. It is an [HTML Element](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement) or a [jQuery Element](http://api.jquery.com/Types/#jQuery) when you use jQuery.
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
