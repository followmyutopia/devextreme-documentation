Templates allow you to customize widget elements. In the DevExtreme API, template options end with `Template`: `itemTemplate`, `groupTemplate`, `contentTemplate`. When you specify them in React, replace `Template` in the name with `Render` or `Component`, depending on whether the template is a rendering function or custom component. For example, instead of `itemTemplate`, use `itemRender` or `itemComponent`.

If the option is called `template`, without any prefix, (in the [Button](/Documentation/ApiReference/UI_Widgets/dxButton/Configuration/#template), [Drawer](/Documentation/ApiReference/UI_Widgets/dxDrawer/Configuration/#template), and other widgets), use the `render` or `component` attribute instead.

[tags] template