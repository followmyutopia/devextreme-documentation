<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Specifies the function returning screen factor for width in pixels. e.g. function(width) { return width > 1000 ? 'lg' : 'sm' }<!--/d-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the function returning the screen factor depending on the screen width.
<!--/shortDescription-->

<!--fullDescription-->
The function passed to this option should take on the screen width as a parameter and return a string containing the appropriate screen factor.

    <!--JavaScript-->
    var formOptions: {
        screenByWidth: function(width) {
            if( width < 768 )
                return 'xs';
            if( width < 992 )
                return 'sm';
            if( width < 1200 )
                return 'md';
            return 'lg';
        }
    }
<!--/fullDescription-->