<!--EventForAction-->..\4 Events\uploadError.md<!--/EventForAction-->
===========================================================================
<!--default-->null<!--/default-->
<!--type-->function(e)<!--/type-->
===========================================================================

<!--shortDescription-->
A handler for the [uploadError](/Documentation/ApiReference/UI_Widgets/dxFileUploader/Events/#uploadError) event.
<!--/shortDescription-->

<!--fullDescription-->
Assign a function to perform a custom action when an error has occurred during uploading.

The following code shows how you can handle a network error.

---
#####jQuery

    <!--JavaScript-->
    $(function(){
        $("#fileUploader").dxFileUploader({
            // ...
            onUploadError: function(e){
                var xhttp = e.request;
                if (xhttp.readyState == 4 && xhttp.status == 0) {
                    console.log("Connection refused.");
                }
            }
        });
    });

#####Angular

    <!--TypeScript-->
    export class AppComponent {
        handleNetworkError (e) {
            var xhttp = e.request;
            if (xhttp.readyState == 4 && xhttp.status == 0) {
                console.log("Connection refused.");
            }      
        }
    }

    <!--HTML-->
    <dx-file-uploader ...
        (onUploadError)="handleNetworkError($event)">
    </dx-fileUploader>

---

<!--/fullDescription-->
<!--typeFunctionParamName1-->e<!--/typeFunctionParamName1-->
<!--typeFunctionParamType1-->Object<!--/typeFunctionParamType1-->
<!--typeFunctionParamDescription1-->
Information about the event.
<!--/typeFunctionParamDescription1-->
<!--typeFunctionParamName1_field1-->component<!--/typeFunctionParamName1_field1-->
<!--typeFunctionParamType1_field1-->DOMComponent<!--/typeFunctionParamType1_field1-->
<!--typeFunctionParamDescription1_field1-->
The widget's instance.
<!--/typeFunctionParamDescription1_field1-->
<!--typeFunctionParamName1_field2-->element<!--/typeFunctionParamName1_field2-->
<!--typeFunctionParamType1_field2-->dxElement<!--/typeFunctionParamType1_field2-->
<!--typeFunctionParamDescription1_field2-->
The widget's container.
<!--/typeFunctionParamDescription1_field2-->
<!--typeFunctionParamName1_field3-->model<!--/typeFunctionParamName1_field3-->
<!--typeFunctionParamType1_field3-->Object<!--/typeFunctionParamType1_field3-->
<!--typeFunctionParamDescription1_field3-->
The model data. Available only if Knockout is used.
<!--/typeFunctionParamDescription1_field3-->
<!--typeFunctionParamName1_field4-->file<!--/typeFunctionParamName1_field4-->
<!--typeFunctionParamType1_field4-->File<!--/typeFunctionParamType1_field4-->
<!--typeFunctionParamDescription1_field4-->
The uploaded file.
<!--/typeFunctionParamDescription1_field4-->
<!--typeFunctionParamName1_field5-->jQueryEvent<!--/typeFunctionParamName1_field5-->
<!--typeFunctionParamType1_field5-->jQuery.Event<!--/typeFunctionParamType1_field5-->
<!--typeFunctionParamDescription1_field5-->
The jQuery event that caused the handler execution. Deprecated in favor of the **event** field.
<!--/typeFunctionParamDescription1_field5-->
<!--typeFunctionParamDeprecated1_field5-->Use 'event' instead.<!--/typeFunctionParamDeprecated1_field5-->
<!--typeFunctionParamName1_field6-->event<!--/typeFunctionParamName1_field6-->
<!--typeFunctionParamType1_field6-->event<!--/typeFunctionParamType1_field6-->
<!--typeFunctionParamDescription1_field6-->
The event that caused the handler execution. It is a [dxEvent](/Documentation/ApiReference/Common/Object_Structures/dxEvent/) or a [jQuery.Event](http://api.jquery.com/Types/#Event) when you use jQuery.
<!--/typeFunctionParamDescription1_field6-->
<!--typeFunctionParamName1_field7-->request<!--/typeFunctionParamName1_field7-->
<!--typeFunctionParamType1_field7-->XMLHttpRequest<!--/typeFunctionParamType1_field7-->
<!--typeFunctionParamDescription1_field7-->
Specifies an XMLHttpRequest for the file.
<!--/typeFunctionParamDescription1_field7-->
