The **Accordion** widget contains several panels displayed one under another. These panels can be collapsed or expanded by an end user, which makes this widget very useful for presenting information in a limited amount of space.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/navigation-accordion-overview"
}
<a href="https://www.youtube.com/watch?v=Dd0Nb6AU4B8&index=41&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>

The following code adds a simple **Accordion** to your page. Note that each data source object contains the **title** field, whose value goes to the title of the panel. 

---
##### jQuery

    <!--JavaScript-->var accordionData = [{
        title: "Personal Data",
        firstName: "John",
        lastName: "Smith",
        birthYear: 1986
    }, {
        title: "Contacts",
        phone: "(555)555-5555",
        email: "John.Smith@example.com"
    }, {
        title: "Address",
        state: "CA",
        city: "San Francisco",
        street: "Stanford Ave"
    }];

    $(function () {
        $("#accordionContainer").dxAccordion({
            dataSource: accordionData,
            itemTemplate: function (itemData, itemIndex, itemElement) {
                for (var field in itemData) {
                    itemElement.append("<p>" + field + ": " + itemData[field] + "</p>");
                }
            }
        });
    });

    <!--HTML--><div id="accordionContainer"></div>

##### Angular

    <!--HTML-->
    <dx-accordion
        [dataSource]="accordionData"
        itemTemplate="item">
        <div *dxTemplate="let itemData of 'item'">
            <p *ngFor="let key of getItemKeys(itemData)">
                {{key}}: {{itemData[key]}}
            </p>
        </div>
    </dx-accordion>

    <!--TypeScript-->
    import { DxAccordionModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        accordionData = [{
            title: "Personal Data",
            firstName: "John",
            lastName: "Smith",
            birthYear: 1986
        }, {
            title: "Contacts",
            phone: "(555)555-5555",
            email: "John.Smith@example.com"
        }, {
            title: "Address",
            state: "CA",
            city: "San Francisco",
            street: "Stanford Ave"
        }];
        getItemKeys (item) {
            return Object.keys(item);
        }
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
- **Widget Basics**: [jQuery](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/) | [Angular](/Documentation/Guide/Angular_Components/Component_Configuration_Syntax/) | [AngularJS](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/) | [Knockout](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/)
- [Accordion - Customize Item Appearance](/Documentation/Guide/Widgets/Accordion/Customize_Item_Appearance/)
- [Accordion - Control the Behavior](/Documentation/Guide/Widgets/Accordion/Control_the_Behavior)
- [Accordion API Reference](/Documentation/ApiReference/UI_Widgets/dxAccordion/)

[tags]accordion, collection container, collection widget, overview