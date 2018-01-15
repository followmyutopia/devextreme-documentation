===========================================================================
<!--default-->null<!--/default-->
<!--type-->template<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies a custom template for the text field. Must contain the [TextBox](/Documentation/Guide/Widgets/TextBox/Overview/) widget.
<!--/shortDescription-->

<!--fullDescription-->
In the following code, the **fieldTemplate** is used to stylize the text field with a custom CSS class:

---

#####jQuery

    <!--JavaScript-->
    $(function () {
        $("dropDownBoxContainer").dxDropDownBox({
            // ...
            fieldTemplate: function (value, fieldElement) {
                var result = $("<div class='custom-item'>");
                result
                    .dxTextBox({
                        value: value,
                        readOnly: true 
                    });
                fieldElement.append(result);
            }
        });
    });

    <!--CSS-->
    .custom-item {
        font-size: 16px;
    }

#####Angular

    <!--HTML-->
    <dx-drop-down-box ...
        fieldTemplate="field">
        <div *dxTemplate="let data of 'field'">
            <div class="custom-item">
                <dx-text-box 
                    [value]="data" 
                    [readOnly]="true"
                ></dx-text-box>
            </div>
        </div>
    </dx-drop-down-box>

    <!--CSS-->
    .custom-item {
        font-size: 16px;
    }

#####AngularJS

    <!--HTML-->
    <div dx-drop-down-box="{
        ...
        fieldTemplate: 'field'
    }" dx-item-alias="data">
        <div data-options="dxTemplate: { name: 'field' }">
            <div class="custom-item">
                <div dx-text-box="{ value: data, readOnly: true }"></div>
            </div>
        </div>
    </div>

    <!--CSS-->
    .custom-item {
        font-size: 16px;
    }

#####Knockout

    <!--HTML-->
    <div data-bind="dxDropDownBox: {
        ...
        fieldTemplate: 'field'
    }">
        <div data-options="dxTemplate: { name: 'field' }">
            <div class="custom-item">
                <div data-bind="dxTextBox: { value: $data, readOnly: true }"></div>
            </div>
        </div>
    </div>

    <!--CSS-->
    .custom-item {
        font-size: 16px;
    }

---

#####See Also#####
- [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates)
<!--/fullDescription-->
<!--typeFunctionParamName1-->value<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Selected values.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->fieldElement<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->dxElement<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The current field's container.
<!--/typeFunctionParamDescription2-->

<!--typeFunctionReturnType-->String|Node|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template name or container.
<!--/typeFunctionReturnDescription-->