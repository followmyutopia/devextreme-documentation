If you need to render different templates depending on a specific condition, define them inside the **Tooltip** container using the DevExtreme [dxTemplate](/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/) markup component. You can switch the templates on the fly by changing the [contentTemplate](/Documentation/ApiReference/UI_Widgets/dxTooltip/Configuration/#contentTemplate) option's value.

---
##### jQuery

    <!--HTML-->
    <img id="image" src="https://www.devexpress.com/DXR.axd?r=9999_17-FD0Id" />
    <div id="buttonContainer"></div>
    <div id="tooltipContainer">
        <div data-options="dxTemplate: { name: 'template1' }">
            <p>First template</p>
        </div>
        <div data-options="dxTemplate: { name: 'template2' }">
            <p>Second template</p>
        </div>
    </div>

    <!--JavaScript-->$(function() {
        var tooltip = $("#tooltipContainer").dxTooltip({
            target: "#image",
            showEvent: 'dxhoverstart',
            hideEvent: 'dxhoverend',
            contentTemplate: 'template1'
        }).dxTooltip("instance");

        $("#buttonContainer").dxButton({
            text: "Change the Template", 
            onClick: function (e) {
                var currentTemplate = tooltip.option("contentTemplate");
                tooltip.option("contentTemplate", currentTemplate == "template1" ? "template2" : "template1");
            } 
        });
    });

    <!--CSS-->#buttonContainer {
        display: block;
        width: 200px
    }

##### Angular

    <!--HTML--><img id="image" src="https://www.devexpress.com/DXR.axd?r=9999_17-FD0Id" />
    <dx-button
        id="buttonContainer"
        text="Change the Template"
        (onClick)="changeTemplate()">
    </dx-button>
    <dx-tooltip
        target="#image"
        showEvent="dxhoverstart"
        hideEvent="dxhoverend"
        [contentTemplate]="currentTemplate">
        <div *dxTemplate="let data of 'template1'">
            <p>First template</p>
        </div>
        <div *dxTemplate="let data of 'template2'">
            <p>Second template</p>
        </div>
    </dx-tooltip>

    <!--TypeScript-->
    import { DxTooltipModule, DxButtonModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        currentTemplate: string = "template1";
        changeTemplate () {
            this.currentTemplate = (this.currentTemplate == 'template1' ? 'template2' : 'template1')
        }
    }
    @NgModule({
        imports: [
            // ...
            DxTooltipModule,
            DxButtonModule
        ],
        // ...
    })
    
    <!--CSS-->#buttonContainer {
        display: block;
        width: 200px
    }

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Tooltip()
        .ID("tooltip")
        .Target("#image")
        .ShowEvent("dxhoverstart")
        .HideEvent("dxhoverend")
        .ContentTemplate(new TemplateName("template1"))
    )

    @using (Html.DevExtreme().NamedTemplate("template1")) {
        <p>First template</p>
    }
    @using (Html.DevExtreme().NamedTemplate("template2")) {
        <p>Second template</p>
    }

    <img id="image" src="https://www.devexpress.com/DXR.axd?r=9999_17-FD0Id" />

    @(Html.DevExtreme().Button()
        .ID("changeTemplateButton")
        .Text("Change the Template")
        .OnClick("changeTemplateButton_click")
    )

    <script type="text/javascript">
        function changeTemplateButton_click() {
            var tooltip = $("#tooltip").dxTooltip("instance");
            var currentTemplate = tooltip.option("contentTemplate");
            tooltip.option("contentTemplate", currentTemplate.selector == "#template1" ? $("#template2") : $("#template1"));
        }
    </script>

    <!--CSS-->#changeTemplateButton {
        display: block;
        width: 200px
    }

---

#####See Also#####
- [ASP.NET MVC Controls - Implementing Templates](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Implementing_Templates)
- [Tooltip - Resize and Relocate](/Documentation//Guide/Widgets/Tooltip/Resize_and_Relocate/)
- [Tooltip Demos](/Demos/WidgetsGallery/#demo/dialogs_and_notifications-tooltip-overview)
- [Tooltip API Reference](/Documentation/ApiReference/UI_Widgets/dxTooltip/)