===========================================================================
<!--default-->'standard'<!--/default-->
<!--acceptValues-->'standard' | 'virtual'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the rendering mode for loaded rows. 
<!--/shortDescription-->

<!--fullDescription-->
Unlike the [mode]({basewidgetpath}/Configuration/scrolling/#mode) option, which defines when to load data for rows, this option defines when to render them. The following rendering modes are available: 

- *"standard"*        
Renders all the loaded rows at once.

- *"virtual"*     
Renders only those rows that get into the viewport. Use this mode if the [pageSize]({basewidgetpath}/Configuration/paging/#pageSize) is large.

#include common-ref-enum with {
    enum: "`GridRowRenderingMode`",
    values: "`Standard` and `Virtual`"
}
<!--/fullDescription-->