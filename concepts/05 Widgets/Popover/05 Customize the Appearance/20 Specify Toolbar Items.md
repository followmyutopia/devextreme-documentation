The **Popover** has two toolbars: top and bottom. Items on these toolbars can be plain text or widgets. To configure the items, populate the [toolbarItems](/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/toolbarItems/) array with objects. Each object configures an individual toolbar item. For example, the following code adds two toolbar items to the **Popover**: one is plain text, another is the [Button](/Documentation/Guide/Widgets/Button/) widget. They both occupy the top toolbar, because their [toolbar](/Documentation/ApiReference/UI_Widgets/dxPopover/Configuration/toolbarItems/#toolbar) option assumes its default value.

    <!--HTML--><img id="image" src="https://www.devexpress.com/DXR.axd?r=9999_17-FD0Id" />
    <div id="popoverContainer">
        <p>Popover content</p>
    </div>

<!---->

    <!--JavaScript-->
    $(function() {
        $("#popoverContainer").dxPopover({
            target: "#image",
            visible: true,
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

#####See Also#####
- [Popover - Customize the Content](/Documentation/Guide/Widgets/Popover/Customize_the_Appearance/Customize_the_Content/)
- [Popover - Customize the Title](/Documentation/Guide/Widgets/Popover/Customize_the_Appearance/Customize_the_Title/)
- [Popover - Color the Shading of the Background](/Documentation/Guide/Widgets/Popover/Customize_the_Appearance/Color_the_Shading_of_the_Background/)
- [Popover Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogs_and_notifications-popover-overview)
- [Popover API Reference](/Documentation/ApiReference/UI_Widgets/dxPopover/)

[tags]popover, overlay, customize, toolbar items, top toolbar, bottom toolbar