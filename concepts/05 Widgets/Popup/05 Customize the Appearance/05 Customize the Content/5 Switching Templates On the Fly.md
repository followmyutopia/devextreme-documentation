If you need to render different templates depending on a specific condition, define them inside the **Popup** container using the DevExtreme [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate/dxTemplate.md '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/') markup component. You can switch the templates on the fly by changing the [contentTemplate](/api-reference/10%20UI%20Widgets/dxOverlay/1%20Configuration/contentTemplate.md '/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#contentTemplate') option's value.

---
##### jQuery

    <!--HTML-->
    <div id="changeTemplateButton"></div>
    <div id="popupContainer">
        <div data-options="dxTemplate: { name: 'template1' }">
            <p>First template</p>
        </div>
        <div data-options="dxTemplate: { name: 'template2' }">
            <p>Second template</p>
        </div>
    </div>

    <!--JavaScript-->
    $(function() {
        var popup = $("#popupContainer").dxPopup({
            title: "Popup Title",
            visible: true,
            contentTemplate: "template1"
        }).dxPopup("instance");

        $("#changeTemplateButton").dxButton({
            text: "Change the Template", 
            onClick: function (e) {
                var currentTemplate = popup.option("contentTemplate");
                popup.option("contentTemplate", currentTemplate == "template1" ? "template2" : "template1");
                popup.show();
            } 
        });
    });

##### Angular

    <!--HTML-->
    <dx-button
        text="Change the Template"
        (onClick)="changeTemplate()">
    </dx-button>
    <dx-popup
        title="Popup Title"
        [(visible)]="isPopupVisible"
        [contentTemplate]="currentTemplate">
        <div *dxTemplate="let data of 'template1'">
            <p>First template</p>
        </div>
        <div *dxTemplate="let data of 'template2'">
            <p>Second template</p>
        </div>
    </dx-popup>

    <!--TypeScript-->
    import { DxPopupModule, DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        currentTemplate: string = "template1";
        isPopupVisible: boolean = true;
        changeTemplate () {
            this.currentTemplate = (this.currentTemplate == "template1" ? "template2" : "template1");
            this.isPopupVisible = true;
        }
    }
    @NgModule({
        imports: [
            // ...
            DxPopupModule,
            DxButtonModule
        ],
        // ...
    })

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Popup()
        .ID("popup")
        .Title("Popup Title")
        .Visible(true)
        .ContentTemplate(new TemplateName("template1"))
    )

    @using (Html.DevExtreme().NamedTemplate("template1")) {
        <p>First template</p>
    }
    @using (Html.DevExtreme().NamedTemplate("template2")) {
        <p>Second template</p>
    }

    @(Html.DevExtreme().Button()
        .ID("changeTemplateButton")
        .Text("Change the Template")
        .OnClick("changeTemplateButton_click")
    )

    <script type="text/javascript">
        function changeTemplateButton_click() {
            var popup = $("#popup").dxPopup("instance");
            var currentTemplate = popup.option("contentTemplate");
            popup.option("contentTemplate", currentTemplate.selector == "#template1" ? $("#template2") : $("#template1"));
            popup.show();
        }
    </script>

---

#####See Also#####
- <a href="https://docs.devexpress.com/AspNetCore/401029/devextreme-based-controls/concepts/templates" target="_blank">ASP.NET MVC Controls - Templates</a>
- [Popup - Customize the Title](/concepts/05%20Widgets/Popup/05%20Customize%20the%20Appearance/10%20Customize%20the%20Title.md '/Documentation/Guide/Widgets/Popup/Customize_the_Appearance/Customize_the_Title/')
- [Popup - Specify Toolbar Items](/concepts/05%20Widgets/Popup/05%20Customize%20the%20Appearance/20%20Specify%20Toolbar%20Items.md '/Documentation/Guide/Widgets/Popup/Customize_the_Appearance/Specify_Toolbar_Items/')
- [Popup Demos](/Demos/WidgetsGallery/Demo/Popup/Overview/)