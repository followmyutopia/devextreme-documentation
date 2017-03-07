By default, the widget enables an end user to select only a single file at a time. You can change the default behavior assigning *true* to the [multiple](/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#multiple) option. This enables a user to select multiple files at once. In this case, you can access the collection of selected files using the [values](/Documentation/ApiReference/UI_Widgets/dxFileUploader/Configuration/#values) option.

    <!--JavaScript-->
    var fileUploaderOptions = {
        multiple: true
    }