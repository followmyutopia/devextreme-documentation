<!--id-->dxPivotGrid.Options.dataFieldArea<!--/id-->
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
![DevExpress DevExtreme HTML5 PivotGrid](/Content/images/doc/19_2/DataGrid/PivotGrid_dataFieldArea.png)

#include common-ref-enum with {
    enum: "`PivotGridDataFieldArea`",
    values: "`Row` and `Column`"
}

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Pivot_Grid/LayoutCustomization/jQuery/Light/"
}
<!--/fullDescription-->