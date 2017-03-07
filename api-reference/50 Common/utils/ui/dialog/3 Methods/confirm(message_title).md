<!--**
/*-------------------------------------------
    Auto-generated file. Do not modify.
-------------------------------------------

**-->
<!--d-->
Creates confirm dialog. With 'Yes', 'No' buttons
<!--/d-->
<!--p1d-->Specifies the dialog message<!--/p1d-->
<!--p2d-->Specifies the dialog title<!--/p2d-->
<!--rd-->A Promise of jQuery Deferred object resolved when dialog is hiding and put the true if user press 'Yes'.<!--/rd-->
===================================================================
<!--module--><a href="/Documentation/16_1/Guide/Common/Modularity/#Common_Modularity_DevExtreme_Modules_Structure_ui_dialog">ui/dialog</a><!--/module-->
<!--export-->confirm<!--/export-->
===================================================================

<!--shortDescription-->
Creates a confirm dialog that contains "Yes" and "No" buttons.
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

<!--returnType-->Promise<!--/returnType-->
<!--returnDescription-->
A JQuery Deferred object whose resolve field contains a Boolean value specifying whether the user has clicked the "Yes" or "No" button.
<!--/returnDescription-->

<!--fullDescription-->
The "confirm" dialog enables you to confirm the operation you are going to complete. The dialog shows a message and suggests two choices: "Yes" and "No". Note that the confirm dialog returns a Deferred object that contains a Boolean value indicating whether a user confirmed or canceled the action. Use the following code to obtain dialog results.

    <!--JavaScript-->var showConfirm = function () {
        var result = DevExpress.ui.dialog.confirm("Are you sure?", "Confirm changes");
        result.done(function (dialogResult) {
            alert(dialogResult ? "Confirmed" : "Canceled");
        });
    };

Pay attention to the recommendations given for using modality in the [Modal Contexts](https://developer.apple.com/library/ios/documentation/userexperience/conceptual/mobilehig/Modal.html#//apple_ref/doc/uid/TP40006556-CH64-SW1) article. In certain scenarios it may be better to display a [modal view](/Documentation/ApiReference/SPA_Framework/Markup_Components/dxView/Configuration/#modal) instead.
<!--/fullDescription-->