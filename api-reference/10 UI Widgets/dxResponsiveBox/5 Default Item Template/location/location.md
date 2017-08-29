<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--type-->Object | Array<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the item location and size against the widget grid.
<!--/shortDescription-->

<!--fullDescription-->
If you need to specify different locations for [different screens](/Documentation/Guide/Widgets/ResponsiveBox/Size_Qualifiers/), pass an array of objects with the same structure to the **location** field.

    <!--HTML--><div data-options="dxItem: { 
        location: [
            { row: 0, col: 0, colspan: 3, screen: 'lg'},
            { row: 0, col: 0, colspan: 2, screen: 'xs sm md'}
        ]
    }"> <p>Header</p> </div>
<!--/fullDescription-->