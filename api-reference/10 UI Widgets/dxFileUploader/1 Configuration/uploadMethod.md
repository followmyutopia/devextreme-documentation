===========================================================================
<!--default-->'POST'<!--/default-->
<!--acceptValues-->'POST' | 'PUT'<!--/acceptValues-->
<!--type-->String<!--/type-->
===========================================================================

<!--shortDescription-->
Specifies the method for the upload request.
<!--/shortDescription-->

<!--fullDescription-->
The option makes sense only if the [uploadMode](/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#uploadMode) option is set to "useButtons" or "instantly".

#include common-ref-enum with {
    enum: "`UploadHttpMethod`",
    values: "`POST` and `PUT`"
}
<!--/fullDescription-->