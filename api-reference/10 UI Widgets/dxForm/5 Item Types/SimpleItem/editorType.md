===========================================================================
<!--acceptValues-->'dxAutocomplete' | 'dxCalendar' | 'dxCheckBox' | 'dxColorBox' | 'dxDateBox' | 'dxDropDownBox' | 'dxLookup' | 'dxNumberBox' | 'dxRadioGroup' | 'dxRangeSlider' | 'dxSelectBox' | 'dxSlider' | 'dxSwitch' | 'dxTagBox' | 'dxTextArea' | 'dxTextBox'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies which editor widget is used to display and edit the form item value.
<!--/shortDescription-->

<!--fullDescription-->
[note]If you use [DevExtreme modules](/Documentation/Guide/Common/Modularity/), import the editor's module when specifying this option. You can omit modules for the "dxTextBox", "dxDateBox", "dxCheckBox" and "dxNumberBox" because the **Form** widget imports them automatically when creating form items. 

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

#####See Also#####
- [Configure Simple Items](/Documentation/Guide/Widgets/Form/Configure_Simple_Items/)
<!--/fullDescription-->