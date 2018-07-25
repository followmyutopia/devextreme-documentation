===================================================================
<!--module-->ui/dialog<!--/module-->
<!--export-->custom<!--/export-->
===================================================================

<!--shortDescription-->
Creates a dialog with custom buttons.
<!--/shortDescription-->

<!--paramName1-->options<!--/paramName1-->
<!--paramType1-->Object<!--/paramType1-->
<!--paramDescription1-->
The dialog's options.
<!--/paramDescription1-->
<!--paramName1_field1-->title<!--/paramName1_field1-->
<!--paramType1_field1-->String<!--/paramType1_field1-->
<!--paramDescription1_field1-->
The dialog's title.
<!--/paramDescription1_field1-->
<!--paramName1_field2-->message<!--/paramName1_field2-->
<!--paramType1_field2-->String<!--/paramType1_field2-->
<!--paramDescription1_field2-->
The dialog's message.
<!--/paramDescription1_field2-->
<!--paramName1_field3-->buttons<!--/paramName1_field3-->
<!--paramType1_field3-->Array<dxButton_Options><!--/paramType1_field3-->
<!--paramDescription1_field3-->
Options for buttons to be displayed in the dialog.
<!--/paramDescription1_field3-->
<!--paramName1_field4-->showTitle<!--/paramName1_field4-->
<!--paramType1_field4-->Boolean<!--/paramType1_field4-->
<!--paramDescription1_field4-->
Specifies whether to show the title.
<!--/paramDescription1_field4-->

<!--returnType-->Object<!--/returnType-->
<!--returnDescription-->
An object representing the dialog.
<!--/returnDescription-->

<!--fullDescription-->
The **custom** method only creates a dialog. To show it, call the created dialog instance's **show()** method. The method returns a Promise that is resolved with the dialog result. This result is the object returned in the clicked dialog button's [onClick](/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#onClick) function.

    <!--JavaScript-->
    function() {
        var myDialog = DevExpress.ui.dialog.custom({
            title: "Custom dialog",
            message: "Dialog with custom buttons",
            buttons: [{
                text: "button 1",
                onClick: function (e) {
                    return { buttonText: e.component.option("text"), /* ... */ }
                }
            }, 
            // ...
            ]
        });
        myDialog.show().done(function(dialogResult){
            console.log(dialogResult.buttonText); // Outputs the clicked button's text
        });
    }

Use the **hide()** method to close the dialog before any button is clicked. In the following code, the dialog is hidden after 5 seconds if a user does not click a button:

    <!--JavaScript-->function () {
        // ...
        setTimeout(function () { myDialog.hide(); }, 5000);
    }

<!--/fullDescription-->