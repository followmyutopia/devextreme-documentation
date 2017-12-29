By default, exactly one panel can be in the expanded state at one moment. To change this, switch the [collapsible](/Documentation/ApiReference/UI_Widgets/dxAccordion/Configuration/#collapsible) and [multiple](/Documentation/ApiReference/UI_Widgets/dxAccordion/Configuration/#multiple) options to _true_.

---
##### jQuery

    <!--JavaScript-->
    $(function () {
        $("#accordionContainer").dxAccordion({
            // ...
            // All panels may be collapsed
            collapsible: true,
            // Multiple panels may be expanded
            multiple: true
        });
    });

##### Angular

    <!--HTML-->
    <dx-accordion
        [collapsible]="true" <!-- All panels may be collapsed -->
        [multiple]="true">   <!-- Multiple panels may be expanded -->
    </dx-accordion>

    <!--TypeScript-->
    import { DxAccordionModule } from 'devextreme-angular';
    // ...
    export class AppComponent {
        // ...
    }
    @NgModule({
        imports: [
            // ...
            DxAccordionModule
        ],
        // ...
    })

---

#####See Also#####
- [Accordion Demos](/Demos/WidgetsGallery/#demo/navigation-accordion-overview)
- [Accordion API Reference](/Documentation/ApiReference/UI_Widgets/dxAccordion/)

[tags]accordion, behavior, collapse, expand, multiple