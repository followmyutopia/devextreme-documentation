The **DropDownBox** is a widget that consists of a text field, which displays the current value, and a drop-down field, which can contain any UI element.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/Demo/Drop_Down_Box/SingleSelection/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

The simplest widget configuration requires specifying a [dataSource](/Documentation/ApiReference/UI_Widgets/dxDropDownBox/Configuration/#dataSource), [value](/Documentation/ApiReference/UI_Widgets/dxDropDownBox/Configuration/#value) and [contentTemplate](/Documentation/ApiReference/UI_Widgets/dxDropDownBox/Configuration/#contentTemplate). The following code adds the **DropDownBox** to your page: 

**jQuery**

    <!--JavaScript-->
    $(function () {
        var fruits = ["Apples", "Oranges", "Lemons", "Pears", "Pineapples"];
        $("#dropDownBoxContainer").dxDropDownBox({
            value: fruits[0],
            dataSource: fruits,
            contentTemplate: function(e) {
                var $list = $("<div>").dxList({
                    dataSource: e.component.option("dataSource"),
                    selectionMode: "single",
                    onSelectionChanged: function(arg) {
                        e.component.option("value", arg.addedItems[0]);
                    } 
                });
                return $list;
            }
        });
    });

**AngularJS**

    <!--HTML-->
    <div ng-controller="DemoController">
        <div dx-drop-down-box="dropDownBoxOptions">
            <div data-options="dxTemplate: { name: 'content' }">
                <div dx-list="dropDownBoxOptions.list"></div>
            </div>
        </div>
    </div>

    <!--JavaScript-->
    angular.module('DemoApp', ['dx'])
        .controller('DemoController', function ($scope) {
            var fruits = ["Apples", "Oranges", "Lemons", "Pears", "Pineapples"];
            $scope.listBoxValue = fruits[0];
            $scope.dropDownBoxOptions = {
                dataSource: fruits,
                bindingOptions: {
                    value: 'listBoxValue'
                },
                list: {
                    dataSource: fruits,
                    selectionMode: "single",
                    onSelectionChanged: function(arg) {
                        $scope.listBoxValue = arg.addedItems[0];
                    } 
                }
            }
        });

**Knockout**

    <!--HTML-->
    <div data-bind="dxDropDownBox: dropDownBoxOptions">
        <div data-options="dxTemplate: { name: 'content' }">
            <div data-bind="dxList: dropDownBoxOptions.list"></div>
        </div>
    </div>

    <!--JavaScript-->
    var fruits = ["Apples", "Oranges", "Lemons", "Pears", "Pineapples"];
    var viewModel = {
        dropDownBoxOptions: {
            dataSource: fruits,
            value: ko.observable(fruits[0]),
            list: {
                dataSource: fruits,
                selectionMode: "single",
                onSelectionChanged: function(arg) {
                    viewModel.dropDownBoxOptions.value(arg.addedItems[0]);
                } 
            }
        }
    };
    ko.applyBindings(viewModel);

If your data is an array of objects, specify: 

- [valueExpr](/Documentation/ApiReference/UI_Widgets/dxDropDownBox/Configuration/#valueExpr)     
    The data field whose value is written into the [value](/Documentation/ApiReference/UI_Widgets/dxDropDownBox/Configuration/#value) option.
- [displayExpr](/Documentation/ApiReference/UI_Widgets/dxDropDownBox/Configuration/#displayExpr)     
    The data field whose value is displayed in the input field of the widget.

<!---->

**jQuery**

    <!--JavaScript-->
    $(function () {
        var customers = [{
            id: 1,
            companyName: "Premier Buy",
            city: "Dallas",
            phone: "(233)2123-11"
        },
        // ...
        ];
        $("#dropDownBoxContainer").dxDropDownBox({
            value: 3,
            valueExpr: "id",
            displayExpr: "companyName",
            dataSource: new DevExpress.data.ArrayStore({
                data: customers,
                key: "id",
            }),
            contentTemplate: function(e){
                var $dataGrid = $("<div>").dxDataGrid({
                    dataSource: e.component.option("dataSource"),
                    columns: ["companyName", "city", "phone"],
                    height: 265,
                    selection: { mode: "single" },
                    selectedRowKeys: [value],
                    onSelectionChanged: function(selectedItems){
                        var keys = selectedItems.selectedRowKeys,
                            hasSelection = keys.length;
                        e.component.option("value", hasSelection ? keys[0] : null); 
                    }
                });
                return $dataGrid;
            }
        });
    });

#####See Also#####
- [DropDownBox - Customize the Appearance](/Documentation/Guide/Widgets/DropDownBox/Customize_the_Appearance/)
- [Customize Widget Element Appearance](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance/#Customize_Widget_Element_Appearance/)
- [Customize Widget Element Appearance - MVVM Approach](/Documentation/Guide/Widgets/Common/UI_Widgets/Customize_Widget_Element_Appearance_-_MVVM_Approach/)
