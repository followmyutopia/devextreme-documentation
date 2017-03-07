Editors nested in the [Form](/Documentation/ApiReference/UI_Widgets/dxForm/) widget can be validated only if they are bound to model properties that have [Data Annotation validation attributes](https://www.asp.net/mvc/overview/older-versions/mvc-music-store/mvc-music-store-part-6). To bind such editors, use the `DataField` method. Note that you can omit specifying the editor explicitly if the [TextBox](/Documentation/ApiReference/UI_Widgets/dxTextBox/) with default settings satisfies your needs.

    @(Html.DevExtreme().Form()
        .FormData(Model)
        .Items(formItems => {
            formItems.AddSimple()
                .DataField("EmployeeID")
                .Editor(e => e.TextBox().ReadOnly(true));

            // Uses the default TextBox
            formItems.AddSimple()
                .DataField("FirstName")
                .IsRequired(true);

            // Uses the default TextBox   
            formItems.AddSimple()
                .DataField("LastName")
                .IsRequired(true);

            formItems.AddSimple()
                .DataField("HireDate")
                .Editor(e => e.DateBox());
        })
    )

A single **Form** editor is validated individually each time its value is changed, but if you are going to submit **Form** editors, they all should be validated at once. This case is illustrated by the following code. All **Form** editors are collected in the *"employee"* validation group that is validated when an end user clicks the *"Validate and Submit"* [Button](/Documentation/ApiReference/UI_Widgets/dxButton/). Afterwards, if the validation is successful, the *"editEmployee"* HTML form with all editors is submitted.

    @using(Html.BeginForm("EditEmployee", "Home", FormMethod.Post, new { id = "editEmployee" })) {

        @(Html.DevExtreme().Form()
            .FormData(Model)
            .Items(formItems => {
                formItems.AddSimple()
                    .DataField("EmployeeID")
                    .Editor(e => e.TextBox().ReadOnly(true));

                formItems.AddSimple()
                    .DataField("FirstName")
                    .IsRequired(true);
                
                formItems.AddSimple()
                    .DataField("LastName")
                    .IsRequired(true);

                formItems.AddSimple()
                    .DataField("HireDate")
                    .Editor(e => e.DateBox());
            })
            // Gives a name to the internal validation group
            .ValidationGroup("employee")
        )

        // Validates the "employee" validation group and submits the "editEmployee" HTML form
        @(Html.DevExtreme().Button()
            .Text("Validate and Submit")
            .ValidationGroup("employee")
            .UseSubmitBehavior(true)
        )
    }

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Form/Validation/Mvc/Light/" class="button orange small fix-width-155" target="_blank">View Demo</a>

#####See Also#####
- [Client-Side Validation - Overview](/Documentation/Guide/ASP.NET_MVC_Wrappers/Client-Side_Data_Validation/Overview/)
- [Client-Side Validation - Implement a Custom Validation Rule](/Documentation/Guide/ASP.NET_MVC_Wrappers/Client-Side_Data_Validation/Implement_a_Custom_Validation_Rule/)
- [Client-Side Validation - Validate and Submit an HTML Form](/Documentation/Guide/ASP.NET_MVC_Wrappers/Client-Side_Data_Validation/Validate_and_Submit_an_HTML_Form/)

[tags]asp.net mvc wrappers, validate a form, submit a form, submit editors, UseSubmitBehavior