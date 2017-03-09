The **Lookup** can organize items in groups. If you use a simple array as a data source, its objects must have the **key** and **items** fields.

    <!--JavaScript-->
    var lookupData = [{
        key: "Mr. John Heart",
        items: ["Google AdWords Strategy", "New Brochures", "Update NDA Agreement"]
    }, {
        key: "Mrs. Olivia Peyton",
        items: ["Update Personnel Files", "Non-Compete Agreements", "Give Final Approval for Refunds"]
    }, // ... ];

    $(function() {
        $("#lookupContainer").dxLookup({
            dataSource: lookupData,
            grouped: true
        });
    });

If you use the [DevExtreme DataSource](/Documentation/ApiReference/Data_Layer/DataSource/), specify its [group](/Documentation/ApiReference/Data_Layer/DataSource/Configuration/#group) option. In both cases, you need to make the **Lookup** know that its data source is grouped by assigning *true* to the [grouped](/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#grouped) option.

    <!--JavaScript-->
    var lookupData = [
        { name: "Amelia", birthYear: 1991, gender: "female" },
        { name: "Benjamin", birthYear: 1983, gender: "male" },
        { name: "Andrew", birthYear: 1991, gender: "male" },
        { name: "Daniela", birthYear: 1983, gender: "female" },
        { name: "Lee", birthYear: 1983, gender: "male" },
        { name: "Betty", birthYear: 1983, gender: "female" }
    ];

    $(function() {
        $("#lookupContainer").dxLookup({
            dataSource: new DevExpress.data.DataSource({ 
                store: lookupData, 
                group: "gender"
            }),
            grouped: true,
            displayExpr: "name",
            valueExpr: "name"
        });
    });

You can define a custom template for the group headers. For AngularJS and Knockout apps, DevExtreme provides a markup component called [dxTemplate](/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/). The following code shows how you can use **dxTemplate** to define a template for the **Lookup** group headers.

**AngularJS**

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-lookup="{
            dataSource: lookupData,
            groupTemplate: 'group',
            grouped: true
        }" dx-item-alias="product">
            <div data-options="dxTemplate: { name: 'group' }">
                <div>Assigned: {{ product.key }}</div>
            </div>
        </div>
    </div>

<!---->

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function ($scope) {
            $scope.lookupData = [{
                key: "Mr. John Heart",
                items: ["Google AdWords Strategy", "New Brochures", "Update NDA Agreement"]
            }, {
                key: "Mrs. Olivia Peyton",
                items: ["Update Personnel Files", "Non-Compete Agreements", "Give Final Approval for Refunds"]
            }, // ... 
            ];
        });

[note] The `dx-item-alias` directive specifies the variable that is used to access the item object.

**Knockout**

    <!--HTML-->
    <div data-bind="dxLookup: {
        dataSource: lookupData,
        grouped: true,
        groupTemplate: 'group'
    }">
        <div data-options="dxTemplate: { name: 'group' }">
            <div>Assigned: <span data-bind="text: key"></span></div>
        </div>
    </div>

<!---->

    <!--JavaScript-->
    var viewModel = {
        lookupData: [{
            key: "Mr. John Heart",
            items: ["Google AdWords Strategy", "New Brochures", "Update NDA Agreement"]
        }, {
            key: "Mrs. Olivia Peyton",
            items: ["Update Personnel Files", "Non-Compete Agreements", "Give Final Approval for Refunds"]
        }, // ... 
        ]
    };

    ko.applyBindings(viewModel);

If you use jQuery alone, combine the HTML markup for items manually with jQuery [DOM manipulation methods](http://api.jquery.com/category/manipulation/). To apply this markup, use the [itemTemplate](/Documentation/ApiReference/UI_Widgets/dxLookup/Configuration/#itemTemplate) callback function as shown in the following code.

    <!--JavaScript-->
    var lookupData = [{
        key: "Mr. John Heart",
        items: ["Google AdWords Strategy", "New Brochures", "Update NDA Agreement"]
    }, {
        key: "Mrs. Olivia Peyton",
        items: ["Update Personnel Files", "Non-Compete Agreements", "Give Final Approval for Refunds"]
    }, // ... 
    ];

    $(function() {
        $("#lookupContainer").dxLookup({
            dataSource: lookupData,
            grouped: true,
            groupTemplate: function (data) {
                return $("<div>Assigned: " + data.key + "</div>");
            }
        });
    });

#####See Also#####
- [Use an Alternative Template Engine](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/#Use_an_Alternative_Template_Engine)
- [Lookup - Customize the Appearance](/Documentation/Guide/Widgets/Lookup/Customize_the_Appearance/)
- [Lookup - Enable Paging](/Documentation/Guide/Widgets/Lookup/Enable_Paging/)
- [Lookup Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Lookup/Basics/)
- [Lookup API Reference](/Documentation/ApiReference/UI_Widgets/dxLookup/)

[tags]lookup, group, group template, customize