<!--id-->dxPivotGridFieldChooser<!--/id-->
===========================================================================
<!--module-->ui/pivot_grid_field_chooser<!--/module-->
<!--export-->default<!--/export-->
<!--inherits-->Widget<!--/inherits-->
<!--lib-->
dx.web.js, dx.viz-web.js, dx.all.js
<!--/lib-->
===========================================================================

<!--shortDescription-->
A complementary widget for the [PivotGrid](/Documentation/ApiReference/UI_Widgets/dxPivotGrid/) that allows you to manage data displayed in the **PivotGrid**. The field chooser is already integrated in the **PivotGrid** and can be invoked using the context menu. If you need to continuously display the field chooser near the **PivotGrid** widget, use the **PivotGridFieldChooser** widget.
<!--/shortDescription-->

<!--fullDescription-->
Both the **PivotGridFieldChooser** and the **PivotGrid** must be bound to one and the same instance of the [PivotGridDataSource](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/). Create the **PivotGridDataSource** individually and then assign it to both widgets as shown in the code above.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/datagridpivotgridpivotgridfieldchooser"
}

#####See Also#####
#include common-link-setupdevextreme
#include common-link-configurewidget
<!--/fullDescription-->