<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
===========================================================================
<!--default-->'text'<!--/default-->
<!--acceptValues-->'text' | 'email' | 'search' | 'tel' | 'url' | 'password'<!--/acceptValues-->
<!--type-->string<!--/type-->
===========================================================================

<!--shortDescription-->
The "mode" attribute value of the actual HTML input element representing the text box.
<!--/shortDescription-->

<!--fullDescription-->
The value of this option affects the set of keyboard buttons shown on the mobile device when the widget gets focus. In addition, the following mode values add visual features to the widget:

 - 'search' - the text box contains the 'X' button, which clears the text box contents
 - 'password' - the text box shows a password character instead of the actual characters typed

When using the widget as an [ASP.NET MVC Control](/Documentation/Guide/ASP.NET_MVC_Controls/Fundamentals/), specify this option using the `TextBoxMode` enum. This enum accepts the following values: `Text`, `Email`, `Search`, `Tel`, `Url` and `Password`.
<!--/fullDescription-->