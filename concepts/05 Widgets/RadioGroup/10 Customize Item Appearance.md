For a minor customization of **RadioGroup** items, you can use the default item template. This template defines the appearance of an item depending on whether [specific fields](/Documentation/ApiReference/UI_Widgets/dxRadioGroup/Default_Item_Template/) are present or absent from the item's data object. For example, the following code generates three radio buttons: the first is disabled, the second is not customized, the third is hidden.

    <!--JavaScript-->
    $(function() {
        $("#radioGroupContainer").dxRadioGroup({
            dataSource: [
                { text: "Low", disabled: true },
                { text: "High" },
                { text: "Urgent", visible: false }
            ]
        });
    });

Using the default item template is the easiest way to customize an item, but it lacks flexibility. Instead, you can define a custom template. For AngularJS and Knockout apps, DevExtreme provides a markup component called [dxTemplate](/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/). The following code gives a simple example of how you can use **dxTemplate** to customize radio buttons.

---

#####**AngularJS**

    <!--HTML-->
    <div ng-controller="DemoController">
       <div dx-radio-group="{
           dataSource: dataItems, 
           itemTemplate: 'customItemTemplate'
        }" dx-item-alias="item">
            <div data-options="dxTemplate: { name: 'customItemTemplate' }">
                <div ng-style="{ color: item.color }">{{ item.text }}</div>
            </div>    
        </div>
    </div>

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function ($scope) {
            $scope.dataItems = [
                { text: "Low", color: "grey" },
                { text: "Normal", color: "green" },
                { text: "Urgent", color: "yellow" },
                { text: "High", color: "red" }
            ];
        });

[note]The `dx-item-alias` directive specifies the variable that is used to access the item object.

#####**Knockout**

    <!--HTML-->
    <div data-bind="dxRadioGroup: {
        dataSource: dataItems,
        itemTemplate: 'customItemTemplate'
    }">
        <div data-options="dxTemplate: { name: 'customItemTemplate' }">
            <div data-bind="text: text, style: { color: color }"></div>
        </div>
    </div>

    <!--JavaScript-->
    var viewModel = {
        dataItems: [
            { text: "Low", color: "grey" },
            { text: "Normal", color: "green" },
            { text: "Urgent", color: "yellow" },
            { text: "High", color: "red" }
        ]
    };

    ko.applyBindings(viewModel);

---

If you use jQuery alone, combine the HTML markup for items manually with jQuery [DOM manipulation methods](http://api.jquery.com/category/manipulation/). To apply this markup, use the [itemTemplate](/Documentation/ApiReference/UI_Widgets/dxRadioGroup/Configuration/#itemTemplate) callback function as shown in the following code.

    <!--JavaScript-->
    $(function() {
        $("#radioGroupContainer").dxRadioGroup({
            dataSource: [
                { text: "Low", color: "grey" },
                { text: "Normal", color: "green" },
                { text: "Urgent", color: "yellow" },
                { text: "High", color: "red" }
            ],
            itemTemplate: function(itemData, itemIndex, itemElement){
                itemElement.append(
                    $("<div />").attr("style", "color:" + itemData.color )
                                .text(itemData.text)
                );
            }
        });
    });

You can also customize an individual item. For this purpose, declare a template for it as a script and pass its `id` to the [template](/Documentation/ApiReference/UI_Widgets/dxRadioGroup/Default_Item_Template/#template).

    <!--HTML-->
    <script id="individualTemplate" type="text/html">
        <!-- ... -->
    </script>

    <!--JavaScript-->
    var radioGroupItems = [{
        text: "Low",
        template: $("#individualTemplate")
    },
    // ...
    ];

In addition, you can use a 3rd-party template engine to customize widget appearance. For more information, see the [3rd-Party Template Engines](/Documentation/Guide/Widgets/Common/Templates/#3rd-Party_Template_Engines) article.

#####See Also#####
- [RadioGroup - Handle the Value Change Event](/Documentation/Guide/Widgets/RadioGroup/Handle_the_Value_Change_Event)
- [RadioGroup Demos](/Demos/WidgetsGallery/#demo/forms_and_multi-purpose-radio_group-overview)
- [RadioGroup API Reference](/Documentation/ApiReference/UI_Widgets/dxRadioGroup/)

[tags]radio group, radioGroup, button appearance, item appearance, customize, templates, template, custom template, default item, default template
