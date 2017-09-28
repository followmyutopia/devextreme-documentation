The template implementation depends on the used framework or library. Examples of jQuery, Angular, and ASP.NET MVC are presented below. They show how to create a template consisting of static (text) and dynamic (the [Switch](/Documentation/Guide/Widgets/Switch/Overview/) widget) content. 

---
##### jQuery 

    <!--HTML-->
    <img id="image" src="https://www.devexpress.com/DXR.axd?r=9999_17-FD0Id" />
    <div id="popoverContainer">
        <p>Static content</p>
        <div id="switchContainer"></div>
    </div>

    <!--JavaScript-->$(function() {
        $("#popoverContainer").dxPopover({
            target: "#image",
            showEvent: 'dxhoverstart',
            hideEvent: 'dxhoverend',
            onContentReady: function () {
                $("#switchContainer").dxSwitch({
                    // The "Switch" widget is configured here
                });
            }
        });
    });

##### Angular

    <!--HTML-->
    <img id="image" src="https://www.devexpress.com/DXR.axd?r=9999_17-FD0Id" />
    <dx-popover
        target="#image"
        showEvent="dxhoverstart"
        hideEvent="dxhoverend"
        contentTemplate="popoverContent">
        <div *dxTemplate="let data of 'popoverContent'">
            <p>Static content</p>
            <dx-switch>
                <!-- The "Switch" widget is configured here -->
            </dx-switch>
        </div>
    </dx-popover>

    <!--TypeScript-->
    import { DxPopoverModule, DxSwitchModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxPopoverModule,
            DxSwitchModule
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
            <p>Static content</p>
            @(Html.DevExtreme().Switch()
                // The "Switch" widget is configured here
            )
        </text>)
    )
    <img id="image" src="https://www.devexpress.com/DXR.axd?r=9999_17-FD0Id" />

---
