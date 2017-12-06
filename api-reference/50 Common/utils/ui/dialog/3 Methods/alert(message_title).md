===================================================================
<!--module-->ui/dialog<!--/module-->
<!--export-->alert<!--/export-->
===================================================================

<!--shortDescription-->
Creates an alert dialog message containing a single "OK" button.
<!--/shortDescription-->

<!--paramName1-->message<!--/paramName1-->
<!--paramType1-->string<!--/paramType1-->
<!--paramDescription1-->
A string value representing the dialog message.
<!--/paramDescription1-->

<!--paramName2-->title<!--/paramName2-->
<!--paramType2-->string<!--/paramType2-->
<!--paramDescription2-->
A string value representing the dialog title.
<!--/paramDescription2-->

<!--returnType-->Promise<void><!--/returnType-->
<!--returnDescription-->
A Promise that is resolved with the dialog result data when the dialog is closed. It is a [native Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) or a [jQuery.Promise](http://api.jquery.com/Types/#Promise) when you use jQuery.
<!--/returnDescription-->

<!--fullDescription-->
The "alert" dialog is a notification dialog consisting of an alert message and a single button that closes the dialog.

Pay attention to the recommendations given for using modality in the [Modal Contexts](https://developer.apple.com/library/ios/documentation/userexperience/conceptual/mobilehig/Modal.html#//apple_ref/doc/uid/TP40006556-CH64-SW1) article. In certain scenarios it may be better to display a [modal view](/Documentation/ApiReference/SPA_Framework/Markup_Components/dxView/Configuration/#modal) instead.
<!--/fullDescription-->