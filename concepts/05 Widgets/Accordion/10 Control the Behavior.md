By default, exactly one panel can be in the expanded state at one moment. To change this, switch the [collapsible](/Documentation/ApiReference/UI_Widgets/dxAccordion/Configuration/#collapsible) and [multiple](/Documentation/ApiReference/UI_Widgets/dxAccordion/Configuration/#multiple) options to _true_.

    $(function () {
        $("#accordionContainer").dxAccordion({
            // ...
            // All panels may be collapsed
            collapsible: true,
            // Multiple panels may be expanded
            multiple: true
        });
    });

#####See Also#####
- [Accordion Demo](http://js.devexpress.com/Demos/WidgetsGallery/#demo/navigation-accordion-overview)
- [Accordion API Reference](/Documentation/ApiReference/UI_Widgets/dxAccordion/)

[tags]accordion, behavior, collapse, expand, multiple