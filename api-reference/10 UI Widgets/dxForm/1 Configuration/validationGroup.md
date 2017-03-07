<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->string<!--/type-->
===========================================================================

<!--shortDescription-->
Gives a name to the internal validation group.
<!--/shortDescription-->

<!--fullDescription-->
In some cases, the **Form** editors should be validated by the [Button](/Documentation/ApiReference/UI_Widgets/dxButton/) widget. By default, these editors are collected in an unnamed validation group, what makes it impossible for the **Button** to validate them. In this case, give this validation group a name using the **validationGroup** option of the **Form** widget. Also, pass the same name to the [validationGroup](/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#validationGroup) option of the **Button** widget.

    $(function () {
        $("#formContainer").dxForm({
            // ...
            validationGroup: "groupName"
        });

        $("#buttonContainer").dxButton({
            // ...
            validationGroup: "groupName",
            onClick: function (e) {
                e.validationGroup.validate();
            }
        });
    })
<!--/fullDescription-->