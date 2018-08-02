===========================================================================
<!--default-->'solid'<!--/default-->
<!--acceptValues-->'dash' | 'dot' | 'longDash' | 'solid'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the border's dash style in the legend.
<!--/shortDescription-->

<!--fullDescription-->
The following values are available:

* **solid**   
Displays a solid, continuous line.
* **longDash**   
Displays a border using long dashes.
* **dash**   
Displays a border using dashes.
* **dot**    
Displays a border using dots.
* **Any combination of 'longDash', 'dash' and 'dot'**   
Displays a border by repeating the specified combination. For instance, 'dashdotdash'.

#include common-ref-enum with {
    enum: "`DashStyle`",
    values: "`Solid`, `LongDash`, `Dash`, and `Dot`"
}
<!--/fullDescription-->