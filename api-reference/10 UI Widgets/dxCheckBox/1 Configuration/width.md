<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->The width of the widget.<!--/d-->
===========================================================================
<!--default-->undefined<!--/default-->
<!--type-->numeric|string|function<!--/type-->
<!--frd-->The widget width.<!--/frd-->
===========================================================================

<!--shortDescription-->
Specifies the width of the widget container.
<!--/shortDescription-->

<!--fullDescription-->
The option can hold a value of the following types.

- number  
The width of the widget in pixels

- string  
A CSS measurement of the widget width (e.g., "55px", "80%", "auto" and "inherit")

- function  
A function returning the widget width (e.g., width: function(){ return baseWidth - 10 + "%"; })

[note]The option affects only the size of the widget container. To specify the size of a check box icon, provide the appropriate CSS rules.

    <!--CSS-->
    #checkBoxContainer .dx-checkbox-icon{
        height: 20px;
        width: 20px;
    }


<!--/fullDescription-->
<!--typeFunctionReturnType-->number|string<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The widget width.
<!--/typeFunctionReturnDescription-->
<!--handmade-->
<!--/handmade-->