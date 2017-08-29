<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->Boolean<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether the current form item is required.
<!--/shortDescription-->

<!--fullDescription-->
[note]

If you specify validation rules using the [validationRules](/Documentation/ApiReference/UI_Widgets/dxForm/Item_Types/SimpleItem/#validationRules) option, the **isRequired** option is ignored. In this case, use the [Require](/Documentation/ApiReference/UI_Widgets/dxValidator/Validation_Rules/RequiredRule/) validation rule instead. 

    <!--JavaScript-->
    var formOptions = {
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