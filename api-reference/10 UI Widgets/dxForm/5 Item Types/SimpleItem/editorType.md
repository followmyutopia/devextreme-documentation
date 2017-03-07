<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--acceptValues-->'dxTextBox' | 'dxNumberBox' | 'dxDateBox' | 'dxCheckBox' | 'dxSwitch' | 'dxSelectBox' | 'dxLookup' | 'dxTagBox' | 'dxTextArea' | 'dxColorBox' | 'dxCalendar' | 'dxAutocomplete' | 'dxRadioGroup' | 'dxSlider'<!--/acceptValues-->
<!--type-->string<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies which editor widget is used to display and edit the form item value.
<!--/shortDescription-->

<!--fullDescription-->
When using [ASP.NET MVC Wrappers](/Documentation/Guide/ASP.NET_MVC_Wrappers/Fundamentals/), configure the editor in the following manner.

    @(Html.DevExtreme().Form()
        .FormData(Model.Data)
        .Items(items => {
            items.AddSimple().DataField("EmployeeID")
                .Editor(e => e.CheckBox() // or any other supported editor
                    .Value(true)
                    // ...
                    // other editor options go here
                )
        })
    )
<!--/fullDescription-->