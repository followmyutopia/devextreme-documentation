<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->The width of the widget.<!--/d-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->number|string|function<!--/type-->
<!--frd-->The widget width.<!--/frd-->
===========================================================================

<!--shortDescription-->
Specifies the width of the widget.
<!--/shortDescription-->

<!--fullDescription-->
The option can hold a value of the following types.

- *numeric*  
The widget width in pixels.
- *string*  
A CSS measurement of the widget width (e.g., "55px", "80%", "auto" and "inherit").
- *function*  
The function returning the widget width. For example, see the following code. 

        <!--JavaScript-->width: function () { 
            return baseWidth - 10 + "%";
        }

[note]The widget has a minimum width that depends on the current theme. If the **width** option value is less than the minimum width, the widget width is set to the minimum value, ignoring the specified value. Below is a list of minimum calendar sizes depending on the current theme.

- Generic - 280x270
- Android - 290x260
- iOS 260x260
- Windows- 278x278


<!--/fullDescription-->
<!--typeFunctionReturnType-->number|string<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The widget width.
<!--/typeFunctionReturnDescription-->
<!--handmade-->
<!--/handmade-->