<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->false<!--/default-->
<!--type-->boolean | function<!--/type-->
===========================================================================

<!--shortDescription-->
A Boolean value specifying whether or not the widget is closed if a user clicks outside of the overlapping window.
<!--/shortDescription-->

<!--fullDescription-->
The function passed to this option enables you to specify a custom condition for widget closing. For instance, you can prevent closing until a user clicks a certain element.

    <!--JavaScript-->
    var widgetOptions = {
        // ...
        closeOnOutsideClick: function(e) {
            return e.target === $("#someElement").get()[0];
        }
    }


<!--/fullDescription-->
<!--typeFunctionParamName1-->event<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->jQueryEvent<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Holds the jQuery event that caused widget closing.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->Boolean<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
The required option value.
<!--/typeFunctionReturnDescription-->