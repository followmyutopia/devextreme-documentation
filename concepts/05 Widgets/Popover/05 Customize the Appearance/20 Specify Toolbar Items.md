The **Popover** has two toolbars: top and bottom. Items on these toolbars can be plain text or widgets. To configure the items, populate the [toolbarItems](/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/toolbarItems/) array with objects. Each object configures an individual toolbar item. For example, the following code adds two toolbar items to the **Popover**: one is plain text, another is the [Button](/Documentation/Guide/Widgets/Button/) widget. They both occupy the top toolbar, because their [toolbar](/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/toolbarItems/#toolbar) option assumes its default value.

---
##### jQuery

    <!--JavaScript-->
    $(function() {
        $("#popoverContainer").dxPopover({
            target: "#image",
            showEvent: 'dxhoverstart',
            hideEvent: 'dxhoverend',
            width: 200,
            toolbarItems: [{
                text: "Title",
                location: "before"
            }, {
                widget: "dxButton",
                location: "after",
                options: { 
                    text: "Refresh", 
                    onClick: function() {
                        // ...
                    }
                }
            }]
        });
    });

    <!--HTML--><img id="image" src="https://www.devexpress.com/DXR.axd?r=9999_17-FD0Id" />
    <div id="popoverContainer">
        <p>Popover content</p>
    </div>

##### Angular

    <!--HTML--><img id="image" src="https://www.devexpress.com/DXR.axd?r=9999_17-FD0Id" />
    <dx-popover
        target="#image"
        showEvent="dxhoverstart"
        hideEvent="dxhoverend">
        <div *dxTemplate="let data of 'content'">
            <p>Popover content</p>
        </div>
        <dxi-toolbar-item
            text="Title"
            location="before">
        </dxi-toolbar-item>
        <dxi-toolbar-item
            widget="dxButton"
            location="after"
            [options]="{
                text: 'Refresh',
                onClick: refresh
            }">
        </dxi-toolbar-item>
    </dx-popover>

    <!--TypeScript-->
    import { DxPopoverModule, DxButtonModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        refresh () {
            // ...
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
    

##### ASP.NET MVC Controls

    <!--Razor C#-->
    @(Html.DevExtreme().Popover()
        .Target("#image")
        .ShowEvent("dxhoverstart")
        .HideEvent("dxhoverend")
        .ContentTemplate(@<text>
            <p>Popover content</p>
        </text>)
        .ToolbarItems(ti => {
            ti.Add()
                .Text("Title")
                .Location(ToolbarItemLocation.Before);
            ti.Add()
                .Widget(w => w.Button()
                    .Text("Refresh")
                    .OnClick("refresh"))
                .Location(ToolbarItemLocation.After);
         }
    )
    <img id="image" src="https://www.devexpress.com/DXR.axd?r=9999_17-FD0Id" />

    <script type="text/javascript">
        function refresh() {
            // ...
        }
    </script>

---

#####See Also#####
- [Popover - Customize the Content](/Documentation/Guide/Widgets/Popover/Customize_the_Appearance/Customize_the_Content/)
- [Popover - Customize the Title](/Documentation/Guide/Widgets/Popover/Customize_the_Appearance/Customize_the_Title/)
- [Popover - Color the Shading of the Background](/Documentation/Guide/Widgets/Popover/Customize_the_Appearance/Color_the_Shading_of_the_Background/)
- [Popover Demos](/Demos/WidgetsGallery/#demo/dialogs_and_notifications-popover-overview)

[tags]popover, overlay, customize, toolbar items, top toolbar, bottom toolbar