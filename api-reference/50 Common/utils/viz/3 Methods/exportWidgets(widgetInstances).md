===================================================================
<!--module-->viz/export<!--/module-->
<!--export-->exportWidgets<!--/export-->
===================================================================

<!--shortDescription-->
Exports one or several widgets to PNG.
<!--/shortDescription-->

<!--paramName1-->widgetInstances<!--/paramName1-->
<!--paramType1-->Array<Array<DOMComponent>><!--/paramType1-->
<!--paramDescription1-->
An array with the following format:

    [
        [ widgetInstance0_1, widgetInstance0_2, ..., widgetInstance0_N ],
        [ widgetInstance1_1, widgetInstance1_2, ..., widgetInstance1_M ],
        ...
        [ widgetInstanceP_1, widgetInstanceP_2, ..., widgetInstanceP_R ]
    ]

Each nested array contains widget instances that should be in the same row in the exported document.
<!--/paramDescription1-->

<!--fullDescription-->
#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/Charts/ExportSeveralCharts/jQuery/Light/"
}

#####See Also#####
- [exportTo(fileName, format)](/Documentation/ApiReference/Data_Visualization_Widgets/dxChart/Methods/#exportTofileName_format)
<!--/fullDescription-->