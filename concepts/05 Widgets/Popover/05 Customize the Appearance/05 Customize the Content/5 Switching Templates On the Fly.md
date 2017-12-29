If you need to render different templates depending on a specific condition, define them inside the **Popover** container using the DevExtreme [dxTemplate](/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/) markup component. You can switch the templates on the fly by changing the [contentTemplate](/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/#contentTemplate) option's value.

---
##### jQuery

    <!--HTML-->
    <img id="image" src="https://www.devexpress.com/DXR.axd?r=9999_17-FD0Id" />
    <div id="buttonContainer"></div>
    <div id="popoverContainer">
        <div data-options="dxTemplate: { name: 'template1' }">
            <p>First template</p>
        </div>
        <div data-options="dxTemplate: { name: 'template2' }">
            <p>Second template</p>
        </div>
    </div>

    <!--JavaScript-->$(function() {
        var popover = $("#popoverContainer").dxPopover({
            target: "#image",
            showEvent: 'dxhoverstart',
            hideEvent: 'dxhoverend',
            contentTemplate: 'template1'
        }).dxPopover("instance");

        $("#buttonContainer").dxButton({
            text: "Change the Template", 
            onClick: function (e) {
                var currentTemplate = popover.option("contentTemplate");
                popover.option("contentTemplate", currentTemplate == "template1" ? "template2" : "template1");
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
        text="Change the Template"
        (onClick)="changeTemplate()">
    </dx-button>
    <dx-popover
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
    </dx-popover>

    <!--TypeScript-->
    import { DxPopoverModule, DxButtonModule } from 'devextreme-angular';
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
            DxPopoverModule,
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
    @(Html.DevExtreme().Popover()
        .ID("popover")
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
            var popover = $("#popover").dxPopover("instance");
            var currentTemplate = popover.option("contentTemplate");
            popover.option("contentTemplate", currentTemplate.selector == "#template1" ? $("#template2") : $("#template1"));
        }
    </script>

    <!--CSS-->#changeTemplateButton {
        display: block;
        width: 200px
    }

---

#####See Also#####
- [ASP.NET MVC Controls - Implementing Templates](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/#Implementing_Templates)
- [Popover - Customize the Title](/Documentation/Guide/Widgets/Popover/Customize_the_Appearance/Customize_the_Title/)
- [Popover - Specify Toolbar Items](/Documentation/Guide/Widgets/Popover/Customize_the_Appearance/Specify_Toolbar_Items/)
- [Popover Demos](/Demos/WidgetsGallery/#demo/dialogs_and_notifications-popover-overview)