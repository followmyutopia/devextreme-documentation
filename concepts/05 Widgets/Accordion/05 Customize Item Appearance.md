For a minor customization of **Accordion** panels, you can use the default item template. This template defines the appearance of a panel depending on whether [specific fields](/Documentation/ApiReference/UI_Widgets/dxAccordion/Default_Item_Template/) are present or absent from the panel's data object. For example, the following code generates three panels, the first and third are not customized, the second is disabled.


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

Using the default item template is the easiest way to customize an item, but it lacks flexibility. Instead, you can define a custom template. For Angular, AngularJS and Knockout apps, DevExtreme provides a markup component called [dxTemplate](/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/). The following code shows how you can use **dxTemplate** to define templates for items and item titles.

---
##### Angular

    <!--HTML-->
    <dx-accordion
        [dataSource]="accordionData"
        itemTitleTemplate="title"
        itemTemplate="item">
        <div *dxTemplate="let employee of 'title'">
            <span>employee.firstName</span>
            <span>employee.lastName</span>
        </div>
        <div *dxTemplate="let employee of 'item'">
            <span>employee.birthDate</span>
            <span>employee.position</span>
        </div>
    </dx-accordion>

    <!--TypeScript-->
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

If you use jQuery alone, combine the HTML markup for items and their titles manually with jQuery [DOM manipulation methods](http://api.jquery.com/category/manipulation/). To apply this markup, use the [itemTemplate](/Documentation/ApiReference/UI_Widgets/dxAccordion/Configuration/#itemTemplate) and [itemTitleTemplate](/Documentation/ApiReference/UI_Widgets/dxAccordion/Configuration/#itemTitleTemplate) callback functions as shown in the following code.

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

<a href="https://js.devexpress.com/Demos/WidgetsGallery/Demo/Accordion/Overview/jQuery/Light/" class="button orange small fix-width-155" style="margin-right:5px;" target="_blank">View Demo</a>

You can also customize an individual item. For this purpose, declare a template for this item as a script and pass its `id` to the [template](/Documentation/ApiReference/UI_Widgets/dxAccordion/Default_Item_Template/#template) field of the item's data object.

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

In addition, you can use a 3rd-party template engine to customize widget appearance. For more information, see the [Use an Alternative Template Engine](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/#Use_an_Alternative_Template_Engine) article.

#####See Also#####
- [Customize Widget Element Appearance](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/#Customize_Widget_Element_Appearance)
- [Customize Widget Element Appearance - MVVM Approach](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/)
- [Accordion API Reference](/Documentation/ApiReference/UI_Widgets/dxAccordion/)

[tags]accordion, item appearance, customize, templates