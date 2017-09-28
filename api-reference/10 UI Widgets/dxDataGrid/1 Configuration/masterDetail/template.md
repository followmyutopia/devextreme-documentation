<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
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

[note]When utilizing the [Knockout](http://knockoutjs.com/) or [AngularJS](https://angularjs.org/) library in your application, you can specify the template using the [dxTemplate](/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/) markup component. 

#####See Also#####
- [Customize Widget Element Appearance - MVVM Approach](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/)

If you are using AngularJS and trying to access row object fields within a template, use a variable whose name is assigned to the `dx-item-alias` directive. Add this directive to the widget element as shown in the following code. Without this directive, row object fields are beyond reach.

    <!--HTML-->
    <div id="gridContainer" dx-data-grid="gridOptions" dx-item-alias="employee">
        <div data-options="dxTemplate: { name: 'detail' }">
            <div class="internal-grid-container">
                <div>{{ employee.data.FirstName + " " + employee.data.LastName + " Tasks:" }}</div>
                <div class="internal-grid" dx-data-grid="{
                    dataSource: employee.data.Tasks,
                    columns: ['Subject', {
                        dataField: 'StartDate',
                        dataType: 'date'
                    }, {
                        dataField: 'DueDate',
                        dataType: 'date'
                    }]                
                }"></div>
            </div>
        </div>
    </div>

It is also possible to define the template in markup. For this purpose, use one of the following template engines.

- [jQuery Templates](https://github.com/BorisMoore/jquery-tmpl)        
- [JsRender](https://github.com/BorisMoore/jsrender)        
- [Mustache](http://mustache.github.io/)
- [Hogan](http://twitter.github.io/hogan.js/)
- [Underscore](http://underscorejs.org/)
- [Handlebars](http://handlebarsjs.com/)
- [doT](http://olado.github.io/doT/index.html)

Using a template engine, pass one of the following values to the **template** option.

- A jQuery object representing the template's container.        
- A DOM Node representing the template's container.        
- A function that returns a jQuery object or a DOM Node representing the template's container.
<!--/fullDescription-->
<!--typeFunctionParamName1-->detailElement<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->jQuery<!--/typeFunctionParamType1-->
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
