---
id: GridBase.Options.editing.popup
type: dxPopup_Options
---
---
##### shortDescription
Configures the popup. Used only if **editing**.[mode](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/editing/mode.md '{basewidgetpath}/Configuration/editing/#mode') is *"popup"*.

---
You can specify most of the [Popup options](/api-reference/10%20UI%20Widgets/dxPopup/1%20Configuration/Configuration.md '/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/') in this object except those listed below. The **{WidgetName}** overrides these options.

- [contentTemplate](/api-reference/10%20UI%20Widgets/dxOverlay/1%20Configuration/contentTemplate.md '/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#contentTemplate')
- [fullScreen](/api-reference/10%20UI%20Widgets/dxPopup/1%20Configuration/fullScreen.md '/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#fullScreen')
- [showTitle](/api-reference/10%20UI%20Widgets/dxPopup/1%20Configuration/showTitle.md '/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/#showTitle')
- [toolbarItems](/api-reference/10%20UI%20Widgets/dxPopup/1%20Configuration/toolbarItems/toolbarItems.md '/Documentation/ApiReference/UI_Widgets/dxPopup/Configuration/toolbarItems/')

The popup always contains a form whose items are used for editing. Use the [form](/api-reference/10%20UI%20Widgets/GridBase/1%20Configuration/editing/form.md '{basewidgetpath}/Configuration/editing/#form') option to customize the form items.

#include widgets-config-object-option-note

#include common-demobutton with {
    url: "/Demos/WidgetsGallery/Demo/{WidgetName}/PopupEditing/jQuery/Light/"
}