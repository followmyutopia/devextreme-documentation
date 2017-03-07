<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->A string specifying the type of an easing function used for animation.<!--/d-->
===========================================================================
<!--default-->'ease'<!--/default-->
<!--type-->string<!--/type-->
===========================================================================

<!--shortDescription-->
A string specifying the easing function for animation.
<!--/shortDescription-->

<!--fullDescription-->
DevExtreme supports predefined jQuery easing (*"linear"* and *"swing"*) and CSS transition timing functions (*"linear"*, *"ease"*, *"ease-in"*, *"ease-out"*, *"ease-in-out"*, *"cubic-besier(0,1,1,0)"*, etc.). For more information on CSS transition timing functions, see [CSS3 transition-timing-function Property](http://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp). You can also register a custom easing function using jQuery and pass its name to the **easing** option.

    <!--JavaScript-->
    $.easing.customEasing = function(t, millisecondsSince, startValue, endValue, totalDuration) {
        if (t < 0.5) {
            return t * 4;
        } else {
            return -2 * t + 3;
        }
    };

    var animationOptions = {
        show: {
            duration: 2000,
            type: "slide",
            from: { left: -300 },
            easing: "customEasing"
        }
    };
<!--/fullDescription-->