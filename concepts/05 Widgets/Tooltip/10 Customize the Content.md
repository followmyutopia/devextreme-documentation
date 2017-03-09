If you need to define the **Tooltip** content, specify a template for it. You can simply put this template inside the **Tooltip** container...

    <!--HTML--><div id="tooltipContainer">
        <p>Tooltip content</p>
    </div>

... or you can combine the HTML markup for the template in the [contentTemplate](/Documentation/ApiReference/UI_Widgets/dxTooltip/Configuration/#contentTemplate) function. Note that this function will be called only once - when the **Tooltip** appears for the first time.

    <!--JavaScript-->$(function() {
        $("#tooltipContainer").dxTooltip({
            target: "#image",
            showEvent: 'dxhoverstart',
            hideEvent: 'dxhoverend',
            contentTemplate: function () {
                return $("<p />").text("Tooltip content");
            }
        });
    });

If you need to render different templates depending on a specific condition, define them inside the **Tooltip** container using the DevExtreme [dxTemplate](/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/) markup component. To switch the templates on-the-fly, change the value of the [contentTemplate](/Documentation/ApiReference/UI_Widgets/dxTooltip/Configuration/#contentTemplate) option.

    <!--HTML--><img id="image" src="https://www.devexpress.com/DXR.axd?r=9999_17-FD0Id" />
    <div id="buttonContainer"></div>
    <div id="tooltipContainer">
        <div data-options="dxTemplate: { name: 'template1' }">
            <p>First template</p>
        </div>
        <div data-options="dxTemplate: { name: 'template2' }">
            <p>Second template</p>
        </div>
    </div>

<!---->

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
                if (tooltip.option("contentTemplate") == "template1") {
                    tooltip.option("contentTemplate", "template2");
                } else {
                    tooltip.option("contentTemplate", "template1");
                }
            } 
        });
    });

<!---->

    <!--CSS-->#buttonContainer {
        display: block;
        width: 200px
    }

#####See Also#####
- [Customize Widget Element Appearance](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/#Customize_Widget_Element_Appearance/)
- [Customize Widget Element Appearance - MVVM Approach](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/)
- [Tooltip - Resize and Relocate](/Documentation//Guide/Widgets/Tooltip/Resize_and_Relocate/)
- [Tooltip Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/dialogs_and_notifications-tooltip-overview)
- [Tooltip API Reference](/Documentation/ApiReference/UI_Widgets/dxTooltip/)

[tags]tooltip, overlay, template, customize the content, content template