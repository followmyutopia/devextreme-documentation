===========================================================================
<!--default-->null<!--/default-->
<!--type-->template<!--/type-->
===========================================================================

<!--shortDescription-->
The template to be used for rendering the widget's text field.
<!--/shortDescription-->

<!--fullDescription-->
The template must contain the [TextBox](/Documentation/Guide/Widgets/TextBox/Overview/) widget.

---

#####jQuery

    <!--JavaScript-->
    $(function () {
        $("dropDownBoxContainer").dxDropDownBox({
            // ...
            fieldTemplate: function (data, container) {
                var result = $("<div class='custom-item'>");
                result
                    .dxTextBox({
                        value: data,
                        readOnly: true 
                    });
                container.append(result);
            }
        });
    });

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

#####Knockout

    <!--HTML-->
    <div data-bind="dxDropDownBox: {
        ...
        fieldTemplate: 'field'
    }">
        <div data-options="dxTemplate: { name: 'field' }">
            <div class="custom-item">
                <div data-bind="dxTextBox: {value: $data, readOnly: true }"></div>
            </div>
        </div>
    </div>

---

#####See Also#####
- [Custom Templates](/Documentation/Guide/Widgets/Common/Templates/#Custom_Templates)
<!--/fullDescription-->
<!--typeFunctionParamName1-->value<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Selected values.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionParamName2-->fieldElement<!--/typeFunctionParamName2-->
<!--typeFunctionParamType2-->dxElement<!--/typeFunctionParamType2-->
<!--typeFunctionParamDescription2-->
The container of the field to be rendered.
<!--/typeFunctionParamDescription2-->

<!--typeFunctionReturnType-->string|Node|jQuery<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
A template name or container.
<!--/typeFunctionReturnDescription-->