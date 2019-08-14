<!--id-->ui.dialog.alert(messageHtml,title)<!--/id-->
===================================================================
<!--module-->ui/dialog<!--/module-->
<!--export-->alert<!--/export-->
===================================================================

<!--shortDescription-->
Displays an alert dialog with a message and **OK** button.
<!--/shortDescription-->

<!--paramName1-->messageHtml<!--/paramName1-->
<!--paramType1-->String<!--/paramType1-->
<!--paramDescription1-->
The dialog's message. Can contain HTML elements.
<!--/paramDescription1-->

<!--paramName2-->title<!--/paramName2-->
<!--paramType2-->String<!--/paramType2-->
<!--paramDescription2-->
The dialog's title.
<!--/paramDescription2-->

<!--returnType-->Promise<void><!--/returnType-->
<!--returnDescription-->
A Promise that is resolved after a user clicks the button. It is a <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise" target="_blank">native Promise</a> or a <a href="http://api.jquery.com/Types/#Promise" target="_blank">jQuery.Promise</a> when you use jQuery.
<!--/returnDescription-->

<!--fullDescription-->

<!--/fullDescription-->