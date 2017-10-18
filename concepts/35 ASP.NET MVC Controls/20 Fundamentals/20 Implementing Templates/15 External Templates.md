External templates can be declared as a named template, a partial view, or a `@helper` block (MVC 3, 4, 5 only). Commonly, you need to declare an external template for high-level nesting or if you want to reuse it. Controls placed in such a template are aware of it and behave accordingly. In the following example, the [Popup](/Documentation/ApiReference/UI_Widgets/dxPopup/) widget nests a template with the [List](/Documentation/ApiReference/UI_Widgets/dxList/) widget. The **List**, in turn, nests another template for its items.

- **Named template**    

        <!--Razor C#-->
        @(Html.DevExtreme().Popup()
            .ContentTemplate(new TemplateName("list"))
        )
        @using (Html.DevExtreme().NamedTemplate("list")) {
            @(Html.DevExtreme().List()
                .ItemTemplate(@<text>
                    <div><%= ProductName %></div>
                    <div><%= UnitPrice %></div>
                </text>)
            )
        }

        <!--Razor VB-->
        @Code
            Html.DevExtreme().Popup() _
                .ContentTemplate(New TemplateName("list")).Render()
        End Code
        @Using (Html.DevExtreme().NamedTemplate("list"))
            @Code
                Html.DevExtreme().List() _
                    .ItemTemplate(Sub()
                        @<text>
                            <div><%= ProductName %></div>
                            <div><%= UnitPrice %></div>
                        </text>
                    End Sub).Render()
            End Code
        End Using


- **Partial view**

    - *InnerList.cshtml / InnerList.vbhtml*

            <!--Razor C#-->
            @(Html.DevExtreme().List()
                .ItemTemplate(@<text>
                    <div><%= ProductName %></div>
                    <div><%= UnitPrice %></div>
                </text>)
            )

            <!--Razor VB-->
            @Code
                Html.DevExtreme().List() _
                    .ItemTemplate(Sub()
                        @<text>
                            <div><%= ProductName %></div>
                            <div><%= UnitPrice %></div>
                        </text>
                    End Sub).Render()
            End Code

    - *Popup.cshtml / Popup.vbhtml*

            <!--Razor C#-->
            @(Html.DevExtreme().Popup()
                .ContentTemplate(@<text>
                    @(Html.Partial("InnerList"))
                </text>)
            )

            <!--Razor VB-->
            @Code
                Html.DevExtreme().Popup() _
                    .ContentTemplate(Sub()
                        @<text>
                            @(Html.Partial("InnerList"))
                        </text>
                    End Sub).Render()
            End Code

- **@helper (MVC 3, 4, 5 only)**

        <!--Razor C#-->
        @(Html.DevExtreme().Popup()
            .ContentTemplate(@<text>
                @InnerList()
            </text>)
        )  
        @helper InnerList() {
            @(Html.DevExtreme().List()
                .ItemTemplate(@<text>
                    <div><%= ProductName %></div>
                    <div><%= UnitPrice %></div>
                </text>)
            )
        }

        <!--Razor VB-->
        @Code
            Html.DevExtreme().Popup() _
                .ContentTemplate(Sub()
                    @InnerList()
                End Sub).Render()
        End Code
        @helper InnerList()
            @(Html.DevExtreme().List() _
                .ItemTemplate(Sub()
                    Write(ListItem())
                End Sub)
            )
        End Helper
        @helper ListItem()
            @<text>
                <div><%= ProductName %></div>
                <div><%= UnitPrice %></div>
            </text>
        End Helper