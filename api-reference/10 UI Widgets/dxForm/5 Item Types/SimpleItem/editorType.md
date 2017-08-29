<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--acceptValues-->'dxTextBox' | 'dxNumberBox' | 'dxDateBox' | 'dxCheckBox' | 'dxSwitch' | 'dxSelectBox' | 'dxLookup' | 'dxTagBox' | 'dxTextArea' | 'dxColorBox' | 'dxCalendar' | 'dxAutocomplete' | 'dxRadioGroup' | 'dxSlider' | 'dxDropDownBox'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies which editor widget is used to display and edit the form item value.
<!--/shortDescription-->

<!--fullDescription-->
When using [ASP.NET MVC Controls](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), configure the editor in the following manner.

    <!--Razor C#-->@(Html.DevExtreme().Form()
        .FormData(Model.Data)
        .Items(items => {
            items.AddSimple().DataField("EmployeeID")
                // Instead of CheckBox here can be any other supported editor
                .Editor(e => e.CheckBox()
                    .Value(true)
                    // ...
                    // other editor options go here
                )
        })
    )

    <!--Razor VB-->@(Html.DevExtreme().Form() _
        .FormData(Model.Data) _
        .Items(Sub(items)
            items.AddSimple().DataField("EmployeeID") _
                .Editor(Function(e)
                    ' Instead of CheckBox here can be any other supported editor
                    Return e.CheckBox() _
                        .Value(True) _
                        ' ...
                        ' other editor options go here
                End Function)
        End Sub)
    )
<!--/fullDescription-->