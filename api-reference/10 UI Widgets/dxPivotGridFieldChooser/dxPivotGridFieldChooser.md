<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--module--><a href="/Documentation/17_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_pivot_grid_field_chooser">ui/pivot_grid_field_chooser</a><!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\Widget\Widget.md<!--/inherits-->
<!--lib-->
dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
A complementary widget for the [PivotGrid](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/) that allows you to manage data displayed in the **PivotGrid**.
<!--/shortDescription-->

<!--fullDescription-->
The field chooser is already integrated in the **PivotGrid** and can be invoked using the context menu. If you need to continuously display the field chooser near the **PivotGrid** widget, use the **PivotGridFieldChooser** widget.

You can add the **PivotGridFieldChooser** widget using one of the following approaches.

- [**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

        <!--JavaScript-->var pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
            // ...
        });
        $(function () {
            $("#fieldChooser").dxPivotGridFieldChooser({
                dataSource: pivotGridDataSource
            });
            $("#pivotGrid").dxPivotGrid({
                dataSource: pivotGridDataSource
            });
        });

        <!--HTML--><div id="fieldChooser"></div>
        <div id="pivotGrid"></div>

- [**Angular**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/)  

        <!--HTML-->
        <dx-pivot-grid-field-chooser [dataSource]="pivotGridDataSource"></dx-pivot-grid-field-chooser>
        <dx-pivot-grid [dataSource]="pivotGridDataSource"></dx-pivot-grid>

        <!--JavaScript-->
        export class AppComponent {
            pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
                // ...   
            });
        }

- [**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

        <!--HTML--><div ng-controller="DemoController">
            <div dx-pivot-grid-field-chooser="{
                dataSource: pivotGridDataSource
            }"></div>
            <div dx-pivot-grid="{
                dataSource: pivotGridDataSource
            }"></div>
        </div>

        <!--JavaScript-->angular.module('DemoApp', ['dx'])
            .controller("DemoController", function ($scope) {
                $scope.pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
                    // ...   
                });
            });

- [**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

        <!--HTML-->
        <div data-bind="dxPivotGridFieldChooser: {
            dataSource: pivotGridDataSource
        }"></div>
        <div data-bind="dxPivotGrid: {
            dataSource: pivotGridDataSource  
        }"></div>

        <!--JavaScript-->var viewModel = {
            pivotGridDataSource: new DevExpress.data.PivotGridDataSource({
                // ...
            })
        };
        ko.applyBindings(viewModel);

Both the **PivotGridFieldChooser** and the **PivotGrid** must be bound to one and the same instance of the [PivotGridDataSource](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/). Create the **PivotGridDataSource** individually and then assign it to both widgets as shown in the code above.

Note that DevExtreme widgets require you to link the jQuery library to your application. If you use the Knockout or AngularJS approach, the Knockout or AngularJS library is also required. For detailed information on linking these libraries to your project, refer to the topics in the [Installation](/Documentation/Guide/Getting_Started/Installation/Local_Scripts/) section.

<a href="http://js.devexpress.com/Demos/WidgetsGallery/#demo/datagridpivotgridpivotgridfieldchooser" class="button orange small fix-width-155" style="margin-right: 20px;" target="_blank">View Demo</a>

<!--/fullDescription-->