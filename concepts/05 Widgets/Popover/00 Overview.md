The **Popover** is a widget that shows notifications within a box with an arrow pointing to a specified UI element.

<a href="https://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogs_and_notifications-popover-overview" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The following code creates a simple **Popover** on your page and attaches it to another element (in this example, to an image).

    <!--HTML--><img id="image" src="https://www.devexpress.com/DXR.axd?r=9999_17-FD0Id" />
    <div id="popoverContainer">
        <p>Popover content</p>
    </div>

<!---->

    <!--JavaScript-->
    $(function() {
        $("#popoverContainer").dxPopover({
            target: "#image",
            showEvent: 'dxhoverstart',
            hideEvent: 'dxhoverend'
        });
    });

There are several ways to specify the content of the **Popover**. Learn more in the [Customize the Content](/Documentation/Guide/Widgets/Popover/Customize_the_Appearance/Customize_the_Content/) article. The **Popover** can also be displayed with a title and toolbars. For detailed information, see the [Customize the Title](/Documentation/Guide/Widgets/Popover/Customize_the_Appearance/Customize_the_Title/) and [Specify Toolbar Items](/Documentation/Guide/Widgets/Popover/Customize_the_Appearance/Specify_Toolbar_Items/) topics. 

#####See Also#####
- [Widget Basics - jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/)
- [Widget Basics - AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/)
- [Widget Basics - Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/)
- [Popover - Customize the Appearance](/Documentation/Guide/Widgets/Popover/Customize_the_Appearance/Customize_the_Content/)
- [Popover - Show and Hide the Popover](/Documentation/Guide/Widgets/Popover/Show_and_Hide_the_Popover/)
- [Popover - Resize and Relocate](/Documentation/Guide/Widgets/Popover/Resize_and_Relocate/)
- [Popover API Reference](/Documentation/ApiReference/UI_Widgets/dxPopover/)

[tags]popover, overview, overlay 