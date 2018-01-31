===========================================================================
<!--default-->'column'<!--/default-->
<!--acceptValues-->'column' | 'row'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the area to which data field headers must belong.
<!--/shortDescription-->

<!--fullDescription-->
Data field headers appear only when more than one [data field](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#area) is [visible](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#visible). See the following image to spot the difference between the two settings of this option.
![DevExpress DevExtreme HTML5 PivotGrid](/Content/images/doc/18_1/DataGrid/PivotGrid_dataFieldArea.png)

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `PivotGridDataFieldArea` enum. This enum accepts the following values: `Row` and `Column`.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Pivot_Grid/LayoutCustomization/jQuery/Light/"
}
<!--/fullDescription-->