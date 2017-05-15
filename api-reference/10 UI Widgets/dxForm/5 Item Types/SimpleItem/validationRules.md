<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->array<!--/type-->
===========================================================================

<!--shortDescription-->
An array of validation rules to be checked for the form item editor.
<!--/shortDescription-->

<!--fullDescription-->
There are several predefined rule types. Each rule type demands a specific set of rule options. Refer to the [Validation Rules](/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/) section of the [Validator](/Documentation/ApiReference/UI_Widgets/dxValidator/) API reference to learn how to define rules of different types.

[note]

If you specify validation rules, the [isRequired](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItemItem/#isRequired) option is ignored. In this case, use the [Require](/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/RequiredRule/) validation rule instead. 

    <!--JavaScript-->
    formOptions = {
        // ...
        items: [
            //...
            {
                itemType: 'simple',
                // ...
                validationRules: [
                    //...
                    { type: 'required' }
                ]
            }
        ]
    }

[/note]
<!--/fullDescription-->