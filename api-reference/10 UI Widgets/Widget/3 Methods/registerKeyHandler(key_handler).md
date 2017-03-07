<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
Register key handler for widget.
<!--/d-->
<!--p1d-->Specify key name or code.<!--/p1d-->
<!--p2d-->Key down event handler.<!--/p2d-->
===================================================================
===================================================================

<!--shortDescription-->
Registers a handler when a specified key is pressed.
<!--/shortDescription-->

<!--paramName1-->key<!--/paramName1-->
<!--paramType1-->string<!--/paramType1-->
<!--paramDescription1-->
Specifies the key for which to register a handler.
<!--/paramDescription1-->

<!--paramName2-->handler<!--/paramName2-->
<!--paramType2-->function<!--/paramType2-->
<!--paramDescription2-->
A handler function.
<!--/paramDescription2-->

<!--fullDescription-->
The **handler** function is called when the specified **key** is pressed if the widget is focused.

The **key** argument accepts the following values.

- "backspace"  
- "tab"  
- "enter"  
- "escape"  
- "pageUp"  
- "pageDown"  
- "end"  
- "home"  
- "leftArrow"  
- "upArrow"  
- "rightArrow"  
- "downArrow"  
- "del"  
- "space"  
- "F"  
- "A"  
- "asterisk"  
- "minus"

[note]If you specify a custom handler for a key, the default handler for this key is canceled.
<!--/fullDescription-->