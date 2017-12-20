===========================================================================
<!--default-->null<!--/default-->
<!--type-->template<!--/type-->
===========================================================================

<!--shortDescription-->
The template to be used for rendering the widget text field. Must contain the [TextBox](/Documentation/Guide/Widgets/TextBox/Overview/) widget.
<!--/shortDescription-->

<!--fullDescription-->
If you use the Angular, AngularJS or Knockout library, you can implement this template with the [dxTemplate](/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/) markup component. This template's binding context depends on the library you use.

In Angular apps, the standard binding context (a component instance) is extended by the selected item's object. Access it by the input variable that is declared after the `let` and before `of` keywords.

In AngularJS apps, the selected item's object extends the standard binding context (the scope). Access it by an alias that you specify in the `dx-item-alias` directive. Use [AngularJS](https://docs.angularjs.org/guide/scope) binding variables if you need to access another binding context from the template.

In Knockout apps, you can bind template elements directly to the selected item object's fields. Use Knockout binding variables if you need to access another binding context from the template.

---
#####Angular

    <!--HTML-->
    <dx-select-box ...
        [dataSource]="selectBoxData"
        fieldTemplate="field">
        <div *dxTemplate="let data of 'field'">
            <dx-text-box 
                [value]="data.name + ' (' + data.country + ')'" } 
            ></dx-text-box>
        </div>
    </dx-select-box>

    <!--TypeScript-->
    import { DxSelectBoxModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        selectBoxData = [
            { id: 1, name: "SuperPlasma 50", country: "USA" },
            // ...
        ];
    }
    @NgModule({
         imports: [
             // ...
             DxSelectBoxModule
         ],
         // ...
     })

#####AngularJS

    <!--HTML-->
    <div dx-select-box="{
        // ...
        dataSource: selectBoxData,
        fieldTemplate: 'field'
    }">
        <div data-options="dxTemplate: { name:'field' }" dx-item-alias="itemObj">
            <div dx-text-box="{ value: itemObj.name + ' (' + itemObj.country + ')' }"></div>
        </div>
    </div>

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function DemoController($scope) {
            $scope.selectBoxData = [
                { id: 1, name: "SuperPlasma 50", country: "USA" },
                // ...
            ];
        });


#####Knockout

    <!--HTML-->
    <div data-bind="dxSelectBox: {
        dataSource: selectBoxData,
        fieldTemplate: 'field'
    }">
        <div data-options="dxTemplate: { name: 'field' }">
            <div data-bind="dxTextBox: { value: name + ' (' + capital + ')' } "></div>
        </div>
    </div>

    <!--JavaScript-->
    var viewModel = {
        selectBoxData: [
            { id: 1, name: "SuperPlasma 50", country: "USA" },
            // ...
        ]
    };
    
    ko.applyBindings(viewModel);
    
---

#####See Also#####
- [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates)
<!--/fullDescription-->
<!--typeFunctionParamName1-->selectedItem<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The selected item's data.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->fieldElement<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->dxElement<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The field's container.
<!--/typeFunctionParamDescription2-->

<!--typeFunctionReturnType-->String|Node|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template name or container.
<!--/typeFunctionReturnDescription-->