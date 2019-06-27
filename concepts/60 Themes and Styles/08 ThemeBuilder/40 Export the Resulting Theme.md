Click **Export** to open the **Theme Export** popup dialog. In this dialog, enter the color scheme name. If you want to export the theme as a [color swatch](/Documentation/Guide/Themes_and_Styles/Predefined_Themes/#Color_Swatches), check the check box as well.

Click **Save to File** to save a file named `dx.[base-theme-name].[color-scheme-name].css` (for example, `dx.material.brown.css`) on your computer. Alternatively, you can copy the CSS from the text area at the bottom:

![DevExtreme ThemeBuilder UI: Theme Export popup dialog](/Content/images/doc/19_2/Common/ThemeBuilder/themebuilder-themeexport-css.png)

Your custom theme uses [icons](/Documentation/Guide/Themes_and_Styles/Icons/), which should be located next to the theme. When using npm, you can find the `icons` folder in `node_modules/devextreme/dist/css`. In other cases, the folder is in the directory with predefined themes. Copy the `icons` folder to the directory that contains your theme.

Finally, [register the exported theme](/Documentation/Guide/Themes_and_Styles/Predefined_Themes/#Apply_a_Theme). If you exported a color swatch, apply it as described in [Color Swatches](/Documentation/Guide/Themes_and_Styles/Predefined_Themes/#Color_Swatches).

[note] We periodically remove and remap unused constants to optimize our predefined themes. This can cause compatibility issues when you upgrade custom themes. We recommend saving your theme's metadata to enable you to fix these issues. Refer to the [Postpone Customization](/Documentation/Guide/Themes_and_Styles/ThemeBuilder/#Postpone_Customization) topic for more information.
