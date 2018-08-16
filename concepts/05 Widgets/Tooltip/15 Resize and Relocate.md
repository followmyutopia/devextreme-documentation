To change the size of the **Tooltip**, specify the [height](/Documentation/ApiReference/UI_Widgets/dxTooltip/Configuration/#height) and [width](/Documentation/ApiReference/UI_Widgets/dxTooltip/Configuration/#width) options. Note that the **Tooltip**'s arrow takes its share of the overall size.

---
##### jQuery 

    <!--JavaScript-->$(function() {
        $("#tooltipContainer").dxTooltip({
            target: "#image",
            showEvent: 'dxhoverstart',
            hideEvent: 'dxhoverend',
            height: 70,
            width: 200,
            contentTemplate: function (contentElement) {
                contentElement.append(
                    $("<p />").text("Tooltip content")
                )
            }
        });
    });

    <!--HTML-->
    <img id="image" src="https://www.devexpress.com/DXR.axd?r=9999_17-FD0Id" />
    <div id="tooltipContainer"></div>


##### Angular

    <!--HTML-->
    <img id="image" src="https://www.devexpress.com/DXR.axd?r=9999_17-FD0Id" />
    <dx-tooltip
        target="#image"
        showEvent="dxhoverstart"
        hideEvent="dxhoverend"
        [height]="70"
        [width]="200">
        <div *dxTemplate="let data of 'content'">
            <p>Tooltip content</p>
        </div>
    </dx-tooltip>

    <!--TypeScript-->
    import { DxTooltipModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTooltipModule
        ],
        // ...
    })

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Tooltip()
        .Target("#image")
        .ShowEvent("dxhoverstart")
        .HideEvent("dxhoverend")
        .ContentTemplate(@<text>
            <p>Tooltip content</p>
        </text>)
        .Height(70)
        .Width(200)
    )
    <img id="image" src="https://www.devexpress.com/DXR.axd?r=9999_17-FD0Id" />

---

If you need to position the **Tooltip** against a certain side of the [target element](/Documentation/ApiReference/UI_Widgets/dxTooltip/Configuration/#target), set the [position](/Documentation/ApiReference/UI_Widgets/dxTooltip/Configuration/#position) option.

---
##### jQuery 

    <!--JavaScript-->$(function() {
        $("#tooltipContainer").dxTooltip({
            target: "#image",
            showEvent: 'dxhoverstart',
            hideEvent: 'dxhoverend',
            position: "top", // or "bottom" | "left" | "right"
            contentTemplate: function (contentElement) {
                contentElement.append(
                    $("<p />").text("Tooltip content")
                )
            }
        });
    });

    <!--HTML-->
    <img id="image" src="https://www.devexpress.com/DXR.axd?r=9999_17-FD0Id" />
    <div id="tooltipContainer"></div>

##### Angular

    <!--HTML-->
    <img id="image" src="https://www.devexpress.com/DXR.axd?r=9999_17-FD0Id" />
    <dx-tooltip
        target="#image"
        showEvent="dxhoverstart"
        hideEvent="dxhoverend"
        position="top"> <!-- or "bottom" | "left" | "right" -->
        <div *dxTemplate="let data of 'content'">
            <p>Tooltip content</p>
        </div>
    </dx-tooltip>

    <!--TypeScript-->
    import { DxTooltipModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxTooltipModule
        ],
        // ...
    })

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Tooltip()
        .Target("#image")
        .ShowEvent("dxhoverstart")
        .HideEvent("dxhoverend")
        .ContentTemplate(@<text>
            <p>Tooltip content</p>
        </text>)
        .Position(Position.Top) // or Position.Bottom | Position.Left | Position.Right
    )
    <img id="image" src="https://www.devexpress.com/DXR.axd?r=9999_17-FD0Id" />

---

#####See Also#####
- [Tooltip - Customize the Content](/Documentation/Guide/Widgets/Tooltip/Customize_the_Content/)
- [Tooltip Demos](/Demos/WidgetsGallery/#demo/dialogs_and_notifications-tooltip-overview)
- [Tooltip API Reference](/Documentation/ApiReference/UI_Widgets/dxTooltip/)

[tags]tooltip, overlay, template, size, height, width, position