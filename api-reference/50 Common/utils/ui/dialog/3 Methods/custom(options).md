===================================================================
<!--module-->ui/dialog<!--/module-->
<!--export-->custom<!--/export-->
===================================================================

<!--shortDescription-->
Creates a custom dialog using the options specified by the passed configuration object.
<!--/shortDescription-->

<!--paramName1-->options<!--/paramName1-->
<!--paramType1-->Object<!--/paramType1-->
<!--paramDescription1-->
An object defining options for the dialog.
<!--/paramDescription1-->
<!--paramName1_field1-->title<!--/paramName1_field1-->
<!--paramType1_field1-->String<!--/paramType1_field1-->
<!--paramDescription1_field1-->
Specifies the dialog's title.
<!--/paramDescription1_field1-->
<!--paramName1_field2-->message<!--/paramName1_field2-->
<!--paramType1_field2-->String<!--/paramType1_field2-->
<!--paramDescription1_field2-->
Specifies the message displayed by the dialog.
<!--/paramDescription1_field2-->
<!--paramName1_field3-->buttons<!--/paramName1_field3-->
<!--paramType1_field3-->Array<Object><!--/paramType1_field3-->
<!--paramDescription1_field3-->
Each item in this array represents options for a button to be displayed in the dialog.
<!--/paramDescription1_field3-->

<!--returnType-->Object<!--/returnType-->
<!--returnDescription-->
An object representing the required dialog.
<!--/returnDescription-->

<!--fullDescription-->
To create a custom dialog (with a custom set of buttons), call the **DevExpress.ui.dialog.custom(dialogOptions)** method. Specify configuration options for the dialog using the fields of the object passed as a parameter.

Unlike the [alert](/Documentation/ApiReference/Common/Utils/ui/dialog/Methods/#alertmessage_title) and [confirm](/Documentation/ApiReference/Common/Utils/ui/dialog/Methods/#confirmmessage_title) methods, the **custom** method does not display the dialog. Call the **show()** method of the created dialog instance to show the dialog.

    <!--JavaScript-->var showDialog = function () {
        var myDialog = new DevExpress.ui.dialog.custom(dialogOptions);
        myDialog.show();
    };

The **show()** method returns a Promise that is resolved with the dialog result. Use the following code to obtain the dialog result.

    <!--JavaScript-->var myDialog = DevExpress.ui.dialog.custom(dialogOptions);
    myDialog.show().done(function(dialogResult){
        alert(dialogResult);
    });

[note]The dialogResult parameter passes the object returned by the click event handler of the clicked dialog button.

Use the **hide()** method to close the dialog before any button is clicked. The following code displays a dialog, and hides it if no button is clicked within 5 seconds.

    <!--JavaScript-->var showDialog = function () {
        var myDialog = DevExpress.ui.dialog.custom({
            title: "Self hiding dialog",
            message: "This dialog will close after 5 seconds",
            buttons: [{ text: "Close now" }]
        });
        myDialog.show();
        setTimeout(function () { myDialog.hide(); }, 5000);
    }

Pay attention to the recommendations given for using modality in the [Modal Contexts](https://developer.apple.com/library/ios/documentation/userexperience/conceptual/mobilehig/Modal.html#//apple_ref/doc/uid/TP40006556-CH64-SW1) article. In certain scenarios it may be better to display a [modal view](/Documentation/ApiReference/SPA_Framework/Markup_Components/dxView/Configuration/#modal) instead.
<!--/fullDescription-->