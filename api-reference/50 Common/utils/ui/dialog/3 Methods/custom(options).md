<!--id-->ui.dialog.custom(options)<!--/id-->
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
<!--paramName1_field2-->messageHtml<!--/paramName1_field2-->
<!--paramType1_field2-->String<!--/paramType1_field2-->
<!--paramDescription1_field2-->
The dialog's message. Can contain HTML elements.
<!--/paramDescription1_field2-->
<!--paramName1_field3-->buttons<!--/paramName1_field3-->
<!--paramType1_field3-->Array<dxButton_Options><!--/paramType1_field3-->
<!--paramDescription1_field3-->
Buttons to be displayed in the dialog.
<!--/paramDescription1_field3-->
<!--paramName1_field4-->showTitle<!--/paramName1_field4-->
<!--paramType1_field4-->Boolean<!--/paramType1_field4-->
<!--paramDescription1_field4-->
Specifies whether to show the title.
<!--/paramDescription1_field4-->
<!--paramName1_field5-->message<!--/paramName1_field5-->
<!--paramType1_field5-->String<!--/paramType1_field5-->
<!--paramDescription1_field5-->
The dialog's message. Deprecated in favor of the **messageHtml** field.
<!--/paramDescription1_field5-->
<!--paramDeprecated1_field5-->Use 'messageHtml' instead.<!--/paramDeprecated1_field5-->
<!--paramName1_field6-->dragEnabled<!--/paramName1_field6-->
<!--paramType1_field6-->Boolean<!--/paramType1_field6-->
<!--paramDescription1_field6-->

<!--/paramDescription1_field6-->

<!--returnType-->Object<!--/returnType-->
<!--returnDescription-->
An object that represents the dialog.
<!--/returnDescription-->

<!--fullDescription-->
This method only creates a dialog. To display it, call the dialog instance's **show()** method. This method returns a Promise that is resolved with the dialog result. The result contains anything you return from the clicked button's [onClick](/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#onClick) function. In the following code, it is the clicked button's text:

---
#####jQuery

    <!--JavaScript-->
    $(function() {
        var myDialog = DevExpress.ui.dialog.custom({
            title: "Custom dialog",
            messageHtml: "Dialog with custom buttons",
            buttons: [{
                text: "button 1",
                onClick: function(e) {
                    return { buttonText: e.component.option("text") }
                }
            }, 
            // ...
            ]
        });
        myDialog.show().done(function(dialogResult) {
            console.log(dialogResult.buttonText);
        });
    })

#####Angular

    <!-- tab: app.component.ts -->
    import { Component, AfterViewInit } from '@angular/core';
    import { custom } from 'devextreme/ui/dialog';

    @Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
    export class AppComponent implements AfterViewInit{
        ngAfterViewInit() { 
            let myDialog = custom({
                title: "Custom dialog",
                messageHtml: "Dialog with custom buttons",
                buttons: [{
                    text: "button 1",
                    onClick: (e) => {
                        return { buttonText: e.component.option("text") }
                    }
                }, 
                // ...
                ]
            });
            myDialog.show().then((dialogResult) => {
                console.log(dialogResult.buttonText);
            });
        }
    }

#####Vue

    <!-- tab: App.vue -->
    <template>
    </template>
    <script>
    import { custom } from 'devextreme/ui/dialog';

    export default {
        mounted: function() {
            this.$nextTick(function() {
                let myDialog = custom({
                    title: "Custom dialog",
                    messageHtml: "Dialog with custom buttons",
                    buttons: [{
                        text: "button 1",
                        onClick: (e) => {
                            return { buttonText: e.component.option("text") }
                        }
                    }, 
                    // ...
                    ]
                });
                myDialog.show().then((dialogResult) => {
                    console.log(dialogResult.buttonText);
                });
            })
        }
    }
    </script>

#####React

    <!-- tab: App.js -->
    import React from 'react';
    import { custom } from 'devextreme/ui/dialog';

    class App extends React.Component {
        componentDidMount() { 
            let myDialog = custom({
                title: "Custom dialog",
                messageHtml: "Dialog with custom buttons",
                buttons: [{
                    text: "button 1",
                    onClick: (e) => {
                        return { buttonText: e.component.option("text") }
                    }
                }, 
                // ...
                ]
            });
            myDialog.show().then((dialogResult) => {
                console.log(dialogResult.buttonText);
            });
        }
    }
    export default App;

---

Call the **hide()** method to close the dialog before any button is clicked. In the following code, the dialog is closed after 5 seconds if a user does not click any button:

    setTimeout(function() { myDialog.hide(); }, 5000);

<!--/fullDescription-->