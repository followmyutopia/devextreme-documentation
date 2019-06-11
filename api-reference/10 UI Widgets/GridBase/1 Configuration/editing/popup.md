<!--id-->GridBase.Options.editing.popup<!--/id-->
===========================================================================
<!--type-->dxPopup_Options<!--/type-->
===========================================================================

<!--shortDescription-->
Configures the popup. Used only if **editing**.[mode]({basewidgetpath}/Configuration/editing/#mode) is *"popup"*.
<!--/shortDescription-->

<!--fullDescription-->
You can specify most of the [Popup options](/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/) in this object except those listed below. The **{WidgetName}** overrides these options.

- [contentTemplate](/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#contentTemplate)
- [fullScreen](/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#fullScreen)
- [showTitle](/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#showTitle)
- [toolbarItems](/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/toolbarItems/)

The popup always contains a form whose items are used for editing. Use the [form]({basewidgetpath}/Configuration/editing/#form) option to customize the form items.

#include widgets-config-object-option-note

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/{WidgetName}/PopupEditing/jQuery/Light/"
}
<!--/fullDescription-->