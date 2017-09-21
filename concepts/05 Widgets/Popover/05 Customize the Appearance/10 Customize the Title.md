The **Popover** is displayed without a title by default. To add it, set the [showTitle](/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/#showTitle) option to **true** and specify the title text using the [title](/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/#title) option. The title can contain a button that closes the **Popover**. To enable it, assign **true** to the [showCloseButton](/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/#showCloseButton) option. 

---
##### jQuery

    <!--JavaScript-->$(function() {
        $("#popoverContainer").dxPopover({
            target: "#image",
            showEvent: 'dxhoverstart',
            hideEvent: 'dxhoverend',
            title: "Popover Title",
            showTitle: true,
            showCloseButton: true
        });
    });

    <!--HTML-->
    <img id="image" src="https://www.devexpress.com/DXR.axd?r=9999_17-FD0Id" />
    <div id="popoverContainer">
        <!-- ... -->
    </div>


##### Angular

    <!--HTML-->
    <img id="image" src="https://www.devexpress.com/DXR.axd?r=9999_17-FD0Id" />
    <dx-popover
        target="#image"
        showEvent="dxhoverstart"
        hideEvent="dxhoverend"
        title="Popover Title"
        [showTitle]="true"
        [showCloseButton]="true">
        <!-- ... -->
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
            <!-- ... -->
        </text>)
        .Title("Popover Title")
        .ShowTitle(true)
        .ShowCloseButton(true)
    )
    <img id="image" src="https://www.devexpress.com/DXR.axd?r=9999_17-FD0Id" />

---

If you need to define the title completely, specify a template for it as shown in the following code:

---
##### jQuery

    <!--HTML--><img id="image" src="https://www.devexpress.com/DXR.axd?r=9999_17-FD0Id" />
    <div id="popoverContainer">
        <p>Popover content</p>
        <div data-options="dxTemplate: { name: 'titleTemplate' }">
            <p>Title template</p>
        </div>
    </div>

    <!--JavaScript-->$(function() {
        $("#popoverContainer").dxPopover({
            target: "#image",
            showEvent: "dxhoverstart",
            hideEvent: "dxhoverend",
            showTitle: true,
            titleTemplate: "titleTemplate"
        });
    });

##### Angular

    <!--HTML-->
    <img id="image" src="https://www.devexpress.com/DXR.axd?r=9999_17-FD0Id" />
    <dx-popover
        target="#image"
        showEvent="dxhoverstart"
        hideEvent="dxhoverend"
        [showTitle]="true"
        titleTemplate="titleTemplate">
        <div *dxTemplate="let data of 'content'">
            <p>Popover content</p>
        </div>
        <div *dxTemplate="let data of 'titleTemplate'">
            <p>Title template</p>
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
            <!-- ... -->
        </text>)
        .ShowTitle(true)
        .TitleTemplate(@<text>
            <p>Title template</p>
        </text>)
    )
    <img id="image" src="https://www.devexpress.com/DXR.axd?r=9999_17-FD0Id" />

---

You can switch title templates on the fly just as you can do with content templates. Refer to the [Switching Templates On the Fly](/Documentation/Guide/Widgets/Popover/Customize_the_Appearance/Customize_the_Content/#Switching_Templates_On_the_Fly) topic for more information.

#####See Also#####
- [Popover - Customize the Content](/Documentation/Guide/Widgets/Popover/Customize_the_Appearance/Customize_the_Content/)
- [Popover - Specify Toolbar Items](/Documentation/Guide/Widgets/Popover/Customize_the_Appearance/Specify_Toolbar_Items/)
- [Popover - Color the Shading of the Background](/Documentation/Guide/Widgets/Popover/Customize_the_Appearance/Color_the_Shading_of_the_Background/)
- [Popover Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogs_and_notifications-popover-overview)

[tags]popover, title, show title, title template, close button