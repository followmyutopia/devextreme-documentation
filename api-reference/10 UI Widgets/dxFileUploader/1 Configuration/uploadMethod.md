---
id: dxFileUploader.Options.uploadMethod
acceptValues: 'POST' | 'PUT'
type: String
default: 'POST'
---
---
##### shortDescription
Specifies the method for the upload request.

---
The option makes sense only if the [uploadMode](/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#uploadMode) option is set to "useButtons" or "instantly".

#include common-ref-enum with {
    enum: "`UploadHttpMethod`",
    values: "`POST` and `PUT`"
}