Theme metadata is a JSON object that describes the theme. It is used to export or import a theme in the [ThemeBuilder UI](/Documentation/Guide/Themes_and_Styles/ThemeBuilder/). Below is an example of theme metadata.

    {
        "items": [
            {
                "key": "@base-text-color",
                "value": "rgba(94, 33, 33, 0.87)"
            },
            {
                "key": "@base-accent",
                "value": "rgba(64, 156, 199, 1)"
            }
        ],
        "baseTheme": "material.blue.light.compact",
        "outputColorScheme": "custom-scheme",
        "makeSwatch": true,
        "version": "19.1.4",
        "widgets": "datagrid,treelist,selectbox"
    }

The metadata object contains the following properties:

- `items`       
An array that describes customized theme variables.
    - `key`     
    A theme variable's name.
    - `value`       
    The theme variable's value.

- `baseTheme`       
A [predefined DevExtreme theme](/Documentation/Guide/Themes_and_Styles/Predefined_Themes/) which the custom theme is based on.

- `outputColorScheme`       
The custom theme's color scheme.

- `makeSwatch`      
A flag that indicates whether the theme is a [color swatch](/Documentation/Guide/Themes_and_Styles/Predefined_Themes/#Color_Swatches).

- `version`     
The target DevExtreme version.

* `widgets`       
A list of widgets whose styles are included in the resulting CSS file.

Run the following command to export the metadata as a `.json` file:

    devextreme export-theme-meta [--base-theme][--input-file][--output-file][--base][--help]
    // ===== or =====
    npx -p devextreme-cli devextreme export-theme-meta [--base-theme][--input-file][--output-file][--base]
