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

<!--returnType-->Promise<void><!--/returnType-->
<!--returnDescription-->
A Promise that is resolved after animation is completed. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery.
<!--/returnDescription-->

<!--fullDescription-->
If you execute element animation before the previous one is completed, the animation is passed to a queue and is executed after the current one finishes.
<!--/fullDescription-->