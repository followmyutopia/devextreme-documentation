===========================================================================
<!--default-->function() { return $(window).height() * 0.8 }<!--/default-->
<!--type-->Number | String | function()<!--/type-->
===========================================================================

<!--shortDescription-->
The height of the widget in pixels.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts a value of one of the following types.

- **Number**  
The height of the widget in pixels.

- **String**  
A CSS-accepted measurement of height. For example, `"55px"`, `"80%"`, `"auto"`, `"inherit"`.

- **Function**  
A function returning either of the above. For example:

        <!--JavaScript-->height: function() {
            return window.innerHeight / 1.5;
        }


<!--/fullDescription-->
<!--typeFunctionReturnType-->number|string<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The widget's height.
<!--/typeFunctionReturnDescription-->