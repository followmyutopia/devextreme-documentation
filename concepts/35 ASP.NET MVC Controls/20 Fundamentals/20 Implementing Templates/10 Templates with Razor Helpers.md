Apart from HTML and ERB-style constructions, these templates support Razor helpers. Frequently, such templates are used to nest one widget in another. For example, the following code nests the [DataGrid](/Documentation/ApiReference/UI_Widgets/dxDataGrid/) widget in the [Popup](/Documentation/ApiReference/UI_Widgets/dxPopup/) widget. Note that for high-level nesting, you need to use an external template (see below).

    <!--Razor C#-->
    @* Configures the Popup widget *@
    @(Html.DevExtreme().Popup()
        // ...
        // Specifies the contents of the Popup widget
        .ContentTemplate(@<text>
            // Configures the DataGrid widget
            @(Html.DevExtreme().DataGrid()
                .DataSource(d => d.WebApi().Controller("GridData"))
                .Columns(columns => {
                    columns.Add().DataField("DataField1");
                    columns.Add().DataField("DataField2");
                    columns.Add().DataField("DataField3");
                    columns.Add().DataField("DataField4");
                })
            )
        </text>)
    )

    <!--Razor VB-->
    @Code
        @* Configures the Popup widget *@
        Html.DevExtreme().Popup() _
            .ContentTemplate(Sub()
                @<text>
                    @* Configures the DataGrid widget *@
                    @(Html.DevExtreme().DataGrid() _
                        .DataSource(Function(d) d.WebApi().Controller("GridData")) _
                        .Columns(Sub(columns)
                            columns.Add().DataField("DataField1")
                            columns.Add().DataField("DataField2")
                            columns.Add().DataField("DataField3")
                            columns.Add().DataField("DataField4")
                        End Sub)
                    )
                </text>
            End Sub).Render()
    End Code