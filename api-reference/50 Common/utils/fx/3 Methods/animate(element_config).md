<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===================================================================
===================================================================

<!--shortDescription-->
Animates the specified element.
<!--/shortDescription-->

<!--paramName1-->element<!--/paramName1-->
<!--paramType1-->Node<!--/paramType1-->
<!--paramDescription1-->
The element to animate.
<!--/paramDescription1-->

<!--paramName2-->config<!--/paramName2-->
<!--paramType2-->animationConfig<!--/paramType2-->
<!--paramDescription2-->
An object that defines element [animation options](/Documentation/ApiReference/Common/Object_Structures/animationConfig).
<!--/paramDescription2-->

<!--returnType-->Promise<!--/returnType-->
<!--returnDescription-->
A Promise that is resolved after animation is completed. It is a [jQuery.Promise](http://api.jquery.com/Types/#Promise) if the [useJQuery](/Documentation/ApiReference/Common/Object_Structures/globalConfig/#useJQuery) flag is enabled and a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) otherwise.
<!--/returnDescription-->

<!--fullDescription-->
If you execute element animation before the previous one is completed, the animation is passed to a queue and is executed after the current one finishes.
<!--/fullDescription-->