Color swatches are secondary color schemes used alongside a primary color scheme. You can use them to stylize parts of your application differently, for instance, when the navigation sidebar should be dark and the content area light.

A color swatch is defined by scoped CSS rules that are prefixed with a specific selector: `dx-swatch-xxx` (for instance, `dx-swatch-green`). To apply a color swatch to a part of an HTML document, wrap this part as follows:

    <!--HTML-->
    <div>
        This content applies the primary color scheme

        <div class="dx-swatch-green">
            This content applies the "green" color scheme
        </div>

        <div class="dx-swatch-blue">
            This content applies the "blue" color scheme
        </div>
    </div>

[note] Color swatches should be based on a single theme (Generic, Generic Compact, or Material) and do not allow compiling different themes.

You can generate color swatches with the DevExtreme CLI or ThemeBuilder UI:

* **[DevExtreme CLI](https://github.com/DevExpress/devextreme-cli/blob/master/README.md)**        

    The following command generates a new `custom` color swatch that uses Generic Dark as a base theme. The base theme remains unchanged because an input file with metadata or Bootstrap variables is not specified.

        > devextreme build-theme –-base-theme="generic.dark" --make-swatch --output-color-scheme="custom"
        // ===== or without installing DevExtreme CLI globally =====
        > npx -p devextreme-cli devextreme build-theme –-base-theme="generic.dark" --make-swatch --output-color-scheme="custom"

    The result of this command is a `dx.generic.custom.css` file in which every rule is prefixed with the `.dx-swatch-custom` CSS selector. Move the file to the application folder, [register it](/Documentation/Guide/Themes_and_Styles/Predefined_Themes/#Apply_a_Theme), and add the swatch class to a page element.

    Refer to [DevExtreme CLI: ThemeBuilder](https://github.com/DevExpress/devextreme-cli/blob/master/README.md#themebuilder) for more information about CLI commands and command line arguments.

* **[ThemeBuilder UI](/Documentation/Guide/Themes_and_Styles/ThemeBuilder/)**       

    Click **Export** on the toolbar to open the **Export a Theme** popup dialog. Enter the color swatch's name, enable the **Swatch mode** switcher, and click **Export CSS**:

    ![DevExtreme ThemeBuilder UI: Export a Color Swatch](/Content/images/doc/18_2/Common/ThemeBuilder/export-color-swatch.png)

    Save the resulting CSS file in the application folder, [register it](/Documentation/Guide/Themes_and_Styles/Predefined_Themes/#Apply_a_Theme), and add the swatch class to a page element.
