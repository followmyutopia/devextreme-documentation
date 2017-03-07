<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->Target element click on that invokes context menu<!--/d-->
===========================================================================
<!--default-->false<!--/default-->
<!--type-->string | Node | jQuery<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the element used to invoke the context menu.
<!--/shortDescription-->

<!--fullDescription-->
If this option is defined, the context menu is invoked on the specified element click.

This option can take on one of the following values.

    <!--JavaScript-->
    //CSS selector
    invokingElement: '#myElement';
 
    //jQuery wrapper
    invokingElement: $('#myElement');
 
    //DOM element
    invokingElement: document.getElementById('myElement');

The option makes sense only if the [enabled](/Documentation/ApiReference/UI_Widgets/dxContextMenu/Configuration/alternativeInvocationMode/#enabled) option is set to *true*.


<!--/fullDescription-->