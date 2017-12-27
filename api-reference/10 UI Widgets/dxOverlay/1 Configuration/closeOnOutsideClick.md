===========================================================================
<!--default-->false<!--/default-->
<!--type-->Boolean | function(event)<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies whether to close the widget if a user clicks outside it.
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
<!--typeFunctionParamType1-->event<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
The event that caused widget closing. It is a [dxEvent](/Documentation/ApiReference/Common/Object_Structures/dxEvent/) or a [jQuery.Event](http://api.jquery.com/Types/#Event) when you use jQuery.
<!--/typeFunctionParamDescription1-->

<!--typeFunctionReturnType-->Boolean<!--/typeFunctionReturnType-->
<!--typeFunctionReturnDescription-->
**true** if the widget should be closed; otherwise **false**.
<!--/typeFunctionReturnDescription-->