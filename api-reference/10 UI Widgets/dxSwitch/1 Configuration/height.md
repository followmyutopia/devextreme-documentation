===========================================================================
<!--handmade--><!--/handmade-->
<!--merge--><!--/merge-->
===========================================================================

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

[note]The option affects only the size of the switch wrapper element. To specify the size of another switch elements, provide the appropriate CSS rules.


<!--/fullDescription-->