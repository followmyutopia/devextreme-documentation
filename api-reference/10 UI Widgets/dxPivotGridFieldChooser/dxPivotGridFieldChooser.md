===========================================================================
<!--module-->ui/pivot_grid_field_chooser<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->..\Widget\Widget.md<!--/inherits-->
<!--lib-->
dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
A complementary widget for the [PivotGrid](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/) that allows you to manage data displayed in the **PivotGrid**. The field chooser is already integrated in the **PivotGrid** and can be invoked using the context menu. If you need to continuously display the field chooser near the **PivotGrid** widget, use the **PivotGridFieldChooser** widget.
<!--/shortDescription-->

<!--fullDescription-->
#include common-ref-roottopic-introduction with { }

---
#####[**jQuery**](/Documentation/Guide/Getting_Started/Widget_Basics_-_jQuery/Create_and_Configure_a_Widget/)  

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

#####[**Angular**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Angular/Create_and_Configure_a_Widget/)  

    <!--HTML-->
    <dx-pivot-grid-field-chooser [dataSource]="pivotGridDataSource"></dx-pivot-grid-field-chooser>
    <dx-pivot-grid [dataSource]="pivotGridDataSource"></dx-pivot-grid>

    <!--TypeScript-->
    export class AppComponent {
        pivotGridDataSource = new DevExpress.data.PivotGridDataSource({
            // ...   
        });
    }

#####[**AngularJS**](/Documentation/Guide/Getting_Started/Widget_Basics_-_AngularJS/Create_and_Configure_a_Widget/)  

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

#####[**Knockout**](/Documentation/Guide/Getting_Started/Widget_Basics_-_Knockout/Create_and_Configure_a_Widget/)  

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

---

Both the **PivotGridFieldChooser** and the **PivotGrid** must be bound to one and the same instance of the [PivotGridDataSource](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/). Create the **PivotGridDataSource** individually and then assign it to both widgets as shown in the code above.

 

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/datagridpivotgridpivotgridfieldchooser"
}

<!--/fullDescription-->