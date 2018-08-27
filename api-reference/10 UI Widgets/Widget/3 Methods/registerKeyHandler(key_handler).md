===================================================================
===================================================================

<!--shortDescription-->
Registers a handler to be executed when a user presses a specific key.
<!--/shortDescription-->

<!--paramName1-->key<!--/paramName1-->
<!--paramType1-->String<!--/paramType1-->
<!--paramDescription1-->
A key.
<!--/paramDescription1-->

<!--paramName2-->handler<!--/paramName2-->
<!--paramType2-->function()<!--/paramType2-->
<!--paramDescription2-->
A handler. Accepts the **keydown** event as the argument. It is a [dxEvent](/Documentation/ApiReference/Common/Object_Structures/dxEvent/) or a [jQuery.Event](http://api.jquery.com/category/events/event-object/) when you use jQuery.
<!--/paramDescription2-->

<!--fullDescription-->
The **key** argument accepts one of the following values:

- *"backspace"*  
- *"tab"*  
- *"enter"*  
- *"escape"*  
- *"pageUp"*  
- *"pageDown"*  
- *"end"*  
- *"home"*  
- *"leftArrow"*  
- *"upArrow"*  
- *"rightArrow"*  
- *"downArrow"*  
- *"del"*  
- *"space"*  
- *"F"*  
- *"A"*  
- *"asterisk"*  
- *"minus"*

A custom handler for a key cancels the default handler for this key.

#####See Also#####
#include common-link-callmethods
<!--/fullDescription-->