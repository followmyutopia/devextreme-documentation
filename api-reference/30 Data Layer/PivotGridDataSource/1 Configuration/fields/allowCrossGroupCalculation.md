===========================================================================
<!--default-->false<!--/default-->
<!--type-->Boolean<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether to take neighboring groups' summary values into account when calculating a [running total](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#runningTotal) and [absolute or percent variation](/Documentation/ApiReference/Data_Layer/PivotGridDataSource/Configuration/fields/#summaryDisplayMode).
<!--/shortDescription-->

<!--fullDescription-->
For example, a pivot grid row contains the following summary values split into three groups:

    [ [1, 1, 1], [2, 2, 2], [3, 3, 3] ]

This row can be displayed differently depending on the **allowCrossGroupCalculation** option's value, provided that the running total is calculated by rows:

    [ [1, 2, 3], [2, 4, 6], [3, 6, 9] ]    // allowCrossGroupCalculation: false
    [ [1, 2, 3], [5, 7, 9], [12, 15, 18] ] // allowCrossGroupCalculation: true

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/PivotGrid/RunningTotals/jQuery/Light/"
}
<!--/fullDescription-->