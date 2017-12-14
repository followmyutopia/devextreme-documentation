===========================================================================
<!--default-->function() {return $(window).width() * 0.8 }<!--/default-->
<!--type-->Number | String | function()<!--/type-->
===========================================================================

<!--shortDescription-->
The widget width in pixels.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts a value of one of the following types.

- **Number**  
The width of the widget in pixels.

- **String**  
A CSS-accepted measurement of width. For example, `"55px"`, `"80%"`, `"auto"`, `"inherit"`.

- **Function**  
A function returning either of the above. For example:

        <!--JavaScript-->width: function() {
            return window.innerWidth / 1.5;
        }


<!--/fullDescription-->
<!--typeFunctionReturnType-->Number|String<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The widget width.
<!--/typeFunctionReturnDescription-->