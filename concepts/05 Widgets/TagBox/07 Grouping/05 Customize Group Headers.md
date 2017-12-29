By default, group headers display text of the **key** field in a bold font. You can define a custom template for the group headers if you need to. For AngularJS and Knockout apps, DevExtreme provides a markup component called [dxTemplate](/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/). The following code shows how you can use **dxTemplate** to define a template for group headers.

---
#####**AngularJS**

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-tag-box="{
            dataSource: tagBoxDataSource,
            grouped: true,
            groupTemplate: 'group',
            displayExpr: 'name',
            valueExpr: 'count'
        }" dx-item-alias="itemObj">
            <div data-options="dxTemplate: { name: 'group' }">
                <p>{{ itemObj.key }} | Count: {{ itemObj.overallCount }}</p>
            </div>
        </div>
    </div>

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function ($scope) {
            var fruitsVegetables = [{
                key: "Fruits",
                items: [
                    { name: "Apples", count: 10 },
                    { name: "Oranges", count: 12 },
                    { name: "Lemons", count: 15 }
                ]
            }, {
                key: "Vegetables",
                items: [
                    { name: "Potatoes", count: 5 },
                    { name: "Tomatoes", count: 9 },
                    { name: "Turnips", count: 8 }
                ]
            }];
            $scope.tagBoxDataSource = new DevExpress.data.DataSource({
                store: fruitsVegetables,
                map: function(groupedItem) {
                    var overallCount = 0;
                    groupedItem.items.forEach(function(item) {
                        overallCount += item.count;
                    })
                    return $.extend(groupedItem, { overallCount: overallCount })
                }
            });
        });

[note] The `dx-item-alias` directive specifies the variable that is used to access the item object.

#####**Knockout**

    <!--HTML-->
    <div data-bind="dxTagBox: {
        dataSource: tagBoxDataSource,
        grouped: true,
        groupTemplate: 'group',
        displayExpr: 'name',
        valueExpr: 'count'
    }">
        <div data-options="dxTemplate: { name: 'group' }">
            <p data-bind="text: key + ' | Count: ' + overallCount"></p>
        </div>
    </div>

    <!--JavaScript-->var fruitsVegetables = [{
        // ...
        // omitted for brevity
        // see the AngularJS code
    }];

    var viewModel = {
        tagBoxDataSource: new DevExpress.data.DataSource({
            store: fruitsVegetables,
            map: function(groupedItem) {
                var overallCount = 0;
                groupedItem.items.forEach(function(item) {
                    overallCount += item.count;
                })
                return $.extend(groupedItem, { overallCount: overallCount })
            }
        })
    };

    ko.applyBindings(viewModel);

---

If you use jQuery alone, combine HTML markup for group headers manually with jQuery [DOM manipulation methods](http://api.jquery.com/category/manipulation/). To apply this markup, use the [groupTemplate](/Documentation/ApiReference/UI_Widgets/dxTagBox/Configuration/#groupTemplate) callback function as shown in the following code.

    <!--JavaScript-->var fruitsVegetables = [{
        // ...
        // omitted for brevity
        // see the AngularJS code
    }];

    $(function() {
        $("#tagBoxContainer").dxTagBox({
            dataSource: new DevExpress.data.DataSource({
                store: fruitsVegetables,
                map: function(groupedItem) {
                    var overallCount = 0;
                    groupedItem.items.forEach(function(item) {
                        overallCount += item.count;
                    });
                    return $.extend(groupedItem, { overallCount: overallCount })
                }
            }),
            grouped: true,
            groupTemplate: function(groupData, _, groupElement) {
                groupElement.append(
                    $("<p>").text(groupData.key + " | Count: " + groupData.overallCount)
                )
            },
            displayExpr: 'name',
            valueExpr: 'count'
        });
    });

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Tag_Box/GroupedItems/jQuery/Light/"
}

In addition, you can use a 3rd-party template engine to perform the needed customizations. For more information, see the [3rd-Party Template Engines](/Documentation/Guide/Widgets/Common/Templates/#3rd-Party_Template_Engines) article.

#####See Also#####
- [TagBox - Customize Item Appearance](/Documentation/Guide/Widgets/TagBox/Customize_Item_Appearance/)
- [TagBox API Reference](/Documentation/ApiReference/UI_Widgets/dxTagBox/)

[tags]tagBox, group headers appearance, customize, templates, template
