===========================================================================
<!--default-->null<!--/default-->
<!--type-->function()<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the function returning the [size qualifier](/Documentation/Guide/Widgets/ResponsiveBox/Size_Qualifiers/) depending on the screen's width.
<!--/shortDescription-->

<!--fullDescription-->
The function passed to this option accepts the screen's width as a parameter and should return a string containing the needed size qualifier.

    <!--JavaScript-->
    var responsiveBoxOptions: {
        screenByWidth: function(width) {
            if( width < 768 )
                return "xs";
            if( width < 992 )
                return "sm";
            if( width < 1200 )
                return "md";
            return "lg";
        }
    }
<!--/fullDescription-->