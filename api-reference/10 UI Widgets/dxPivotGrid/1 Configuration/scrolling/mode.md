===========================================================================
<!--default-->'standard'<!--/default-->
<!--acceptValues-->'standard' | 'virtual'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the scrolling mode.
<!--/shortDescription-->

<!--fullDescription-->
There are two different scrolling modes.

- **Standard Mode**        
    In a standard scrolling mode, the grid loads the entire summary data at once. This operation may affect grid performance as the loaded data may contain many summary values.

- **Virtual Mode**        
    In a virtual scrolling mode, the grid loads a summary value at runtime when it gets into a field of vision. Once a summary cell is out of the field of vision, it is removed from the grid. This behavior allows an end-user to scroll through large amounts of grid records without notable lags.      
    
#include common-ref-enum with {
    enum: "`PivotGridScrollingMode`",
    values: "`Standard` and `Virtual`"
}

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/PivotGrid/VirtualScrolling/jQuery/Light/"
}
<!--/fullDescription-->