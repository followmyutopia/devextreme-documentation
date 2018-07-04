===========================================================================
<!--type-->String | Node | jQuery | Window<!--/type-->
===========================================================================

<!--shortDescription-->
The target element that the widget is positioned against.
<!--/shortDescription-->

<!--fullDescription-->
The option accepts one of the following values.

- A [native CSS selector](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Selectors), or a [jQuery selector](https://api.jquery.com/category/selectors/) if you use jQuery

        position: { of: '#targetElement' };

- A jQuery wrapper

        position: { of: $('#targetElement') };

- A DOM element

        position: { of: document.getElementById('#targetElement') };

- The [Window](https://developer.mozilla.org/en-US/docs/Web/API/Window) object

        position: { of: window };

- A [jQueryEvent](http://api.jquery.com/category/events/event-object/) or [dxEvent](/Documentation/ApiReference/Common/Object_Structures/dxEvent/) object.

 The widget is positioned against the **event.pageX** and **event.pageY** coordinates. In the following example, the [Popover](/Documentation/ApiReference/UI_Widgets/dxPopover/) widget is positioned against a clicked point on the "targetElement".

        $("#targetElement").click(function (event) {
            $("#popover").dxPopover("option", "position.of", event);
            // ...
        })
<!--/fullDescription-->