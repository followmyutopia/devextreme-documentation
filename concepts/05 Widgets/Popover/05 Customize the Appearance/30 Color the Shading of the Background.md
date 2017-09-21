When the **Popover** is shown, the area beneath it can be shaded. To enable this behavior, assign **true** to the [shading](/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/#shading) option. The shading color is specified by the [shadingColor](/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/#shadingColor) option.

---
##### jQuery 

    <!--JavaScript-->$(function() {
		$("#popoverContainer").dxPopover({
            target: "#image",
            showEvent: 'dxhoverstart',
            hideEvent: 'dxhoverend',
            shading: true,
            shadingColor: "rgba(0, 0, 0, 0.2)"
        });
    });

    <!--HTML--><img id="image" src="https://www.devexpress.com/DXR.axd?r=9999_17-FD0Id" />
    <div id="popoverContainer">
        <p>Popover content</p>
    </div>

##### Angular

    <!--HTML-->
    <img id="image" src="https://www.devexpress.com/DXR.axd?r=9999_17-FD0Id" />
    <dx-popover
        target="#image"
        showEvent="dxhoverstart"
        hideEvent="dxhoverend"
        [shading]="true"
        shadingColor="rgba(0, 0, 0, 0.2)">
        <div *dxTemplate="let data of 'content'">
            <p>Popover content</p>
        </div>
    </dx-popover>

    <!--TypeScript-->
    import { DxPopoverModule, DxTemplateModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxPopoverModule,
            DxTemplateModule
        ],
        // ...
    })

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Popover()
        .Target("#image")
        .ShowEvent("dxhoverstart")
        .HideEvent("dxhoverend")
        .ContentTemplate(@<text>
            <p>Popover content</p>
        </text>)
        .Shading(true)
        .ShadingColor("rgba(0, 0, 0, 0.2)")
    )
    <img id="image" src="https://www.devexpress.com/DXR.axd?r=9999_17-FD0Id" />

---

#####See Also#####
- [Popover - Customize the Content](/Documentation/Guide/Widgets/Popover/Customize_the_Appearance/Customize_the_Content/)
- [Popover - Customize the Title](/Documentation/Guide/Widgets/Popover/Customize_the_Appearance/Customize_the_Title/)
- [Popover - Specify Toolbar Items](/Documentation/Guide/Widgets/Popover/Customize_the_Appearance/Specify_Toolbar_Items/)
- [Popover Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogs_and_notifications-popover-overview)

[tags]popover, overlay, shading, background, shading color