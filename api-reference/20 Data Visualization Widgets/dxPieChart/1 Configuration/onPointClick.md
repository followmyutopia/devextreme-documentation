===========================================================================
<!--handmade--><!--/handmade-->
<!--merge--><!--/merge-->
===========================================================================

<!--fullDescription-->
When implementing a handling function, use the object passed to it as its parameter. Among the fields of this object, you can find the clicked series point. To learn about point members, refer to the description of the [Point](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Chart_Elements/Point/) object. To get the [parent series](/Documentation/ApiReference/Data_Visualization_Widgets/dxPieChart/Chart_Elements/Series/) of the point, use the **target.series** field of the object passed to the handler as its parameter.

Alternatively, you can navigate to a specific URL when the **pointClick** event fires. For this purpose, assign this URL to the **onPointClick** option.

To learn more about how to handle click operations, and to see an example, refer to the [Click Handling](/Documentation/Guide/Widgets/Common/Data_Visualization_Widgets/Charts_-_End-User_Interaction/Click_Handling) topic.

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/#demo/chartschartsdoughnutseriesdoughnutwithselection/"
}

<!--/fullDescription-->