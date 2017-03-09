For minor customization of nodes, you can use the default item template. This template defines the appearance of a node depending on whether [specific fields](/Documentation/ApiReference/UI_Widgets/dxTreeView/Default_Item_Template/) are present or absent from the node's data object. For example, the following code adds an icon to each node.

    <!--JavaScript-->var hierarchicalData = [{
        id: '1',
        text: 'Fruits',
        icon: '/pics/fruits.ico',
        items: [
            { id: '1_1', text: 'Apples', icon: '/pics/fruits/apple.ico' },
            { id: '1_2', text: 'Oranges', icon: '/pics/fruits/orange.ico' }
        ]
    }, {
        id: '2',
        text: 'Vegetables',
        icon: '/pics/vegetables.ico',
        items: [
            { id: '2_1', text: 'Cucumbers', icon: '/pics/vegetables/cucumber.ico' },
            { id: '2_2', text: 'Tomatoes', icon: '/pics/vegetables/tomato.ico' }
        ]
    }];

    $(function() {
        $("#treeViewContainer").dxTreeView({
            dataSource: hierarchicalData
        });
    });

Using the default item template is the easiest way to customize an item, but it lacks flexibility. Instead, you can define a custom template. For AngularJS and Knockout apps, DevExtreme provides a markup component called [dxTemplate](/Documentation/ApiReference/UI_Widgets/Markup_Components/dxTemplate/). The following code gives a simple example of how you can use **dxTemplate** to customize nodes.

**AngularJS**

    <!--JavaScript-->angular.module('DemoApp', ['dx'])
        .controller('DemoController', function DemoController($scope) {
            $scope.hierarchicalData = [{
                id: '1',
                text: 'Fruits',
                items: [
                    { id: '1_1', text: 'Apples' },
                    { id: '1_2', text: 'Oranges' }
                ]
            }, {
                id: '2',
                text: 'Vegetables',
                items: [
                    { id: '2_1', text: 'Cucumbers' },
                    { id: '2_2', text: 'Tomatoes' }
                ]
            }];
        });

<!---->    

    <!--HTML--><div ng-controller="DemoController">
        <div dx-tree-view="{
            dataSource: hierarchicalData,
            itemTemplate: 'itemTemplate'
        }" dx-item-alias="itemObj">
            <div data-options="dxTemplate: { name: 'itemTemplate' }">
                <i>{{ itemObj.text }}</i>
            </div>
        </div>
    </div>


[note] The `dx-item-alias` directive specifies the variable that is used to access the item object.

**Knockout**

    <!--JavaScript-->var viewModel = {
        hierarchicalData: [{
            id: '1',
            text: 'Fruits',
            items: [
                { id: '1_1', text: 'Apples' },
                { id: '1_2', text: 'Oranges' }
            ]
        }, {
            id: '2',
            text: 'Vegetables',
            items: [
                { id: '2_1', text: 'Cucumbers' },
                { id: '2_2', text: 'Tomatoes' }
            ]
        }]
    };

    ko.applyBindings(viewModel);

<!---->

    <!--HTML--><div data-bind="dxTreeView: {
        dataSource: hierarchicalData,
        itemTemplate: 'itemTemplate'
    }">
        <div data-options="dxTemplate: { name: 'itemTemplate' } ">
            <i data-bind="text: text"></i>
        </div>
    </div>

If you use jQuery alone, combine the HTML markup manually with jQuery [DOM manipulation methods](http://api.jquery.com/category/manipulation/). To apply the markup to the **TreeView** nodes, use the [itemTemplate](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#itemTemplate) callback function.

    <!--JavaScript-->$(function() {
        $("#treeViewContainer").dxTreeView({
            dataSource: treeViewData,
            itemTemplate: function (itemData, itemIndex, itemElement) {
                itemElement.append("<i>" + itemData.text + "</i>");
            }
        });
    });

You can also customize an individual node. For this purpose, declare a template for this node as a script and pass its `id` to the [template](/Documentation/ApiReference/UI_Widgets/dxTreeView/Default_Item_Template/#template) option.

    <!--HTML-->
    <script id="individualTemplate" type="text/html">
        <!-- ... -->
    </script>

<!---->

    <!--JavaScript-->var treeViewData = [{
        id: '1',
        text: 'Fruits',
        items: [
            { id: '1_1', text: 'Apples', template: $("#individualItemTemplate") },
            { id: '1_2', text: 'Oranges' }
        ]
    },
    // ...
    ];

In addition, you can use a 3rd-party template engine to customize widget appearance. For more information, see the [Use an Alternative Template Engine](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/#Use_an_Alternative_Template_Engine) article.

#####See Also#####
- [Customize Widget Element Appearance](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/#Customize_Widget_Element_Appearance)
- [Customize Widget Element Appearance - MVVM Approach](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/)
- [Icon Library](/Documentation/Guide/Themes/Icon_Library/)
- [TreeView Demos](https://js.devexpress.com/Demos/WidgetsGallery/Demo/Tree_View/ItemSelectionAndCustomization/jQuery/Light/)
- [TreeView API Reference](/Documentation/ApiReference/UI_Widgets/dxTreeView/)

[tags]treeview, tree view, item appearance, customize, templates, template, custom template, default item, default template
