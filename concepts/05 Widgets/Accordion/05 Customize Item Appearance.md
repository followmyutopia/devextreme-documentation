For a minor customization of **Accordion** panels, you can use the default item template. This template defines the appearance of a panel depending on whether [specific fields](/api-reference/10%20UI%20Widgets/dxAccordion/5%20Default%20Item%20Template/Default%20Item%20Template.md '/Documentation/ApiReference/UI_Widgets/dxAccordion/Default_Item_Template/') are present or absent from the panel's data object. For example, the following code generates three panels, the first and third are not customized, the second is disabled.


    <!--JavaScript-->var accordionData = [{
        title: "Employee",
        text: "John Smith"
    }, {
        title: "Phone Number",
        text: "(555)555-5555",
        disabled: true
    }, {
        title: "Position",
        text: "Network Administrator"
    }];

    $(function () { 
        $("#accordionContainer").dxAccordion({
            dataSource: accordionData
        });
    });

Using the default item template is the easiest way to customize an item, but it lacks flexibility. Instead, you can define a custom template. For Angular, AngularJS and Knockout apps, DevExtreme provides a markup component called [dxTemplate](/api-reference/10%20UI%20Widgets/Markup%20Components/dxTemplate/dxTemplate.md '/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/'). The following code shows how you can use **dxTemplate** to define templates for items and item titles.

---
##### Angular

    <!--HTML-->
    <dx-accordion
        [dataSource]="accordionData"
        itemTitleTemplate="title"
        itemTemplate="item">
        <div *dxTemplate="let employee of 'title'">
            <span>{{employee.firstName}}</span>
            <span>{{employee.lastName}}</span>
        </div>
        <div *dxTemplate="let employee of 'item'">
            <span>{{employee.birthDate}}</span>
            <span>{{employee.position}}</span>
        </div>
    </dx-accordion>

    <!--TypeScript-->
    import { DxAccordionModule } from "devextreme-angular";
    // ...
    export class AppComponent {
        accordionData = [{
            firstName: "John", lastName: "Smith",
            birthDate: "1986/03/14",
            position: "Network Administrator"
        }, {
            firstName: "Samantha", lastName: "Jones",
            birthDate: "1972/11/13",
            position: "Technical Writer"
        }, {
            // ...
        }];
    }
    @NgModule({
        imports: [
            // ...
            DxAccordionModule
        ],
        // ...
    })

#####AngularJS

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller('DemoController', function DemoController($scope) {
            $scope.accordionData = [{
                firstName: "John", lastName: "Smith",
                birthDate: "1986/03/14",
                position: "Network Administrator"
            }, {
                firstName: "Samantha", lastName: "Jones",
                birthDate: "1972/11/13",
                position: "Technical Writer"
            }, {
                // ...
            }];
        });

    <!--HTML--><div ng-controller="DemoController">
        <div dx-accordion="{
            dataSource: accordionData,
            itemTemplate: 'item',
            itemTitleTemplate: 'title'
        }" dx-item-alias="employee">
            <div data-options="dxTemplate: { name: 'title' }">
                <span>{{ employee.firstName }}</span>
                <span>{{ employee.lastName }}</span>
            </div>
            <div data-options="dxTemplate: { name: 'item' }">
                <p>{{ employee.birthDate }}</p>
                <p>{{ employee.position }}</p>
            </div>
        </div>
    </div>

[note] The `dx-item-alias` directive specifies the variable that is used to access the item object.

#####Knockout

    <!--JavaScript-->var viewModel= {
        accordionData: [{
            firstName: "John", lastName: "Smith",
            birthDate: "1986/03/14",
            position: "Network Administrator"
        }, {
            firstName: "Samantha", lastName: "Jones",
            birthDate: "1972/11/13",
            position: "Technical Writer"
        }, {
            // ...
        }]
    };

    ko.applyBindings(viewModel);

    <!--HTML--><div data-bind="dxAccordion: {
        dataSource: accordionData,
        itemTemplate: 'item',
        itemTitleTemplate: 'title'
    }">
        <div data-options="dxTemplate: { name: 'title' }">
            <span data-bind="text: firstName"></span>
            <span data-bind="text: lastName"></span>
        </div>
        <div data-options="dxTemplate: { name: 'item' }">
            <p data-bind="text: birthDate"></p>
            <p data-bind="text: position"></p>
        </div>
    </div>

---

If you use jQuery alone, combine the HTML markup for items and their titles manually with jQuery <a href="http://api.jquery.com/category/manipulation/" target="_blank">DOM manipulation methods</a>. To apply this markup, use the [itemTemplate](/api-reference/10%20UI%20Widgets/dxAccordion/1%20Configuration/itemTemplate.md '/Documentation/ApiReference/UI_Widgets/dxAccordion/Configuration/#itemTemplate') and [itemTitleTemplate](/api-reference/10%20UI%20Widgets/dxAccordion/1%20Configuration/itemTitleTemplate.md '/Documentation/ApiReference/UI_Widgets/dxAccordion/Configuration/#itemTitleTemplate') callback functions as shown in the following code.

    <!--JavaScript-->var accordionData = [{
        firstName: "John", lastName: "Smith",
        birthDate: "1986/03/14",
        position: "Network Administrator"
    }, {
        firstName: "Samantha", lastName: "Jones",
        birthDate: "1972/11/13",
        position: "Technical Writer"
    }, {
        // ...
    }];

    $(function () {
        $("#accordionContainer").dxAccordion({
            dataSource: accordionData,
            itemTemplate: function (itemData, itemIndex, itemElement) {
                itemElement.append("<p>" + itemData.birthDate + "</p>");
                itemElement.append("<p>" + itemData.position + "</p>");
            },
            itemTitleTemplate: function (itemData, itemIndex, itemElement) {
                itemElement.append("<span>" + itemData.firstName + "</span> ");
                itemElement.append("<span>" + itemData.lastName + "</span>");
            }
        });
    });

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Accordion/Overview/jQuery/Light/"
}

You can also customize an individual item. For this purpose, declare a template for this item as a script and pass its `id` to the [template](/api-reference/10%20UI%20Widgets/CollectionWidget/5%20Default%20Item%20Template/template.md '/Documentation/ApiReference/UI_Widgets/dxAccordion/Default_Item_Template/#template') field of the item's data object.

    <!--HTML--><script id="individualTemplate" type="text/html">
        <!-- ... -->
    </script>

    <!--JavaScript-->var accordionData = [{
        firstName: "John", lastName: "Smith",
        birthDate: "1986/03/14",
        position: "Network Administrator",
        template: $("#individualTemplate")
    }, {
        // ...
    }];

In addition, you can use a 3rd-party template engine to customize widget appearance. For more information, see the [3rd-Party Template Engines](/concepts/05%20Widgets/zz%20Common/30%20Templates/30%203rd-Party%20Template%20Engines.md '/Documentation/Guide/Widgets/Common/Templates/#3rd-Party_Template_Engines') article.

#####See Also#####
- [Accordion API Reference](/api-reference/10%20UI%20Widgets/dxAccordion/dxAccordion.md '/Documentation/ApiReference/UI_Widgets/dxAccordion/')

[tags]accordion, item appearance, customize, templates