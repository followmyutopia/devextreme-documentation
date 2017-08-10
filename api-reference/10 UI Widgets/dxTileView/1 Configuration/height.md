<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->500<!--/default-->
<!--type-->number | string<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the widget's height.
<!--/shortDescription-->

<!--fullDescription-->
This option accepts a value of one of the following types.

- **Number**  
The height of the widget in pixels.

- **String**  
A CSS-accepted measurement of height. For example, `"55px"`, `"80%"`, `"inherit"`.

- **Function**  
A function returning either of the above. For example:

        <!--JavaScript-->height: function() {
            return window.innerHeight / 1.5;
        }

Note that the **height** option of the [TileView](/Documentation/ApiReference/UI_Widgets/dxTileView/) widget does not support the "auto" value.


<!--/fullDescription-->
<!--typeFunctionReturnType-->number|string<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The widget height.
<!--/typeFunctionReturnDescription-->