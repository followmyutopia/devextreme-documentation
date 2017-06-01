To filter **TreeView** nodes, assign a filtering string to the [searchValue](/Documentation/ApiReference/UI_Widgets/dxTreeView/Configuration/#searchValue) option. The following code shows an example of the **TreeView** widget whose nodes can be filtered using the [TextBox](/Documentation/Guide/Widgets/TextBox) widget.

---
##### jQuery

    <!--HTML--><div id="textBoxContainer"></div>
    <div id="treeViewContainer" style="display:block;"></div>

    <!--JavaScript-->var fruitsVegetables = [{
        name: 'Fruits',
        items: [
            { name: 'Apples' },
            { name: 'Oranges' }
        ]
    }, {
        name: 'Vegetables',
        items: [
            { name: 'Cucumbers' },
            { name: 'Tomatoes' }
        ]
    }];

    $(function() {
        $("#treeViewContainer").dxTreeView({
            dataSource: fruitsVegetables,
            keyExpr: 'name',
            displayExpr: 'name'
        });
        $("#textBoxContainer").dxTextBox({
            width: 300,
            mode: 'search',
            valueChangeEvent: 'keyup',
            onValueChanged: function (e) {
                $("#treeViewContainer").dxTreeView("option", "searchValue", e.value)
            }
        });
    });

##### AngularJS

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-text-box="{
            width: 300,
            mode: 'search',
            valueChangeEvent: 'keyup',
            bindingOptions: {
                value: 'filteringString'
            }
        }"></div>
        <div dx-tree-view="{
            dataSource: fruitsVegetables,
            keyExpr: 'name',
            displayExpr: 'name',
            bindingOptions: {
                searchValue: 'filteringString'
            }
        }" style="display:block;"></div>
    </div>

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function DemoController($scope) {
            $scope.filteringString = '';
            $scope.fruitsVegetables = [{
                name: 'Fruits',
                items: [
                    { name: 'Apples' },
                    { name: 'Oranges' }
                ]
            }, {
                name: 'Vegetables',
                items: [
                    { name: 'Cucumbers' },
                    { name: 'Tomatoes' }
                ]
            }];
        });

##### Knockout

    <!--HTML--><div data-bind="dxTextBox: {
        width: 300,
        mode: 'search',
        valueChangeEvent: 'keyup',
        value: filteringString
    }"></div>
    <div data-bind="dxTreeView: {
        dataSource: fruitsVegetables,
        keyExpr: 'name',
        displayExpr: 'name',
        searchValue: filteringString
    }" style="display:block;"></div>

    <!--JavaScript-->var viewModel = {
        filteringString: ko.observable(''),
        fruitsVegetables: [{
            name: 'Fruits',
            items: [
                { name: 'Apples' },
                { name: 'Oranges' }
            ]
        }, {
            name: 'Vegetables',
            items: [
                { name: 'Cucumbers' },
                { name: 'Tomatoes' }
            ]
        }]
    };

    ko.applyBindings(viewModel);

---

#####See Also#####
- [TreeView - Access a Node](/Documentation/Guide/Widgets/TreeView/Access_a_Node)
- [TreeView - Expand and Collapse Nodes](/Documentation/Guide/Widgets/TreeView/Expand_and_Collapse_Nodes)
- [TreeView - Select Nodes](/Documentation/Guide/Widgets/TreeView/Select_Nodes)
- [TreeView Demos](https://js.devexpress.com/Demos/WidgetsGallery/#demo/navigation-tree_view-hierarchical_data_structure)
- [TreeView API Reference](/Documentation/ApiReference/UI_Widgets/dxTreeView/)

[tags]treeview, tree view, filter, search, textbox, text box, searchValue