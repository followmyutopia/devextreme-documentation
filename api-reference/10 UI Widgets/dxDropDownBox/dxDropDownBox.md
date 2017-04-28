<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--module--><a href="/Documentation/17_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_drop_down_box">ui/drop_down_box</a><!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\DataExpressionMixin\DataExpressionMixin.md,..\dxDropDownEditor\dxDropDownEditor.md<!--/inherits-->
===========================================================================

<!--shortDescription-->
The **DropDownBox** widget consists of a text field, which displays the current value, and a drop-down field, which can contain any UI element.
<!--/shortDescription-->

<!--fullDescription-->
You can create the widget using one of the following approaches.

- [**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

        <!--JavaScript-->
        $(function () {
            var fruits = ["Apples", "Oranges", "Lemons", "Pears", "Pineapples"];
            $("#dropDownBox").dxDropDownBox({
                value: fruits[0],
                dataSource: fruits,
                contentTemplate: function(e){
                    var $list = $("<div>").dxList({
                        dataSource: e.component.option("dataSource") 
                    });
                    return $list;
                }
            });
        });

        <!--HTML-->
        <div id="dropDownBox"></div>

- [**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

        <!--HTML--><div ng-controller="DemoController">
            <div dx-drop-down-box="{
                value: fruits[0],
                dataSource: fruits
            }">
                <div data-options="dxTemplate: { name: 'content' }">
                    <div dx-list="{
                        dataSource: fruits
                    }"></div>
                </div>
            </div>
        </div>

        <!--JavaScript-->
        angular.module('DemoApp', ['dx'])
            .controller('DemoController', function ($scope) {
                $scope.fruits = ["Apples", "Oranges", "Lemons", "Pears", "Pineapples"];
            });

- [**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

        <!--HTML-->
        <div data-bind="dxDropDownBox: {
            value: fruits[0],
            dataSource: fruits
        }">
            <div data-options="dxTemplate: { name: 'content' }">
                <div data-bind="dxList: {
                    dataSource: fruits
                }"></div>
            </div>
        </div>

        <!--JavaScript-->
        var viewModel = {
            fruits: ["Apples", "Oranges", "Lemons", "Pears", "Pineapples"]
        };
        ko.applyBindings(viewModel);

Note that DevExtreme widgets require linking the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/Demo/Drop_Down_Box/SingleSelection/jQuery/Light/" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>
<a href="https://www.youtube.com/watch?v=j578mQfW99o&list=PL8h4jt35t1wjGvgflbHEH_e3b23AA30-z" class="button orange small fix-width-155" target="_blank">Watch Video</a>


<!--/fullDescription-->