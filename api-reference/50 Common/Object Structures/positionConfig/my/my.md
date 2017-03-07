<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->The position on the positioned element to align with the target element.<!--/d-->
===========================================================================
<!--acceptValues-->'left' | 'right' | 'top' | 'bottom' | 'center' | 'left top' | 'left bottom' | 'right top' | 'right bottom'<!--/acceptValues-->
<!--type-->string | object<!--/type-->
===========================================================================

<!--shortDescription-->
The position of the widget to align against the target element.
<!--/shortDescription-->

<!--fullDescription-->
The **my** option can take on an object containing the **x** and **y** fields, which specify horizontal and vertical position specifier respectively, or a string value consisting of horizontal and vertical position specifiers separated by a space (e.g., "left top"). The default value for each position specifier is "center". If you assign the "left" value to this option, it will be converted to the "left center" value.

    <!--JavaScript-->
    position: { my: 'left' };
<!--/fullDescription-->